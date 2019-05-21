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
    "revision": "af7575d3e2aa42ebb7767f4f0d284705"
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
    "url": "assets/js/app.f9f2e195.js",
    "revision": "189a56c78ee55727e041c2edcd2ff494"
  },
  {
    "url": "Daily/0507.html",
    "revision": "c12de3ebda674531ddb6a5cfaccee4c8"
  },
  {
    "url": "Daily/0521.html",
    "revision": "684c25b31ddad6497ab8fa0d8b2a6ae5"
  },
  {
    "url": "Daily/index.html",
    "revision": "8954577fae8e1ad3480d9f37fa1f9d44"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "523b6a21889698ff4560ec4b284f7645"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "92eaa36bb264e4418a2face5abe00fed"
  },
  {
    "url": "Flutter/index.html",
    "revision": "468923721dfdf51d4e7f5362125d8ebf"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "454e8c918304ef0bd7e401dfdde3be0a"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "03f72be501c1939b41b2e180eaff4c9f"
  },
  {
    "url": "index.html",
    "revision": "13131b0b319c4cc2799cd85914b1299b"
  },
  {
    "url": "Pages/ali.html",
    "revision": "6f6e2d8d88b13d72590e3aec129815d8"
  },
  {
    "url": "Pages/demo.html",
    "revision": "deca59f17f17b6b3894a7eaec2f914fc"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "4e28ad19453ab7a192c5fc1ebbca4eaa"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "c7a18e9d7f43a1783998f3d1e5c725f8"
  },
  {
    "url": "Pages/index.html",
    "revision": "a06b0c6be33f518da90f5e379773471b"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "c9b2b0f1bfeb0103f490debf821a39f1"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "f09340e3d6aa78d30614b51bd6e807ca"
  },
  {
    "url": "Pages/this.html",
    "revision": "1630544d4d7080c3bd80dd84198a29ea"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "bbf9152ece5d05d7cb115e5a5578c16d"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "c1015a8bb0e3dbcc4c90f12b439cde85"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "25c055329e38ab5587e3ee513a8c92df"
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
