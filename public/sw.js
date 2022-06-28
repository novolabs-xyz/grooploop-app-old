if (!self.define) {
   let e,
      s = {}
   const n = (n, t) => (
      (n = new URL(n + '.js', t).href),
      s[n] ||
         new Promise((s) => {
            if ('document' in self) {
               const e = document.createElement('script')
               ;(e.src = n), (e.onload = s), document.head.appendChild(e)
            } else (e = n), importScripts(n), s()
         }).then(() => {
            let e = s[n]
            if (!e) throw new Error(`Module ${n} didn’t register its module`)
            return e
         })
   )
   self.define = (t, i) => {
      const a =
         e ||
         ('document' in self ? document.currentScript.src : '') ||
         location.href
      if (s[a]) return
      let c = {}
      const o = (e) => n(e, a),
         r = { module: { uri: a }, exports: c, require: o }
      s[a] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (i(...e), c))
   }
}
define(['./workbox-5afaf374'], function (e) {
   'use strict'
   importScripts(),
      self.skipWaiting(),
      e.clientsClaim(),
      e.precacheAndRoute(
         [
            {
               url: '/_next/static/chunks/101-3d9182a0c7b4af4f.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/249-18519653cb9af85f.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/framework-5f4595e5518b5600.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/main-a93d3397ff4e9b92.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/_app-fa085acae245c1e5.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/_error-1995526792b513b2.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/index-7db9bf7e3342ab93.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/signin-c8a7a284e924380d.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/signup-8f98839a81bd557c.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/pages/user/profile-066895fdd1dfdbcc.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/chunks/webpack-2e51481b1d484a05.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/css/02f82ea72e578a50.css',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/eJE7TZPf6H7lPU2FHS9o1/_buildManifest.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/eJE7TZPf6H7lPU2FHS9o1/_middlewareManifest.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/_next/static/eJE7TZPf6H7lPU2FHS9o1/_ssgManifest.js',
               revision: 'eJE7TZPf6H7lPU2FHS9o1',
            },
            {
               url: '/favicon.ico',
               revision: '21b739d43fcb9bbb83d8541fe4fe88fa',
            },
            {
               url: '/icons/icon-72x72.png',
               revision: 'f2ffc41b3482888f3ae614e0dd2f6980',
            },
            {
               url: '/manifest.json',
               revision: '8d09c648ff9342cc998d762a2023082e',
            },
            {
               url: '/vercel.svg',
               revision: '26bf2d0adaf1028a4d4c6ee77005e819',
            },
         ],
         { ignoreURLParametersMatching: [] }
      ),
      e.cleanupOutdatedCaches(),
      e.registerRoute(
         '/',
         new e.NetworkFirst({
            cacheName: 'start-url',
            plugins: [
               {
                  cacheWillUpdate: async ({
                     request: e,
                     response: s,
                     event: n,
                     state: t,
                  }) =>
                     s && 'opaqueredirect' === s.type
                        ? new Response(s.body, {
                             status: 200,
                             statusText: 'OK',
                             headers: s.headers,
                          })
                        : s,
               },
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
         new e.CacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
               new e.ExpirationPlugin({
                  maxEntries: 4,
                  maxAgeSeconds: 31536e3,
               }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
         new e.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'static-font-assets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'static-image-assets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\/_next\/image\?url=.+$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'next-image',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:mp3|wav|ogg)$/i,
         new e.CacheFirst({
            cacheName: 'static-audio-assets',
            plugins: [
               new e.RangeRequestsPlugin(),
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:mp4)$/i,
         new e.CacheFirst({
            cacheName: 'static-video-assets',
            plugins: [
               new e.RangeRequestsPlugin(),
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:js)$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'static-js-assets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:css|less)$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'static-style-assets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\/_next\/data\/.+\/.+\.json$/i,
         new e.StaleWhileRevalidate({
            cacheName: 'next-data',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         /\.(?:json|xml|csv)$/i,
         new e.NetworkFirst({
            cacheName: 'static-data-assets',
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         ({ url: e }) => {
            if (!(self.origin === e.origin)) return !1
            const s = e.pathname
            return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
         },
         new e.NetworkFirst({
            cacheName: 'apis',
            networkTimeoutSeconds: 10,
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         ({ url: e }) => {
            if (!(self.origin === e.origin)) return !1
            return !e.pathname.startsWith('/api/')
         },
         new e.NetworkFirst({
            cacheName: 'others',
            networkTimeoutSeconds: 10,
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
         }),
         'GET'
      ),
      e.registerRoute(
         ({ url: e }) => !(self.origin === e.origin),
         new e.NetworkFirst({
            cacheName: 'cross-origin',
            networkTimeoutSeconds: 10,
            plugins: [
               new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
            ],
         }),
         'GET'
      )
})
