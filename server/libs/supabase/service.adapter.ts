// Port-adapter for Supabase service-role client.
// Uses @supabase/supabase-js directly — no client-side SDK involved.
// Server routes MUST import from here — never instantiate createClient() directly elsewhere.
// Decouples server routes from the external library, enabling painless migration.

import { createClient } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

/** Returns a Supabase client with service-role privileges (bypasses RLS). */
export function getSupabaseService(_event: H3Event) {
  const url = process.env.SUPABASE_URL
  const key = process.env.NUXT_SUPABASE_SECRET_KEY

  if (!url || !key) {
    throw new Error('SUPABASE_URL and NUXT_SUPABASE_SECRET_KEY env vars are required.')
  }

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
