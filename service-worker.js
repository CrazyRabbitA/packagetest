importScripts('static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author zxy(yu26558@163.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "index.html",
    "revision": "c1f6cd0db35803d576019635d886a920"
  },
  {
    "url": "static/api/guc_api.js",
    "revision": "45aa7e9c60936a9a23b9921ed35fb5f9"
  },
  {
    "url": "static/api/mgc_api.js",
    "revision": "9b636c48b48a18fcdbd343742f91f44a"
  },
  {
    "url": "static/api/zxy_api.js",
    "revision": "c95c54a802b6d4b7099113d7fa5924f3"
  },
  {
    "url": "static/css/index.1ac8f514.css"
  },
  {
    "url": "static/img/sprites/sprite.css",
    "revision": "3739e0c7290d80dcac53574461581b35"
  },
  {
    "url": "static/js/0.d830d557.js"
  },
  {
    "url": "static/js/index.d5a3d72e.js"
  },
  {
    "url": "static/js/manifest.13eb4f4a.js"
  },
  {
    "url": "static/js/vendor.23a185ed.js"
  },
  {
    "url": "static/js/vue.3a2d3adb.js"
  },
  {
    "url": "static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "static/myDetection.js",
    "revision": "267251e427f2f3e345f47dc5cdf101a8"
  },
  {
    "url": "static/translateCommon/en.js",
    "revision": "5a020e27b750199b4045bf8643d3f1a7"
  },
  {
    "url": "static/translateCommon/mm.js",
    "revision": "4eaaf010c1a4cef40dded4c658984da1"
  },
  {
    "url": "static/translateCommon/mmUnicode.js",
    "revision": "e808bc510ea4eb5e5d3bc4a1fa47841b"
  },
  {
    "url": "static/zawzyifont/font.css",
    "revision": "38462dc3bcdf6ae984097e1b35381a9a"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.eot",
    "revision": "3a58dee80372ea71037802a184387bcf"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.ttf",
    "revision": "d03258627a63a5a697fc5cd4b68eface"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.woff",
    "revision": "b9b5c37b86f89a5e0e44f6ba314d505c"
  }
]);
workboxSW.router.registerNavigationRoute('index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
