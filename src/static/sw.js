// Cache name
const CACHE_NAME = 'pwa-test';
// Cache targets
const urlsToCache = [
  'https://310venom.github.io/venom/',
  'https://310venom.github.io/venom/counter/',
  'https://310venom.github.io/venom/versus/',
  'https://310venom.github.io/venom/css/style.css',
  'https://310venom.github.io/venom/js/common.js',
  'https://310venom.github.io/venom/js/counter.js',
  'https://310venom.github.io/venom/js/versus.js'
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
