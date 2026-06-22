<script setup lang="ts">
import schoolInfo from '~~/content/school-info.json'
</script>

<template>
  <div v-if="schoolInfo.announcement" class="announcement-bar" role="banner">
    <div class="container announcement-bar__inner">
      <p class="announcement-bar__text">
        {{ schoolInfo.announcement }}
      </p>
      <NuxtLink to="/admissions" class="announcement-bar__link" aria-label="Apply for admission">
        Apply Now →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.announcement-bar {
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-weight: 500;
  padding-block: 8px;
}

.announcement-bar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.announcement-bar__text {
  margin-bottom: 0;
  max-width: none;
  opacity: 0.95;
}

.announcement-bar__link {
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: var(--color-white);
    text-decoration: underline;
  }
}
</style>
