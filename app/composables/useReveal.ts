/**
 * Scroll reveal — anime l'entrée d'un élément dans le viewport.
 *
 * Usage :
 *   const { el, visible } = useReveal()
 *   <section ref="el" :class="visible ? 'reveal-visible' : 'reveal-hidden'">
 *
 * Les classes CSS sont définies dans assets/css/main.css.
 * Fallback automatique si IntersectionObserver n'est pas disponible
 * (environnements de test, navigateurs anciens).
 */
export function useReveal(threshold = 0.1) {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)

  onMounted(() => {
    // Fallback pour les environnements sans IntersectionObserver (happy-dom)
    if (typeof IntersectionObserver === 'undefined') {
      visible.value = true
      return
    }

    if (!el.value) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el.value)

    onUnmounted(() => io.disconnect())
  })

  return { el, visible }
}
