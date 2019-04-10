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
    "revision": "2b0530b39056eac5c1a0054251358aef"
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
    "url": "assets/js/10.7577118e.js",
    "revision": "cb008fe7fe3bc011337933bec8637b90"
  },
  {
    "url": "assets/js/11.cf73c6f7.js",
    "revision": "621cde359a91aa123e724310fc96cb73"
  },
  {
    "url": "assets/js/12.727da049.js",
    "revision": "89544e30592ff8813502b54239c75f89"
  },
  {
    "url": "assets/js/13.c75a12ac.js",
    "revision": "07fdb2d134a66afc99798d25308a3faa"
  },
  {
    "url": "assets/js/14.fe9cee92.js",
    "revision": "f379cfc4f6224fd62ea3ed1ccd39b0bc"
  },
  {
    "url": "assets/js/15.267c81b5.js",
    "revision": "0b0be829ed4a5dadd2c28daefe65548e"
  },
  {
    "url": "assets/js/16.11ce02da.js",
    "revision": "838f7165a9ee021520bf673d15bcbb46"
  },
  {
    "url": "assets/js/2.8fe579b3.js",
    "revision": "09130b442f9cfc3678109619220977a1"
  },
  {
    "url": "assets/js/3.2b34f836.js",
    "revision": "64952f4e256ce1a84d695af118529c41"
  },
  {
    "url": "assets/js/4.1e2fb78b.js",
    "revision": "19fa4c8a4b6e2eb6f19250a872001daa"
  },
  {
    "url": "assets/js/5.8aa7125e.js",
    "revision": "632c2fde97c0f3266fc129f5593a9aa9"
  },
  {
    "url": "assets/js/6.629aab9c.js",
    "revision": "0e43042302d825f93434b0ee42f0d5f7"
  },
  {
    "url": "assets/js/7.4565d889.js",
    "revision": "d3b3d22ed2749486a523c605e5f488bd"
  },
  {
    "url": "assets/js/8.95e1dfa1.js",
    "revision": "1c2d98905b68cd26bd9d83157217778b"
  },
  {
    "url": "assets/js/9.121f6202.js",
    "revision": "bafd714f3b5b22232de43e782f31be7c"
  },
  {
    "url": "assets/js/app.027a277c.js",
    "revision": "05ca166c0a2a4259fc7b99f88d7ab5b0"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "ffcee0d621a0f09049fcc85d8e00991c"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "fbcec0636638d7e10e3de8f42ce9f48b"
  },
  {
    "url": "Flutter/index.html",
    "revision": "e3c741ef529f1e80e9c4cdd114030d66"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "14b3d0dcce7061c56beb03c55628306c"
  },
  {
    "url": "index.html",
    "revision": "0a7ce74f30054596bf9cfa165b6778dc"
  },
  {
    "url": "Pages/ali.html",
    "revision": "4f788f56fd8ca577b9e7c8c5c38a8204"
  },
  {
    "url": "Pages/demo.html",
    "revision": "aab6618a7ebe52155a7ec87f788f4843"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "332b1ec903ecf3d92c028a35a1ce027a"
  },
  {
    "url": "Pages/index.html",
    "revision": "94a4f4d2e35765ef50f13d5cf1746d92"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "fd7d7034e4cddedb2eb0ef3d8c8576a7"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "79c5acb9cb933283c25807a51a9d027a"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "2f6d621ad3736e5537243065952758fc"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "c2239053588034aeffcbe3a9d584d2e0"
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
