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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ae96cc4876107a8bd4433abd7a042e86"
  },
  {
    "url": "about/index.html",
    "revision": "c7977d4cc78f0dadfc3d224fec97a052"
  },
  {
    "url": "about1.html",
    "revision": "bef23ac204309c21f796a2b76611f73c"
  },
  {
    "url": "about2.html",
    "revision": "3d3991e01f3988daaa2f2c66bf6b254b"
  },
  {
    "url": "assets/css/0.styles.735ee348.css",
    "revision": "f6b6d6de56973f6468aac4af31a4211a"
  },
  {
    "url": "assets/img/hero.d1fed5cb.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0642d01.js",
    "revision": "70598a982558a1c5126a612a79788534"
  },
  {
    "url": "assets/js/11.29cdbd32.js",
    "revision": "902dd948c2af9e0c4403e5d3c00b2bbe"
  },
  {
    "url": "assets/js/12.c548e5c2.js",
    "revision": "3e6f5f703762f68efa4544792c43e983"
  },
  {
    "url": "assets/js/13.afe6ad2a.js",
    "revision": "39f7190a795db5e60206c1c120a59a13"
  },
  {
    "url": "assets/js/14.8d745fcc.js",
    "revision": "3dfbda11c805f54de55cf4b496045e17"
  },
  {
    "url": "assets/js/15.2116becb.js",
    "revision": "e74cda831f6c993feb43edb7481cd978"
  },
  {
    "url": "assets/js/16.91942cf8.js",
    "revision": "16dc7a0c14230502f83ce34b9640aa5b"
  },
  {
    "url": "assets/js/17.7729fcd7.js",
    "revision": "20b0d61972e32311975b822d7b8bb8cb"
  },
  {
    "url": "assets/js/18.bb355b81.js",
    "revision": "80e0982f1cc3ccaa882551ff8195ea3b"
  },
  {
    "url": "assets/js/19.cd5e6b6a.js",
    "revision": "740b33831878456ef03197f01b1b0546"
  },
  {
    "url": "assets/js/2.cce4d815.js",
    "revision": "06f36231dd8e9b93689e3f9cff4334ef"
  },
  {
    "url": "assets/js/20.40426815.js",
    "revision": "57ab07aeb860a55bf1e6c8706ca303cd"
  },
  {
    "url": "assets/js/21.15951507.js",
    "revision": "ed45d09fdf3fd0f3c43692b2e5ea43d3"
  },
  {
    "url": "assets/js/22.2a2c090f.js",
    "revision": "c6111ec4418b0374ca6b4b2734c6b733"
  },
  {
    "url": "assets/js/23.3da624b2.js",
    "revision": "133824abb955c2bdaa30a5f30d63759c"
  },
  {
    "url": "assets/js/24.67a151f2.js",
    "revision": "3e5e4beedcdfffd9f1c2c7230e7f250e"
  },
  {
    "url": "assets/js/25.628742c2.js",
    "revision": "5b68492503d986e644ada9055e9b3233"
  },
  {
    "url": "assets/js/26.bea17075.js",
    "revision": "24392b9339eb494a1f2ad2b75e4a5117"
  },
  {
    "url": "assets/js/27.3b241405.js",
    "revision": "51351bef4ed7a9b8e6768e6ea797f3d6"
  },
  {
    "url": "assets/js/28.1751cd36.js",
    "revision": "2737de7a668d212d7b54d120e1e118a2"
  },
  {
    "url": "assets/js/29.34993fef.js",
    "revision": "119d089b11e5362db310ff405bd77a00"
  },
  {
    "url": "assets/js/3.825eb3f1.js",
    "revision": "ec5a366dded642b21634ba0d1fd298fb"
  },
  {
    "url": "assets/js/30.ea1d3f09.js",
    "revision": "7887c8dbf470723e3a36b2649d08da6e"
  },
  {
    "url": "assets/js/4.36fa6e70.js",
    "revision": "4aed4f4d374fe18d1ce766e01f7b0d66"
  },
  {
    "url": "assets/js/5.c6a44ba9.js",
    "revision": "d82bccde8ca1f485c6e60affcae8e2c9"
  },
  {
    "url": "assets/js/6.df22f0a3.js",
    "revision": "4ddde2a6cb6fa66e956478e39a0c6ed3"
  },
  {
    "url": "assets/js/7.09437b12.js",
    "revision": "326842c2893f0eceb5d6ca37d7aeae5a"
  },
  {
    "url": "assets/js/8.9baffa4b.js",
    "revision": "ba28551571b3d115fbe3d64f1d359610"
  },
  {
    "url": "assets/js/9.ba9848fb.js",
    "revision": "d932e84c4647493e062ccc52746742cc"
  },
  {
    "url": "assets/js/app.c5b2ab6a.js",
    "revision": "03b2e894a13c81eedc6cc5bfc3af7f10"
  },
  {
    "url": "bar/four.html",
    "revision": "5ce073ed5e1f411159c37fdcc2b3d1d9"
  },
  {
    "url": "bar/index.html",
    "revision": "2d8767e6b1262146d1e13d538db681a0"
  },
  {
    "url": "bar/three.html",
    "revision": "75e429d4a19444ac4758d4ca95366f12"
  },
  {
    "url": "contact.html",
    "revision": "b4bb3ed986577aa47b82df306cf46fdc"
  },
  {
    "url": "countup.html",
    "revision": "770ab193543de3a4f24eff60259998ac"
  },
  {
    "url": "css/css-a.html",
    "revision": "df7b3afb9fc67b63d48611033209ca35"
  },
  {
    "url": "css/css-b.html",
    "revision": "c032c5450041d0b5262bae9620ce61c5"
  },
  {
    "url": "css/css-c.html",
    "revision": "178b0b38a2be06929a07e9babf0d9bc9"
  },
  {
    "url": "css/index.html",
    "revision": "2a2fc5c0e76f41a006e256dc3e2ae673"
  },
  {
    "url": "foo/index.html",
    "revision": "450a535c3158ca835c6df1276d133847"
  },
  {
    "url": "foo/one.html",
    "revision": "bd4c18a91b36855311be7299f1725c6c"
  },
  {
    "url": "foo/two.html",
    "revision": "e862885671c8998598fff97913205b3c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "423d6e7770606f10d495adc830b4e3a7"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f34c1dfff33a1e27c27dc1d77ced0f63"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "a9a30fdc0c0af580832c53a1aef1b48b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "82374c4f02150c749cf44011e7554b8f"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "63b2029872be141d0eca4f753d631cb5"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "2d5741347418e80ca39bcafa1e63960e"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b43a17c25e7e4600b1955259b3391680"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "00835ecd87a2f89e0234557dc9635bea"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2404f5c69512b64316c79d07f9dde3ac"
  },
  {
    "url": "quanxue.html",
    "revision": "accea1a9bb7c17e0104583ebe8b2e6c0"
  },
  {
    "url": "shi.html",
    "revision": "624a5d82ffc44b4a0ebe1f65cf75b424"
  }
].concat(self.__precacheManifest || []);
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
