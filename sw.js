// Vibe Room Gateway Service Worker for PWA
const CACHE_NAME = 'vibe-gateway-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through to network
  event.respondWith(fetch(event.request));
});
