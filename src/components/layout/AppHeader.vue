<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navLinks, brand } from '@/constants/site'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import BaseButton from '@/components/ui/BaseButton.vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const waUrl = buildWhatsAppUrl()

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

const closeMenu = () => (menuOpen.value = false)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="header__inner container container--wide">
      <a href="#top" class="header__brand" :aria-label="`${brand.name} — ${brand.tagline}`" @click="closeMenu">
        <span class="header__brand-name">{{ brand.name }}</span>
        <span class="header__brand-tag">{{ brand.tagline }}</span>
      </a>

      <nav class="header__nav" aria-label="Navegação principal">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="header__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header__cta">
        <BaseButton :href="waUrl" target="_blank" icon="whatsapp" variant="primary">
          Agendar
        </BaseButton>
      </div>

      <button
        class="header__burger"
        :class="{ 'is-open': menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
    </div>

    <Transition name="drawer">
      <div v-if="menuOpen" class="drawer">
        <nav class="drawer__nav" aria-label="Navegação móvel">
          <a
            v-for="(link, i) in navLinks"
            :key="link.href"
            :href="link.href"
            class="drawer__link"
            :style="{ transitionDelay: `${i * 0.05}s` }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
        <BaseButton :href="waUrl" target="_blank" icon="whatsapp" variant="primary" @click="closeMenu">
          Agendar avaliação
        </BaseButton>
      </div>
    </Transition>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 80;
  transition:
    background 0.6s var(--ease-out),
    box-shadow 0.6s var(--ease-out),
    padding 0.6s var(--ease-out);
  padding-block: 0.6rem;
  padding-top: calc(0.6rem + env(safe-area-inset-top));
  padding-inline: env(safe-area-inset-left) env(safe-area-inset-right);
}

.header--scrolled {
  background: rgba(244, 236, 228, 0.7);
  backdrop-filter: blur(18px) saturate(150%);
  box-shadow: 0 1px 0 rgba(42, 34, 31, 0.06), 0 14px 40px -30px rgba(72, 52, 46, 0.5);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 68px;
}

.header__brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 0.28rem;
  transition: opacity 0.4s var(--ease-out);
  &:hover {
    opacity: 0.78;
  }
}

.header__brand-name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
  letter-spacing: 0.01em;
  color: var(--c-ink);
}

.header__brand-tag {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: clamp(0.46rem, 1.1vw, 0.56rem);
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--c-rose-deep);
  padding-left: 0.1rem;
}

.header__nav {
  display: none;
  gap: 2.2rem;
  margin-left: auto;

  @include up($bp-lg) {
    display: flex;
  }
}

.header__link {
  position: relative;
  font-size: 0.86rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--c-ink);
  padding-block: 0.4rem;
  transition: color 0.4s var(--ease-out);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--c-rose-deep);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s var(--ease-out);
  }
  &:hover {
    color: var(--c-rose-deep);
  }
  &:hover::after {
    transform: scaleX(1);
  }
}

.header__cta {
  display: none;
  @include up($bp-lg) {
    display: block;
  }
  :deep(.btn) {
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
  }
}

.header__burger {
  display: grid;
  gap: 5px;
  padding: 8px;
  margin-left: auto;
  @include up($bp-lg) {
    display: none;
  }
  span {
    width: 26px;
    height: 1.6px;
    background: var(--c-ink);
    border-radius: 2px;
    transition: transform 0.4s var(--ease-out), opacity 0.3s var(--ease-out);
  }
  &.is-open span:nth-child(1) {
    transform: translateY(6.6px) rotate(45deg);
  }
  &.is-open span:nth-child(2) {
    opacity: 0;
  }
  &.is-open span:nth-child(3) {
    transform: translateY(-6.6px) rotate(-45deg);
  }
}

.drawer {
  position: absolute;
  inset: 100% 0 auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem var(--gutter) calc(2.6rem + env(safe-area-inset-bottom));
  background: rgba(244, 236, 228, 0.92);
  backdrop-filter: blur(22px);
  box-shadow: var(--shadow-card);
  @include up($bp-lg) {
    display: none;
  }
}

.drawer__nav {
  display: flex;
  flex-direction: column;
}

.drawer__link {
  padding: 0.9rem 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  border-bottom: 1px solid var(--c-line);
  color: var(--c-ink);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
