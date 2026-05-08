<template>
  <div class="w-full px-6 py-8 text-slate-200 min-h-screen bg-surface">
    <DashboardHeader @logout="logout" />

    <div v-if="pending" class="py-12 text-center text-slate-500">Chargement…</div>
    <div v-else-if="error" class="text-red-400 p-4">Erreur : {{ error.message }}</div>

    <template v-else>
      <DashboardStatsGrid :stats="data!.stats" :logs-count="data!.logs.length" />
      <DashboardLogsTable :logs="data!.logs" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAuthAdapter } from '~/libs/supabase/auth.adapter'
import DashboardHeader    from './DashboardHeader.vue'
import DashboardStatsGrid from './DashboardStatsGrid.vue'
import DashboardLogsTable from './DashboardLogsTable.vue'

definePageMeta({ middleware: 'auth' })

const { signOut } = useAuthAdapter()
const { data, pending, error, refresh } = await useFetch('/api/visitors')

onMounted(() => {
  const interval = setInterval(() => refresh(), 30_000)
  onUnmounted(() => clearInterval(interval))
})

async function logout() {
  await signOut()
  window.location.assign('/admin/login')
}
</script>
