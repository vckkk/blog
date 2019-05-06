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
    "revision": "2d813edce563ba864bee5fdf1da37578"
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
    "url": "assets/js/10.ba8b3693.js",
    "revision": "76678463d4d00fa1019c6c5a10de52ed"
  },
  {
    "url": "assets/js/11.83a65b5f.js",
    "revision": "02b2e04ea2e3285049368ea62585dcce"
  },
  {
    "url": "assets/js/12.e6b6ce5d.js",
    "revision": "1eebf67e0c7add78b6170bd01f479c31"
  },
  {
    "url": "assets/js/13.98e8a6ca.js",
    "revision": "e79dec653864f656c295c55421bba269"
  },
  {
    "url": "assets/js/14.ad190350.js",
    "revision": "8cd018798f10323037ae825d04ad293b"
  },
  {
    "url": "assets/js/15.e8bc1f1e.js",
    "revision": "6ba1092188ccce965af3ffbc3394d63b"
  },
  {
    "url": "assets/js/16.fea5c59e.js",
    "revision": "1835bfdbd52cf862dec34e68cabcdd3d"
  },
  {
    "url": "assets/js/17.e46ea580.js",
    "revision": "d475dec35ec97b9a6bb4c7b6eb1cdd06"
  },
  {
    "url": "assets/js/18.f1605b1c.js",
    "revision": "868c1529986a977f1f33a86357d57240"
  },
  {
    "url": "assets/js/19.75c87d30.js",
    "revision": "8d836237fb10eb1cb2d02dfe05a54198"
  },
  {
    "url": "assets/js/2.afc26b7e.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.0e8ea782.js",
    "revision": "34bdc9f9a9ab4f1db2d0013cc0f3c259"
  },
  {
    "url": "assets/js/4.f4155203.js",
    "revision": "99516af0e086a3abc7207a6f9b13234c"
  },
  {
    "url": "assets/js/5.03748872.js",
    "revision": "370bf7ff469dd4e37b4d334ca1f05015"
  },
  {
    "url": "assets/js/6.0acdd271.js",
    "revision": "cbd88d0c6a13e522b097e79e29cb488e"
  },
  {
    "url": "assets/js/7.d9a65942.js",
    "revision": "0e5c1b954d69314eab4f70f89dae0858"
  },
  {
    "url": "assets/js/8.a8e5d091.js",
    "revision": "de2747260ea74d90813f01c5ff1ace93"
  },
  {
    "url": "assets/js/9.124283ab.js",
    "revision": "024ab232461b048dfb2a4075cd156724"
  },
  {
    "url": "assets/js/app.1f09540a.js",
    "revision": "3e4a8ebbc2adc61cf4bbdef7d84b9d70"
  },
  {
    "url": "Daily/index.html",
    "revision": "49adfc6941dc0a1d0622fb8915c14291"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "008525a524b25efa194e35b8039e6013"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "403dda3781849b669ca6d3b732f62aa2"
  },
  {
    "url": "Flutter/index.html",
    "revision": "701f8b46b8ebbcdba3de279e28b89848"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "be4279cb6565c91e5cc5ab8cc88e9f3b"
  },
  {
    "url": "index.html",
    "revision": "46876c702ce9c9977440dcef070ff37d"
  },
  {
    "url": "Pages/ali.html",
    "revision": "fafbd758d99524281c9e2f7600e4ff2a"
  },
  {
    "url": "Pages/demo.html",
    "revision": "78f6046858135fb2c1a6c124e7780957"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "6662160653b633f68c023b66fd5e6337"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "239eb097b5d04bd6a7cf30707f93753c"
  },
  {
    "url": "Pages/index.html",
    "revision": "3430c373a61f7117b27611b398590aa3"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "4b83fc357d86ec084e991e68ad1c0d0b"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "d5fc635f624c2592f4ddff12e5b8fe1b"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "c65f0d6e47aaa7942037b354664b8759"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "74a02d7e66114aae81d1c9d260e71a72"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "bfe83f20a583651baf5ebf8ac3326d39"
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
