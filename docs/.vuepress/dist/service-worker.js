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
    "revision": "b54f2cc9081c8d7933e0c2132e744e5e"
  },
  {
    "url": "assets/css/0.styles.6eceac1c.css",
    "revision": "511efbee76bc9c3fbb99540060fc1427"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4ed31394.js",
    "revision": "9d9d3fba520dfa6196cad5cf05240e94"
  },
  {
    "url": "assets/js/3.886af5d5.js",
    "revision": "f9d86b37e802683af9eed905931d17e8"
  },
  {
    "url": "assets/js/4.a65b05b2.js",
    "revision": "c8ce8da3c63206228289a95a81157960"
  },
  {
    "url": "assets/js/5.ce21a6cd.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.4954aaaa.js",
    "revision": "5c52566a032de5371d91c2bd36c5c2f4"
  },
  {
    "url": "index.html",
    "revision": "032d4b2f8f356cb2fcd456717a8b0632"
  },
  {
    "url": "Pages/index.html",
    "revision": "4fb4bcdb30eafb045447d8069f76e762"
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
