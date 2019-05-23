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
    "revision": "e2f36281b073e3d57614c0d32debcfcf"
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
    "url": "assets/js/3.0c1e7e37.js",
    "revision": "edaf56cfe9987fdcab949a963b6a1bbf"
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
    "url": "assets/js/app.07125857.js",
    "revision": "a5b9cf117bbce394c587c0a12ee3619c"
  },
  {
    "url": "Daily/0507.html",
    "revision": "17a4b615b7e98ba04762fb6fda290f6f"
  },
  {
    "url": "Daily/0521.html",
    "revision": "68a0d27a627546064c7db049240ef989"
  },
  {
    "url": "Daily/index.html",
    "revision": "4fcf18ec97af7bd4644ab9cfd4dd7d22"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "264bf7cc48bccbfebb6228a18684c372"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "46b8bc8f87c7033c96b5714bcb55068c"
  },
  {
    "url": "Flutter/dio.html",
    "revision": "4b7c9777af96563fe8ea4a387ae637b6"
  },
  {
    "url": "Flutter/index.html",
    "revision": "7a64349660682866891f3b717db35d76"
  },
  {
    "url": "Flutter/pointer.html",
    "revision": "d7dda62c9cfc9b40f2341474ee352ced"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "24cf0c05a438bba98b21e3990f580e0b"
  },
  {
    "url": "index.html",
    "revision": "f772843345369b89762934306f650951"
  },
  {
    "url": "Pages/ali.html",
    "revision": "187be321aa8540df923539264c1a21cc"
  },
  {
    "url": "Pages/demo.html",
    "revision": "4ee3dadb252a9d66c82335686d2cdb90"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "139e9fb9b6ba913267d3e3a649bc65c7"
  },
  {
    "url": "Pages/eventloop.html",
    "revision": "4b8ac23494f754f372a3510ab77b059e"
  },
  {
    "url": "Pages/index.html",
    "revision": "18423527f5753eed8367d2753af0d95a"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "35647f6f39aeb5506e5e863bbcdff5c9"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "0f2d8ae5f679fce2d05b476e50b278bf"
  },
  {
    "url": "Pages/this.html",
    "revision": "41805977a46c053b1f9dbf2ae5a38e58"
  },
  {
    "url": "Pages/traversal.html",
    "revision": "b46c86ae28bfc1815a29b5e7144a2ab1"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "d9d331176dc568005c4c695bd55d9060"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "3f4fe7145f5edcf89838a43486f48d10"
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
