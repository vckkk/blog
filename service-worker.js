/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5981eb1e672c9efeafb9ee2833c5872b"
  },
  {
    "url": "assets/css/0.styles.fef5045a.css",
    "revision": "34c451d1b76265772efe811d94d7fbf0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2be47945.js",
    "revision": "597eba097b1c82694403a4d843e0a5db"
  },
  {
    "url": "assets/js/11.c10c468c.js",
    "revision": "0f07c82723ad6950313b95bdeae3cb14"
  },
  {
    "url": "assets/js/12.c91a394a.js",
    "revision": "84f39645c17ecd371e7eaa3902ee9257"
  },
  {
    "url": "assets/js/2.51671d88.js",
    "revision": "07b76a1c3d5e1fdd1464baa3f4ba8ec4"
  },
  {
    "url": "assets/js/3.136b693b.js",
    "revision": "3322330aefc63c827112735f7f8170d1"
  },
  {
    "url": "assets/js/4.5262c1f8.js",
    "revision": "f9a966ca1e5cf504babf201c111e25e6"
  },
  {
    "url": "assets/js/5.e1836220.js",
    "revision": "168891ae8c1ed2e54cb3fbcc246413e3"
  },
  {
    "url": "assets/js/6.cd28b8ee.js",
    "revision": "87992b9ad6135ef0becf2e5a4628a209"
  },
  {
    "url": "assets/js/7.dd579077.js",
    "revision": "5cc2f49d8e120d17693089910acae3bc"
  },
  {
    "url": "assets/js/8.d06dea88.js",
    "revision": "2c276c815f2d6c7f0a40354045c77056"
  },
  {
    "url": "assets/js/9.96e1c7af.js",
    "revision": "2bd78d34555f94c487108d18ecc96adf"
  },
  {
    "url": "assets/js/app.13d1c341.js",
    "revision": "28cf3e3c567c0977b02cf92539a836c1"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "8c3d348c114f9e2fb793eb7c2dc25b5b"
  },
  {
    "url": "Pages/ali.html",
    "revision": "13e1eb791172d03d68be4bd32837efd7"
  },
  {
    "url": "Pages/demo.html",
    "revision": "76fd0266687e9d3985a925bcd72497a4"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "c816326b6cac3240fc650fe195a61a34"
  },
  {
    "url": "Pages/index.html",
    "revision": "6bd82888bd87d378db82bb328c2295d2"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "b807df0cfd9f0468daaaa74a069a51ce"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "5770f71f724dd7a3fe0ea72c9fb2e9c6"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "165233fafbf1647bec14fc1b49befc60"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "9749444942c02e7cf837405fa7f121ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
