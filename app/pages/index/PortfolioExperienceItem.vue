<template>
  <!-- Single experience item in the timeline -->
  <div class="relative pl-8 pb-12 last:pb-0 mb-8">
    <!-- Timeline dot -->
    <div class="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-surface"></div>
    <!-- Header -->
    <div class="flex items-start justify-between gap-4 flex-wrap mb-3">
      <div>
        <h3 class="font-semibold text-slate-100 text-base">{{ exp.role }}</h3>
        <p class="text-sky-400 text-sm mt-0.5">
          {{ exp.company }} · <span class="text-slate-500">{{ exp.location }}</span>
        </p>
      </div>
      <span class="text-xs text-slate-500 bg-card border border-card-border rounded px-2.5 py-1 whitespace-nowrap">
        {{ exp.period }}
      </span>
    </div>
    <!-- Highlights -->
    <ul class="space-y-1.5 mb-3">
      <li v-for="item in exp.highlights" :key="item" class="text-slate-500 text-sm flex gap-2.5 items-start">
        <span class="text-indigo-500 flex-shrink-0 mt-0.5">▸</span>
        {{ item }}
      </li>
    </ul>
    <!-- Tags -->
    <div class="flex flex-wrap gap-1">
      <span v-for="tag in exp.tags" :key="tag" class="bg-indigo-500/10 text-sky-400 border border-indigo-500/25 rounded px-2 py-0.5 text-[0.72rem]">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from './data/portfolio.data'

defineProps<{ exp: Experience }>()
</script>
