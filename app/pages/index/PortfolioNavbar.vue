<template>
  <nav class="sticky top-0 z-50 bg-surface/85 backdrop-blur-md border-b border-card-border">

    <div class="flex items-center justify-between px-6 md:px-10 py-4">
      <span class="text-xl font-bold bg-gradient-to-br from-indigo-500 to-sky-400 bg-clip-text text-transparent shrink-0">
        Razafitsalama Marius.
      </span>

      <!-- Desktop links -->
      <ul class="hidden md:flex gap-8 list-none m-0 p-0">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :class="[
              'nav-link-anim text-sm no-underline transition-colors duration-200',
              active === link.id ? 'text-slate-100 font-medium' : 'text-slate-500 hover:text-slate-200',
            ]"
          >{{ link.label }}</a>
        </li>
      </ul>

      <!-- Hamburger button (mobile) -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span :class="['hb-line', isOpen && 'translate-y-[7px] rotate-45']" />
        <span :class="['hb-line', isOpen && 'opacity-0 scale-x-0']" />
        <span :class="['hb-line', isOpen && '-translate-y-[7px] -rotate-45']" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: isOpen ? '320px' : '0px' }"
    >
      <ul class="flex flex-col list-none m-0 p-0 px-6 pb-4">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            @click="isOpen = false"
            :class="[
              'flex items-center py-3.5 text-sm no-underline border-b border-white/[0.06] last:border-0 transition-colors duration-200',
              active === link.id ? 'text-slate-100 font-medium' : 'text-slate-400 hover:text-slate-200',
            ]"
          >{{ link.label }}</a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { href: '#about',      id: 'about',      label: 'À propos' },
  { href: '#experience', id: 'experience', label: 'Expérience' },
  { href: '#projects',   id: 'projects',   label: 'Projets' },
  { href: '#skills',     id: 'skills',     label: 'Compétences' },
  { href: '#contact',    id: 'contact',    label: 'Contact' },
]

const active = useActiveSection(links.map((l) => l.id))
</script>

<style scoped>
.hb-line {
  @apply block w-5 h-px bg-slate-300 rounded-full transition-all duration-300 origin-center;
}
</style>
