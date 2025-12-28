const CACHE_NAME = 'echo-wellness-v4';
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});

// --- PWA REGISTRATION ---
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//         .then(() => console.log('Service Worker Registered'))
//         .catch((error) => console.log('Service Worker Failed', error));
// }