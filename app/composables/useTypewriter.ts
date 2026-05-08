/**
 * Typewriter — affiche un texte lettre par lettre, puis l'efface,
 * et boucle sur le tableau de textes fourni.
 *
 * Usage :
 *   const text = useTypewriter(['Texte 1', 'Texte 2'])
 *   <span>{{ text }}<span class="typewriter-cursor" /></span>
 */
export function useTypewriter(texts: string[], speed = 75, pauseMs = 2200) {
  const displayed = ref('')

  if (import.meta.server) {
    displayed.value = texts[0] ?? ''
    return displayed
  }

  onMounted(() => {
    let textIndex = 0
    let charIndex = 0
    let erasing = false
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      const current = texts[textIndex]

      if (!erasing) {
        // Frappe
        if (charIndex < current.length) {
          displayed.value = current.slice(0, ++charIndex)
          timer = setTimeout(tick, speed)
        } else {
          // Pause avant effacement
          timer = setTimeout(() => {
            erasing = true
            tick()
          }, pauseMs)
        }
      } else {
        // Effacement (deux fois plus rapide)
        if (displayed.value.length > 0) {
          displayed.value = displayed.value.slice(0, -1)
          timer = setTimeout(tick, speed / 2)
        } else {
          erasing = false
          charIndex = 0
          textIndex = (textIndex + 1) % texts.length
          // Petite pause avant de retaper
          timer = setTimeout(tick, 400)
        }
      }
    }

    tick()
    onUnmounted(() => clearTimeout(timer))
  })

  return displayed
}
