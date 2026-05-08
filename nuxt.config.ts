// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@netlify/nuxt'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      style: [{ type: 'text/css', children: 'html { scroll-behavior: smooth; }' }],
    },
  },
})
