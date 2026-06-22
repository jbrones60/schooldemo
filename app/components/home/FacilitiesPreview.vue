<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.facilitiesPreview
</script>

<template>
  <section class="facilities-preview section-primary" aria-labelledby="facilities-preview-title">
    <div class="container">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        :description="d.description"
        align="center"
      />

      <ul class="facilities-grid" role="list">
        <li
          v-for="item in d.items"
          :key="item.title"
          class="facility-item"
        >
          <span class="facility-item__icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="facility-item__title">{{ item.title }}</span>
        </li>
      </ul>

      <div class="facilities-cta">
        <BaseButton :to="d.ctaTo" variant="outline-white">
          {{ d.ctaLabel }}
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.facilities-preview {
  // Uses .section-primary (royal blue bg, white text) from design system
}

// Override SectionHeader text color on dark background
:deep(.section-title) {
  color: var(--color-white);
}

:deep(.section-description) {
  color: rgba(255, 255, 255, 0.8);
}

:deep(.eyebrow) {
  color: var(--color-accent);
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  list-style: none;
  margin-bottom: var(--space-lg);

  @media (min-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
  }
}

.facility-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  text-align: center;
  transition: background-color var(--transition-base), transform var(--transition-base);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
}

.facility-item__icon {
  font-size: 32px;
  line-height: 1;
}

.facility-item__title {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.3;
}

.facilities-cta {
  text-align: center;
}
</style>
