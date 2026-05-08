<template>
  <div class="bg-surface text-slate-200 leading-relaxed">
    <PortfolioNavbar />
    <PortfolioHero />
    <PortfolioAbout />
    <PortfolioExperience />
    <PortfolioProjects />
    <PortfolioSkills />
    <PortfolioContact />
    <PortfolioFooter />
  </div>
</template>

<script setup lang="ts">
import PortfolioNavbar     from './index/PortfolioNavbar.vue'
import PortfolioHero       from './index/PortfolioHero.vue'
import PortfolioAbout      from './index/PortfolioAbout.vue'
import PortfolioExperience from './index/PortfolioExperience.vue'
import PortfolioProjects   from './index/PortfolioProjects.vue'
import PortfolioSkills     from './index/PortfolioSkills.vue'
import PortfolioContact    from './index/PortfolioContact.vue'
import PortfolioFooter     from './index/PortfolioFooter.vue'

useSpotlight()
</script>
