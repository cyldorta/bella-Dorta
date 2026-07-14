import { onMounted, onBeforeUnmount } from 'vue'
import Lenis from 'lenis'

/**
 * Premium inertia scrolling via Lenis. Disabled when the user prefers
 * reduced motion. Exposes nothing — it simply manages its own lifecycle.
 */
export function useSmoothScroll() {
  let lenis: Lenis | null = null
  let rafId = 0

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    if (reduceMotion) return

    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    const raf = (time: number) => {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    document.addEventListener('click', onAnchorClick)
  })

  const onAnchorClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    lenis?.scrollTo(target as HTMLElement, { offset: -84, duration: 1.4 })
  }

  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId)
    document.removeEventListener('click', onAnchorClick)
    lenis?.destroy()
    lenis = null
  })
}
