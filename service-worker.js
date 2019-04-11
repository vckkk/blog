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
    "revision": "88c7f84da5c0c78b0714569a48397026"
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
    "url": "assets/js/6.c4594919.js",
    "revision": "86f941578e674f7fcb178d70d83d5980"
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
    "url": "assets/js/app.01889e89.js",
    "revision": "107697b853677b51c16ce6d77dae7a0a"
  },
  {
    "url": "favicon.png",
    "revision": "4b101024f5aac0839a028e6819df3fa0"
  },
  {
    "url": "Flutter/communication.html",
    "revision": "9002c541c7a6901d1706438f85e0dc42"
  },
  {
    "url": "Flutter/Dart.html",
    "revision": "4c3d5c4ef29256e66fddcf0bd6215dd9"
  },
  {
    "url": "Flutter/index.html",
    "revision": "fb828224c23fa0657d9b62e1080a9294"
  },
  {
    "url": "Flutter/routenav.html",
    "revision": "43ed311e2074bb24631319041e9a64ba"
  },
  {
    "url": "index.html",
    "revision": "d001afc683586aad87f915cf562a20cc"
  },
  {
    "url": "Pages/ali.html",
    "revision": "9e0a8eddc8cdf74b9df7b8eda171b22e"
  },
  {
    "url": "Pages/demo.html",
    "revision": "7316419351a2882bd35589b2ca5d5b7c"
  },
  {
    "url": "Pages/ES6.html",
    "revision": "565237c51f996ca383b8de8971a6878f"
  },
  {
    "url": "Pages/index.html",
    "revision": "dcb08592ac893769060cc1e74f4787a9"
  },
  {
    "url": "Pages/JavaScript.html",
    "revision": "bf0f24b86664a1d4ebba0e00c1ace59d"
  },
  {
    "url": "Pages/Reactjs.html",
    "revision": "a4ece02f328fa19d555f135c2b1179be"
  },
  {
    "url": "Pages/网络基础.html",
    "revision": "4c1250a9dfe734eea4022808aca1855b"
  },
  {
    "url": "Pages/阿里react全家桶.html",
    "revision": "c1d785c1db2347975f99c0a0a79e6c38"
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
