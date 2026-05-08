import { getSupabaseService } from '../../libs/supabase/service.adapter'
import { setCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<{ email: string; password: string }>(event)

  if (!email || !password) {
    throw createError({ statusCode: 400, message: 'Email et mot de passe requis.' })
  }

  // Service role client: signs in and returns session tokens without needing an existing cookie
  const supabase = getSupabaseService(event)
  const { error, data } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // Never expose the raw Supabase error message to the client
    throw createError({ statusCode: 401, message: 'Email ou mot de passe incorrect.' })
  }

  const { access_token, refresh_token, expires_in } = data.session

  const base = {
    httpOnly: true,
    // Secure only in production — localhost (HTTP) won't send Secure cookies in some browsers
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
  }

  // sb-access-token: validated by session.ts middleware on every request
  setCookie(event, 'sb-access-token', access_token, { ...base, maxAge: expires_in })
  // sb-refresh-token: kept 30 days for future token refresh
  setCookie(event, 'sb-refresh-token', refresh_token, { ...base, maxAge: 60 * 60 * 24 * 30 })

  return { ok: true }
})
