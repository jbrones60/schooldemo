<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.whyChooseUs
</script>

<template>
  <section class="section-soft why-section" aria-labelledby="why-title">
    <div class="container">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        align="center"
      />

      <ul class="why-grid" role="list">
        <li
          v-for="item in d.items"
          :key="item.title"
          class="why-card card-soft card-hover"
        >
          <span class="why-card__icon" aria-hidden="true">{{ item.icon }}</span>
          <h3 class="why-card__title">{{ item.title }}</h3>
          <p class="why-card__text">{{ item.description }}</p>
        </li>
      </ul>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-section {
  // Uses .section-soft from design system
}

.why-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.why-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  transition: box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-3px);
  }
}

.why-card__icon {
  display: block;
  font-size: 36px;
  margin-bottom: var(--space-sm);
  line-height: 1;
}

.why-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.why-card__text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.65;
  margin-bottom: 0;
  max-width: none;
}
</style>
