<script setup lang="ts">
import { testimonials } from '@/constants/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StarRating from '@/components/ui/StarRating.vue'
import OrbField from '@/components/ui/OrbField.vue'

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const orbs = [
  { size: 320, top: '6%', right: '-7%', from: '#e7cfca', to: 'rgba(231,207,202,0)' },
  { size: 240, bottom: '4%', left: '-6%', from: '#cdd2c0', to: 'rgba(205,210,192,0)', delay: 2 },
]
</script>

<template>
  <section id="depoimentos" class="testi">
    <OrbField :orbs="orbs" :opacity="0.6" />
    <div class="container container--wide">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Histórias de quem <em>recuperou</em> a confiança"
        subtitle="A satisfação das minhas pacientes é o que move cada atendimento."
      />

      <div class="testi__grid">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="testi__card reveal"
          :data-reveal-delay="(i % 3) + 1"
        >
          <span class="testi__quote" aria-hidden="true">”</span>
          <StarRating :rating="t.rating" />
          <blockquote class="testi__text">{{ t.text }}</blockquote>
          <figcaption class="testi__person">
            <span class="testi__avatar">{{ initials(t.name) }}</span>
            <span class="testi__meta">
              <strong>{{ t.name }}</strong>
              <small>{{ t.detail }}</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.testi {
  position: relative;
  padding-block: var(--section-y);
  background: linear-gradient(180deg, var(--c-cream), #efe4d8);
  overflow: hidden;
}

.testi__grid {
  position: relative;
  z-index: 2;
  margin-top: clamp(3rem, 6vw, 4.5rem);
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @include up($bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include up($bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testi__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: var(--radius);
  overflow: hidden;
  @include glass(0.55, 20px);
  box-shadow: var(--shadow-card);
  transition: transform 0.6s var(--ease-out);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
    }
  }
}

.testi__quote {
  position: absolute;
  top: -0.6rem;
  right: 1.4rem;
  font-family: var(--font-display);
  font-size: 6rem;
  line-height: 1;
  color: var(--c-rose-soft);
  opacity: 0.5;
}

.testi__text {
  position: relative;
  font-family: var(--font-display);
  font-size: 1.22rem;
  font-style: italic;
  line-height: 1.5;
  color: var(--c-ink);
}

.testi__person {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: auto;
  padding-top: 0.4rem;
}

.testi__avatar {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 50%;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--c-white);
  background: linear-gradient(135deg, var(--c-rose), var(--c-rose-deep));
}

.testi__meta {
  display: flex;
  flex-direction: column;
  line-height: 1.35;
  strong {
    font-weight: 500;
    font-size: 0.98rem;
  }
  small {
    font-size: 0.8rem;
    color: var(--c-ink-soft);
  }
}
</style>
