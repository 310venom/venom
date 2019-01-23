// Cache name
const CACHE_NAME = 'pwa-test';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './counter/index.html',
  './vesus/index.html',
  './css/style.css',
  './js/common.css',
  './js/common.css',
  './js/list.css',
  './js/counter.css',
  './js/versus.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
