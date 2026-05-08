export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@netlify/nuxt'],
  css: ['~/assets/css/main.css'],
  // nitro.output supprimé : @netlify/nuxt + preset netlify gèrent les chemins
  // (publicDir = dist/, serverDir = .netlify/functions-internal/)
  app: {
    head: {
      style: [{ type: 'text/css', children: 'html { scroll-behavior: smooth; }' }],
    },
  },
})