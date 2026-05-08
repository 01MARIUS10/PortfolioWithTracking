<template>
  <section
    id="skills"
    ref="el"
    :class="['py-20 px-6 transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[1100px] mx-auto">
      <h2 class="section-title">Compétences</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        <div v-for="cat in skills" :key="cat.label" class="bg-card border border-card-border rounded-xl p-5">
          <h4 class="text-xs uppercase tracking-[0.08em] text-indigo-500 mb-3">{{ cat.label }}</h4>
          <div class="flex flex-wrap gap-1">
            <span v-for="s in cat.items" :key="s" class="bg-indigo-500/10 text-sky-400 border border-indigo-500/25 rounded px-2 py-0.5 text-[0.78rem]">
              {{ s }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from './data/portfolio.data'

const { el, visible } = useReveal()
</script>

<style>
.section-title {
  @apply text-3xl font-bold mb-10 inline-block relative;
}
.section-title::after {
  content: '';
  @apply block h-[3px] w-[40%] bg-gradient-to-r from-indigo-500 to-sky-400 mt-1.5 rounded-full;
}
</style>
