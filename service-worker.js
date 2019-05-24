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
    "revision": "bff1dbbf76ebbc604173ba2b49795f74"
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
    "url": "assets/js/7.32e09ea7.js",
    "revision": "b726e1509dc919cb2c305aa6fa23ede1"
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
    "url": "assets/js/app.505d6bef.js",
    "revision": "120a3e25ccf5fb5d019d6280731de81d"
  },
  {
    "url": "Daily/0507.html",
    "revision": "7c371f295d02b08e879c01d654b3a08e"
  },
  {
    "url": "Daily/0521.html",
    "revision": "4e888f30983b498294a01b4bb6af2870"
  },
  {
    "url": "Daily/index.html",
    "revision": "a3de98b53e6bf24ed70145279a93714f"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "c659865091d2ee856d58d87657faf515"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "8580890a9ae0170bdb98ff4b8855ccf7"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "defab444b36dfdc6601c35f3924b4522"
  },
  {
    "url": "Flutter/index.html",
    "revision": "de69fa4f8af0b87e4cec92b94cee360d"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "e3896a427cb02130e49a6d2e89cdf54f"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "5390ee6c29b1ca53de1a4c0f4277fc38"
  },
  {
    "url": "index.html",
    "revision": "74ed54e1b085a9e503b0bd7dd62fbaee"
  },
  {
    "url": "Pages/ali.html",
    "revision": "c3d9f330b5fa61bf2dd581f6c7a3c0b5"
  },
  {
    "url": "Pages/demo.html",
    "revision": "3a2d71210bdc8f88f63e1e9398e96136"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "f6af414e6504bbac7cf59bdaace8746d"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "c6f9cac29be4a1ec49ac390b464eb613"
  },
  {
    "url": "Pages/index.html",
    "revision": "15e7d9e086ad1d72d5601b905ea38604"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "ccc2b2e6a8f40d4d50082fbb2c5faa4b"
  },
  {
    "url": "Pages/prototype.html",
    "revision": "75b6ffcac8e60553264a6eb71f69408d"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "315299e604a7c97ca8e11dd7619d5550"
  },
  {
    "url": "Pages/this.html",
    "revision": "56cf8fdd27973bd19d096019769d645c"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "679af0c5f9f843b982e4255b2ab92bef"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "c50abf8859dcb213e9d09ea5bec31693"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "b802f9f21ed245df75130709c5a69097"
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
