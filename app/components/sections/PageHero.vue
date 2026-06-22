<script setup lang="ts">
interface Crumb {
  label: string
  to?: string
}

withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}>(), {
  breadcrumbs: () => [],
})
</script>

<template>
  <section class="page-hero" aria-labelledby="page-hero-title">
    <div class="container">

      <!-- Breadcrumb navigation -->
      <nav
        v-if="breadcrumbs.length"
        aria-label="Breadcrumb"
        class="page-hero__breadcrumb"
      >
        <ol class="breadcrumb-list">
          <li
            v-for="(crumb, i) in breadcrumbs"
            :key="i"
            class="breadcrumb-item"
          >
            <NuxtLink
              v-if="crumb.to && i < breadcrumbs.length - 1"
              :to="crumb.to"
              class="breadcrumb-link"
            >{{ crumb.label }}</NuxtLink>
            <span
              v-else
              aria-current="page"
            >{{ crumb.label }}</span>
            <span
              v-if="i < breadcrumbs.length - 1"
              class="breadcrumb-sep"
              aria-hidden="true"
            > / </span>
          </li>
        </ol>
      </nav>

      <span v-if="eyebrow" class="eyebrow page-hero__eyebrow">
        {{ eyebrow }}
      </span>

      <h1 id="page-hero-title" class="page-hero__title">{{ title }}</h1>

      <p v-if="description" class="page-hero__description">
        {{ description }}
      </p>

      <slot />

    </div>
  </section>
</template>

<style scoped>
/* Eyebrow on dark hero background — inherits white, reduced opacity */
.page-hero__eyebrow {
  color: inherit;
  opacity: 0.8;
}

.page-hero {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding-block: var(--space-xl);
  text-align: center;
}

.page-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--space-xs);
}

.page-hero__description {
  font-size: var(--text-md);
  opacity: 0.88;
  max-width: 600px;
  margin-inline: auto;
  line-height: 1.7;
}

/* Breadcrumb */
.page-hero__breadcrumb {
  margin-bottom: var(--space-sm);
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  list-style: none;
  font-size: var(--text-sm);
  opacity: 0.8;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    opacity: 1;
  }
}

.breadcrumb-sep {
  margin-inline: 6px;
  opacity: 0.6;
}
</style>
