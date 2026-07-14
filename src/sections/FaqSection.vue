<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { faqItems } from '@/constants/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const openIndex = ref<number | null>(0)
const toggle = (i: number) => (openIndex.value = openIndex.value === i ? null : i)

/**
 * Reveal is tracked reactively (instead of the global useScrollReveal, which
 * mutates classList imperatively). Because this list re-renders on every
 * toggle, Vue rewrites each item's className and would wipe an imperatively
 * added `is-visible` class, making the item vanish. Owning the class in Vue
 * keeps it stable across re-renders.
 */
const listEl = ref<HTMLElement | null>(null)
const revealed = reactive(new Set<number>())
let observer: IntersectionObserver | null = null

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const items = Array.from(listEl.value?.children ?? [])

  if (reduceMotion) {
    items.forEach((_, i) => revealed.add(i))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const i = items.indexOf(entry.target)
        if (i !== -1) revealed.add(i)
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  items.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section id="faq" class="faq">
    <div class="container faq__inner">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Tudo que você precisa saber <em>antes</em> de começar"
      />

      <ul class="faq__list" ref="listEl">
        <li
          v-for="(item, i) in faqItems"
          :key="item.question"
          class="faq__item reveal"
          :class="{ 'is-open': openIndex === i, 'is-visible': revealed.has(i) }"
          :data-reveal-delay="(i % 3) + 1"
        >
          <button
            class="faq__head"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="faq__q">{{ item.question }}</span>
            <span class="faq__icon"><AppIcon name="plus" :size="20" /></span>
          </button>
          <div class="faq__panel">
            <div class="faq__panel-inner">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  padding-block: var(--section-y);
  background: var(--c-cream);
}

.faq__inner {
  max-width: 820px;
}

.faq__list {
  list-style: none;
  padding: 0;
  margin: clamp(2.5rem, 5vw, 3.5rem) 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq__item {
  border-radius: var(--radius);
  background: var(--c-white);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: box-shadow 0.5s var(--ease-out);

  &.is-open {
    box-shadow: var(--shadow-card);
  }
}

.faq__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  text-align: left;
  padding: clamp(1.2rem, 2.4vw, 1.6rem) clamp(1.4rem, 3vw, 2rem);
}

.faq__q {
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.4vw, 1.4rem);
  color: var(--c-ink);
}

.faq__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 50%;
  color: var(--c-rose-deep);
  background: rgba(196, 166, 162, 0.16);
  transition: transform 0.5s var(--ease-out), background 0.5s var(--ease-out);
}

.is-open .faq__icon {
  transform: rotate(135deg);
  background: var(--c-rose-deep);
  color: var(--c-white);
}

.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s var(--ease-out);
}

.is-open .faq__panel {
  grid-template-rows: 1fr;
}

.faq__panel-inner {
  overflow: hidden;
  p {
    padding: 0 clamp(1.4rem, 3vw, 2rem) clamp(1.4rem, 2.6vw, 1.8rem);
    font-size: 1rem;
    color: var(--c-ink-soft);
    max-width: 64ch;
  }
}
</style>
