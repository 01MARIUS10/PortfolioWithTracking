// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  // Netlify SSR preset — génère .output/server comme Netlify Function
  nitro: {
    preset: process.env.NETLIFY ? 'netlify' : undefined,
  },

  app: {
    head: {
      style: [{ type: 'text/css', children: 'html { scroll-behavior: smooth; }' }],
    },
  },
})
