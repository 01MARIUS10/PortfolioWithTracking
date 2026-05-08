import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from './index.vue'

describe('Portfolio — page d\'accueil', () => {
  it('monte sans erreur', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper).toBeTruthy()
  })

  it('affiche le nom dans le hero', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.text()).toContain('Marius')
  })

  it('affiche les sections principales', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.find('#projects').exists()).toBe(true)
    expect(wrapper.find('#skills').exists()).toBe(true)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('affiche au moins un projet', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.findAll('[data-testid="project-card"]').length).toBeGreaterThan(0)
  })
})
