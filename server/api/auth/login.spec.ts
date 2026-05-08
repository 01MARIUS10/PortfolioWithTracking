import { describe, it, expect, vi, beforeEach } from 'vitest'

// Partial mock of h3: intercept setCookie (imported directly by login.post.ts)
vi.mock('h3', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>
  return { ...actual, setCookie: vi.fn() }
})

// Mock the SERVICE adapter (login uses service role, not client)
vi.mock('../../libs/supabase/service.adapter', () => ({
  getSupabaseService: vi.fn(),
}))

import { setCookie } from 'h3'
import { getSupabaseService } from '../../libs/supabase/service.adapter'
import handler from './login.post'

const mockReadBody = vi.fn()
vi.stubGlobal('readBody', mockReadBody)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockEvent = () => ({} as any)

describe('POST /api/auth/login', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retourne { ok: true } et pose les cookies de session', async () => {
    mockReadBody.mockResolvedValue({ email: 'admin@test.com', password: 'secret' })
    const supabaseMock = {
      auth: {
        signInWithPassword: vi.fn().mockResolvedValue({
          error: null,
          data: { session: { access_token: 'at123', refresh_token: 'rt456', expires_in: 3600 } },
        }),
      },
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(getSupabaseService).mockReturnValue(supabaseMock as any)

    const result = await handler(mockEvent())

    expect(result).toEqual({ ok: true })
    expect(vi.mocked(setCookie)).toHaveBeenCalledWith(
      expect.anything(), 'sb-access-token', 'at123', expect.objectContaining({ httpOnly: true })
    )
    expect(vi.mocked(setCookie)).toHaveBeenCalledWith(
      expect.anything(), 'sb-refresh-token', 'rt456', expect.objectContaining({ httpOnly: true })
    )
  })

  it('lance une erreur 401 avec des identifiants invalides', async () => {
    mockReadBody.mockResolvedValue({ email: 'admin@test.com', password: 'wrong' })
    const supabaseMock = {
      auth: { signInWithPassword: vi.fn().mockResolvedValue({ error: { message: 'Invalid' }, data: null }) },
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(getSupabaseService).mockReturnValue(supabaseMock as any)

    await expect(handler(mockEvent())).rejects.toMatchObject({ statusCode: 401 })
  })

  it('lance une erreur 400 si email ou mot de passe manquant', async () => {
    mockReadBody.mockResolvedValue({ email: '', password: '' })
    await expect(handler(mockEvent())).rejects.toMatchObject({ statusCode: 400 })
  })
})
