self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url);

  // إذا كان الطلب إلى API خارجي
  const isExternalAPI = requestURL.hostname !== self.location.hostname;

  if (isExternalAPI) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(
          JSON.stringify({ error: "الرجاء الاتصال بالإنترنت" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 503,
          }
        )
      )
    );
  } else {
    // الطلبات المحلية (HTML, JS, CSS... إلخ)
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request).then((response) => {
          return response || new Response("الرجاء الاتصال بالإنترنت", {
            headers: { "Content-Type": "text/plain" },
            status: 503,
          });
        })
      )
    );
  }
});
