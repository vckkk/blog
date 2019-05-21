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
    "revision": "0600525bfe6e77c4fd14132d6299ea03"
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
    "url": "assets/js/10.943ff362.js",
    "revision": "d9b4522e8e1d83c33bd5845af3ee7da1"
  },
  {
    "url": "assets/js/11.19696fbe.js",
    "revision": "ceddb70f01693a25446bd91cb3ffda50"
  },
  {
    "url": "assets/js/12.555ffdda.js",
    "revision": "d09ef70bc20d74c21a9ea792642ba31d"
  },
  {
    "url": "assets/js/13.1b751e66.js",
    "revision": "df50cebba582f241886c3c3b8aab9ecb"
  },
  {
    "url": "assets/js/14.9d68cc9f.js",
    "revision": "5838cd359a500dcbbfa2f1d008732975"
  },
  {
    "url": "assets/js/15.9caea68e.js",
    "revision": "e8eae1a8fdb48ac7194adcfc1b394586"
  },
  {
    "url": "assets/js/16.d6374ae1.js",
    "revision": "186f3124181b42edab2ff1a7095596e3"
  },
  {
    "url": "assets/js/17.a7f86ee5.js",
    "revision": "7f11866f4e1b2eceb3a99da837927a99"
  },
  {
    "url": "assets/js/18.cc5ce488.js",
    "revision": "46b58be6d0257ea3ef40f7774928b19f"
  },
  {
    "url": "assets/js/19.7828393e.js",
    "revision": "555582af5c8e77b0e8a2888a9a8723d9"
  },
  {
    "url": "assets/js/2.3bbb2e06.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.c8d4c930.js",
    "revision": "c415ac6372b996047a484390bc252b1a"
  },
  {
    "url": "assets/js/21.aea7e85a.js",
    "revision": "35bfb5721fe7abdbd51a8010ace391f9"
  },
  {
    "url": "assets/js/22.c6432cb9.js",
    "revision": "ff55fd5e2c9ebc7911ef0588f7e20dc0"
  },
  {
    "url": "assets/js/23.ce67d2df.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
  },
  {
    "url": "assets/js/3.3ba2a563.js",
    "revision": "71e53e34f27a6daec42e5a4c5c4c585c"
  },
  {
    "url": "assets/js/4.d836b512.js",
    "revision": "96b9a29ddfd75c1048c80de87a5a766e"
  },
  {
    "url": "assets/js/5.e81f8cfe.js",
    "revision": "393faabc75bb0932177fbe163d286b28"
  },
  {
    "url": "assets/js/6.bd77622a.js",
    "revision": "03009394c1fdb9099beeff82b2eb6e2a"
  },
  {
    "url": "assets/js/7.44f49b94.js",
    "revision": "9f2d42a9546fc3fc44a70ebe4d123a91"
  },
  {
    "url": "assets/js/8.a21ee5ab.js",
    "revision": "6405b9bb12b3a0c27baf0f7138ec043b"
  },
  {
    "url": "assets/js/9.9ee6e452.js",
    "revision": "25369933ceb30470933cb6e052ee296c"
  },
  {
    "url": "assets/js/app.9112f847.js",
    "revision": "06e1ddb072cfffa65bb37c04163fefdd"
  },
  {
    "url": "Daily/0507.html",
    "revision": "a9083a0761780f154f95e18f1a4e7ec2"
  },
  {
    "url": "Daily/0521.html",
    "revision": "abead3be73d71b34ab748d753ca66654"
  },
  {
    "url": "Daily/index.html",
    "revision": "37118b47b560e5df42ebf8bdbefdd057"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "fc71db9d2c51f2b9706ce85ab5e389f5"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "8bf1609be563fd098a5598f3624ee6a7"
  },
  {
    "url": "Flutter/index.html",
    "revision": "5aa5115294df20e15a89c5b27517b482"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "abbd521f6c520162cad32aecf4605ada"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "43195dd13c06d384b49a2f644eac86dc"
  },
  {
    "url": "index.html",
    "revision": "434b304f2cbc1a7242ea5fc89042183f"
  },
  {
    "url": "Pages/ali.html",
    "revision": "2b344b00517d67d852b281b3825dab6d"
  },
  {
    "url": "Pages/demo.html",
    "revision": "4562257e3b3ecf6d53b425610a2cd95f"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "c09b0fd5eb7d6b8e332c2f18d49d89c6"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "30a8a2f54af1e0669a4f1bb064385589"
  },
  {
    "url": "Pages/index.html",
    "revision": "295920af546b001d31a03d66e5268a9a"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "d847d42770153f2f6704fb20d7b5739c"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "13596f873e29a2e8d710e0761c88817f"
  },
  {
    "url": "Pages/this.html",
    "revision": "c8c8778be8e9d4548dd5f7aa52b6c924"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "d6b5067fe329725550e8e12bd1ec2cb1"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "92251b3ae271ac302da08f296cbe3456"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "c4b321e1b8d4cbfa950ecd7fdb625dbb"
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
