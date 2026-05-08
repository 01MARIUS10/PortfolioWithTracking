<template>
  <section
    id="about"
    ref="el"
    :class="['py-20 px-6 bg-surface-alt transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[1100px] mx-auto">
      <h2 class="section-title">À propos</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 items-start">
        <p
          v-for="(p, i) in about.paragraphs"
          :key="i"
          class="text-slate-400 text-[1.02rem] leading-loose"
          v-html="p.html"
        />
      </div>
      <!-- Languages -->
      <div class="flex gap-4 mt-10 flex-wrap">
        <div v-for="lang in about.languages" :key="lang.flag" class="bg-card border border-card-border rounded-xl px-5 py-3 flex gap-3 items-center">
          <span class="text-lg">{{ lang.flag }}</span>
          <div>
            <p class="text-slate-200 text-sm font-semibold">{{ lang.name }}</p>
            <p class="text-slate-500 text-xs">{{ lang.level }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from './data/portfolio.data'

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
