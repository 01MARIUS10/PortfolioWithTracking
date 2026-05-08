<template>
  <section
    id="hero"
    class="flex items-center justify-between min-h-[calc(100vh-64px)] px-10 py-16 max-w-6xl mx-auto gap-12 max-md:flex-col-reverse max-md:text-center max-md:px-5 max-md:py-8"
  >
    <div class="flex-1">
      <!-- Chaque enfant entre avec un délai croissant (hero-animate + animation-delay) -->
      <p
        class="hero-animate text-indigo-500 text-sm tracking-[0.1em] uppercase"
        style="animation-delay: 0.1s"
      >{{ hero.greeting }}</p>

      <h1
        class="hero-animate text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-none my-1"
        style="animation-delay: 0.2s"
      >{{ hero.name }}</h1>

      <!-- Typewriter sur le titre métier -->
      <h2
        class="hero-animate text-[clamp(1.1rem,2.5vw,1.6rem)] text-sky-400 font-medium mb-1"
        style="animation-delay: 0.3s"
        :aria-label="hero.typewriterPhrases[0]"
      >
        {{ typewriterText }}<span class="typewriter-cursor" aria-hidden="true" />
      </h2>

      <p
        class="hero-animate text-slate-500 text-sm mb-6"
        style="animation-delay: 0.4s"
      >{{ hero.stack }}</p>

      <p
        class="hero-animate text-slate-400 max-w-[500px] mb-8 text-[0.97rem] max-md:mx-auto"
        style="animation-delay: 0.5s"
      >{{ hero.bio }}</p>

      <div
        class="hero-animate flex gap-4 flex-wrap max-md:justify-center"
        style="animation-delay: 0.65s"
      >
        <a
          v-for="cta in hero.cta"
          :key="cta.href"
          :href="cta.href"
          :class="[
            'btn-spring inline-block px-7 py-3 rounded-lg text-sm font-semibold no-underline',
            cta.primary
              ? 'bg-indigo-500 text-white'
              : 'border-2 border-card-border text-slate-200 hover:border-indigo-500/50 transition-colors',
          ]"
        >{{ cta.label }}</a>
      </div>
    </div>

    <!-- Avatar — caricature portrait card -->
    <div
      class="hero-animate flex-shrink-0"
      style="animation-delay: 0.15s"
    >
      <div class="avatar-card">
        <img
          :src="hero.avatar.src"
          :alt="hero.avatar.alt"
          class="avatar-caricature"
          draggable="false"
        />
        <!-- Inner edge highlight -->
        <div class="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/20" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { hero } from './data/portfolio.data'

const typewriterText = useTypewriter(hero.typewriterPhrases)
</script>
