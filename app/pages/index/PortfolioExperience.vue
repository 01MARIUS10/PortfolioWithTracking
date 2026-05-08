<template>
  <section
    id="experience"
    ref="el"
    :class="['py-20 px-6 transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[1100px] mx-auto">
      <h2 class="section-title">Expériences</h2>
      <div class="relative ml-3">
        <!-- Vertical timeline line -->
        <div class="absolute left-0 top-0 bottom-0 w-px bg-card-border"></div>
        <div
          v-for="(exp, i) in experiences"
          :key="exp.company"
          ref="itemRefs"
          :style="itemStyles[i]"
        >
          <PortfolioExperienceItem :exp="exp" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { experiences } from './data/portfolio.data'
import PortfolioExperienceItem from './PortfolioExperienceItem.vue'

const { el, visible } = useReveal()

const itemRefs = ref<HTMLElement[]>([])
const distances = ref<number[]>(experiences.map(() => 999))

// Désactivé sur mobile (< 768px) — le blur dégrade l'expérience tactile
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

function updateFocus() {
  if (import.meta.server) return
  if (isMobile.value) return
  const center = window.innerHeight / 2
  distances.value = itemRefs.value.map((itemEl) => {
    if (!itemEl) return 999
    const rect = itemEl.getBoundingClientRect()
    return Math.abs(rect.top + rect.height / 2 - center)
  })
}

const itemStyles = computed(() => {
  if (import.meta.server) return experiences.map(() => ({}))
  // Pas d'effet sur mobile
  if (isMobile.value) return experiences.map(() => ({}))
  const viewH = window.innerHeight || 800
  const minD = Math.min(...distances.value)
  return distances.value.map((d) => {
    const relD = d - minD
    const t = Math.min(1, relD / (viewH * 0.28))
    const blur    = +(t * 7).toFixed(2)
    const opacity = +(1 - t * 0.72).toFixed(3)
    const scale   = +(1 - t * 0.04).toFixed(4)
    return {
      filter:     `blur(${blur}px)`,
      opacity,
      transform:  `scale(${scale})`,
      transition: 'filter 0.12s ease, opacity 0.12s ease, transform 0.12s ease',
      'will-change': 'filter, opacity, transform',
    }
  })
})

onMounted(() => {
  checkMobile()
  window.addEventListener('scroll', updateFocus, { passive: true })
  window.addEventListener('resize', checkMobile, { passive: true })
  updateFocus()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateFocus)
  window.removeEventListener('resize', checkMobile)
})
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
