import { getSupabaseService } from '../libs/supabase/service.adapter'

// Paths to ignore — internal Nuxt assets, API routes, admin area, static files
const IGNORED_PREFIXES = [
  '/_nuxt',
  '/api/',
  '/__nuxt',
  '/@',
  '/favicon',
  '/admin',
]

export default defineEventHandler(async (event) => {
  const path = event.path ?? '/'

  // Skip ignored paths
  if (IGNORED_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return
  }

  // If Supabase env vars are not set (e.g. local dev without .env), skip silently
  if (!process.env.SUPABASE_URL || !process.env.NUXT_SUPABASE_SECRET_KEY) {
    return
  }

  try {
    const supabase = getSupabaseService(event)
    const headers = getRequestHeaders(event)

    // Extract IP — prefer forwarded header (proxies), fallback to socket
    const ip =
      (headers['x-forwarded-for'] ?? '').split(',')[0].trim() ||
      headers['x-real-ip'] ||
      event.node.req.socket?.remoteAddress ||
      'unknown'

    // Extract country — Cloudflare first, then Vercel, then generic header
    const country =
      headers['cf-ipcountry'] ||
      headers['x-vercel-ip-country'] ||
      headers['x-country-code'] ||
      null

    // Extract city — Cloudflare first, then Vercel
    const city =
      headers['cf-ipcity'] ||
      headers['x-vercel-ip-city'] ||
      null

    await supabase.from('visitor_logs').insert({
      ip,
      country,
      city,
      user_agent: headers['user-agent'] || null,
      path,
      method: event.method ?? 'GET',
      referer: headers['referer'] || null,
    })
  } catch (err) {
    // Silent fail — never break page rendering because of logging
    console.error('[traffic-tracker] Failed to log visit:', err)
  }
})
