// Returns the currently authenticated user from the server-side session context.
// event.context.user is populated by server/middleware/session.ts on each request.

export default defineEventHandler(async (event) => {
  const user = event.context.user
  if (!user) {
    throw createError({ statusCode: 401, message: 'Non authentifié.' })
  }
  return { user }
})
