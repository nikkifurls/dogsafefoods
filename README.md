# Dog Safe Foods ([dogsafefoods.com](https://dogsafefoods.com))
Sharing food with your dog? Make sure it's safe first

### What is this?
Dog Safe Foods is an app that allows you to instantly determine whether a food is safe for dogs to consume.

It is a static Progressive Web App (PWA), using an "offline-first" [(cache falling back to the network)](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#cache_falling_back_to_the_network) caching strategy, which means any files specified in [`sw.js`](https://github.com/nikkifurls/dogsafefoods/blob/master/sw.js) will be cached, and therefore, accessible offline. Non-cached requests (including non-GET requests, as they cannot be cached), will not be accessible offline, and instead, will ping the network or fail if there is no network available.

### How do I use it?
[Open it up](https://dogsafefoods.com) and search!

### Can I contribute?
YES! Contributions are welcome!

### How do I get in touch?
Twitter: [@dogsafefoods](https://twitter.com/dogsafefoods)

Email: [info@dogsafefoods.com](mailto:info@dogsafefoods.com)
