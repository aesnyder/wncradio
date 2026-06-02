const CACHE_NAME = 'wnc-radio-v1.5';
const ASSETS = [
  '/',
  '/index.html',
  '/repeaters.html',
  '/gmrs_quick_reference.html',
  '/logo_g.webp',
  '/manifest.json'
];

// 1. Install: Populate cache with all essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 2. Activate: Clean up old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Strategy: Network-First, with strict 200-OK caching
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Only update the cache if we got a real, successful response
        if (networkResponse && networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cacheCopy);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If offline, try the cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          // If NOT in cache, we throw a real error so the browser 
          // can handle the failure without a Service Worker TypeError.
          throw new Error('Offline and not in cache');
        });
      })
  );
});
