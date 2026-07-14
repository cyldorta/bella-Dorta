<script setup lang="ts">
import { brand, navLinks } from '@/constants/site'
import { images } from '@/constants/images'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import AppIcon from '@/components/ui/AppIcon.vue'

const waUrl = buildWhatsAppUrl()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__glow" aria-hidden="true" />
    <div class="container container--wide footer__inner">
      <div class="footer__brand">
        <img :src="images.logoVerticalDark" :alt="`${brand.name} — ${brand.tagline}`" class="footer__logo" />
        <p class="footer__tagline">
          {{ brand.role }} · Especialista em tratamento de microvasos com cuidado humanizado e resultados naturais.
        </p>
      </div>

      <nav class="footer__col" aria-label="Navegação do rodapé">
        <h3 class="footer__title">Navegação</h3>
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="footer__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="footer__col">
        <h3 class="footer__title">Contato</h3>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="footer__link footer__link--icon">
          <AppIcon name="whatsapp" :size="18" /> WhatsApp
        </a>
        <a :href="brand.instagram" target="_blank" rel="noopener noreferrer" class="footer__link footer__link--icon">
          <AppIcon name="instagram" :size="18" /> {{ brand.instagramHandle }}
        </a>
        <a :href="`mailto:${brand.email}`" class="footer__link footer__link--icon">
          <AppIcon name="mail" :size="18" /> {{ brand.email }}
        </a>
        <p class="footer__note">{{ brand.address }}</p>
      </div>
    </div>

    <div class="container container--wide footer__bottom">
      <span>© {{ year }} {{ brand.name }}. Todos os direitos reservados.</span>
      <span class="footer__credit">Tratamento para Microvasos</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background: var(--c-charcoal);
  color: rgba(244, 236, 228, 0.78);
  padding-top: clamp(4rem, 8vw, 7rem);
  overflow: hidden;
}

.footer__glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: 60vh;
  background: radial-gradient(circle, rgba(194, 160, 107, 0.18), transparent 65%);
  pointer-events: none;
}

.footer__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3.5rem;

  @include up($bp-md) {
    grid-template-columns: 1.6fr 1fr 1.2fr;
    gap: 2rem;
  }
}

.footer__logo {
  width: clamp(180px, 22vw, 230px);
  mix-blend-mode: screen;
  margin-bottom: 1.4rem;
  margin-left: -0.5rem;
}

.footer__tagline {
  max-width: 38ch;
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(244, 236, 228, 0.6);
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.footer__title {
  font-family: var(--font-body);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--c-gold-soft);
  margin-bottom: 0.3rem;
}

.footer__link {
  font-size: 0.95rem;
  color: rgba(244, 236, 228, 0.72);
  transition: color 0.4s var(--ease-out), transform 0.4s var(--ease-out);
  width: fit-content;
  &:hover {
    color: var(--c-cream);
    transform: translateX(4px);
  }
}

.footer__link--icon {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.footer__note {
  font-size: 0.85rem;
  color: rgba(244, 236, 228, 0.45);
  margin-top: 0.4rem;
}

.footer__bottom {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.5rem;
  justify-content: space-between;
  padding-block: 1.8rem;
  border-top: 1px solid rgba(244, 236, 228, 0.1);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: rgba(244, 236, 228, 0.45);
}

.footer__credit {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.72rem;
}
</style>
