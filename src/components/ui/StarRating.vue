<script setup lang="ts">
import AppIcon from './AppIcon.vue'
const props = defineProps<{ rating: number }>()
const stars = Array.from({ length: 5 }, (_, i) => i < props.rating)
</script>

<template>
  <div class="stars" :aria-label="`${rating} de 5 estrelas`" role="img">
    <AppIcon
      v-for="(filled, i) in stars"
      :key="i"
      name="star"
      :size="16"
      class="star"
      :class="{ 'star--filled': filled }"
    />
  </div>
</template>

<style scoped lang="scss">
.stars {
  display: inline-flex;
  gap: 3px;
  color: var(--c-gold);
}
.star :deep(path) {
  fill: none;
}
.star--filled :deep(path) {
  fill: currentColor;
}
</style>
