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
    "revision": "7be2be3cf429d4d4bb2bc58da3d62955"
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
    "url": "assets/js/10.bcab34d3.js",
    "revision": "7be6cd955cc4c7bb41fb059fb293698e"
  },
  {
    "url": "assets/js/11.8ca6885e.js",
    "revision": "04e12ed316d03c780fc42d4df6511914"
  },
  {
    "url": "assets/js/12.56420e2e.js",
    "revision": "b59ace7816570813bd7a9c19341c2000"
  },
  {
    "url": "assets/js/13.b7078333.js",
    "revision": "5a7386bef792a5e45e3d119d221831d2"
  },
  {
    "url": "assets/js/14.305c9efe.js",
    "revision": "40370c6df0f5b919d671d0feead035a2"
  },
  {
    "url": "assets/js/15.7ae601ec.js",
    "revision": "aa4b2bcace16f517aa79e35addccbf68"
  },
  {
    "url": "assets/js/16.fa132983.js",
    "revision": "5b5fd65ab0ef566190967fbd38df229d"
  },
  {
    "url": "assets/js/17.43b160fc.js",
    "revision": "92a7bfb369b824b14422b16af2bff488"
  },
  {
    "url": "assets/js/18.b2fb5885.js",
    "revision": "0f2a3a00b4b26af643b5aff36ae05811"
  },
  {
    "url": "assets/js/19.86e12955.js",
    "revision": "751067246c2320b2c0fec2d4488641d3"
  },
  {
    "url": "assets/js/2.3bbb2e06.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.cccc3287.js",
    "revision": "7aa646f4e8dced4d8fb7d8209002b89d"
  },
  {
    "url": "assets/js/21.5eb98c44.js",
    "revision": "f352627d1dc1498a4aef43bec8daad74"
  },
  {
    "url": "assets/js/22.68eadfbd.js",
    "revision": "0f58b6f5b20f45f313b1f9c4877609ac"
  },
  {
    "url": "assets/js/23.4486b2ba.js",
    "revision": "24ca4f4de2ac529294d651ccaa6c8bff"
  },
  {
    "url": "assets/js/24.762a82ef.js",
    "revision": "3b0e4dc8a76b9924dc1ff5d68fb4fdbe"
  },
  {
    "url": "assets/js/3.64eed60f.js",
    "revision": "f3d2ffc398e5f62688293c59b1bdc140"
  },
  {
    "url": "assets/js/4.77b55f5b.js",
    "revision": "5425d2be01e76b3a38fb8985e40a152b"
  },
  {
    "url": "assets/js/5.121a8653.js",
    "revision": "ea363830c5bfb332f8ab6b6ef69c2e85"
  },
  {
    "url": "assets/js/6.afc7b6c8.js",
    "revision": "6b27478230d7172f6c8ebd29a06bed4b"
  },
  {
    "url": "assets/js/7.2e2c275f.js",
    "revision": "eeca5e3f71fa73f07ef960a91e7caeee"
  },
  {
    "url": "assets/js/8.a21ee5ab.js",
    "revision": "6405b9bb12b3a0c27baf0f7138ec043b"
  },
  {
    "url": "assets/js/9.feea00df.js",
    "revision": "cd1199d305043eb999e1669de2a6890f"
  },
  {
    "url": "assets/js/app.48a4d3ca.js",
    "revision": "e15a6c005fb158f186f9bce09b71c004"
  },
  {
    "url": "Daily/0507.html",
    "revision": "3813ce4648e265280bb94d1abdd13554"
  },
  {
    "url": "Daily/0521.html",
    "revision": "4e8b4a9dfb57ea3ea5624532e7358ef1"
  },
  {
    "url": "Daily/index.html",
    "revision": "be0d0c45faf6009c5f060f3828a5429d"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "b5c7125ea56074538efe751dc5ef1fed"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "1c94aeb627ac09b86f68b505b95060f6"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "30a2051479b9289ce19da7e967c80997"
  },
  {
    "url": "Flutter/index.html",
    "revision": "3ac7e4e1c8f02de0dc89f7d141769fe1"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "6b4723a5294e9f8965421fcffd719719"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "e2109d712457fd0964de5e3db1fade22"
  },
  {
    "url": "index.html",
    "revision": "2a647dc4661e7964f4a792a93d201156"
  },
  {
    "url": "Pages/ali.html",
    "revision": "10924a361fd2c9aa6ac861edbb7e5998"
  },
  {
    "url": "Pages/demo.html",
    "revision": "213c76892a7d7bf9e24e512bcf5d06a3"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "9dcd32347556ed0a851adfadb9e6d799"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "3aff9ad23e4777db0ff3d569b0413cb2"
  },
  {
    "url": "Pages/index.html",
    "revision": "9f2dfef86e964f4da49de10fd1df637d"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "6c65c2acf2cf950a1012c8a825a4accf"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "e283c2c6efa6e35d36027b0661ee3390"
  },
  {
    "url": "Pages/this.html",
    "revision": "75817fa7fd017d1176591022d7bd912b"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "b7afdf3b7889e085f0dd355c1c15e9a2"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "94c20d3aafb8121bea58e2b2abf05508"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "8b0fcb464e27822eb67bb18bb4511ac7"
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
