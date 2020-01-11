//beginning of edited mozilla code for service worker file

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mws-restaurant-stage-1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/sw.js',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/img'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(

    caches.match(event.request).then(function(response) {

      if (response) return response;
      
        return fetch(event.request);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
  event.respondWith(
    
    fetch(event.request).then(function(response) {
      
      if (response.status === 404) {
        
        return new Response('404: Page not found');
      }

      return response;

    }).catch(function() {

        return new Response('No Internet connection');
      })
  );
})