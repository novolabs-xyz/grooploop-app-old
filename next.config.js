const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
   pwa: {
      dest: 'public',
      runtimeCaching,
   },
   i18n: {
      // These are all the locales you want to support in
      // your application
      // locales: ["es", "en", "ca"],
      locales: ['es'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'es',
   },
   images: {
      domains: ['localhost'],
   },
   pageExtensions: ['tsx', 'ts'],
})
