// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  srcDir: 'src',
  image: {
    dir: './public',
  },

  theme: 'dark',

  alias: {
    assets: path.resolve(__dirname, './src/assets'),
  },

  googleFonts: {
    families: {
      'Yellowtail': true,
      'Space Grotesk': true
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", '@nuxtjs/google-fonts', 'nuxt-icon']
})