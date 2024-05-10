export default defineNuxtConfig({
  devtools: { enabled: false },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  ssr: true,
  css: [
    '~/assets/css/main.css',
    "primevue/resources/themes/lara-light-blue/theme.css"
],
  // image: {
  //   provider: "ipx",
  // },
  hooks: {

  },
  modules: [
    "@formkit/auto-animate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/robots",
    "nuxt-rating",
    "nuxt-icon",
    "nuxt-primevue",
    // "@nuxt/image",
    // "@nuxtjs/cloudinary",
  ],
  devServer: {
     host: '0.0.0.0',
  },
  runtimeConfig: {
    cloudinaryCloudName: process.env.NUXT_CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.NUXT_CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.NUXT_CLOUDINARY_API_SECRET,
  },
  primevue: {
    components: {
      prefix: 'Prime',
      include: '*'   
    }, 
    directives: {
      include: ['Ripple']
    },
    options: {
      ripple: true,
    }
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
    },
    storage: {},
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {} 
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
    },
    pageTransition: {
      name: 'shift'
    },
    layoutTransition: {
      name: 'shift'
    }
  },
});
