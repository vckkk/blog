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
    "revision": "864ddaa3dec583d0398bbd6bd5cb84d6"
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
    "url": "assets/js/7.fd481357.js",
    "revision": "cc14f9e59743f06f31c5f2210d222918"
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
    "url": "assets/js/app.89d0f4bc.js",
    "revision": "76ca25b1780c94f7f9d7c018ff792b37"
  },
  {
    "url": "Daily/0507.html",
    "revision": "115f167e510223f13a1b6cf55ce8bcb8"
  },
  {
    "url": "Daily/0521.html",
    "revision": "a82870326d866ea87e019488e73db4b5"
  },
  {
    "url": "Daily/index.html",
    "revision": "7471375e50955f4abafbea0084b940b0"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "7d974a16689dcf403ef4bb9c1dfe13a9"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "8bc3138ec644585940c33afc1248549c"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "76b67aefb7360bf73d067c9ae24b1bc3"
  },
  {
    "url": "Flutter/index.html",
    "revision": "99eaa9430caae1d9c3852c68e20c4d3f"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "0d6176475c09ba6016eb125fd5b35887"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "0c852a232b54da2392b297e1d7f6fe73"
  },
  {
    "url": "index.html",
    "revision": "993e910ca589b6c310c487c9467906e9"
  },
  {
    "url": "Pages/ali.html",
    "revision": "f63d35e81932f9700ff8d01dbe91dade"
  },
  {
    "url": "Pages/demo.html",
    "revision": "d937f4d38801824fbae351e1916acc92"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "20a11fd1f9b7f0cf214864f40525ec6e"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "c8af3168f318628c56464de4f695dace"
  },
  {
    "url": "Pages/index.html",
    "revision": "163297a2f52da75eab511dce3db8e45d"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "770f33babee9c5fa9c3f82398ff73185"
  },
  {
    "url": "Pages/prototype.html",
    "revision": "24789054ed682bb6625928f932c427dd"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "972b0c0148dfffe5c76d813f4b2184cd"
  },
  {
    "url": "Pages/this.html",
    "revision": "c5d05125b10bbfcd88cc08d799a52e07"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "d340f60be095cc4e649c1ebd160a1ae5"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "2804972a903b1b6074b96a32a5a8c9f7"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "319c92aa63de2bbda02bdcbba84d722f"
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
