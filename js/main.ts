import normalizeText from './normalizeText';
import { setLinkEventListeners } from './urls';
import { showPromo } from './notifications';

declare global {
	interface Window {
		baseUrl: string;
		baseTitle: string;
		baseDescription: string;
		gtag: any;
	}
}

type SearchResult = {
	title: Array<string>;
	edible: string;
	processed: boolean;
	dcm: boolean;
	highfat: boolean;
	canned: boolean;
	content: string;
	links: Array<String>;
}

window.addEventListener('load', async () => {

	const searchInput = <HTMLInputElement>document.querySelector(`.search input[name='search']`);

	if (!searchInput) {
		return;
	}

	// Add event listener for search input.
	searchInput.addEventListener('input', async (event) => {
		event.preventDefault();

		const targetElement = <HTMLInputElement>event.target;

		const query = targetElement?.value ?? '';

		// Replace spaces with dashes in query text and change URL path.
		window.history.pushState(null, null, query ? normalizeText(query, 'url') : '/');

		// Get search results.
		const results = await getSearchResults(query);

		// Display search results.
		displayResults(query, results);
	});

	// If URL path is provided, override search field contents.
	if (window.location.pathname) {
		// Remove file extension and slashes from query text and replace dashes with a space.
		const query = normalizeText(window.location.pathname.replace('.html', '').replace('/', ''));

		// Change search input value to query text.
		searchInput.value = query;

		// Get search results.
		const results = await getSearchResults(query);

		// Display search results.
		displayResults(query, results);
	}

	// Show catsafefoods.com promo.
	showPromo(`Sharing food with your cat, too? Check out <a href='https://catsafefoods.com' target='_blank'>catsafefoods.com</a>!`, 'catsafefoods.com-promo');
});

/**
 * Get search results.
 * 
 * @param {string} query Query string.
 * @returns {Promise<Array<SearchResult>>} Search results.
 */
const getSearchResults = async (query: string): Promise<Array<SearchResult>> => {

	if (!query) {
		return [];
	}

	// Send search event to GA
	window.gtag('event', 'search', {
		search_term: query
	});

	const response = await fetch('data.json');

	if (!response.ok) {
		console.warn(response.status, response.statusText);
		return [];
	}

	const results: Array<SearchResult> = await response.json();

	const matches = results.filter(result => {
		// @todo: adjust this logic.
		if (query == 'safe' || query == 'caution' || query == 'unsafe') {
			return result.edible.toLowerCase() == query;
		} else if (query.length < 4) {
			return result.title.some(title => normalizeText(title).startsWith(query));
		} else {
			return result.title.some(title => normalizeText(title).includes(query));
		}
	});

	return matches;
}

/**
 * Display search results.
 * 
 * @param {string} query Query string.
 * @param {Array<SearchResult>} results Search results. 
 */
const displayResults = (query: string, results: Array<SearchResult> = []): void => {

	const searchNumResultsContainer = <HTMLElement>document.querySelector(`.search .num-results`);
	const searchResultsContainer = <HTMLElement>document.querySelector(`.search .results`);

	if (!searchNumResultsContainer || !searchResultsContainer) {
		return;
	}

	const iconSafe = `<span role='img' title='Safe' class='icon icon-thumbsup'>👍</span>`;
	const iconUnsafe = `<span role='img' title='Unsafe' class='icon icon-thumbsdown'>👎</span>`;
	const iconCaution = `<span role='img' title='Caution' class='icon icon-caution'>✋</span>`;

	if (!results.length) {
		searchNumResultsContainer.innerHTML = query
			? `No Results <span role='img' title='shrug' class='icon icon-shrug'>🤷‍♀️</span>`
			: '';
		searchResultsContainer.innerHTML = query
			? `<div class='result'>
				<p>This food is not yet in our database. We add foods regularly, so check back soon!</p>
				<p><strong>Check with your veterinarian before sharing <em>any</em> food with dogs—especially those not found in our database.</strong></p>
			</div>`
			: '';
	} else {
		searchNumResultsContainer.innerHTML = results.length + results.length ? '&nbsp;Results' : '&nbsp;Result';
		searchResultsContainer.innerHTML = '';

		// Populate search results. Each result has a share button, so wait for all search results to be populated, then set event listeners for the share icons in the search results.
		Promise.all(results.map(result => {

			return new Promise((resolve) => {

				/**
				 * If a result has a title array 3 items long or less, display a comma separated list of the array items as the title, and no subtitle.
				 * If a result has a title array 3 items long or more, display the first array item as the title, and the rest as a subtitle.
				 */
				const title = result.title.length <= 3 ? result.title.join(', ') : result.title[0];
				const subtitle = result.title.length <= 3 ? '' : result.title.slice(1).join(', ') + ', etc.';

				// Set up the URL and text for sharing.
				const shareUrl = window.baseUrl + '/' + normalizeText(result.title[0], 'url');
				const shareText = result.content.replace(/(<strong>|<\/strong>)/g, '');

				searchResultsContainer.innerHTML +=
					`<div class='result ${result.edible}'>
						<span class='share icon icon-share' data-url='${shareUrl}' data-title='${window.baseTitle + ' - ' + title}' data-text='${shareText}'><i class='fas fa-share-alt'></i></span>
						<div class='text'>
							<h3>
								${result.edible == 'safe' ? iconSafe
								: result.edible == 'unsafe' ? iconUnsafe
								: iconCaution}
								${title}
							</h3>
							${subtitle ? '<h4>' + subtitle + '</h4>' : ''}
							<p class='content'>${result.content}</p>
							${result.processed ? "<p><strong>Caution:</strong> Processed foods are unhealthy for dogs and can even conceal toxic ingredients. <a href='#processed' title='Processed'>Read more.</a></p>" : ''}
							${result.dcm ? "<p><strong>Caution:</strong> Recent research has suggested that several foods, such as peas, legumes, and potatoes, while not toxic, may not be appropriate to be fed to dogs regularly. <a href='#dcm' title='DCM'>Read more.</a></p>" : ''}
							${result.highfat ? "<p><strong>Caution:</strong> Foods that are high in fat can cause dogs to get gastrointestinal upset and even pancreatitis. <a href='#highfat' title='High Fat'>Read more.</a></p>" : ''}
							${result.canned ? "<p><strong>Caution:</strong> Dogs should avoid canned versions of foods due to their high sodium and/or sugar content, and opt for the fresh or frozen version instead. <a href='#canned' title='Canned'>Read more.</a></p>" : ''}
						</div>
					</div>`;

				resolve(true);
			});
		})).then(() => {
			// Set event listeners for share icons in results.
			setLinkEventListeners();
		});
	}
}
