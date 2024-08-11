// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 700],
      Ubuntu: [400, 700],
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  build: {
    transpile: ['sass-embedded']
  },
})
