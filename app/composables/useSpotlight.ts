/**
 * Spotlight cursor — tache lumineuse radiale qui suit la souris.
 * Met à jour les variables CSS --sx / --sy sur <html>.
 * Le rendu est fait en CSS pur dans assets/css/main.css (body::before).
 */
export function useSpotlight() {
  if (import.meta.server) return

  onMounted(() => {
    const update = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--sx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--sy', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', update, { passive: true })
    onUnmounted(() => window.removeEventListener('mousemove', update))
  })
}
