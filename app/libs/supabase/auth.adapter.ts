// Port-adapter for backend authentication.
// The frontend NEVER touches Supabase directly — all auth operations go through the backend API.
// The backend sets/clears HttpOnly cookies and validates them via server/middleware/session.ts.

export function useAuthAdapter() {
  return {
    /** Sign in — posts credentials to backend, which sets the session cookie */
    signIn: async (email: string, password: string): Promise<{ error: Error | null }> => {
      try {
        await $fetch('/api/auth/login', { method: 'POST', body: { email, password } })
        return { error: null }
      } catch (e: unknown) {
        const msg = (e as { data?: { message?: string } })?.data?.message ?? 'Identifiants incorrects.'
        return { error: new Error(msg) }
      }
    },

    /** Sign out — asks backend to clear the session cookie */
    signOut: async (): Promise<void> => {
      await $fetch('/api/auth/logout', { method: 'POST' })
    },
  }
}
