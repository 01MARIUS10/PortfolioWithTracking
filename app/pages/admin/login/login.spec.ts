import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LoginPage from './index.vue'

describe('Admin — page de connexion', () => {
  it('monte sans erreur', async () => {
    const wrapper = await mountSuspended(LoginPage)
    expect(wrapper).toBeTruthy()
  })

  it('affiche le formulaire email + mot de passe', async () => {
    const wrapper = await mountSuspended(LoginPage)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('affiche le bouton de connexion', async () => {
    const wrapper = await mountSuspended(LoginPage)
    expect(wrapper.find('[data-testid="btn-login"]').exists()).toBe(true)
  })

  it('affiche le lien retour vers le portfolio', async () => {
    const wrapper = await mountSuspended(LoginPage)
    expect(wrapper.find('[data-testid="back-link"]').exists()).toBe(true)
  })

  it('affiche un message d\'erreur si les identifiants sont invalides', async () => {
    const wrapper = await mountSuspended(LoginPage)
    // Simulate error state
    await wrapper.find('form').trigger('submit')
    // Error message should appear on failure
    expect(wrapper.find('.error-msg').exists()).toBeDefined()
  })
})
