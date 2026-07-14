<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { buildWhatsAppUrl } from '@/composables/useWhatsApp'
import AppIcon from './AppIcon.vue'

const visible = ref(false)
const url = buildWhatsAppUrl()

const onScroll = () => {
  visible.value = window.scrollY > 600
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="wa">
    <a
      v-show="visible"
      class="wa"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span class="wa__pulse" aria-hidden="true" />
      <AppIcon name="whatsapp" :size="30" />
    </a>
  </Transition>
</template>

<style scoped lang="scss">
.wa {
  position: fixed;
  right: calc(clamp(1rem, 4vw, 2rem) + env(safe-area-inset-right));
  bottom: calc(clamp(1rem, 4vw, 2rem) + env(safe-area-inset-bottom));
  z-index: 90;
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  color: var(--c-white);
  background: linear-gradient(135deg, #2ec46a, #1faa55);
  box-shadow: 0 16px 34px -12px rgba(31, 170, 85, 0.7);
  transition: transform 0.5s var(--ease-out);
}
.wa:hover {
  transform: scale(1.08) translateY(-2px);
}

.wa__pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #2ec46a;
  z-index: -1;
  animation: pulse 2.4s ease-out infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.9);
    opacity: 0;
  }
}

.wa-enter-active,
.wa-leave-active {
  transition:
    transform 0.5s var(--ease-out),
    opacity 0.5s var(--ease-out);
}
.wa-enter-from,
.wa-leave-to {
  opacity: 0;
  transform: scale(0.6) translateY(10px);
}
</style>
