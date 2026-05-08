import { setCookie } from 'h3'

export default defineEventHandler((event) => {
  // Clear both auth cookies — session is terminated server-side
  const clear = { httpOnly: true, path: '/', maxAge: 0 }
  setCookie(event, 'sb-access-token', '', clear)
  setCookie(event, 'sb-refresh-token', '', clear)
  return { ok: true }
})
