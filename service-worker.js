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
    "revision": "7c6a70a9c026d82115d47924eb0bd1af"
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
    "url": "assets/js/3.07aa58f0.js",
    "revision": "e18557900907def92e62d1ae0065c435"
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
    "url": "assets/js/app.0c6c7bd1.js",
    "revision": "2480e569f5dfec978b7e83e433a0a3f4"
  },
  {
    "url": "Daily/0507.html",
    "revision": "17fd7e8763904951a17da0d2df08aa82"
  },
  {
    "url": "Daily/index.html",
    "revision": "ab14a10a96ac0a1a2fe4aef0647bb522"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "5e0fdc183fc9172ea165082d57d8bb11"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "7b6161035c3a705cf98a52440bd6d35f"
  },
  {
    "url": "Flutter/index.html",
    "revision": "eb865d7f49b662941e7ee62891e9221f"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "3ad446b352449fe01221aed54db61d19"
  },
  {
    "url": "index.html",
    "revision": "fa7a4e1c2782068408e4a7119e2149cb"
  },
  {
    "url": "Pages/ali.html",
    "revision": "0b1f942ffff5dd5f4c90e7520250296e"
  },
  {
    "url": "Pages/demo.html",
    "revision": "02c2446544a8b4853b6a3618cd885660"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "2a930f29de525ff1acb6a12456e4e4af"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "21be2ebea60d74631b4b375906df876a"
  },
  {
    "url": "Pages/index.html",
    "revision": "96f8044c3f1e1014d346d1a29ba51ead"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "da8eb5b05026f21989464f391a428319"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "d7f4609c5bd9d5db5cb3af81ebf13a10"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "a347e729a99c866509cb7cd37b313dc1"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "a350f6cc777b77c36bd9630e981317ea"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "ee1d40391c871e62252bef8423466691"
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
