<template>
  <section
    id="contact"
    ref="el"
    :class="['py-20 px-6 bg-surface-alt transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[1100px] mx-auto text-center">
      <h2 class="section-title">Contact</h2>
      <p class="text-slate-500 mb-8 max-w-[460px] mx-auto">
        {{ contact.tagline }}
      </p>
      <a
        :href="contact.email"
        class="inline-block px-8 py-3.5 rounded-lg text-sm font-semibold bg-indigo-500 text-white no-underline hover:opacity-85 hover:-translate-y-px transition-all"
      >
        {{ contact.emailLabel }}
      </a>
      <div class="flex justify-center gap-8 mt-8 text-sm">
        <a
          v-for="link in contact.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="text-slate-500 hover:text-slate-200 transition-colors no-underline"
        >{{ link.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contact } from './data/portfolio.data'

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
