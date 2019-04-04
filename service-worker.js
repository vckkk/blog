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
    "revision": "2f586129f0d96f6f401cbe4eb1600754"
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
    "url": "assets/js/10.2be47945.js",
    "revision": "597eba097b1c82694403a4d843e0a5db"
  },
  {
    "url": "assets/js/11.c10c468c.js",
    "revision": "0f07c82723ad6950313b95bdeae3cb14"
  },
  {
    "url": "assets/js/12.c91a394a.js",
    "revision": "84f39645c17ecd371e7eaa3902ee9257"
  },
  {
    "url": "assets/js/2.51671d88.js",
    "revision": "07b76a1c3d5e1fdd1464baa3f4ba8ec4"
  },
  {
    "url": "assets/js/3.136b693b.js",
    "revision": "3322330aefc63c827112735f7f8170d1"
  },
  {
    "url": "assets/js/4.5262c1f8.js",
    "revision": "f9a966ca1e5cf504babf201c111e25e6"
  },
  {
    "url": "assets/js/5.e1836220.js",
    "revision": "168891ae8c1ed2e54cb3fbcc246413e3"
  },
  {
    "url": "assets/js/6.cd28b8ee.js",
    "revision": "87992b9ad6135ef0becf2e5a4628a209"
  },
  {
    "url": "assets/js/7.dd579077.js",
    "revision": "5cc2f49d8e120d17693089910acae3bc"
  },
  {
    "url": "assets/js/8.d06dea88.js",
    "revision": "2c276c815f2d6c7f0a40354045c77056"
  },
  {
    "url": "assets/js/9.96e1c7af.js",
    "revision": "2bd78d34555f94c487108d18ecc96adf"
  },
  {
    "url": "assets/js/app.76de992b.js",
    "revision": "6c08097c3dcf5428a7d5cc7e1ffe266d"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "index.html",
    "revision": "3000475f8f60e14aaf0ea5a5fea420eb"
  },
  {
    "url": "Pages/ali.html",
    "revision": "939d26a7681899269776fe8e5a0e37b2"
  },
  {
    "url": "Pages/demo.html",
    "revision": "26a82b6aa0f7a3b6cc776eff1fbb1147"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "d0cfcf0dc6a7d803ff63c2be961911bc"
  },
  {
    "url": "Pages/index.html",
    "revision": "6a4241e4ebe836db3efa0a4e568e476f"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "e1d9fc7996b0d3a97161e958893e3ebe"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "068c3744c541ff26e8e1799f073da229"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "16e0eda17fdaeea046c7d25dc31149e4"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "2ed30f06d006b6e8573db2e6f6eb70f3"
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
