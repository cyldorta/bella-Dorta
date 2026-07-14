<script setup lang="ts">
import { images } from '@/constants/images'
import { brand } from '@/constants/site'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import { useParallax } from '@/composables/useParallax'
import BaseButton from '@/components/ui/BaseButton.vue'
import OrbField from '@/components/ui/OrbField.vue'
import StarRating from '@/components/ui/StarRating.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const waUrl = buildWhatsAppUrl()
const { style: parallax } = useParallax(18)

const orbs = [
  { size: 420, top: '-8%', right: '-6%', from: '#e7cfca', to: 'rgba(231,207,202,0)', delay: 0 },
  { size: 300, bottom: '4%', left: '-7%', from: '#cdd2c0', to: 'rgba(205,210,192,0)', delay: 2 },
  { size: 180, top: '38%', left: '46%', from: '#f0ddc2', to: 'rgba(240,221,194,0)', delay: 1 },
]
</script>

<template>
  <section id="top" class="hero">
    <OrbField :orbs="orbs" :opacity="0.85" />
    <div class="hero__grain" aria-hidden="true" />

    <div class="container container--wide hero__inner">
      <div class="hero__content">
        <span class="eyebrow reveal is-visible">{{ brand.role }} · Pós-graduada</span>

        <h1 class="hero__title reveal is-visible" data-reveal-delay="1">
          Pernas mais leves,<br />
          <em>livres de microvasos</em>
        </h1>

        <p class="hero__subtitle reveal is-visible" data-reveal-delay="2">
          Tratamentos minimamente invasivos, com tecnologia, segurança e um cuidado
          verdadeiramente humano. Resultados naturais para a sua autoestima.
        </p>

        <div class="hero__actions reveal is-visible" data-reveal-delay="3">
          <BaseButton :href="waUrl" target="_blank" icon="whatsapp" variant="primary">
            Agendar avaliação
          </BaseButton>
          <BaseButton href="#sobre" icon="arrow" variant="ghost">Conhecer o método</BaseButton>
        </div>

        <dl class="hero__stats reveal is-visible" data-reveal-delay="4">
          <div class="hero__stat">
            <dt>+5</dt>
            <dd>anos de experiência</dd>
          </div>
          <div class="hero__stat">
            <dt>+1.000</dt>
            <dd>pernas cuidadas</dd>
          </div>
          <div class="hero__stat">
            <dt>100%</dt>
            <dd>atendimento humanizado</dd>
          </div>
        </dl>
      </div>

      <div class="hero__visual">
        <div class="hero__portrait" :style="{ transform: parallax }">
          <img
            :src="images.portraitSyringe2"
            :alt="`${brand.name}, biomédica esteta especializada em microvasos`"
            width="560"
            height="720"
            fetchpriority="high"
          />
          <div class="hero__sheen" aria-hidden="true" />
        </div>

        <div class="hero__badge hero__badge--rating glass-card">
          <StarRating :rating="5" />
          <span>Pacientes que recomendam</span>
        </div>

        <div class="hero__badge hero__badge--safe glass-card">
          <span class="hero__badge-icon"><AppIcon name="shield" :size="20" /></span>
          <div>
            <strong>Segurança</strong>
            <span>Protocolos certificados</span>
          </div>
        </div>
      </div>
    </div>

    <a href="#sobre" class="hero__scroll" aria-label="Rolar para baixo">
      <span class="hero__scroll-line" /><span>scroll</span>
    </a>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: clamp(5.5rem, 12vw, 10rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
  background:
    radial-gradient(120% 90% at 80% 0%, #f7efe6 0%, var(--c-cream) 42%, #efe2d4 100%);
  overflow: hidden;
}

.hero__grain {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(rgba(42, 34, 31, 0.04) 1px, transparent 1px);
  background-size: 4px 4px;
  pointer-events: none;
  mix-blend-mode: multiply;
}

.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: clamp(2.25rem, 6vw, 5rem);

  @include up($bp-lg) {
    grid-template-columns: 1.05fr 0.95fr;
  }
}

.hero__title {
  font-size: fluid(44, 92);
  letter-spacing: -0.03em;
  margin-block: 1.5rem 1.6rem;

  em {
    font-style: italic;
    color: var(--c-rose-deep);
  }
}

.hero__subtitle {
  max-width: 46ch;
  font-size: fluid(16, 19);
  color: var(--c-ink-soft);
  font-weight: 300;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.5rem, 5vw, 3rem);
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
  padding-top: 2rem;
  border-top: 1px solid var(--c-line);
}

.hero__stat {
  dt {
    font-family: var(--font-display);
    font-size: fluid(28, 40);
    color: var(--c-ink);
    line-height: 1;
  }
  dd {
    margin-top: 0.4rem;
    font-size: 0.82rem;
    letter-spacing: 0.04em;
    color: var(--c-ink-soft);
    max-width: 14ch;
  }
}

// ── Visual ──
.hero__visual {
  position: relative;
  justify-self: center;
  // No celular a foto vem primeiro e um pouco menor, para caber na 1ª tela
  width: min(84%, 340px);
  order: -1;
  margin-bottom: 0.5rem;

  @include up($bp-lg) {
    width: min(100%, 520px);
    order: 0;
    margin-bottom: 0;
  }
}

.hero__portrait {
  position: relative;
  border-radius: 46% 46% 44% 44% / 40% 40% 50% 50%;
  overflow: hidden;
  box-shadow: var(--shadow-card), 0 0 0 1px rgba(255, 255, 255, 0.6);
  aspect-ratio: 5 / 6.2;
  transition: transform 0.4s var(--ease-out);
  animation: morph 16s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 26%;
  }
}

@keyframes morph {
  0%,
  100% {
    border-radius: 46% 46% 44% 44% / 40% 40% 50% 50%;
  }
  50% {
    border-radius: 44% 48% 46% 42% / 46% 42% 48% 44%;
  }
}

.hero__sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.28), transparent 38%);
  mix-blend-mode: screen;
}

.glass-card {
  position: absolute;
  z-index: 3;
  @include glass(0.55, 20px);
  border-radius: 18px;
  box-shadow: var(--shadow-card);
}

.hero__badge--rating {
  top: 7%;
  left: -6%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.95rem 1.15rem;
  span {
    font-size: 0.74rem;
    letter-spacing: 0.03em;
    color: var(--c-ink-soft);
  }
  @include down($bp-sm) {
    left: 0;
  }
}

.hero__badge--safe {
  bottom: 8%;
  right: -5%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.15rem;

  .hero__badge-icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--c-rose), var(--c-rose-deep));
    color: var(--c-white);
  }
  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
  }
  strong {
    font-weight: 600;
    font-size: 0.92rem;
  }
  span {
    font-size: 0.74rem;
    color: var(--c-ink-soft);
  }
  @include down($bp-sm) {
    right: 0;
  }
}

.hero__scroll {
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--c-ink-soft);
  z-index: 2;

  @include up($bp-lg) {
    display: flex;
  }
}

.hero__scroll-line {
  width: 1px;
  height: 46px;
  background: linear-gradient(var(--c-rose-deep), transparent);
  animation: scrolldrop 2.2s ease-in-out infinite;
  transform-origin: top;
}

@keyframes scrolldrop {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  40% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(1) translateY(8px);
    opacity: 0;
  }
}
</style>
