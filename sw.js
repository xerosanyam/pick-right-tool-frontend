// this needs to update everytime you make any changes
const CACHE_NAME = 'my-cache-v0.1.3';
const urlsToCache = [
  // '/', // this is important. without this it doesn't work
  '/index.html',
  '/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('here')
        cache.addAll(urlsToCache)
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
