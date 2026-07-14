<script setup lang="ts">
import { benefits } from '@/constants/content'
import { images } from '@/constants/images'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
</script>

<template>
  <section id="beneficios" class="benefits">
    <div class="container container--wide">
      <SectionHeading
        align="left"
        eyebrow="Benefícios"
        title="O que muda quando você <em>cuida</em> dos seus microvasos"
      />

      <div class="benefits__bento">
        <figure class="benefits__feature reveal reveal--scale">
          <img :src="images.portraitSyringe" alt="Procedimento minimamente invasivo de microvasos" loading="lazy" width="640" height="800" />
          <figcaption>
            <span>Resultados naturais</span>
            <strong>Leveza que se vê e se sente</strong>
          </figcaption>
        </figure>

        <article
          v-for="(b, i) in benefits"
          :key="b.title"
          class="benefits__card reveal"
          :data-reveal-delay="(i % 3) + 1"
        >
          <span class="benefits__dot"><AppIcon name="leaf" :size="18" /></span>
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.benefits {
  padding-block: var(--section-y);
  background: linear-gradient(180deg, #efe4d8 0%, var(--c-cream) 100%);
}

.benefits__bento {
  margin-top: clamp(3rem, 6vw, 4.5rem);
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @include up($bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include up($bp-lg) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
  }
}

.benefits__feature {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  min-height: 280px;
  box-shadow: var(--shadow-card);
  grid-column: 1 / -1;

  @include up($bp-sm) {
    grid-column: span 2;
    grid-row: span 2;
  }
  @include up($bp-lg) {
    grid-column: span 1;
    grid-row: span 2;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
    transition: transform 1.2s var(--ease-out);
  }
  @media (hover: hover) {
    &:hover img {
      transform: scale(1.06);
    }
  }

  figcaption {
    position: absolute;
    inset: auto 0 0 0;
    padding: 2rem 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: var(--c-white);
    background: linear-gradient(transparent, rgba(14, 12, 11, 0.6));
    span {
      font-size: 0.74rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--c-gold-soft);
    }
    strong {
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
}

.benefits__card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: clamp(1.6rem, 2.6vw, 2rem);
  border-radius: var(--radius);
  background: var(--c-white);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-soft);
  transition: transform 0.6s var(--ease-out), box-shadow 0.6s var(--ease-out);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-card);
    }
  }

  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.92rem;
    color: var(--c-ink-soft);
  }
}

.benefits__dot {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  margin-bottom: 0.4rem;
  color: var(--c-sage-deep);
  background: rgba(169, 174, 156, 0.2);
}
</style>
