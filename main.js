const searchInput = document.querySelector(`.search input[name="search"]`);
const searchNumResultsContainer = document.querySelector(`.search .num-results`);
const searchResultsContainer = document.querySelector(`.search .results`);

window.addEventListener("load", () => {

	let query = null;

	// Add event listener for search input
	if (searchInput) {
		searchInput.addEventListener("input", event => {
			event.preventDefault();
			search();
		});
	}

	// If anything in param, override search field contents
	if (window.location.pathname) {
		query = decodeText(window.location.pathname.replace(".html", "").replace("/", ""));

		if (query) {
			query = decodeText(query);

			// Change search input value to query
			if (searchInput) {
				searchInput.value = query;
				search();
			}
		}
	}

	// Show catsafefoods.com promo
	showPromo("catsafefoods", `Sharing food with your cat, too? Check out <a href="https://catsafefoods.com" target="_blank">catsafefoods.com</a>!`);
});

const search = () => {

	query = encodeURIComponent(decodeText(searchInput.value));

	if (query.length > 0) {

		// Change URL after / to query
		window.history.pushState(null, null, query);

		// Send search event to GA
		gtag("event", "search", {
			search_term: query
		});

		fetch("data.json")
			.then(response => {
				if (response) {
					return response.json()
				}
		
				throw new Error(response.responseText);
			})
			.then(results => {
				let matches = results.filter(result => {
					if ((query == "safe") || (query == "caution") || (query == "unsafe")) {
						return result.edible.toLowerCase() == query;
					} else if (query.length < 4) {
						return result.title.some(title => decodeText(title).startsWith(query));
					} else {
						return result.title.some(title => decodeText(title).includes(query));
					}
				});

				displayResults(matches);
			})
			.catch(error => console.warn(error))

	} else {

		displayResults();
	}
}

const displayResults = (results = null) => {

	const iconSafe = `<span role="img" title="Safe" class="icon icon-thumbsup">&#x1F44D;</span>`;
	const iconUnsafe = `<span role="img" title="Unsafe" class="icon icon-thumbsdown">&#x1F44E;</span>`;
	const iconCaution = `<span role="img" title="Caution" class="icon icon-caution">&#x270B;</span>`;

	if (results == null) {
		searchNumResultsContainer.innerHTML = "";
		searchResultsContainer.innerHTML = "";
	} else if (results.length < 1) {
		searchNumResultsContainer.innerHTML = `No Results <span role="img" title="shrug" class="icon icon-shrug">&#x1F937;</span>`;
		searchResultsContainer.innerHTML =
			`<div class="result">
				<p>This food is not yet in our database. We add foods regularly, so check back soon!</p>
				<p class="bold">Check with your veterinarian before sharing <em>any</em> food with dogs&#x2014;especially those not found in our database.</p>
			</div>`;
	} else {
		searchNumResultsContainer.innerHTML = results.length + ((results.length > 1) ? "&nbsp;Results" : "&nbsp;Result");
		searchResultsContainer.innerHTML = "";

		Promise.all(results.map(result => {

			return new Promise((resolve, reject) => {

				const title = (result.title.length == 2) ? result.title[0] + ", " + result.title[1] : result.title[0];
				const subtitle = (result.title.length > 2) ? result.title.slice(1, result.title.length+1).join(", ") + ", etc." : null;
				const url = baseUrl + "/" + decodeText(result.title[0], "url");
				const text = result.content.replaceAll(/(<strong>|<\/strong>)/g, "");

				searchResultsContainer.innerHTML +=
					`<div class="result ${result.edible}">
						<span class="share icon icon-share" data-url="${url}" data-title="${baseTitle + " - " + title}" data-text="${text}"><i class="fas fa-share-alt"></i></span>
						<div class="text">
							<h3>${(result.edible == "safe") ? iconSafe : (result.edible == "unsafe" ? iconUnsafe : iconCaution)} ${title}</h3>
							${subtitle ? "<h4>" + subtitle + "</h4>" : ""}
							<p class="content">${result.content}</p>
							${result.processed ? "<p><strong>Caution:</strong> Processed foods are unhealthy for dogs and can even conceal toxic ingredients. <a href='#processed' title='Processed'>Read more.</a></p>" : ""}
							${result.dcm ? "<p><strong>Caution:</strong> Recent research has suggested that several foods, such as peas, legumes, and potatoes, while not toxic, may not be appropriate to be fed to dogs regularly. <a href='#dcm' title='DCM'>Read more.</a></p>" : ""}
							${result.highfat ? "<p><strong>Caution:</strong> Foods that are high in fat can cause dogs to get gastrointestinal upset and even pancreatitis. <a href='#highfat' title='High Fat'>Read more.</a></p>" : ""}
							${result.canned ? "<p><strong>Caution:</strong> Dogs should avoid canned versions of foods due to their high sodium and/or sugar content, and opt for the fresh or frozen version instead. <a href='#canned' title='Canned'>Read more.</a></p>" : ""}
						</div>
					</div>`;

				resolve(true);
			});
		})).then(() => {

			// Set event listeners for share icons in results
			setLinkEventListeners();
		});
	}
}