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
    "revision": "55e11ac69d1048ab5f19f9c9199bfd12"
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
    "url": "assets/js/app.0b090d59.js",
    "revision": "760e6c41082a1d79fe7cde9e99949558"
  },
  {
    "url": "Daily/index.html",
    "revision": "f2808e428bc92203206ff6d8a82f1425"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "a2620ba95834123bbabf6935b97c2646"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "bda4fddb0334b7f8f574bcfa42a00b73"
  },
  {
    "url": "Flutter/index.html",
    "revision": "e10217ad8e599d25409850415f02f2cb"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "eb810a947d91f667deae2153714e95ec"
  },
  {
    "url": "index.html",
    "revision": "ca65a23008bad3aa891cdb4e97608390"
  },
  {
    "url": "Pages/ali.html",
    "revision": "99bd7b3d385cc5c4abf8b4023062ea0c"
  },
  {
    "url": "Pages/demo.html",
    "revision": "b903a9333407d2072844e7e4752877c2"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "ac67d465ec012f90d197c28a27814eee"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "a97f4cafb312040d036bb7ae4083afe9"
  },
  {
    "url": "Pages/index.html",
    "revision": "96d30989ed48a00c67ec9de58b9f94d3"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "31ffa0db80e8efc6fbd0bf1c0db80664"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "fa294d6d369475e6aaceec7d64e47cef"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "bf98efde12e240dbcd8ee6f6f03acfea"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "3e21eb3e8277f43e252ea5b5e2eb4308"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "d8dd6e7c06823f09a06f047203534328"
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
