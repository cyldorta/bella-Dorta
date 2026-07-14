<script setup lang="ts">
import { processSteps } from '@/constants/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="processo" class="process">
    <div class="process__glow" aria-hidden="true" />
    <div class="container container--wide">
      <SectionHeading
        eyebrow="Como funciona"
        title="Uma jornada <em>cuidadosa</em>, do diagnóstico ao resultado"
        subtitle="Quatro etapas pensadas para oferecer segurança, clareza e tranquilidade em todo o caminho."
        theme="dark"
      />

      <ol class="process__timeline">
        <li
          v-for="(step, i) in processSteps"
          :key="step.number"
          class="process__step reveal"
          :data-reveal-delay="(i % 4) + 1"
        >
          <div class="process__node">
            <span class="process__num">{{ step.number }}</span>
          </div>
          <div class="process__body">
            <h3 class="process__step-title">{{ step.title }}</h3>
            <p class="process__step-text">{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
.process {
  position: relative;
  padding-block: var(--section-y);
  background: var(--c-charcoal);
  color: var(--c-cream);
  overflow: hidden;
}

.process__glow {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 50vh;
  background: radial-gradient(circle, rgba(194, 160, 107, 0.14), transparent 60%);
  pointer-events: none;
}

.process__timeline {
  position: relative;
  z-index: 2;
  list-style: none;
  padding: 0;
  margin: clamp(3.5rem, 7vw, 5rem) auto 0;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;

  @include up($bp-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
  }
  @include up($bp-lg) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  &::before {
    @include up($bp-lg) {
      content: '';
      position: absolute;
      top: 32px;
      left: 8%;
      right: 8%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(194, 160, 107, 0.5) 18%,
        rgba(194, 160, 107, 0.5) 82%,
        transparent
      );
    }
  }
}

.process__step {
  position: relative;
  display: flex;
  gap: 1.2rem;

  @include up($bp-sm) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.process__node {
  position: relative;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--c-charcoal-2);
  border: 1px solid rgba(194, 160, 107, 0.4);
  box-shadow: 0 0 0 6px rgba(14, 12, 11, 1), inset 0 0 24px rgba(194, 160, 107, 0.12);
  transition: transform 0.6s var(--ease-out), border-color 0.6s var(--ease-out);
}

.process__step:hover .process__node {
  transform: translateY(-4px) scale(1.04);
  border-color: var(--c-gold);
}

.process__num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--c-gold-soft);
}

.process__step-title {
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  color: var(--c-cream);
}

.process__step-text {
  font-size: 0.94rem;
  color: rgba(244, 236, 228, 0.62);
  max-width: 30ch;
}
</style>
