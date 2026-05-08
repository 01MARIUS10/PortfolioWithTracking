// Server middleware — runs on every request BEFORE route handlers and Nuxt middleware.
// Reads the `sb-access-token` cookie, validates it with Supabase, and attaches the
// authenticated user to `event.context.user` for downstream use.
// This is the single source of truth for auth — no client-side Supabase SDK involved.

import { getCookie } from 'h3'
import { getSupabaseService } from '../libs/supabase/service.adapter'

// Skip static assets — no auth validation needed for these
const SKIP_PREFIXES = ['/_nuxt', '/__nuxt', '/@', '/favicon', '/public']

export default defineEventHandler(async (event) => {
  if (SKIP_PREFIXES.some((p) => event.path.startsWith(p))) return

  const token = getCookie(event, 'sb-access-token')
  if (!token) return // No cookie → unauthenticated (event.context.user stays undefined)

  try {
    const supabase = getSupabaseService(event)
    const { data, error } = await supabase.auth.getUser(token)
    if (!error && data.user) {
      event.context.user = data.user
    }
  } catch {
    // Token validation failure → treat as unauthenticated, do not throw
  }
})
