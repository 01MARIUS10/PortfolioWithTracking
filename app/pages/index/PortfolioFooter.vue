<template>
  <footer class="text-center py-8 text-xs text-slate-500 border-t border-card-border">
    <p>© {{ year }} Marius — Fullstack Confirmé · Madagascar · Mayotte · Canada</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
