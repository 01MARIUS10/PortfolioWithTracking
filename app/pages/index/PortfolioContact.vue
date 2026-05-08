<template>
  <section
    id="contact"
    ref="el"
    :class="['py-24 px-6 bg-surface-alt transition-all duration-700', visible ? 'reveal-visible' : 'reveal-hidden']"
  >
    <div class="max-w-[860px] mx-auto">

      <!-- Header -->
      <div class="text-center mb-14">
        <h2 class="section-title">Contact</h2>
        <p class="text-slate-400 max-w-[480px] mx-auto text-sm leading-relaxed">
          {{ contact.tagline }}
        </p>
      </div>

      <!-- Grid principal -->
      <div class="grid md:grid-cols-2 gap-5 mb-5">

        <!-- Coordonnées directes -->
        <div class="c-card">
          <p class="c-label">Coordonnées</p>
          <ul class="space-y-4">

            <li class="c-row">
              <span class="c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="c-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <p class="c-meta">Téléphone</p>
                <a :href="'tel:' + contact.phone.replace(/\s/g, '')" class="c-value">{{ contact.phone }}</a>
              </div>
            </li>

            <li class="c-row">
              <span class="c-icon-wrap c-icon-wrap--green">
                <svg viewBox="0 0 24 24" fill="currentColor" class="c-icon text-emerald-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.99 2C6.472 2 2 6.473 2 12c0 1.989.518 3.86 1.426 5.487L2 22l4.653-1.39A9.942 9.942 0 0 0 11.99 22C17.507 22 22 17.527 22 12S17.507 2 11.99 2zm0 18c-1.687 0-3.26-.47-4.608-1.283l-.33-.197-3.416 1.02 1.035-3.336-.215-.343A7.946 7.946 0 0 1 4 12c0-4.411 3.588-8 7.99-8C16.403 4 20 7.589 20 12c0 4.41-3.598 8-8.01 8z"/>
                </svg>
              </span>
              <div>
                <p class="c-meta">WhatsApp</p>
                <a
                  :href="'https://wa.me/' + contact.whatsapp.replace(/[\s+]/g, '')"
                  target="_blank" rel="noopener"
                  class="c-value"
                >{{ contact.whatsapp }}</a>
              </div>
            </li>

            <li class="c-row">
              <span class="c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="c-icon">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <div>
                <p class="c-meta">Email</p>
                <a :href="contact.email" class="c-value">{{ contact.email.replace('mailto:', '') }}</a>
              </div>
            </li>

            <li class="c-row">
              <span class="c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="c-icon">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <div>
                <p class="c-meta">Localisation</p>
                <span class="c-value">{{ contact.location }}</span>
              </div>
            </li>

          </ul>
        </div>

        <!-- Réseaux & Profils -->
        <div class="c-card">
          <p class="c-label">Réseaux & Profils</p>
          <ul class="space-y-4">

            <li v-for="link in contact.links" :key="link.href" class="c-row">
              <span class="c-icon-wrap">
                <!-- Globe / Portfolio -->
                <svg v-if="link.label.startsWith('Portfolio')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="c-icon">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <!-- GitHub -->
                <svg v-else-if="link.label.startsWith('GitHub')" viewBox="0 0 24 24" fill="currentColor" class="c-icon">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <!-- GitLab -->
                <svg v-else-if="link.label.startsWith('GitLab')" viewBox="0 0 24 24" fill="currentColor" class="c-icon">
                  <path d="m22.65 14.39-9.8 9.81a.87.87 0 0 1-1.23 0l-9.8-9.81a.87.87 0 0 1-.15-.97l2.39-6.57 2.39-6.57a.44.44 0 0 1 .84 0l2.39 6.57h7.46l2.39-6.57a.44.44 0 0 1 .84 0l2.39 6.57 2.39 6.57a.87.87 0 0 1-.15.97z"/>
                </svg>
                <!-- LinkedIn -->
                <svg v-else-if="link.label.startsWith('LinkedIn')" viewBox="0 0 24 24" fill="currentColor" class="c-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <!-- Fallback -->
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="c-icon">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <div>
                <p class="c-meta">{{ linkMeta(link.label) }}</p>
                <a :href="link.href" target="_blank" rel="noopener" class="c-value">
                  {{ link.href.replace('https://', '') }}
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>

      <!-- Bloc freelance -->
      <div class="c-freelance">
        <div class="flex items-center gap-2.5 mb-0">
          <p class="c-label mb-0">Informations Légales</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="c-freelance-item">
            <p class="c-meta">Numéro d'Identification Fiscale (NIF)</p>
            <p class="c-mono">{{ contact.freelance.nif }}</p>
          </div>
          <div class="c-freelance-item">
            <p class="c-meta">Numéro STAT</p>
            <p class="c-mono">{{ contact.freelance.stat }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex justify-center mt-10">
        <a
          :href="contact.email"
          class="group inline-flex items-center gap-3 px-8 py-3.5 rounded-lg text-sm font-semibold bg-indigo-500 text-white no-underline hover:bg-indigo-400 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          {{ contact.emailLabel }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { contact } from './data/portfolio.data'

const { el, visible } = useReveal()

function linkMeta(label: string): string {
  if (label.startsWith('Portfolio')) return 'Site web'
  if (label.startsWith('GitHub'))    return 'GitHub'
  if (label.startsWith('GitLab'))    return 'GitLab'
  if (label.startsWith('LinkedIn'))  return 'LinkedIn'
  return 'Lien'
}
</script>

<style scoped>
.c-card {
  @apply bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7;
}
.c-label {
  @apply text-[10px] font-bold tracking-[0.15em] text-indigo-400 uppercase mb-5;
}
.c-row {
  @apply flex items-start gap-4;
}
.c-icon-wrap {
  @apply w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-slate-400;
}
.c-icon-wrap--green {
  @apply bg-emerald-500/10 border-emerald-500/20;
}
.c-icon {
  @apply w-3.5 h-3.5;
}
.c-meta {
  @apply text-[11px] text-slate-500 mb-0.5 leading-none;
}
.c-value {
  @apply text-slate-200 text-sm no-underline hover:text-white transition-colors;
}
.c-freelance {
  @apply bg-white/[0.02] border border-white/[0.06] rounded-2xl px-7 py-6;
}
.c-freelance-item {
  @apply bg-white/[0.03] rounded-lg px-4 py-3;
}
.c-mono {
  @apply text-slate-300 text-sm font-mono tracking-wide;
}

.section-title {
  @apply text-3xl font-bold mb-10 inline-block relative;
}
.section-title::after {
  content: '';
  @apply block h-[3px] w-[40%] bg-gradient-to-r from-indigo-500 to-sky-400 mt-1.5 rounded-full;
}
</style>
