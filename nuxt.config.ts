import { fileURLToPath } from 'node:url';
export default defineNuxtConfig({
  devtools: {enabled: false},
  router: {
    options: {
      scrollBehaviorType: "smooth",
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  alias: {
    'styles': fileURLToPath(new URL('./assets/styles', import.meta.url))
  },
  image: {
    provider: 'ipx',
  },
  modules: [
    '@vueuse/nuxt',
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-rating"
  ],
  routeRules: {
      "/": { prerender: true },
      "/contact": { prerender: true },
      "/gallery": { prerender: true },
      "/services": { prerender: true },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0', }
      ],
    }
  }
})