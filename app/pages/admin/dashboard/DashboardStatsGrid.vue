<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 mb-8">
    <div data-testid="stat-card" class="bg-card border border-card-border rounded-xl px-6 py-5 flex flex-col gap-1">
      <span class="text-[2.2rem] font-bold text-indigo-500">{{ stats.total }}</span>
      <span class="text-[0.78rem] uppercase tracking-[0.05em] text-slate-500">Visites totales</span>
    </div>
    <div data-testid="stat-card" class="bg-card border border-card-border rounded-xl px-6 py-5 flex flex-col gap-1">
      <span class="text-[2.2rem] font-bold text-indigo-500">{{ stats.uniqueCountries }}</span>
      <span class="text-[0.78rem] uppercase tracking-[0.05em] text-slate-500">Pays uniques</span>
    </div>
    <div data-testid="stat-card" class="bg-card border border-card-border rounded-xl px-6 py-5 flex flex-col gap-1">
      <span class="text-[2.2rem] font-bold text-indigo-500">{{ stats.uniquePaths }}</span>
      <span class="text-[0.78rem] uppercase tracking-[0.05em] text-slate-500">Pages uniques</span>
    </div>
    <div data-testid="stat-card" class="bg-card border border-card-border rounded-xl px-6 py-5 flex flex-col gap-1">
      <span class="text-[2.2rem] font-bold text-indigo-500">{{ logsCount }}</span>
      <span class="text-[0.78rem] uppercase tracking-[0.05em] text-slate-500">Dernières entrées</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stats: { total: number; uniqueCountries: number; uniquePaths: number }
  logsCount: number
}>()
</script>
