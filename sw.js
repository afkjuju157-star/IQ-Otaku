const CACHE = "iq-otaku-v2";
const ASSETS = ["./", "./index.html", "./style.css", "./main.js", "./manifest.webmanifest", "./logo-iq-otaku.png", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => { if (event.request.method === "GET") event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))); });
