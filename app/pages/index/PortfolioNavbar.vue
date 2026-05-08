<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-surface/85 backdrop-blur-md border-b border-card-border max-md:px-5">
    <span class="text-xl font-bold bg-gradient-to-br from-indigo-500 to-sky-400 bg-clip-text text-transparent">
      Razafitsalama Marius.
    </span>
    <ul class="flex gap-8 list-none m-0 p-0 max-md:gap-4">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          :class="[
            link.hidden,
            'nav-link-anim text-sm no-underline transition-colors duration-200',
            active === link.id ? 'text-slate-100 font-medium' : 'text-slate-500 hover:text-slate-200',
          ]"
        >{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { href: '#about',      id: 'about',      label: 'À propos',    hidden: '' },
  { href: '#experience', id: 'experience', label: 'Expérience',  hidden: 'max-sm:hidden' },
  { href: '#projects',   id: 'projects',   label: 'Projets',     hidden: '' },
  { href: '#skills',     id: 'skills',     label: 'Compétences', hidden: '' },
  { href: '#contact',    id: 'contact',    label: 'Contact',     hidden: '' },
]

const active = useActiveSection(links.map((l) => l.id))
</script>
