<template>
  <header class="flex justify-between items-start mb-8">
    <div>
      <h1 class="text-[2rem] font-bold bg-gradient-to-br from-indigo-500 to-sky-400 bg-clip-text text-transparent">Analytics</h1>
      <p class="text-slate-500 mt-1">Trafic du portfolio en temps réel</p>
    </div>
    <button
      data-testid="btn-logout"
      class="border border-card-border text-slate-400 px-4 py-2 rounded-lg text-sm cursor-pointer transition-all hover:border-indigo-500 hover:text-slate-200 bg-transparent"
      @click="$emit('logout')"
    >Déconnexion</button>
  </header>
</template>

<script setup lang="ts">
defineEmits<{ logout: [] }>()
</script>
