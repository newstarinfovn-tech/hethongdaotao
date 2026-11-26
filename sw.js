const CACHE_NAME = 'newstar-pwa-v8.3'; // Mỗi lần cập nhật web mới, đổi thành v2, v3...

self.addEventListener('install', (event) => {
  // Chờ người dùng bấm nút Cập nhật để không làm gián đoạn bài thi
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});