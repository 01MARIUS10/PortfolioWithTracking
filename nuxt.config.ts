export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@netlify/nuxt'],
  css: ['~/assets/css/main.css'],
  nitro: {
    output: {
      dir: '.output',
      publicDir: '.output/public',
      serverDir: '.output/server',
    },
  },
  app: {
    head: {
      style: [{ type: 'text/css', children: 'html { scroll-behavior: smooth; }' }],
    },
  },
})