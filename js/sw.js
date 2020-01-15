//From mozilla mdn and google chrome documentation re service workers

'use strict';

var staticCache = "cache-version1";

var cachedAssets = [

  '/',
  '/index.html',
  '/restaurant.html',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',

];
//Self refers to the service worker's global scope.
self.addEventListener ('install', function (event) {
  //Do the install
  event.waitUntil (

    caches.open (staticCache)

      .then(function(cache) {

        console.log("Cache now open");

        return cache.addAll (cachedAssets);
     
    })
  );
});

//With service worker installed, service worker receives fetch events
self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match (event.request).then (function (response) {

      if (response) return response;
      
        return fetch (event.request);
    })
  );
});


self.addEventListener ('fetch', function (event) {
  
  event.respondWith (
    
    fetch (event.request).then (function (response) {
      
      if (response.status === 404) {
        
        return new Response ('404: Page not found');
      }

      return response;

    }).catch (function() {

        return new Response ('Sorry, no Internet connection');
      })
  );
});