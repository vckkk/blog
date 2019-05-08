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
    "revision": "05f7fde7f49e9ddb9f6f5fd9bb249640"
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
    "url": "assets/js/10.98ac5bd3.js",
    "revision": "39f2e05f8e9683a5412fda370ad32ce5"
  },
  {
    "url": "assets/js/11.a2a8da87.js",
    "revision": "808ee27022bffcbc2278be7b4245ee76"
  },
  {
    "url": "assets/js/12.0ed3c661.js",
    "revision": "461128c1d0739fb5f33b0d73065bc308"
  },
  {
    "url": "assets/js/13.34cf6ea3.js",
    "revision": "8db67b329f14dcae82d3b9f2e7ee37ec"
  },
  {
    "url": "assets/js/14.43337160.js",
    "revision": "316e6706c87019b5bf9dd5c338e6525a"
  },
  {
    "url": "assets/js/15.674c5798.js",
    "revision": "8bbeb63a0866e070d7f55d35a7f06764"
  },
  {
    "url": "assets/js/16.35865328.js",
    "revision": "e9eba907d7207bd768820f9c6ac39b96"
  },
  {
    "url": "assets/js/17.406c6dfe.js",
    "revision": "e6932936c445e0e367d5713fe9e075e0"
  },
  {
    "url": "assets/js/18.efd6fddd.js",
    "revision": "ddbecd63ca15f7245aeb53314c1adf8f"
  },
  {
    "url": "assets/js/19.eb6ef630.js",
    "revision": "268029d11cd99e1f3d7682cf09b25399"
  },
  {
    "url": "assets/js/2.afc26b7e.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/20.fdf2dde1.js",
    "revision": "f11119ae0014b1eb42e60ec39d16fb22"
  },
  {
    "url": "assets/js/3.d6bdb4ad.js",
    "revision": "8b0b40e79aced5be2703de970ad7e046"
  },
  {
    "url": "assets/js/4.923cf6cd.js",
    "revision": "fc5ace9c0011d8be372dfd5258ede9c7"
  },
  {
    "url": "assets/js/5.2c13d659.js",
    "revision": "4017da320972a3c50e85295b3db34a0f"
  },
  {
    "url": "assets/js/6.fad100d1.js",
    "revision": "05422a9afdc669d7f97c62c8aee9d2e9"
  },
  {
    "url": "assets/js/7.fa51691c.js",
    "revision": "546c126f885202416039714e2d626d33"
  },
  {
    "url": "assets/js/8.4624bd20.js",
    "revision": "2806a5026ee7d66caf6523e05776b1b8"
  },
  {
    "url": "assets/js/9.53e97eee.js",
    "revision": "dd91cbcdcd68c5bfc41d3b232daa3639"
  },
  {
    "url": "assets/js/app.84880a62.js",
    "revision": "e9dbbfb7827f438050067457e563656f"
  },
  {
    "url": "Daily/0507.html",
    "revision": "279e9ddac49f56eaf6e272927b5bfb8c"
  },
  {
    "url": "Daily/index.html",
    "revision": "32a5c2af57ff91eee5742bac9f226902"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "a6c567aa1b0e812bb63027bcf560bd20"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "e68e61581b9421d4754741e46e84fc79"
  },
  {
    "url": "Flutter/index.html",
    "revision": "f53674d7ef06d3ef3d6e577049cde84e"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "a65b3b5a1698f0abe21c5c2e3de00426"
  },
  {
    "url": "index.html",
    "revision": "d582dbcc0c33befa5de7216917d292f5"
  },
  {
    "url": "Pages/ali.html",
    "revision": "c0cf96af1370fd4da7500c77d702a4ee"
  },
  {
    "url": "Pages/demo.html",
    "revision": "a63787461e3dc9c75a6e4ff92622453c"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "79d9f1d118ff12c5727aa9a5e0410c6b"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "80bc5b882fb10b7812eeec557affe922"
  },
  {
    "url": "Pages/index.html",
    "revision": "2b54ecaf6162c94d8002cce6918b3d66"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "42f86be97dc62573c7246c603fe4c92f"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "d92d61a75cb8a04dd62c6511f8ef3f6f"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "ef774b5cd3c57cd30bbca416f85974c9"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "1a3427ab29a741b4925aa4ef62e28f0c"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "58ec385be3729b15612bf9c49bf0a156"
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
