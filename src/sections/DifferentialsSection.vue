<script setup lang="ts">
import { differentials } from '@/constants/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import OrbField from '@/components/ui/OrbField.vue'

const orbs = [
  { size: 360, top: '10%', left: '-8%', from: '#e7cfca', to: 'rgba(231,207,202,0)' },
  { size: 280, bottom: '0%', right: '-6%', from: '#cdd2c0', to: 'rgba(205,210,192,0)', delay: 3 },
]
</script>

<template>
  <section id="diferenciais" class="diff">
    <OrbField :orbs="orbs" :opacity="0.6" />
    <div class="container container--wide">
      <SectionHeading
        eyebrow="Por que escolher"
        title="Diferenciais que você <em>sente</em> em cada detalhe"
        subtitle="Uma experiência pensada para o seu conforto, da primeira conversa ao resultado final."
      />

      <div class="diff__grid">
        <article
          v-for="(item, i) in differentials"
          :key="item.title"
          class="diff__card reveal"
          :data-reveal-delay="(i % 3) + 1"
        >
          <span class="diff__icon"><AppIcon :name="item.icon" :size="24" /></span>
          <h3 class="diff__card-title">{{ item.title }}</h3>
          <p class="diff__card-text">{{ item.text }}</p>
          <span class="diff__index">0{{ i + 1 }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.diff {
  position: relative;
  padding-block: var(--section-y);
  background: linear-gradient(180deg, var(--c-cream) 0%, #efe4d8 100%);
  overflow: hidden;
}

.diff__grid {
  position: relative;
  z-index: 2;
  margin-top: clamp(3rem, 6vw, 4.5rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;

  @include up($bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include up($bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.diff__card {
  position: relative;
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: var(--radius);
  overflow: hidden;
  @include glass(0.5, 18px);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.6s var(--ease-out),
    box-shadow 0.6s var(--ease-out),
    background 0.6s var(--ease-out);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196, 166, 162, 0.16), transparent 60%);
    opacity: 0;
    transition: opacity 0.6s var(--ease-out);
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-card);
    }
    &:hover::before {
      opacity: 1;
    }
  }
}

.diff__icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-bottom: 1.4rem;
  color: var(--c-white);
  background: linear-gradient(135deg, var(--c-rose), var(--c-rose-deep));
  box-shadow: 0 12px 26px -12px rgba(169, 129, 124, 0.7);
}

.diff__card-title {
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
}

.diff__card-text {
  position: relative;
  font-size: 0.96rem;
  color: var(--c-ink-soft);
}

.diff__index {
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-style: italic;
  color: var(--c-rose-soft);
  opacity: 0.7;
}
</style>
