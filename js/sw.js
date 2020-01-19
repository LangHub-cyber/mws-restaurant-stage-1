// From Traversy Media, mozilla mdn,google chrome documentation re service workers
//and Jeff Posnick,  Jake Archibald, Bits and Pieces
// 'use strict';
/*jshint esversion: 6 */

const staticCache = 'staticCache-v1';

const cachedAssets = [  //Local assets to keep in the cache

  
  '/index.html',
  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=9',
  '/restaurant.html?id=10',
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
//Install precaches the resources for later use.
self.addEventListener('install', event => {

  console.log('Service worker now installed');

  event.waitUntil(
//opening the cache
    caches
      .open(staticCache)

      .then(cache => {

        console.log('service worker putting files in cache');

        cache.addAll(cachedAssets);
      })

      .then(() => self.skipWaiting()) 

  );
        
});

//Activate function and clear up the old cache.

self.addEventListener('activate', (event) => {

  console.log('Service worker now activated');
  
 
  event.waitUntil(

    caches.keys().then(cachedAssets => {

      // return cachedAssets.filter(cachedAsset =>)

      return Promise.all(

        cachedAssets.map(cache => {

          if(cache !== staticCache) {

            console.log('To clear older cache through service worker');

            return caches.delete(cache);

          }  
    
       })
  
      );

    })

  ); 

});
            

//To check if files available offline, need fetch event.
//Then enable offline content availability.


self.addEventListener('fetch', (event) => {

  event.respondWith(

    caches.match(event.request)

      .then((response) => {

        return response || fetch(event.request);

      })
  );

});
