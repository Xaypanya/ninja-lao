// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      title: 'Ninja Lao',
      meta: [
        {name: "description", content: "Ninja Lao, where innovation meets style! We are your go-to destination for all things trendy, functional, and fun."}
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        {
          rel: 'icon', href: '/images/ninjalaologo.png'
        }
      ]
    }
  },
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
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY
  }
})
