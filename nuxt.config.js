export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'login-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: '', },
      { name: 'format-detection', content: 'telephone=no', },
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', }, ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    // '/api/': {
    //   target: process.env.SERVER_URL || 'http://localhost:5000/api',
    //   pathRewrite: {
    //     '^/api/': '/api/',
    //   },
    // },
    '/api/': 'http://localhost:5000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  srcDir: 'src/view/',
}
