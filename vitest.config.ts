import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
      },
    },
    setupFiles: ['./test.setup.ts'],
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', '.nuxt', '.output'],
  },
})
