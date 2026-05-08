<template>
  <!-- Single project card -->
  <div
    data-testid="project-card"
    class="group relative overflow-hidden bg-card border border-card-border rounded-xl p-6 flex flex-col
           transition-all duration-300 cursor-pointer
           hover:border-indigo-500/50 hover:bg-indigo-500/[0.03] hover:-translate-y-2
           hover:shadow-[0_8px_32px_-8px_rgba(99,102,241,0.3)]"
  >
    <!-- Glow overlay au hover -->
    <div
      class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
             bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-sky-400/[0.04]"
    />

    <!-- Flèche ↗ — apparaît en haut à droite au hover -->
    <span
      class="absolute top-4 right-4 text-indigo-400 text-sm
             opacity-0 translate-x-1 -translate-y-1
             group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
             transition-all duration-200"
      aria-hidden="true"
    >↗</span>

    <div class="flex justify-between items-center mb-4">
      <span class="text-3xl transition-transform duration-300 group-hover:scale-110">{{ project.icon }}</span>
      <div class="flex gap-3 text-xs">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="text-sky-400 no-underline hover:underline relative z-10">GitHub ↗</a>
        <a v-if="project.demo"   :href="project.demo"   target="_blank" rel="noopener" class="text-sky-400 no-underline hover:underline relative z-10">Demo ↗</a>
      </div>
    </div>
    <h3 class="text-base font-bold mb-2 group-hover:text-white transition-colors duration-200">{{ project.title }}</h3>
    <p class="text-slate-500 text-sm mb-4 flex-1">{{ project.desc }}</p>
    <div class="flex flex-wrap gap-1">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="tag-pill bg-indigo-500/10 text-sky-400 border border-indigo-500/25 rounded px-2 py-0.5 text-[0.72rem]"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from './data/portfolio.data'

defineProps<{ project: Project }>()
</script>
