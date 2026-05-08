<template>
  <div class="overflow-x-auto rounded-xl border border-card-border">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col" class="bg-card px-4 py-3 text-left text-[0.72rem] uppercase tracking-[0.05em] text-slate-500 border-b border-card-border whitespace-nowrap">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in logs" :key="log.id" class="border-b border-surface-alt last:border-0 hover:bg-card transition-colors">
          <td class="px-4 py-2.5 text-slate-300 font-mono text-[0.82rem]">{{ log.ip }}</td>
          <td class="px-4 py-2.5 text-slate-300">{{ log.country ?? '—' }}</td>
          <td class="px-4 py-2.5 text-slate-300">{{ log.city ?? '—' }}</td>
          <td class="px-4 py-2.5 text-sky-400 font-mono text-[0.82rem] max-w-[180px] truncate">{{ log.path }}</td>
          <td class="px-4 py-2.5">
            <span class="bg-[#1e3a5f] text-sky-400 rounded px-1.5 py-0.5 text-[0.72rem] font-mono">{{ log.method }}</span>
          </td>
          <td class="px-4 py-2.5 text-slate-300 max-w-[130px] truncate">{{ shortUa(log.user_agent) }}</td>
          <td class="px-4 py-2.5 text-slate-500 font-mono text-[0.82rem]">{{ log.referer ?? '—' }}</td>
          <td class="px-4 py-2.5 text-[0.78rem] text-slate-600">{{ formatDate(log.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="mt-3 text-[0.78rem] text-slate-700 text-right">Actualisation automatique toutes les 30 s</p>
</template>

<script setup lang="ts">
defineProps<{
  logs: Array<{
    id: string; ip: string; country: string | null; city: string | null
    path: string; method: string; user_agent: string | null
    referer: string | null; created_at: string | null
  }>
}>()

const columns = ['IP', 'Pays', 'Ville', 'Page', 'Méthode', 'Navigateur', 'Referer', 'Date']

function formatDate(iso: string | null) {
  if (!iso) return '—'
  return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(iso))
}

function shortUa(ua: string | null) {
  if (!ua) return '—'
  if (ua.includes('Chrome'))           return 'Chrome'
  if (ua.includes('Firefox'))          return 'Firefox'
  if (ua.includes('Safari'))           return 'Safari'
  if (ua.includes('Edge'))             return 'Edge'
  if (ua.includes('bot') || ua.includes('Bot')) return '🤖 Bot'
  return ua.slice(0, 30)
}
</script>
