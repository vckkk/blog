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
    "revision": "4baf71f0c725faf277b429c268301f81"
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
    "url": "assets/js/5.e089ba5f.js",
    "revision": "0137da529cd55430d974c1d2e366a320"
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
    "url": "assets/js/app.ff750d8a.js",
    "revision": "d57cc1dd96d9d35f874244728fc7e969"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "2c8e03c3cb3a5bcacc50fa7b95fcce85"
  },
  {
    "url": "Pages/ali.html",
    "revision": "434d0d6b098db24047cc92afd49880ab"
  },
  {
    "url": "Pages/demo.html",
    "revision": "66ad9755855498f5c29dbe18dcdc4efa"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "3b6d275b039e7375cb7592dfcfddec35"
  },
  {
    "url": "Pages/index.html",
    "revision": "609e82bb2c9b995cec57d8dc836446a1"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "fd9de4113750535b03c21ef21854ff2e"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "e3223a57d1cbf0e913e7ffa424ca2122"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "9671de11aada84bac9d99e93c5bce3f1"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "a4d807825d59857d462774bbaf27179b"
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
