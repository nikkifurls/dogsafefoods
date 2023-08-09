import { setCookie, getCookie } from "./cookies";
import { setLinkEventListeners } from "./urls";

// declare global {
// 	interface Window {
// 		baseUrl: string;
// 		baseTitle: string;
// 		baseDescription: string;
// 	}
// }

/**
 * Show notification.
 * @param text 
 * @param cookieName 
 * @param className 
 */
export const showNotification = (text: string, cookieName: string = '', className: string = ''): void => {

	// Don't display notification if cookie is set.
	if (cookieName && getCookie(cookieName)) {
		return;
	}

	new Promise((resolve, reject) => {

		const notificationContainer = <HTMLElement>document.querySelector('.notification');
		const notificationTextContainer = <HTMLElement>document.querySelector('.notification p');
		const notificationCloseContainer = <HTMLElement>document.querySelector('.notification .close');

		if (!notificationContainer) {
			reject('.notification element not found');
		}

		// Close any open notifications.
		closeNotification();

		// Set notification text.
		if (notificationTextContainer) {
			if (text === 'paypal-confirmation') {
				notificationTextContainer.innerHTML = `Transaction approved! Thank you so much! <span role='img' title='Heart' class='icon icon-heart'>♥</span>`;
			} else if (text === 'cookie') {
				notificationTextContainer.innerHTML = `Cookies and other tracking technologies are used on this website to improve your browsing experience, analyze website traffic, and show personalized content and targeted ads. By browsing this website, you consent to the use of cookies and other tracking technologies.`;
			} else {
				notificationTextContainer.innerHTML = text;
			}
		}

		// Set notification class.
		if (className) {
			notificationContainer.dataset.class = className;
			notificationContainer.classList.add(`notification ${className}`);
		} else {
			notificationContainer.classList.add(`notification`);
		}

		// Set cookie (prevents notification from displaying again).
		if (cookieName) {
			notificationContainer.dataset.cookie = cookieName;
		}

		// Set close functionality.
		if (notificationCloseContainer) {
			notificationCloseContainer.addEventListener('click', () => {
				closeNotification();
			});
		}

		// Display notification.
		notificationContainer.setAttribute('aria-hidden', 'false');
		notificationContainer.style.display = 'block';

		// Resolve promise.
		resolve(true);
	})
	.then(result => {
		if (result) {
			// Set event listeners for any event links in notification.
			setLinkEventListeners();
		}
	})
	.catch(error => {
		console.error(error);
	});
}

/**
 * Close notification.
 * @returns void
 */
export const closeNotification = (): void => {

	const notificationContainer = <HTMLElement>document.querySelector('.notification');

	if (!notificationContainer) {
		return;
	}

	notificationContainer.style.display = 'none';
	notificationContainer.setAttribute('aria-hidden', 'true');
	
	// If notification has class data attribute set, remove class after closing.
	if (notificationContainer.dataset.class) {
		notificationContainer.classList.remove(notificationContainer.dataset.class);
		notificationContainer.dataset.class = '';
	}
	
	// If notification has cookie data attribute set, set cookie after closing.
	if (notificationContainer.dataset.cookie) {
		setCookie(notificationContainer.dataset.cookie, true);
		notificationContainer.dataset.cookie = '';
	}
}

/**
 * @todo
 * @param cookieName 
 * @param notificationTextContainer 
 * @param customIcon 
 */
export const showPromo = (cookieName: string, notificationTextContainer: string = '', customIcon: string = ''): void => {

	if (!cookieName) {
		if (window.baseTitle) {
			cookieName = `cookie-${window.baseTitle.toLowerCase()}`;
		} else {
			cookieName = `cookie-default`;
		}
	}

	if (customIcon) {
		setTimeout(() => {
			const element = document.querySelector('nav .custom');

			if (!element) {
				return;
			}

			element.classList.add('animate');
			element.addEventListener('click', () => {
				setCookie(cookieName, true);
			});
		}, 20000);
	}

	if (notificationTextContainer) {
		setTimeout(() => {
			showNotification(notificationTextContainer, cookieName);
		}, 60000);
	}
}
