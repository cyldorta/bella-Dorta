<script setup lang="ts">
import { images } from '@/constants/images'
import { brand } from '@/constants/site'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import BaseButton from '@/components/ui/BaseButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const waUrl = buildWhatsAppUrl()

const credentials = [
  'Biomédica Esteta pós-graduada',
  'Mais de 5 anos dedicados a microvasos',
  'Especialista em técnicas minimamente invasivas',
]
</script>

<template>
  <section id="sobre" class="about">
    <div class="container container--wide about__inner">
      <div class="about__visual">
        <div class="about__img about__img--main reveal reveal--scale">
          <img :src="images.portraitDesk" :alt="`${brand.name} em seu consultório`" loading="lazy" width="520" height="640" />
        </div>
        <div class="about__img about__img--sub reveal reveal--scale" data-reveal-delay="2">
          <img :src="images.portraitChin" :alt="`Retrato de ${brand.name}`" loading="lazy" width="320" height="400" />
        </div>
        <div class="about__seal reveal" data-reveal-delay="3">
          <img :src="images.logoSealDark" alt="Selo Dra. Izabella Dorta" />
        </div>
      </div>

      <div class="about__content">
        <span class="eyebrow reveal">Sobre a especialista</span>
        <h2 class="about__title reveal" data-reveal-delay="1">
          Cuidado <em>estético</em> dedicado às suas pernas
        </h2>
        <p class="about__lead reveal" data-reveal-delay="2">
          Sou {{ brand.shortName }}, biomédica esteta pós-graduada com mais de cinco anos
          de experiência exclusiva em tratamento de microvasos. Uno ciência, tecnologia e
          sensibilidade para oferecer resultados naturais com total segurança.
        </p>

        <ul class="about__creds reveal" data-reveal-delay="3">
          <li v-for="c in credentials" :key="c">
            <span class="about__check"><AppIcon name="shield" :size="16" /></span>
            {{ c }}
          </li>
        </ul>

        <div class="about__cta reveal" data-reveal-delay="4">
          <BaseButton :href="waUrl" target="_blank" icon="whatsapp">Conversar com a especialista</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  padding-block: var(--section-y);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3.5rem, 8vw, 6rem);
  align-items: center;

  @include up($bp-lg) {
    grid-template-columns: 1fr 1fr;
  }
}

.about__visual {
  position: relative;
  padding-bottom: 3rem;
  padding-right: 2rem;
}

.about__img {
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.about__img--main {
  aspect-ratio: 4 / 4.6;
  border-radius: 200px 200px var(--radius-lg) var(--radius-lg);
}

.about__img--sub {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48%;
  aspect-ratio: 3 / 3.6;
  border: 6px solid var(--c-cream);
}

.about__seal {
  position: absolute;
  top: -1.4rem;
  left: -1.4rem;
  width: clamp(78px, 9vw, 104px);
  height: clamp(78px, 9vw, 104px);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  animation: spin 26s linear infinite;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.about__title {
  font-size: fluid(30, 50);
  margin-block: 1.2rem 1.4rem;
  em {
    font-style: italic;
    color: var(--c-rose-deep);
  }
}

.about__lead {
  font-size: fluid(15.5, 18);
  color: var(--c-ink-soft);
  max-width: 52ch;
}

.about__creds {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    font-size: 1rem;
    color: var(--c-ink);
  }
}

.about__check {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 10px;
  color: var(--c-rose-deep);
  background: rgba(196, 166, 162, 0.16);
}
</style>
