<script setup lang="ts">
import { ref } from 'vue'
import { galleryItems } from '@/constants/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import LightBox from '@/components/ui/LightBox.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const activeIndex = ref<number | null>(null)
const open = (i: number) => (activeIndex.value = i)
const close = () => (activeIndex.value = null)
</script>

<template>
  <section id="galeria" class="gallery">
    <div class="container container--wide">
      <SectionHeading
        eyebrow="Galeria"
        title="Um ambiente <em>acolhedor</em> e profissional"
        subtitle="Conheça um pouco do espaço e da experiência cuidada que preparei para você."
      />

      <div class="gallery__grid">
        <button
          v-for="(item, i) in galleryItems"
          :key="item.src"
          class="gallery__item reveal"
          :class="item.span ? `gallery__item--${item.span}` : ''"
          :data-reveal-delay="(i % 3) + 1"
          @click="open(i)"
          :aria-label="`Ampliar imagem: ${item.alt}`"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" />
          <span class="gallery__overlay">
            <span class="gallery__zoom"><AppIcon name="plus" :size="22" /></span>
          </span>
        </button>
      </div>
    </div>

    <LightBox
      v-if="activeIndex !== null"
      :items="galleryItems"
      :index="activeIndex"
      @close="close"
      @navigate="(i) => (activeIndex = i)"
    />
  </section>
</template>

<style scoped lang="scss">
.gallery {
  padding-block: var(--section-y);
  background: var(--c-cream);
}

.gallery__grid {
  margin-top: clamp(3rem, 6vw, 4.5rem);
  column-count: 2;
  column-gap: 1.2rem;

  @include up($bp-md) {
    column-count: 3;
  }
}

.gallery__item {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1.2rem;
  break-inside: avoid;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  padding: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 1.1s var(--ease-out);
  }

  @media (hover: hover) {
    &:hover img {
      transform: scale(1.08);
    }
    &:hover .gallery__overlay {
      opacity: 1;
    }
    &:hover .gallery__zoom {
      transform: scale(1);
    }
  }
}

.gallery__overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, rgba(196, 166, 162, 0.32), rgba(14, 12, 11, 0.32));
  opacity: 0;
  transition: opacity 0.5s var(--ease-out);
}

.gallery__zoom {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: var(--c-white);
  @include glass-dark(0.18, 6px);
  transform: scale(0.6);
  transition: transform 0.5s var(--ease-out);
}
</style>
