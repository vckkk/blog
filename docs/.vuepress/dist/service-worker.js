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
    "revision": "e321633a34ccd4749a8cf31f8f519057"
  },
  {
    "url": "assets/css/0.styles.9854472c.css",
    "revision": "8f2417cdf627d1b6f8d106782e8e8097"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bf229230.js",
    "revision": "c18ae9c35c3f33abc14f2f04eee2badb"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.dff8a230.js",
    "revision": "626d49f72859f43b254ac99eae3c84b5"
  },
  {
    "url": "assets/js/4.f9ccf75c.js",
    "revision": "cc9fdca444b963fc2f8c94e8195ecf26"
  },
  {
    "url": "assets/js/5.5de5a237.js",
    "revision": "c570b7bc3e3e9993c17ccc2acf9e7774"
  },
  {
    "url": "assets/js/6.ee7bff6e.js",
    "revision": "5c195740b41c8f141fa4f5722e36fd71"
  },
  {
    "url": "assets/js/7.ca41a0b2.js",
    "revision": "d21e39933032b9b047cccb65e33f7dbb"
  },
  {
    "url": "assets/js/8.04315b49.js",
    "revision": "d3a3177f39d1806dc71def73a3317a2a"
  },
  {
    "url": "assets/js/9.3e0b3412.js",
    "revision": "a645cb8e26ccc195d19cc4ccf4803468"
  },
  {
    "url": "assets/js/app.31dd79f5.js",
    "revision": "e388dc5fd52c7fabd04a0891b1c56a81"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "cdd51affe4030d350466e088af744820"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "fefe30f43714c4cf832ff0fe79374580"
  },
  {
    "url": "Pages/index.html",
    "revision": "84fe465c055bdd0f58e00c283ace768c"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "efe437f5731fb952d91b2a96a5a693aa"
  },
  {
    "url": "Pages/React与Redux.html",
    "revision": "ac23a4f2faa0e79b872be1a98cc65926"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "fcbd7d578ca01157251090ab9798d76c"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "354dcf2157d1e138a32c592b75ed5810"
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
