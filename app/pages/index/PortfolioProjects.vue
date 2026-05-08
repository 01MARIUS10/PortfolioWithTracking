<template>
  <section
    id="projects"
    ref="el"
    :class="['py-20 px-6 bg-surface-alt transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[1100px] mx-auto">
      <h2 class="section-title">Projets</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
        <PortfolioProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from './data/portfolio.data'
import PortfolioProjectCard from './PortfolioProjectCard.vue'

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
