/**
 * Active section — retourne l'id de la section visible à l'écran.
 * Utilisé par la navbar pour mettre en évidence le lien courant.
 *
 * rootMargin: '-40% 0px -55% 0px' → ne se déclenche que quand
 * la section occupe la zone centrale de l'écran (40% → 55%).
 */
export function useActiveSection(ids: string[]) {
  const active = ref(ids[0])

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })

    onUnmounted(() => io.disconnect())
  })

  return active
}
