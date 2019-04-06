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
    "revision": "cd0dc1e2eb822884254a2b560e3beed6"
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
    "url": "assets/js/5.dfe2e394.js",
    "revision": "787e21719960a010d0156a2fef9d6572"
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
    "url": "assets/js/app.7f52bb5d.js",
    "revision": "0c8895c708ec5a5d93a681ebd30653e8"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "59aab720244a3e493b923663c8dd8791"
  },
  {
    "url": "Pages/ali.html",
    "revision": "74a41f88e85e5c61c791e329b98f1a44"
  },
  {
    "url": "Pages/demo.html",
    "revision": "d71ab4e63e442bdf3570d7397616ccd8"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "cb4fbb57c33773ddcbfe34b8475fd603"
  },
  {
    "url": "Pages/index.html",
    "revision": "55223f577887931ea0903e37ac54f8cd"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "27588a18476fb2cf87f779876725fb4f"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "ae62ae9dc4ff397cf5042e7836def147"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "aec445cdec13405b3c1fe45d88ba1b55"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "68caaf11fb46d3478080d1eadfc4b428"
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
