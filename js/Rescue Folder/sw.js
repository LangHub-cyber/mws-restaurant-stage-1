//This will be the file where I start the service worker

//intercept all network requests
self.addEventListener('fetch', function(event) {
  //hold off on releasing the event
  event.respondWith(
    //caches is a browser API; "mysite-dynamic" is a custom name
    caches.open('mysite-dynamic').then(function(cache) {
      //the caches API has been opened, we can do something with it...
      //first: try to match the request with something in the cache
      return cache.match(event.request).then(function(cachedResponse) {
        //if there's a cachedResponse from the cache system, then the requested file is in cache; return it
        //otherwise, go ahead and complete the fetch to the server, but intercept the serverResponse
        return cachedResponse || fetch(event.request).then(function(serverResponse) {
          //serverResponse is data from the server; put a cloned version of it into our cache
          cache.put(event.request, serverResponse.clone());
          //then release the server response
          return response;
        });
      });
    })
  );
});