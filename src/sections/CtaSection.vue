<script setup lang="ts">
import { images } from '@/constants/images'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import BaseButton from '@/components/ui/BaseButton.vue'

const waUrl = buildWhatsAppUrl()
</script>

<template>
  <section class="cta">
    <div class="container container--wide">
      <div class="cta__panel reveal reveal--scale">
        <img :src="images.portraitSmile" alt="" aria-hidden="true" class="cta__bg" loading="lazy" />
        <div class="cta__overlay" aria-hidden="true" />
        <div class="cta__glow" aria-hidden="true" />

        <div class="cta__content">
          <span class="eyebrow cta__eyebrow">Sua avaliação personalizada</span>
          <h2 class="cta__title">
            Dê o primeiro passo para <em>pernas mais leves</em> e uma autoestima renovada
          </h2>
          <p class="cta__text">
            Agende agora a sua avaliação pelo WhatsApp. Vou entender o seu caso com calma e
            desenhar o melhor caminho para os seus resultados.
          </p>
          <div class="cta__actions">
            <BaseButton :href="waUrl" target="_blank" icon="whatsapp" variant="primary">
              Agendar pelo WhatsApp
            </BaseButton>
            <BaseButton href="#faq" variant="light">Ver dúvidas frequentes</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta {
  padding-block: clamp(3rem, 7vw, 6rem);
  background: var(--c-cream);
}

.cta__panel {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  padding: clamp(3rem, 8vw, 6.5rem) clamp(1.6rem, 6vw, 5rem);
  box-shadow: var(--shadow-card);
  isolation: isolate;
}

.cta__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 24%;
  z-index: -3;
  transform: scale(1.05);
}

.cta__overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(120deg, rgba(14, 12, 11, 0.86) 0%, rgba(42, 34, 31, 0.6) 55%, rgba(169, 129, 124, 0.4) 100%);
}

.cta__glow {
  position: absolute;
  bottom: -30%;
  right: -10%;
  width: 50vw;
  height: 50vw;
  z-index: -1;
  background: radial-gradient(circle, rgba(216, 190, 147, 0.32), transparent 62%);
  pointer-events: none;
}

.cta__content {
  position: relative;
  max-width: 660px;
  color: var(--c-cream);
}

.cta__eyebrow {
  color: var(--c-gold-soft);
}

.cta__title {
  font-size: fluid(32, 60);
  margin-block: 1.2rem 1.3rem;
  color: var(--c-white);
  em {
    font-style: italic;
    color: var(--c-gold-soft);
  }
}

.cta__text {
  font-size: fluid(15.5, 18.5);
  color: rgba(244, 236, 228, 0.82);
  max-width: 52ch;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;
}
</style>
