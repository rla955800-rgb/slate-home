// Slate service worker: app shell precached, fonts/icons cached on first use.
const VERSION = 'slate-v1';
const SHELL = ['./', 'index.html', 'css/tokens.css', 'css/app.css', 'js/app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Pages: network first so updates show up, cache when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req)
      .then(res => { caches.open(VERSION).then(c => c.put('index.html', res.clone())); return res; })
      .catch(() => caches.match('index.html')));
    return;
  }

  // Everything else (shell, Google Fonts, Lucide icons): cache first, then network.
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(url.host)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
