<script setup lang="ts">
import AppIcon from './AppIcon.vue'

withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost' | 'light'
    href?: string
    icon?: string
    target?: string
  }>(),
  { variant: 'primary' },
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="btn"
    :class="`btn--${variant}`"
  >
    <span class="btn__label"><slot /></span>
    <AppIcon v-if="icon" :name="icon" :size="18" class="btn__icon" />
    <span class="btn__shine" aria-hidden="true" />
  </component>
</template>

<style scoped lang="scss">
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.05rem 1.9rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out),
    background 0.5s var(--ease-out),
    color 0.5s var(--ease-out);
  will-change: transform;
}

.btn__icon {
  transition: transform 0.5s var(--ease-out);
}

.btn:hover {
  transform: translateY(-3px);
}
.btn:active {
  transform: translateY(-1px);
}
.btn:hover .btn__icon {
  transform: translateX(4px);
}

.btn__shine {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(255, 255, 255, 0.45) 50%,
    transparent 100%
  );
  transform: translateX(-120%);
  transition: transform 0.9s var(--ease-out);
}
.btn:hover .btn__shine {
  transform: translateX(120%);
}

.btn--primary {
  background: linear-gradient(135deg, var(--c-rose-deep), var(--c-rose));
  color: var(--c-white);
  box-shadow: var(--shadow-soft), 0 0 0 1px rgba(169, 129, 124, 0.2);
}
.btn--primary:hover {
  box-shadow: var(--shadow-card), 0 0 36px -10px rgba(169, 129, 124, 0.6);
}

.btn--light {
  background: rgba(255, 255, 255, 0.85);
  color: var(--c-ink);
  border: 1px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-soft);
}

.btn--ghost {
  background: transparent;
  color: var(--c-ink);
  border: 1px solid var(--c-line);
}
.btn--ghost:hover {
  border-color: var(--c-rose);
  color: var(--c-rose-deep);
}
</style>
