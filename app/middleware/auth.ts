// Protects /admin/dashboard.
// Server-side: reads event.context.user set by server/middleware/session.ts.
// The session.ts middleware validates the sb-access-token cookie and populates
// event.context.user BEFORE this middleware runs — so no extra API call is needed.

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith('/admin/dashboard')) return

  // Server-side: event.context.user is already populated by session.ts
  if (import.meta.server) {
    const event = useRequestEvent()
    if (!event?.context.user) {
      return navigateTo('/admin/login')
    }
    return
  }

  // Client-side navigation: rely on the page being SSR-validated on each hard reload.
  // Admin pages always use window.location.assign (hard reload), so this path
  // is only reached if navigating within the admin section via NuxtLink.
})
