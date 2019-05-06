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
    "revision": "a619e16a165758870aedd2465198d263"
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
    "url": "assets/js/3.0197f705.js",
    "revision": "98995bbdb724e85cca0cd1cc1f7c72c7"
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
    "url": "assets/js/app.e4f4df63.js",
    "revision": "d3b874770a267978b48bccec199ea40b"
  },
  {
    "url": "Daily/index.html",
    "revision": "b44ea40bfd3fc8b42de8a5df2c4c4913"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "ca6a4ca6e4255ab974f0ddd9b60ce237"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "0bae3549aabda9432bc9e247bf56de51"
  },
  {
    "url": "Flutter/index.html",
    "revision": "353b3cbfee7bb002003a45b0eb681ba8"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "c610d7c88ce1f7c8d518d01e61c4a461"
  },
  {
    "url": "index.html",
    "revision": "56d22bcbd46abd7a69c27f54d44911e0"
  },
  {
    "url": "Pages/ali.html",
    "revision": "478d01fada50927a202e12f9f9233ae5"
  },
  {
    "url": "Pages/demo.html",
    "revision": "f53baad79d6ffa79975b9a881724e05d"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "77a9d849d3ea72abc89b3f431820d9f4"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "a6857b939b7f83b3b993dbc1dabc93e0"
  },
  {
    "url": "Pages/index.html",
    "revision": "752454e56c219c3e0eb3151caa07d5d0"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "9d67ff9c3c54be52be48ec310d2fe862"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "591269b407241ffb58cecc376694702f"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "cf732d632c073c1881b61804e150d4f2"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "816606531006511dcfa06401cbf64c5d"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "1ff72d10097f35c60d01612bce127ab9"
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
