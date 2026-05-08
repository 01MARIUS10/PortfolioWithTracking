import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DashboardStatsGrid from './DashboardStatsGrid.vue'

const stats = { total: 42, uniqueCountries: 5, uniquePaths: 3 }

describe('DashboardStatsGrid', () => {
  it('monte sans erreur', async () => {
    const wrapper = await mountSuspended(DashboardStatsGrid, {
      props: { stats, logsCount: 1 },
    })
    expect(wrapper).toBeTruthy()
  })

  it('affiche les 4 cartes de statistiques (data-testid="stat-card")', async () => {
    const wrapper = await mountSuspended(DashboardStatsGrid, {
      props: { stats, logsCount: 1 },
    })
    expect(wrapper.findAll('[data-testid="stat-card"]').length).toBe(4)
  })

  it('affiche le total des visites', async () => {
    const wrapper = await mountSuspended(DashboardStatsGrid, {
      props: { stats, logsCount: 1 },
    })
    expect(wrapper.text()).toContain('42')
  })
})
