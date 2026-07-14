<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}>()
</script>

<template>
  <header
    class="heading"
    :class="[`heading--${align ?? 'center'}`, `heading--${theme ?? 'light'}`]"
  >
    <span v-if="eyebrow" class="eyebrow reveal">{{ eyebrow }}</span>
    <h2 class="heading__title reveal" data-reveal-delay="1" v-html="title" />
    <p v-if="subtitle" class="heading__subtitle reveal" data-reveal-delay="2">
      {{ subtitle }}
    </p>
  </header>
</template>

<style scoped lang="scss">
.heading {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 720px;
}

.heading--center {
  align-items: center;
  text-align: center;
  margin-inline: auto;
}

.heading__title {
  font-size: fluid(34, 60);
  letter-spacing: -0.02em;

  :deep(em) {
    font-style: italic;
    color: var(--c-rose-deep);
  }
}

.heading__subtitle {
  font-size: fluid(15, 18);
  color: var(--c-ink-soft);
  font-weight: 300;
  max-width: 56ch;
}

.heading--dark {
  .heading__title {
    color: var(--c-cream);
  }
  .heading__subtitle {
    color: rgba(244, 236, 228, 0.7);
  }
  .eyebrow {
    color: var(--c-gold-soft);
  }
}
</style>
