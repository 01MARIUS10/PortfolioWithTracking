import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DashboardPage from './index.vue'

// Mock useFetch — vi.mock is hoisted, ref must be created inside the factory
vi.mock('#app', async (importOriginal) => {
  const { ref } = await import('vue')
  const mod = await importOriginal<typeof import('#app')>()
  return {
    ...mod,
    useFetch: vi.fn().mockResolvedValue({
      data: ref({
        stats: { total: 42, uniqueCountries: 5, uniquePaths: 3 },
        logs: [
          {
            id: '1', ip: '1.2.3.4', country: 'FR', city: 'Paris',
            path: '/', method: 'GET', user_agent: 'Mozilla/5.0 Chrome',
            referer: null, created_at: new Date().toISOString(),
          },
        ],
      }),
      pending: ref(false),
      error: ref(null),
      refresh: vi.fn(),
    }),
  }
})

describe('Admin — Dashboard (orchestrateur)', () => {
  it('monte sans erreur', async () => {
    const wrapper = await mountSuspended(DashboardPage)
    expect(wrapper).toBeTruthy()
  })

  it('affiche le bouton de déconnexion', async () => {
    const wrapper = await mountSuspended(DashboardPage)
    expect(wrapper.find('[data-testid="btn-logout"]').exists()).toBe(true)
  })

  it('affiche le titre Analytics', async () => {
    const wrapper = await mountSuspended(DashboardPage)
    expect(wrapper.text()).toContain('Analytics')
  })
})
