import heroicons from './heroicons.js'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'loyalku',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    middleware: ['auth'],
  },

  chakra: {
    config: {
      autoImport: true,
    },
    icons: {
      extend: {
        ...heroicons,
      },
    },
  },

  auth: {
    plugins: ['~/plugins/auth.js'],
    strategies: {
      moka: {
        clientId:
          '7a49f9caa9daeeec623470b760a9d200caa065248be4a0be2722476f558bcb2f',
        clientSecret:
          '77fe02e532b7c4c035de97f83ab320a5725f6ce97d336244228f8366dc89fbb5',
        redirectUri: 'http://localhost:3000/auth/callback',
        logoutRedirectUri: '/',
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/auth/callback',
      home: '/dashboard',
    },
  },
  dayjs: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    defaultTimeZone: 'Asia/Jakarta',
    plugins: [
      'utc',
      'timezone',
      'duration',
      'relativeTime', // import 'dayjs/plugin/relativeTime'
    ],
  },
}
