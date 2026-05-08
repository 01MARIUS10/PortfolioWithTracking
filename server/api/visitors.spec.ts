import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the service adapter (port-adapter) — no real Supabase call
vi.mock('../libs/supabase/service.adapter', () => ({
  getSupabaseService: vi.fn(),
}))

import { getSupabaseService } from '../libs/supabase/service.adapter'
import handler from './visitors.get'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockEvent = () => ({ context: { user: { id: '123', email: 'admin@test.com' } } } as any)

function buildSupabaseMock(overrides: Record<string, unknown> = {}) {
  const baseLogs = [
    { id: '1', ip: '1.2.3.4', country: 'FR', city: 'Paris', path: '/', method: 'GET', user_agent: 'Chrome', referer: null, created_at: new Date().toISOString() },
    { id: '2', ip: '5.6.7.8', country: 'US', city: 'New York', path: '/admin', method: 'GET', user_agent: 'Firefox', referer: null, created_at: new Date().toISOString() },
  ]
  return {
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockResolvedValue({ data: baseLogs, error: null }),
      ...overrides,
    }),
  }
}

describe('GET /api/visitors', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retourne stats + logs sans erreur', async () => {
    const logs = [
      { id: '1', ip: '1.2.3.4', country: 'FR', city: 'Paris', path: '/', method: 'GET', user_agent: 'Chrome', referer: null, created_at: new Date().toISOString() },
      { id: '2', ip: '5.6.7.8', country: 'US', city: 'New York', path: '/contact', method: 'GET', user_agent: 'Firefox', referer: null, created_at: new Date().toISOString() },
    ]

    const supabaseMock = {
      from: vi.fn().mockImplementation((table: string) => ({
        select: vi.fn().mockReturnThis(),
        order: vi.fn().mockReturnThis(),
        limit: vi.fn().mockResolvedValue({ data: logs, error: null }),
      })),
    }

    // Override per-call returns: logs → count → countries → paths
    let callCount = 0
    supabaseMock.from = vi.fn().mockImplementation(() => {
      callCount++
      if (callCount === 1) {
        return { select: vi.fn().mockReturnThis(), order: vi.fn().mockReturnThis(), limit: vi.fn().mockResolvedValue({ data: logs, error: null }) }
      }
      if (callCount === 2) {
        return { select: vi.fn().mockResolvedValue({ count: 2, data: null, error: null }) }
      }
      if (callCount === 3) {
        return { select: vi.fn().mockResolvedValue({ data: logs.map(l => ({ country: l.country })), error: null }) }
      }
      // paths
      return { select: vi.fn().mockResolvedValue({ data: logs.map(l => ({ path: l.path })), error: null }) }
    })

    vi.mocked(getSupabaseService).mockReturnValue(supabaseMock as ReturnType<typeof getSupabaseService>)

    const result = await handler(mockEvent())

    expect(result).toHaveProperty('logs')
    expect(result).toHaveProperty('stats')
    expect(result.stats).toHaveProperty('total')
    expect(result.stats).toHaveProperty('uniqueCountries')
    expect(result.stats).toHaveProperty('uniquePaths')
    expect(Array.isArray(result.logs)).toBe(true)
  })

  it('lance une erreur 401 si non authentifié', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unauthEvent = { context: {} } as any
    await expect(handler(unauthEvent)).rejects.toMatchObject({ statusCode: 401 })
  })

  it('lance une erreur 500 si Supabase échoue', async () => {
    const supabaseMock = {
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnThis(),
        order: vi.fn().mockReturnThis(),
        limit: vi.fn().mockResolvedValue({ data: null, error: { message: 'DB error' } }),
      }),
    }
    vi.mocked(getSupabaseService).mockReturnValue(supabaseMock as ReturnType<typeof getSupabaseService>)

    await expect(handler(mockEvent())).rejects.toMatchObject({ statusCode: 500 })
  })
})
