import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DashboardLogsTable from './DashboardLogsTable.vue'

const logs = [
  {
    id: '1', ip: '1.2.3.4', country: 'FR', city: 'Paris',
    path: '/', method: 'GET', user_agent: 'Mozilla/5.0 Chrome',
    referer: null, created_at: new Date().toISOString(),
  },
]

describe('DashboardLogsTable', () => {
  it('monte sans erreur', async () => {
    const wrapper = await mountSuspended(DashboardLogsTable, { props: { logs } })
    expect(wrapper).toBeTruthy()
  })

  it('affiche un tableau HTML', async () => {
    const wrapper = await mountSuspended(DashboardLogsTable, { props: { logs } })
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('affiche les 8 colonnes d\'en-tête', async () => {
    const wrapper = await mountSuspended(DashboardLogsTable, { props: { logs } })
    expect(wrapper.findAll('th').length).toBe(8)
  })

  it('affiche une ligne de log', async () => {
    const wrapper = await mountSuspended(DashboardLogsTable, { props: { logs } })
    expect(wrapper.findAll('tbody tr').length).toBe(1)
  })
})
