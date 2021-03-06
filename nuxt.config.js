import heroicons from './heroicons.js'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Loyalku',
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
    //https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
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
    // https://github.com/nuxt-community/proxy-module#readme
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'https://api.mokapos.com',
      pathRewrite: { '^/api': '' },
      ws: false,
    },
  },

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
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
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
