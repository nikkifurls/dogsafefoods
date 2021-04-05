const cacheName = "cache66";
const cacheFiles = [
	"/",
	"common.js",
	"disclaimer.html",
	"index.html",
	"manifest.json",
	"privacy-policy.html",
	"terms-and-conditions.html",
	"logo_nav.svg",
	"style.css",
	"main.js",
	"data.json",
	"logo_header.svg",
	"icon-thumbs-up.png",
	"icon-thumbs-down.png",
	"ads.txt",
	"sellers.json",
	"safe.html",
	"unsafe.html",
	"acai.html",
	"alcohol.html",
	"apples.html",
	"apricots.html",
	"artichokes.html",
	"asparagus.html",
	"aspartame.html",
	"avocados.html",
	"bananas.html",
	"beans.html",
	"beets.html",
	"bell-peppers.html",
	"blackberries.html",
	"blueberries.html",
	"bread.html",
	"broccoli.html",
	"brussels-sprouts.html",
	"butter.html",
	"cabbage.html",
	"cantaloupe.html",
	"melon.html",
	"carrots.html",
	"cat-food.html",
	"celery.html",
	"cheese.html",
	"cherries.html",
	"chicken-meat.html",
	"chocolate.html",
	"coconut.html",
	"coffee.html",
	"corn.html",
	"cranberries.html",
	"cucumbers.html",
	"dairy.html",
	"dragon-fruit.html",
	"eggplant.html",
	"eggs.html",
	"figs.html",
	"fish.html",
	"fried-foods.html",
	"garlic.html",
	"gatorade.html",
	"grapes.html",
	"green-beans.html",
	"guava.html",
	"honey.html",
	"hot-dogs.html",
	"ice-cream.html",
	"ice-cubes.html",
	"hot-peppers.html",
	"kale.html",
	"kiwis.html",
	"citrus-fruits.html",
	"greens.html",
	"mangoes.html",
	"marshmallows.html",
	"red-meat.html",
	"bones.html",
	"milk.html",
	"mushrooms.html",
	"nectarines.html",
	"nuts.html",
	"oatmeal.html",
	"olives.html",
	"onions.html",
	"pomegranates.html",
	"peaches.html",
	"peanut-butter.html",
	"peanuts.html",
	"pears.html",
	"peas.html",
	"pickles.html",
	"pineapples.html",
	"plums.html",
	"popcorn.html",
	"pork.html",
	"potatoes.html",
	"pumpkin.html",
	"quinoa.html",
	"radishes.html",
	"raspberries.html",
	"rice.html",
	"shellfish.html",
	"spinach.html",
	"squash.html",
	"strawberries.html",
	"sweet-potatoes.html",
	"tomatoes.html",
	"tuna.html",
	"swordfish.html",
	"turkey-meat.html",
	"watermelon.html",
	"xylitol.html",
	"yogurt.html",
	"zucchini.html",
	"beer.html",
	"champagne.html",
	"gin.html",
	"liquor.html",
	"rum.html",
	"vodka.html",
	"whiskey.html",
	"wine.html",
	"black-beans.html",
	"chickpeas.html",
	"edamame.html",
	"kidney-beans.html",
	"lentils.html",
	"pinto-beans.html",
	"soybeans.html",
	"bagels.html",
	"croissants.html",
	"english-muffins.html",
	"pita-bread.html",
	"pretzels.html",
	"rolls.html",
	"margarine.html",
	"honeydew-melon.html",
	"asiago-cheese.html",
	"blue-cheese.html",
	"brie-cheese.html",
	"cheddar-cheese.html",
	"colby-jack-cheese.html",
	"cottage-cheese.html",
	"cream-cheese.html",
	"feta-cheese.html",
	"gorgonzola-cheese.html",
	"mascarpone-cheese.html",
	"mozzarella-cheese.html",
	"parmesan-cheese.html",
	"pepper-jack-cheese.html",
	"ricotta-cheese.html",
	"swiss-cheese.html",
	"poultry.html",
	"cocoa.html",
	"coconut-oil.html",
	"tea.html",
	"pitaya.html",
	"salmon.html",
	"whitefish.html",
	"herring.html",
	"walleye.html",
	"flounder.html",
	"arctic-char.html",
	"sardines.html",
	"chicken-fingers.html",
	"chicken-nuggets.html",
	"chips.html",
	"clam-cakes.html",
	"corn-dogs.html",
	"crab-rangoons.html",
	"donuts.html",
	"egg-rolls.html",
	"falafel.html",
	"fish-and-chips.html",
	"french-fries.html",
	"hash-browns.html",
	"home-fries.html",
	"mozzarella-sticks.html",
	"onion-rings.html",
	"potato-chips.html",
	"spring-rolls.html",
	"tater-tots.html",
	"tortilla-chips.html",
	"raisins.html",
	"string-beans.html",
	"frozen-yogurt.html",
	"chili-peppers.html",
	"jalapeno-peppers.html",
	"serrano-peppers.html",
	"lemons.html",
	"limes.html",
	"oranges.html",
	"clementines.html",
	"grapefruit.html",
	"kumquats.html",
	"persimmons.html",
	"tangerines.html",
	"arugula-greens.html",
	"green-leaf-lettuce.html",
	"iceberg-lettuce.html",
	"lettuce-greens.html",
	"red-leaf-lettuce.html",
	"romaine-lettuce.html",
	"beef.html",
	"steak.html",
	"beef-bones.html",
	"chicken-bones.html",
	"ham-bones.html",
	"lamb-bones.html",
	"meat-bones.html",
	"pork-bones.html",
	"pork-chop-bones.html",
	"steak-bones.html",
	"turkey-bones.html",
	"champignon-mushrooms.html",
	"chanterelle-mushrooms.html",
	"cremini-mushrooms.html",
	"maitake-mushrooms.html",
	"morel-mushrooms.html",
	"oyster-mushrooms.html",
	"porcini-mushrooms.html",
	"portabella-mushrooms.html",
	"shiitake-mushrooms.html",
	"almonds.html",
	"brazil-nuts.html",
	"cashews.html",
	"chestnuts.html",
	"hazelnuts.html",
	"macadamia-nuts.html",
	"pecans.html",
	"pine-nuts.html",
	"pistachios.html",
	"walnuts.html",
	"chives.html",
	"cipollini-onions.html",
	"green-onions.html",
	"leeks.html",
	"pearl-onions.html",
	"red-onions.html",
	"scallions.html",
	"shallots.html",
	"sweet-onions.html",
	"vidalia-onions.html",
	"white-onions.html",
	"yellow-onions.html",
	"green-peas.html",
	"snow-peas.html",
	"sugar-snap-peas.html",
	"prunes.html",
	"ham.html",
	"sausage.html",
	"bacon.html",
	"salami.html",
	"ribs.html",
	"black-raspberries.html",
	"shrimp.html",
	"crab.html",
	"lobster.html",
	"clams.html",
	"mussels.html",
	"oysters.html",
	"scallops.html",
	"acorn-squash.html",
	"butternut-squash.html",
	"spaghetti-squash.html",
	"summer-squash.html",
	"winter-squash.html",
	"yellow-squash.html",
	"fonts/roboto-slab/roboto-slab-700.eot",
	"fonts/roboto-slab/roboto-slab-700.svg",
	"fonts/roboto-slab/roboto-slab-700.ttf",
	"fonts/roboto-slab/roboto-slab-700.woff",
	"fonts/roboto-slab/roboto-slab-700.woff2",
	"fonts/roboto-slab/roboto-slab-regular.eot",
	"fonts/roboto-slab/roboto-slab-regular.svg",
	"fonts/roboto-slab/roboto-slab-regular.ttf",
	"fonts/roboto-slab/roboto-slab-regular.woff",
	"fonts/roboto-slab/roboto-slab-regular.woff2",
	"fonts/roboto/roboto-700.eot",
	"fonts/roboto/roboto-700.svg",
	"fonts/roboto/roboto-700.ttf",
	"fonts/roboto/roboto-700.woff",
	"fonts/roboto/roboto-700.woff2",
	"fonts/roboto/roboto-regular.eot",
	"fonts/roboto/roboto-regular.svg",
	"fonts/roboto/roboto-regular.ttf",
	"fonts/roboto/roboto-regular.woff",
	"fonts/roboto/roboto-regular.woff2",
	"fonts/fontawesome/css/brands.min.css",
	"fonts/fontawesome/css/fontawesome.min.css",
	"fonts/fontawesome/css/solid.min.css",
	"fonts/fontawesome/webfonts/fa-brands-400.eot",
	"fonts/fontawesome/webfonts/fa-brands-400.svg",
	"fonts/fontawesome/webfonts/fa-brands-400.ttf",
	"fonts/fontawesome/webfonts/fa-brands-400.woff",
	"fonts/fontawesome/webfonts/fa-brands-400.woff2",
	"fonts/fontawesome/webfonts/fa-solid-900.eot",
	"fonts/fontawesome/webfonts/fa-solid-900.svg",
	"fonts/fontawesome/webfonts/fa-solid-900.ttf",
	"fonts/fontawesome/webfonts/fa-solid-900.woff",
	"fonts/fontawesome/webfonts/fa-solid-900.woff2",
	"android-chrome-36x36.png", // Favicon, Android Chrome M39+ with 0.75 screen density
	"android-chrome-48x48.png", // Favicon, Android Chrome M39+ with 1.0 screen density
	"android-chrome-72x72.png", // Favicon, Android Chrome M39+ with 1.5 screen density
	"android-chrome-96x96.png", // Favicon, Android Chrome M39+ with 2.0 screen density
	"android-chrome-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
	"android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
	"android-chrome-256x256.png", // Favicon, Android Chrome M47+ Splash screen with 1.5 screen density
	"android-chrome-384x384.png", // Favicon, Android Chrome M47+ Splash screen with 3.0 screen density
	"android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
	"apple-touch-icon.png", // Favicon, Apple default
	"apple-touch-icon-57x57.png", // Apple iPhone, Non-retina with iOS6 or prior
	"apple-touch-icon-60x60.png", // Apple iPhone, Non-retina with iOS7
	"apple-touch-icon-72x72.png", // Apple iPad, Non-retina with iOS6 or prior
	"apple-touch-icon-76x76.png", // Apple iPad, Non-retina with iOS7
	"apple-touch-icon-114x114.png", // Apple iPhone, Retina with iOS6 or prior
	"apple-touch-icon-120x120.png", // Apple iPhone, Retina with iOS7
	"apple-touch-icon-144x144.png", // Apple iPad, Retina with iOS6 or prior
	"apple-touch-icon-152x152.png", // Apple iPad, Retina with iOS7
	"apple-touch-icon-180x180.png", // Apple iPhone 6 Plus with iOS8
	"browserconfig.xml", // IE11 icon configuration file
	"favicon.ico", // Favicon, IE and fallback for other browsers
	"favicon-16x16.png", // Favicon, default
	"favicon-32x32.png", // Favicon, Safari on Mac OS
	"maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
	"monochrome_icon.png", // Favicon, monochrome https://web.dev/monochrome-icon
	"mstile-70x70.png", // Favicon, Windows 8 / IE11
	"mstile-144x144.png", // Favicon, Windows 8 / IE10
	"mstile-150x150.png", // Favicon, Windows 8 / IE11
	"mstile-310x150.png", // Favicon, Windows 8 / IE11
	"mstile-310x310.png", // Favicon, Windows 8 / IE11
	"safari-pinned-tab.svg", // Favicon, Safari pinned tab
	"share.jpg" // Social media sharing
];

// 1) INSTALL - triggers when service worker-controlled pages are accessed subsequently
// Add all cacheFiles to cache
// If any file fails to be fetched
//	cache.addAll rejects
//	install fails
//	the service worker will be abandoned (if an older version is running, it'll be left intact)
self.addEventListener("install", event => {

	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(cacheFiles);
		})
	);
});

// 2) ACTIVATE - triggers when service worker is installed successfully
// Delete non-current caches used in previous versions
// (Can block page loads, only use for things you couldn't do while previous version was active)
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(cacheObjects => {
			return Promise.all(
				cacheObjects.map(cacheObjectName => {
					if (cacheObjectName != cacheName) {
						return caches.delete(cacheObjectName);
					}
				})
			)
		})
	);
});

// 3) FETCH - triggers when any resource controlled by a service worker is fetched
// Offline-first - cache falling back to network strategy
self.addEventListener("fetch", event => {
	const cacheBlacklist = [
		"adservice",
		"amazon-adsystem",
		"amazon.com",
		"doubleclick",
		"facebook",
		"google-analytics",
		"google.com",
		"googleads",
		"googlesyndication",
		"googletagmanager",
		"googletagservices",
		"pagead",
		"repixel"
	];
	
	const url = new URL(event.request.url);
	const online = navigator.onLine ? true : false;
	const blacklisted = [url.hostname].filter(hostname => cacheBlacklist.some(item => hostname.includes(item))).length ? true : false;
	const cacheMatch = cacheFiles.find(cacheFile => cacheFile.includes(url.pathname.replace("/", "")));
	const cacheResponse = (online && (event.request.method == "GET") && !blacklisted) ? true : false;

	if (!online) {
		if (cacheMatch) {
			event.respondWith(fetchCacheResponse(cacheMatch));
		} else {
			if (blacklisted) {
				console.warn(`Ignoring offline blacklisted request: ${event.request.url}`);
			} else {
				event.respondWith(fetchCacheResponse("index.html"));
			}
		}
	} else {
		if (cacheMatch) {
			event.respondWith(fetchCacheResponse(cacheMatch) || fetchNetworkResponse(event.request, cacheResponse));
		} else {
			event.respondWith(fetchNetworkResponse(event.request, cacheResponse));
		}
	}
});

const fetchCacheResponse = eventRequest => {
	return caches.match(eventRequest)
		.then(responseCache => {
			if (responseCache) {
				return responseCache;
			} else {
				return fetchCacheResponse("index.html");
			}
		})
		.catch(error => {
			return fetchCacheResponse("index.html");
		});
}

const fetchNetworkResponse = (eventRequest, updateCache = false) => {
	return fetch(eventRequest)
		.then(responseNetwork => {
			if (updateCache) {
				const responseNetworkCache = responseNetwork.clone();
				const responseNetworkReturn = responseNetwork.clone();
				caches.open(cacheName)
					.then(cache => cache.put(eventRequest, responseNetworkCache))
					.catch(error => console.warn(error));
				return responseNetworkReturn;
			} else {
				return responseNetwork;
			}
		})
		.catch(error => console.warn(error));
}