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
    "revision": "28f4106dc945123a84d70d5e7aad2225"
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
    "url": "assets/js/7.5a1ebc76.js",
    "revision": "d15d2fd058e97876c746d6c1da0669c8"
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
    "url": "assets/js/app.4048550d.js",
    "revision": "2c2525de833ad8f7a325e03e4096d22c"
  },
  {
    "url": "Daily/0507.html",
    "revision": "60f8dbe73df934b65eceb3f50f8f2dcd"
  },
  {
    "url": "Daily/0521.html",
    "revision": "05dcf8f00365b5fff9a802f48425bbcd"
  },
  {
    "url": "Daily/index.html",
    "revision": "0ca17f6834cb82cdca739437df0e1946"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "9bd27e3262cd87a3c90a51094979a0d4"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "2ca523abbb15870039035adfbea0fa22"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "040afc0ef9987e3aac9927f9de8f65e2"
  },
  {
    "url": "Flutter/index.html",
    "revision": "5dcdbbeeeb0ca8f33e542fac8c9f7e1b"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "f795bfc82e09a6d24cd38e4978a027da"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "c23b3e0f85ba8ebc66a16bb07f9e2057"
  },
  {
    "url": "index.html",
    "revision": "0862e2daa3ab4b93e8b1a77eb0c22175"
  },
  {
    "url": "Pages/ali.html",
    "revision": "35015e4762338182ba527627acd2468c"
  },
  {
    "url": "Pages/demo.html",
    "revision": "758ea1fa22564e21ec155be991f69e70"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "8350140394f5ffc962283ceed55b0bf0"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "6351f6cd3104e7b176f1b5efb6d498d6"
  },
  {
    "url": "Pages/index.html",
    "revision": "ca01b08f5f605592f1427a2726134d2a"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "fc1ffb3d124dc778ab700a357e92f284"
  },
  {
    "url": "Pages/prototype.html",
    "revision": "69ba6715274f3114582f65dbd15b7881"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "b2954449ef057d95bd0f7f43bd13ef0e"
  },
  {
    "url": "Pages/this.html",
    "revision": "540c42b648efa54824ff87ac4ffa2da7"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "86b67d551f5f8038bff1f0ce90340970"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "63b15ced9561b166b4e55ec9ac766e5e"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "a448e756b2761e96db8dd3f62e50be4f"
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
