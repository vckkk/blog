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
    "revision": "eca1d2af2798a911a9b5349ed6b2acd1"
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
    "url": "assets/js/10.8187efb2.js",
    "revision": "13d78a8ed755cb33c1b8555d910cb818"
  },
  {
    "url": "assets/js/11.767aa823.js",
    "revision": "5280025b7e0cb78e8ef9259b08fbbc13"
  },
  {
    "url": "assets/js/12.a7016f62.js",
    "revision": "e01fdda932d35ce4319938025ca0d569"
  },
  {
    "url": "assets/js/13.ac2d9af5.js",
    "revision": "b5d09945d9cd1e485b97d523700fedde"
  },
  {
    "url": "assets/js/14.b84acd8f.js",
    "revision": "a511af17e5ae270f1e193a3132340ddc"
  },
  {
    "url": "assets/js/15.f5a4f7cb.js",
    "revision": "c7ab3b4b27094fdcba88291466938455"
  },
  {
    "url": "assets/js/16.f926fc9b.js",
    "revision": "1835bfdbd52cf862dec34e68cabcdd3d"
  },
  {
    "url": "assets/js/17.90dc33c6.js",
    "revision": "78c6b65319f640b898e75f034a56c1cc"
  },
  {
    "url": "assets/js/18.65db8059.js",
    "revision": "555217e9988c8ba899554506c114d0ae"
  },
  {
    "url": "assets/js/19.f52bb6cb.js",
    "revision": "1f253e1797ebd7b7c9e16a0394a34fcd"
  },
  {
    "url": "assets/js/2.a53541c8.js",
    "revision": "9f3aefa87973610377e601becab51f80"
  },
  {
    "url": "assets/js/20.d2aba2b4.js",
    "revision": "be5643a78ffc5dab460fcece9b9d0b44"
  },
  {
    "url": "assets/js/21.b1fd6c83.js",
    "revision": "86bcfc39c2a6e4e9c4faa66c728d6f9e"
  },
  {
    "url": "assets/js/22.4a06dd11.js",
    "revision": "1c2f04d2363797224a886c32f202147e"
  },
  {
    "url": "assets/js/23.b0c3c088.js",
    "revision": "ede34d7bfd7b981ba88a32db03a13c06"
  },
  {
    "url": "assets/js/24.35a9cf10.js",
    "revision": "1c2f65fd7987c1d89ddbe2acba8a2c42"
  },
  {
    "url": "assets/js/25.e93a3516.js",
    "revision": "e5a670b34b78f6f2901d2d566a42cc74"
  },
  {
    "url": "assets/js/3.332af812.js",
    "revision": "9b8217ae2ba41f6c6d21968af8ef9153"
  },
  {
    "url": "assets/js/4.f33433b2.js",
    "revision": "bfbc22e3fd1ace9ee9e6964dd2068f57"
  },
  {
    "url": "assets/js/5.d2492d27.js",
    "revision": "e6120047cbab8b8879cd3523d42d8787"
  },
  {
    "url": "assets/js/6.585bef9b.js",
    "revision": "2012e9c88df9fba0a7948152e60d5ba8"
  },
  {
    "url": "assets/js/7.2f0b6e89.js",
    "revision": "051c5b90e6f6629bcd95e7d5ee8679c6"
  },
  {
    "url": "assets/js/8.83d35c1d.js",
    "revision": "bc8e05f9ca9cd198fff6db68d7b1f4e6"
  },
  {
    "url": "assets/js/9.a3fc7cf5.js",
    "revision": "2f609b2545d025673c034163231c9c5b"
  },
  {
    "url": "assets/js/app.1809acbf.js",
    "revision": "e64405074452d437f814edd542aafead"
  },
  {
    "url": "Daily/0507.html",
    "revision": "507eab2259c8ea86f0f3af33b45f3900"
  },
  {
    "url": "Daily/0521.html",
    "revision": "592c225ea37062358c7805e06f91af10"
  },
  {
    "url": "Daily/index.html",
    "revision": "5e6357e838beaa94f931b7e09da574d1"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "83b3083be10e70a9b5645887224e3070"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "ae56855ec4e74224789b3adca74084f8"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "26fea2f80d0b6b7765ceb809c2de2245"
  },
  {
    "url": "Flutter/index.html",
    "revision": "0bd834c5a55870e8f40be13c1fec43b7"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "2c412121d4eefdc7e23f5e81fdcd697a"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "ccd81380562bcf856b3e9f74280c5128"
  },
  {
    "url": "index.html",
    "revision": "db3d7ce81fe14ac54f47ec6f831d3893"
  },
  {
    "url": "Pages/ali.html",
    "revision": "95a34ea5ac5640e00b18e1b660f7c954"
  },
  {
    "url": "Pages/demo.html",
    "revision": "66ff1723b1457e14ab015b7b5fae3b27"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "fff4a3b8cbd3f7d1e6c908f66f3d3769"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "d1c708d94ee8450439a394953559959e"
  },
  {
    "url": "Pages/index.html",
    "revision": "55b10971646ada0de749371360469f6d"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "52844f1272e793c858105feb49e50fd2"
  },
  {
    "url": "Pages/prototype.html",
    "revision": "c986218d9c28cdff42da31cb7f8c1743"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "5f0d04f31d538c5663442e81b7503907"
  },
  {
    "url": "Pages/this.html",
    "revision": "f36c2764035de1949d2e2924831730e3"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "5021a8e9d725dcef77c6dafe8c5a60d4"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "849e1a1fb5f93d3ffb0d26c7af15f213"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "5e59709dd0470a92ec0ac438a8ef18dd"
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
