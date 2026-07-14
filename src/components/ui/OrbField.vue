<script setup lang="ts">
interface Orb {
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  from: string
  to: string
  delay?: number
}

withDefaults(defineProps<{ orbs: Orb[]; opacity?: number }>(), { opacity: 1 })
</script>

<template>
  <div class="orb-field" :style="{ opacity }" aria-hidden="true">
    <span
      v-for="(orb, i) in orbs"
      :key="i"
      class="orb"
      :style="{
        width: `${orb.size}px`,
        height: `${orb.size}px`,
        top: orb.top,
        left: orb.left,
        right: orb.right,
        bottom: orb.bottom,
        background: `radial-gradient(circle at 32% 28%, ${orb.from}, ${orb.to})`,
        animationDelay: `${orb.delay ?? 0}s`,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.orb-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  box-shadow: inset 0 0 60px rgba(255, 255, 255, 0.35);
  animation: float 14s ease-in-out infinite;
  will-change: transform;
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, -26px, 0) scale(1.05);
  }
}
</style>
