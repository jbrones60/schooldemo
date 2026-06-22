<script setup lang="ts">
import homeData from '~~/content/home.json'

const highlights = homeData.highlights
</script>

<template>
  <section class="section highlights-section" aria-label="School highlights">
    <div class="container">
      <ul class="highlights-grid" role="list">
        <li
          v-for="item in highlights"
          :key="item.label"
          class="stat-item"
        >
          <span class="stat-item__number">{{ item.number }}</span>
          <span class="stat-item__label">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.highlights-section {
  padding-block: var(--space-lg);
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  list-style: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
  padding: var(--space-sm);
}

.stat-item__number {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 6px;
}

.stat-item__label {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-muted);
  font-weight: 500;
}
</style>
