<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue'
import type { GalleryItem } from '@/constants/content'
import AppIcon from './AppIcon.vue'

const props = defineProps<{ items: GalleryItem[]; index: number }>()
const emit = defineEmits<{ close: []; navigate: [index: number] }>()

const current = computed(() => props.items[props.index])

const go = (dir: number) => {
  const next = (props.index + dir + props.items.length) % props.items.length
  emit('navigate', next)
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') go(1)
  if (e.key === 'ArrowLeft') go(-1)
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div class="lb" role="dialog" aria-modal="true" aria-label="Galeria ampliada" @click.self="emit('close')">
      <button class="lb__close" aria-label="Fechar" @click="emit('close')">
        <AppIcon name="plus" :size="26" style="transform: rotate(45deg)" />
      </button>

      <button class="lb__nav lb__nav--prev" aria-label="Anterior" @click="go(-1)">
        <AppIcon name="arrow" :size="24" style="transform: rotate(180deg)" />
      </button>

      <figure class="lb__frame">
        <img :src="current.src" :alt="current.alt" />
        <figcaption>{{ current.alt }}</figcaption>
      </figure>

      <button class="lb__nav lb__nav--next" aria-label="Próximo" @click="go(1)">
        <AppIcon name="arrow" :size="24" />
      </button>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.lb {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(0.5rem, 3vw, 2rem);
  padding: clamp(1rem, 5vw, 3rem);
  background: rgba(14, 12, 11, 0.82);
  backdrop-filter: blur(18px);
  animation: fade 0.4s var(--ease-out);
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lb__frame {
  justify-self: center;
  max-width: min(90vw, 760px);
  animation: pop 0.5s var(--ease-out);

  img {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius);
    box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.7);
  }
  figcaption {
    margin-top: 1rem;
    text-align: center;
    color: rgba(244, 236, 228, 0.7);
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }
}

@keyframes pop {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lb__close,
.lb__nav {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: var(--c-cream);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  transition:
    background 0.4s var(--ease-out),
    transform 0.4s var(--ease-out);
}
.lb__close:hover,
.lb__nav:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.06);
}

.lb__close {
  position: absolute;
  top: clamp(1rem, 4vw, 2rem);
  right: clamp(1rem, 4vw, 2rem);
}

@media (max-width: 600px) {
  .lb__nav {
    width: 44px;
    height: 44px;
  }
}
</style>
