<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.admissionsCTA
</script>

<template>
  <CTASection
    :eyebrow="d.eyebrow"
    :title="d.title"
    :description="d.description"
    :primary="d.ctaPrimary"
    :secondary="d.ctaSecondary"
    variant="primary"
  />
</template>
