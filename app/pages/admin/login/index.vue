<template>
  <div class="min-h-screen bg-surface flex items-center justify-center px-6">
    <div class="bg-card border border-card-border rounded-2xl px-8 py-10 w-full max-w-[420px] text-center">
      <div class="text-[2.5rem] mb-2">⚡</div>
      <h1 class="text-[1.8rem] font-bold text-slate-200 mb-1">Dashboard</h1>
      <p class="text-slate-500 text-sm mb-8">Accès administrateur</p>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5 text-left">
        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-[0.82rem] text-slate-400 uppercase tracking-[0.05em]">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="admin@example.com"
            autocomplete="email"
            required
            class="bg-surface border border-card-border rounded-lg px-4 py-3 text-slate-200 text-[0.95rem] outline-none transition-colors focus:border-indigo-500"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="password" class="text-[0.82rem] text-slate-400 uppercase tracking-[0.05em]">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            autocomplete="current-password"
            required
            class="bg-surface border border-card-border rounded-lg px-4 py-3 text-slate-200 text-[0.95rem] outline-none transition-colors focus:border-indigo-500"
          />
        </div>

        <p v-if="errorMsg" class="text-red-400 text-sm text-center">{{ errorMsg }}</p>

        <button
          type="submit"
          data-testid="btn-login"
          :disabled="loading"
          class="bg-indigo-500 text-white rounded-lg py-3.5 text-[0.95rem] font-semibold cursor-pointer mt-2 transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Connexion…' : 'Se connecter' }}
        </button>
      </form>

      <NuxtLink to="/" data-testid="back-link" class="inline-block mt-6 text-sm text-slate-500 no-underline hover:text-slate-200 transition-colors">
        ← Retour au portfolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthAdapter } from '~/libs/supabase/auth.adapter'

// Redirect to dashboard if already authenticated (checked server-side via session cookie)
definePageMeta({
  middleware: [
    () => {
      if (import.meta.server) {
        const event = useRequestEvent()
        if (event?.context.user) {
          return navigateTo('/admin/dashboard')
        }
      }
    },
  ],
})

const { signIn } = useAuthAdapter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  loading.value = true
  errorMsg.value = ''

  const { error } = await signIn(email.value, password.value)

  if (error) {
    loading.value = false
    errorMsg.value = error.message
    return
  }

  // Hard reload — forces SSR to read the new auth cookie set by the backend
  window.location.assign('/admin/dashboard')
}
</script>
