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
    "revision": "9a9f2443161c7b5dffffa2b737355743"
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
    "url": "assets/js/10.98ac5bd3.js",
    "revision": "39f2e05f8e9683a5412fda370ad32ce5"
  },
  {
    "url": "assets/js/11.a2a8da87.js",
    "revision": "808ee27022bffcbc2278be7b4245ee76"
  },
  {
    "url": "assets/js/12.0ed3c661.js",
    "revision": "461128c1d0739fb5f33b0d73065bc308"
  },
  {
    "url": "assets/js/13.34cf6ea3.js",
    "revision": "8db67b329f14dcae82d3b9f2e7ee37ec"
  },
  {
    "url": "assets/js/14.43337160.js",
    "revision": "316e6706c87019b5bf9dd5c338e6525a"
  },
  {
    "url": "assets/js/15.674c5798.js",
    "revision": "8bbeb63a0866e070d7f55d35a7f06764"
  },
  {
    "url": "assets/js/16.35865328.js",
    "revision": "e9eba907d7207bd768820f9c6ac39b96"
  },
  {
    "url": "assets/js/17.406c6dfe.js",
    "revision": "e6932936c445e0e367d5713fe9e075e0"
  },
  {
    "url": "assets/js/18.efd6fddd.js",
    "revision": "ddbecd63ca15f7245aeb53314c1adf8f"
  },
  {
    "url": "assets/js/19.eb6ef630.js",
    "revision": "268029d11cd99e1f3d7682cf09b25399"
  },
  {
    "url": "assets/js/2.afc26b7e.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/20.fdf2dde1.js",
    "revision": "f11119ae0014b1eb42e60ec39d16fb22"
  },
  {
    "url": "assets/js/3.0400436c.js",
    "revision": "7d8faffcbf176fbbe140f92c644d6c14"
  },
  {
    "url": "assets/js/4.76d72fef.js",
    "revision": "11ab1273ace3b1c906fa09aba8a755e6"
  },
  {
    "url": "assets/js/5.2c13d659.js",
    "revision": "4017da320972a3c50e85295b3db34a0f"
  },
  {
    "url": "assets/js/6.fad100d1.js",
    "revision": "05422a9afdc669d7f97c62c8aee9d2e9"
  },
  {
    "url": "assets/js/7.fa51691c.js",
    "revision": "546c126f885202416039714e2d626d33"
  },
  {
    "url": "assets/js/8.4624bd20.js",
    "revision": "2806a5026ee7d66caf6523e05776b1b8"
  },
  {
    "url": "assets/js/9.53e97eee.js",
    "revision": "dd91cbcdcd68c5bfc41d3b232daa3639"
  },
  {
    "url": "assets/js/app.28f80026.js",
    "revision": "d3d77b7cbee487f4c1675d1eb3fe426b"
  },
  {
    "url": "Daily/0507.html",
    "revision": "82ba5990b0312b9bb778c8a816491ca5"
  },
  {
    "url": "Daily/index.html",
    "revision": "8dd4e4d4a5224cdc73d592f495423612"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "3a66e679be4be778e59e793bf6522f3a"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "6cfc699590fd8b689d39b15b72da8e0f"
  },
  {
    "url": "Flutter/index.html",
    "revision": "778c814ed5c8fd8f9d2168b1da97001e"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "48ebb186083494f878dff7c1dbd16217"
  },
  {
    "url": "index.html",
    "revision": "23710acdab79caa514ee87ffe7f51227"
  },
  {
    "url": "Pages/ali.html",
    "revision": "63369c0c67a5cc8d4343c1099c45fd7f"
  },
  {
    "url": "Pages/demo.html",
    "revision": "eada06bdcedf1c6438552492e870bd1b"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "9a4d53ed7fc19a93bec90d8013df99b6"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "cafd8d79550ca856b846f5fe331a34f2"
  },
  {
    "url": "Pages/index.html",
    "revision": "9ee09640b4bf107ae750a79809f1a8fa"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "f5f84809b043e6ee8fdd690247a81346"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "cc16d5ae8fde54c9120e2de9957f0bee"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "3d6ed857d36f78a60a7e5878ce1ce40d"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "d2590b14dd8ce460aae6caed263594a3"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "755f3719a86d122f1f7e86d7c1fda14a"
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
