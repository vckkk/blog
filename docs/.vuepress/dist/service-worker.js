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
    "revision": "31599c446f1aeeda201539b567eaa2f9"
  },
  {
    "url": "assets/css/0.styles.fef5045a.css",
    "revision": "8f2417cdf627d1b6f8d106782e8e8097"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d3983206.js",
    "revision": "10d16a5e3836eb3317b4b2584f293363"
  },
  {
    "url": "assets/js/11.bf163dc5.js",
    "revision": "fc7ff03fd170ab5ab27b3cf42541e86e"
  },
  {
    "url": "assets/js/12.c91a394a.js",
    "revision": "84f39645c17ecd371e7eaa3902ee9257"
  },
  {
    "url": "assets/js/2.748c5947.js",
    "revision": "bbd498f606cfd3cc8eeab1b1dbf2f4b1"
  },
  {
    "url": "assets/js/3.12f592dd.js",
    "revision": "12ed3ac28d12fc8cb4517fdfca86aadb"
  },
  {
    "url": "assets/js/4.fb9fa938.js",
    "revision": "90030e0ec462ac615e374f1249ae3066"
  },
  {
    "url": "assets/js/5.0205359b.js",
    "revision": "3f3e1f7880152445a59d65d30e3a5b60"
  },
  {
    "url": "assets/js/6.af6c44ae.js",
    "revision": "4cd89d2c3b0fa0f7f3486b8612bab1bc"
  },
  {
    "url": "assets/js/7.2c471552.js",
    "revision": "6b002b1a80ae901a0be1799a91ebacff"
  },
  {
    "url": "assets/js/8.1a70a674.js",
    "revision": "a1b9b25d6001b9746211b3d07a3ee9f1"
  },
  {
    "url": "assets/js/9.bd74824a.js",
    "revision": "da6156be84e0978d990b9cdc728e9517"
  },
  {
    "url": "assets/js/app.1e1c2fb9.js",
    "revision": "5963573ea70968fa97fbac5edd353846"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "d8dee1f153b93b7ae015b3231ef7e569"
  },
  {
    "url": "Pages/ali.html",
    "revision": "2b23ad63f8adfb8be267bc06ecbf1ccd"
  },
  {
    "url": "Pages/demo.html",
    "revision": "0d3c907a35f66beb973d4bba699e3847"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "89dd73993fa2ad468e0dee97ca0206f9"
  },
  {
    "url": "Pages/index.html",
    "revision": "2853d1e19ea8406eefe13e7c4a72a87b"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "a7bc32e37216289d7f3dc31ace59dff2"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "65229b39a7edf2f6b929f9b671b00cb7"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "514dad08f6b4e09d9e4136f9cea428a3"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "d56ce4b79575a976c082678b9cbbde7e"
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
