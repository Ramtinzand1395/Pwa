const STATICCASHNAME = "site-static-v2";
const assets = ["/", "/index.html","/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg"];
const self = this;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(STATICCASHNAME).then((cache) => {
      console.log("cash");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>{
      return Promise.all(keys
        .filter(key => key !==STATICCASHNAME)
        .map(key => caches.delete(key))
        )

    })
  )

});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(cachRes =>{
        return cachRes || fetch(e.request)
    })
  )
});
