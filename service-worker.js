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
    "revision": "31dce6d1169d6b3f0eab3dc5f7da5e26"
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
    "url": "assets/js/10.1391f55c.js",
    "revision": "6140f9d447b2b4d9b88c7a21a6f834ef"
  },
  {
    "url": "assets/js/11.9d7ec396.js",
    "revision": "ed2a5547f11351d71af362c648538ab9"
  },
  {
    "url": "assets/js/12.0ba1599a.js",
    "revision": "3f2571c9797094e21f5e73a54407d57c"
  },
  {
    "url": "assets/js/13.755d6978.js",
    "revision": "16406fb6c4af9d0288c45f654ad766fc"
  },
  {
    "url": "assets/js/14.f5b89e24.js",
    "revision": "a50fbf25add2d891a86c027c0c74300f"
  },
  {
    "url": "assets/js/2.a6fc24c3.js",
    "revision": "1e7ccb25d148b4f8dcfd5111f4116f7a"
  },
  {
    "url": "assets/js/3.c08a52ec.js",
    "revision": "3105dce12b23c14bed34f78a23bac075"
  },
  {
    "url": "assets/js/4.44ff6aa5.js",
    "revision": "02ea7d9c97acf4ad54eba132daa21792"
  },
  {
    "url": "assets/js/5.c1cf3a9b.js",
    "revision": "5e3b94d58eda226d851949e19f7ae20e"
  },
  {
    "url": "assets/js/6.b05c01f4.js",
    "revision": "8d8ba36dafb70781235c188a820e11e2"
  },
  {
    "url": "assets/js/7.50c78b28.js",
    "revision": "55fcf1380b1153675ff3b05c9843a8e0"
  },
  {
    "url": "assets/js/8.43825fde.js",
    "revision": "a6d9df350ca309d5f383cf15e7a04f57"
  },
  {
    "url": "assets/js/9.6efe5c88.js",
    "revision": "1b0c213d91ab55d6bd0d44535f17ac52"
  },
  {
    "url": "assets/js/app.615a0beb.js",
    "revision": "721a4aad6fca65dbd1586c8cc1706799"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "6f7daf4f3f263e9a62ab4766b5b86716"
  },
  {
    "url": "Flutter/index.html",
    "revision": "663b133434a81eb014640d376948be66"
  },
  {
    "url": "index.html",
    "revision": "9b1ce7f0a25e39574ff0c7494d9055f2"
  },
  {
    "url": "Pages/ali.html",
    "revision": "4a875d06237abaa918278692bba08aa9"
  },
  {
    "url": "Pages/demo.html",
    "revision": "82a28e93d2e2e812c25650f896d5fd37"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "d9a9b95142f2a92749dbc9ead578a1b3"
  },
  {
    "url": "Pages/index.html",
    "revision": "c7b04d1a06f935b4f544ca0ebcc15bcd"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "6774e2aa02b1a850e27ae80deaa975b8"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "a58e3a79d94a72c54ff56aa5357ae280"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "c38dba0afe7ffca56d8f62fa2d7b7e66"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "46c7e2bf88c7ab9a8ea0bf610c474b2c"
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
