<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.academicsPreview
</script>

<template>
  <section class="section academics-preview" aria-labelledby="academics-preview-title">
    <div class="container">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        :description="d.description"
        align="center"
      />

      <ul class="programs-grid" role="list">
        <li
          v-for="(program, index) in d.programs"
          :key="program.title"
          class="program-card"
          :class="`program-card--${index}`"
        >
          <div class="program-card__accent" aria-hidden="true"></div>
          <div class="program-card__body">
            <span class="program-card__age">{{ program.ageGroup }}</span>
            <h3 class="program-card__title">{{ program.title }}</h3>
            <p class="program-card__desc">{{ program.description }}</p>
          </div>
          <NuxtLink :to="d.ctaTo" class="program-card__link" :aria-label="`Learn about ${program.title}`">
            Learn more →
          </NuxtLink>
        </li>
      </ul>

      <div class="academics-cta">
        <BaseButton :to="d.ctaTo" variant="primary">
          {{ d.ctaLabel }}
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.academics-preview {
  background-color: var(--color-bg);
}

.programs-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  margin-bottom: var(--space-lg);

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

// ── Program card ─────────────────────────────────────────────
.program-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-3px);
  }
}

// Coloured top accent bar per program
.program-card__accent {
  height: 5px;
  border-radius: 0;
}

.program-card--0 .program-card__accent { background-color: var(--color-primary); }
.program-card--1 .program-card__accent { background-color: var(--color-accent); }
.program-card--2 .program-card__accent { background-color: var(--color-success); }
.program-card--3 .program-card__accent { background-color: var(--color-primary-dark); }

.program-card__body {
  padding: var(--space-md);
  flex: 1;
}

.program-card__age {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-xs);
}

.program-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.program-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.65;
  margin-bottom: 0;
  max-width: none;
}

.program-card__link {
  display: block;
  padding: var(--space-xs) var(--space-md);
  padding-bottom: var(--space-sm);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  border-top: 1px solid var(--color-border);
  margin-top: auto;
  transition: color var(--transition-base), padding-left var(--transition-base);

  &:hover {
    color: var(--color-primary-dark);
    padding-left: var(--space-md);
  }
}

// CTA below grid
.academics-cta {
  text-align: center;
}
</style>
