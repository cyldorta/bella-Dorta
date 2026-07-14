import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Reveals any element carrying the `.reveal` class when it enters the viewport.
 * Mutation-aware so dynamically rendered nodes are observed automatically.
 */
export function useScrollReveal(selector = '.reveal') {
  let observer: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = (el: Element) => el.classList.add('is-visible')

  onMounted(() => {
    const targets = Array.from(document.querySelectorAll(selector))

    if (reduceMotion) {
      targets.forEach(reveal)
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => observer?.observe(el))

    mutationObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches(selector)) observer?.observe(node)
          node.querySelectorAll?.(selector).forEach((el) => observer?.observe(el))
        })
      }
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })
}
