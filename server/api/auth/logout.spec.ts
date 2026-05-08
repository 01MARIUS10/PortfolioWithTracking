import { describe, it, expect, vi, beforeEach } from 'vitest'

// Partial mock of h3: intercept setCookie (imported directly by logout.post.ts)
vi.mock('h3', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>
  return { ...actual, setCookie: vi.fn() }
})

import { setCookie } from 'h3'
import handler from './logout.post'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockEvent = () => ({} as any)

describe('POST /api/auth/logout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retourne { ok: true }', async () => {
    const result = await handler(mockEvent())
    expect(result).toEqual({ ok: true })
  })

  it('efface le cookie sb-access-token (maxAge: 0)', async () => {
    await handler(mockEvent())
    expect(vi.mocked(setCookie)).toHaveBeenCalledWith(
      expect.anything(), 'sb-access-token', '', expect.objectContaining({ maxAge: 0 })
    )
  })

  it('efface le cookie sb-refresh-token (maxAge: 0)', async () => {
    await handler(mockEvent())
    expect(vi.mocked(setCookie)).toHaveBeenCalledWith(
      expect.anything(), 'sb-refresh-token', '', expect.objectContaining({ maxAge: 0 })
    )
  })
})
