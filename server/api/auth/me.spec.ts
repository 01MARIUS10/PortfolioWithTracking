import { describe, it, expect } from 'vitest'
import handler from './me.get'

describe('GET /api/auth/me', () => {
  it('retourne le user si authentifié', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event = { context: { user: { id: '123', email: 'admin@test.com' } } } as any
    const result = await handler(event)
    expect(result).toEqual({ user: { id: '123', email: 'admin@test.com' } })
  })

  it('lance une erreur 401 si non authentifié', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event = { context: {} } as any
    await expect(handler(event)).rejects.toMatchObject({ statusCode: 401 })
  })
})
