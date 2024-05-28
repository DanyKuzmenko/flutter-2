'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94a84e6396ff352590791b2ddfb3bfff",
"assets/AssetManifest.bin.json": "04b4d3341c876d7562b477d7ae8b274a",
"assets/AssetManifest.json": "3b2d0f5a5ae7d0dd0705f259d31d203e",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/icons/app-icon.png": "7537c965e46beb98a8a08a367f225303",
"assets/assets/icons/card.svg": "1c9e368ca1522592b2f5ac32751a738f",
"assets/assets/icons/logo.svg": "19395d28aabefb14bbc9e9af2b3a88ee",
"assets/assets/icons/phone-password.svg": "f084e7e141b5955efa2346c3212aec4f",
"assets/assets/IconsFont.ttf": "59e767cbaa8b54a398a32867271432db",
"assets/assets/images/banners/payDark.png": "1bbc712eb391c98b6b9b8f5727ba5afa",
"assets/assets/images/banners/payLight.png": "9b4af2b91d22f4d6b3e324c0f0dffefa",
"assets/assets/images/banners/shopDark.png": "72b7103c1ec584fe4ca4c6293f7d21e5",
"assets/assets/images/banners/shopLight.png": "0ff7c138a9baa3ae9d50501329a25344",
"assets/assets/images/banners/themeDark.png": "a4f84c1b75da54d4eceecf8d103725a2",
"assets/assets/images/banners/themeLight.png": "73e17425906bce6c7ec25b145f23246b",
"assets/assets/images/card_source/alfa.png": "36aa25ef069e441f37a443f1a02a1310",
"assets/assets/images/empty/apartments_empty.png": "c18dba01665fac2d9e2c53756483e067",
"assets/assets/images/empty/chat_empty.png": "b4bd0e834d28eb968351ddf58000f4f2",
"assets/assets/images/empty/meter_empty.png": "6844b9a56b45fddd1cedeebc2ae413e5",
"assets/assets/images/empty/order_empty.png": "3f99cbde9fb07df125bd5323b3b2b480",
"assets/assets/images/empty/payments_empty.png": "2f852e967fe12682248f27539a97f77d",
"assets/assets/images/empty/task_empty.png": "ad86ad17d904661d3188d827c52f6d63",
"assets/assets/images/key.png": "eea0e63bf3200ac217019bf8fa0944ca",
"assets/assets/images/login/alf.svg": "99d8b93369e45623507e2ef87ad4fe92",
"assets/assets/images/login/gos.png": "af298928fee926275788476b558174f4",
"assets/assets/images/login/sber.svg": "fcc2a00f74aef93379822c98d21bbba6",
"assets/assets/images/login/tinkoff.svg": "a868158d941d3c5f6f52a3ba5fff053e",
"assets/assets/images/notification/orders.png": "0e4819542d3b62b079333f5f27a6ab87",
"assets/assets/images/notification/support.png": "85b6792b6d69c5fbdc4e1a0c358e3e15",
"assets/assets/images/phone-receipt.png": "dd85920f9d3dd120a1983ad561d7dc96",
"assets/assets/images/promo-codes.png": "e3d8f0016991033ec26dc1bdb9bbc563",
"assets/assets/images/qr.png": "af289502fb3fc7f44b23eef8057b5442",
"assets/assets/images/save_cards.png": "9fadd5a00bcd7ce2ccabcf784dc90c88",
"assets/assets/images/success.png": "0886c593a0bcf1f698ea56af68f15c66",
"assets/assets/images/system/dark_settings_background.png": "121bc42695975865087e08671de0b8b8",
"assets/assets/images/system/light_settings_background.png": "7a3b876c7a562786419860ef6ecbebcd",
"assets/FontManifest.json": "a748358d0de793a77d49c0b69199f68f",
"assets/fonts/MaterialIcons-Regular.otf": "fb919257efa6c2bb1991ffaa5642f6ce",
"assets/NOTICES": "1af159703cbdcdfaae5de4c07a80f048",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "36997cdc3a1b964b15ed28e536183f35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f4a745eb628cd3a3eca8b003184823c6",
"/": "f4a745eb628cd3a3eca8b003184823c6",
"main.dart.js": "5513abfce4736405f02ae2c558581e6b",
"manifest.json": "dcea4c2fee4adfca3c1d3777ae9388c4",
"version.json": "518017c2a6ef66f57b3f871d2ccfef4c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
