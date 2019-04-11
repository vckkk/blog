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
    "revision": "18b434e10a1145fc6e934f592f17a14d"
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
    "url": "assets/js/6.5b129814.js",
    "revision": "f8ac97fc78c97fc05684da23d82d1bd4"
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
    "url": "assets/js/app.3b95ab16.js",
    "revision": "de543c68bc7ca9aa0d5ce37cb79524d4"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "dfe3c3a71b77a4a06a9abf797e482929"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "6cdfd35bf8edff263507757795b3eb85"
  },
  {
    "url": "Flutter/index.html",
    "revision": "e373cfe69dddb7c8f5002d0f9403dcf8"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "d08122fb317251d91adf28d4448d8c3e"
  },
  {
    "url": "index.html",
    "revision": "f8e92409ca3de864d078083acc54cb04"
  },
  {
    "url": "Pages/ali.html",
    "revision": "ecda34ff430040381fca4f0f14ab9e84"
  },
  {
    "url": "Pages/demo.html",
    "revision": "adbd47b92f0ce66492d0ba53795f40ba"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "53b2c0dba2943fd3fdbfab8a87bfd582"
  },
  {
    "url": "Pages/index.html",
    "revision": "78ed48a5366425181b817a78e5d8a7a8"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "8c8115d1acc86c91f8a92310510190ef"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "4f34317132ff7f1e0766b3432f237fe5"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "f6370b34836f6f9ce3afbc4d986ff5a3"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "3f2b83a0e65f27c981fc4d10bbe7e2ce"
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
