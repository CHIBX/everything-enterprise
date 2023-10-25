import { fileURLToPath } from 'node:url'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false,
  router: {
    options: {
      scrollBehaviorType: "smooth",
    }
  },
  alias: {
    'styles': fileURLToPath(new URL('./assets/styles', import.meta.url))
  },
  image: {
    provider: 'ipx',
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/robots"
  ],
  imports: {
    dirs: ['./composables/**', './utils/**']
  },
  routeRules: {},
  nitro: {
    compressPublicAssets: {
      gzip: true
    }
  },
  experimental: {
    componentIslands: true
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'shortcut icon', href: '~/assets/images/favicon.ico', type: "image/x-icon" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0', }
      ],
      noscript: [
        { textContent: 'JavaScript is required to use this page!', tagPosition: 'bodyOpen', tagPriority: 1 }
      ]
    }
  }
})