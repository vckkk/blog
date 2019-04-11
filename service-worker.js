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
    "revision": "1b231396e8f49bb8b977068c4e154549"
  },
  {
    "url": "assets/css/0.styles.9854472c.css",
    "revision": "34c451d1b76265772efe811d94d7fbf0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.52d254df.js",
    "revision": "d1cd74f1957cc1b331b40adccfda07f6"
  },
  {
    "url": "assets/js/11.41aaafcf.js",
    "revision": "95325284e189bca64b2a330f1f749ccb"
  },
  {
    "url": "assets/js/12.e7849880.js",
    "revision": "71ea710f2dc43b586ced6657b6566d48"
  },
  {
    "url": "assets/js/13.ef8de1e2.js",
    "revision": "92f6f849e8402dd3a5a663063692c566"
  },
  {
    "url": "assets/js/14.c12e4543.js",
    "revision": "41c568a43c4f21f619026eb95e59c735"
  },
  {
    "url": "assets/js/15.84e77ffd.js",
    "revision": "3e8072a8b756c68ad37c8131985a72ab"
  },
  {
    "url": "assets/js/16.27d9f4e9.js",
    "revision": "35fc61aa7508642de77705cc89f52bc4"
  },
  {
    "url": "assets/js/17.407daa0e.js",
    "revision": "bb4ab3f1222890a9b2a7d7f5590f535f"
  },
  {
    "url": "assets/js/18.d3ce1bc4.js",
    "revision": "d9467212f623bbd7537697ecad90e58e"
  },
  {
    "url": "assets/js/2.4c922e47.js",
    "revision": "9ceebbbbf4f86a4005ff72b2b30d445b"
  },
  {
    "url": "assets/js/3.2e575e66.js",
    "revision": "d41897d8aa7a084a7a8bb087ac53b881"
  },
  {
    "url": "assets/js/4.1d091bf2.js",
    "revision": "3d764164eb63b09045deaca934370e01"
  },
  {
    "url": "assets/js/5.1a487dca.js",
    "revision": "4ff6bf84b198b2c323a9b6767b4504df"
  },
  {
    "url": "assets/js/6.5a671207.js",
    "revision": "6bb57a751cb1c07a6a8cf00643e98dc1"
  },
  {
    "url": "assets/js/7.b7b3f8e8.js",
    "revision": "90d854bb5fab5723127707e6088288b2"
  },
  {
    "url": "assets/js/8.7bc35543.js",
    "revision": "9d6a8f54ecc184f58c9009b7b21642f1"
  },
  {
    "url": "assets/js/9.5cfef311.js",
    "revision": "bd84e2264182995961697df515c86b99"
  },
  {
    "url": "assets/js/app.e0f048ef.js",
    "revision": "68a8b110dcc90d2344c72e3c33b5ccb5"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "edd44117c8e4f4e45c786a51249491bf"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "4ffd591d687deb351c20d89aa2bee863"
  },
  {
    "url": "Flutter/index.html",
    "revision": "1d308a2f89cacac58232df40b313ae77"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "aff1d03db3b433cc852c670569eb63ba"
  },
  {
    "url": "index.html",
    "revision": "2e764d69b6e0819ba931717dd14ae175"
  },
  {
    "url": "Pages/ali.html",
    "revision": "82ca44ee6b525bd8ac26a1cd4fe069c6"
  },
  {
    "url": "Pages/demo.html",
    "revision": "e004848cf11376136c624d4306bce711"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "cf839836dec5fd8ddf2eb39191d23f59"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "cca5f70a0a1460d8b2043fb91c2ff0d9"
  },
  {
    "url": "Pages/index.html",
    "revision": "3eaa41292f086f64a84d8847a5f31e0a"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "573af735727f96c7978fca7bd31a53ca"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "5f9f54ec98eba71af1992ec6937bef84"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "f4484564a6ac94b406589bbb8f74f3fb"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "2e1879dca9822a5768867ea2f241e599"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "c4e6b89257dd36749f36eed99962121d"
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
