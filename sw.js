const CACHE_NAME = "sole-terra-acqua-v10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/logo-sole-terra-acqua.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/apple-touch-icon.png",
  "./assets/hero-campo.png",
  "./assets/prodotti-settimanali.png",
  "./assets/prodotti-trasparenti.png",
  "./assets/cassetta-piccola-nuova.png",
  "./assets/cassetta-media-nuova.png",
  "./assets/cassetta-grande-nuova.png",
  "./assets/catalogo-vettoriali-1.png",
  "./assets/catalogo-vettoriali-2.png",
  "./assets/catalogo-vettoriali-extra.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
