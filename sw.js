importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { precacheAndRoute } = workbox.precaching;

registerRoute(
    /\.(?:css|js)$/,
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": 'assets',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                naxEntries: 1000,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

registerRoute(
    /\.(?:png|jpg|gif)$/,
    new workbox.strategies.CacheFirst({
        "cacheName": 'images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                naxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

precacheAndRoute ([
    { url: '/index.html', revision: '383676' },
    { url: '/404.html', revision: '383676' },
]);