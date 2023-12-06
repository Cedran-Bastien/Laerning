

// const CACHE_ASSETS = 'assets-v1';
// const assets = [
//   '/',
//   '/static/main.css',
//   '/static/main.js'
// ];

const installEvent = () => {
  const CACHE_ASSETS = 'v1';

  self.addEventListener('install', function(event) {
    // Installation du service worker
    event.waitUntil(
      // On utillise le cache des assets
      caches.open(CACHE_ASSETS)
    );
    console.log('service worker activated');
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated');
  });
};
activateEvent();

const cacheName = 'v1'
const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};


const fetchEvent = () => {
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
}
fetchEvent()
