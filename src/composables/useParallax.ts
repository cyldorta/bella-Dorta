import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue'

/**
 * Lightweight pointer-driven parallax. Returns a style ref to bind on an
 * element; movement is subtle and skipped under reduced-motion.
 */
export function useParallax(strength = 14): { style: Ref<string> } {
  const style = ref('translate3d(0,0,0)')

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let frame = 0

  const onMove = (e: MouseEvent) => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength
      const y = (e.clientY / window.innerHeight - 0.5) * strength
      style.value = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`
    })
  }

  onMounted(() => {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return
    window.addEventListener('mousemove', onMove, { passive: true })
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('mousemove', onMove)
  })

  return { style }
}
