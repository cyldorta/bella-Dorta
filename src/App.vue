<script setup lang="ts">
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useScrollReveal } from '@/composables/useScrollReveal'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat.vue'

import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import DifferentialsSection from '@/sections/DifferentialsSection.vue'
import ProcessSection from '@/sections/ProcessSection.vue'
import BenefitsSection from '@/sections/BenefitsSection.vue'
import GallerySection from '@/sections/GallerySection.vue'
import TestimonialsSection from '@/sections/TestimonialsSection.vue'
import FaqSection from '@/sections/FaqSection.vue'
import CtaSection from '@/sections/CtaSection.vue'

useSmoothScroll()
useScrollReveal()
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <DifferentialsSection />
    <ProcessSection />
    <BenefitsSection />
    <GallerySection />
    <TestimonialsSection />
    <FaqSection />
    <CtaSection />
  </main>
  <AppFooter />
  <WhatsAppFloat />
</template>
