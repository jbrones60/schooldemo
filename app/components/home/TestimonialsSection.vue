<script setup lang="ts">
import testimonialsData from '~~/content/testimonials.json'

const d = testimonialsData.overview
const items = testimonialsData.items
</script>

<template>
  <section class="section-soft testimonials-section" aria-labelledby="testimonials-title">
    <div class="container">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        align="center"
      />

      <ul class="testimonials-grid" role="list">
        <li
          v-for="item in items"
          :key="item.id"
          class="testimonial-card"
        >
          <!-- Stars -->
          <div class="testimonial-card__stars" :aria-label="`${item.rating} out of 5 stars`">
            <span
              v-for="n in 5"
              :key="n"
              :class="['star', n <= item.rating ? 'star--filled' : 'star--empty']"
              aria-hidden="true"
            >★</span>
          </div>

          <!-- Quote -->
          <blockquote class="testimonial-card__quote">
            "{{ item.text }}"
          </blockquote>

          <!-- Attribution -->
          <footer class="testimonial-card__footer">
            <div class="testimonial-card__avatar" aria-hidden="true">
              {{ item.name.charAt(0) }}
            </div>
            <div class="testimonial-card__info">
              <cite class="testimonial-card__name">{{ item.name }}</cite>
              <span class="testimonial-card__role">{{ item.role }}</span>
            </div>
          </footer>
        </li>
      </ul>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials-section {
  // Uses .section-soft from design system
}

.testimonials-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

// ── Testimonial card ──────────────────────────────────────────
.testimonial-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  transition: box-shadow var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
  }
}

// Stars
.testimonial-card__stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 16px;
  line-height: 1;
}

.star--filled { color: var(--color-accent); }
.star--empty  { color: var(--color-border); }

// Quote
.testimonial-card__quote {
  font-size: var(--text-md);
  color: var(--color-text);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
  margin: 0;
  padding: 0;
  border: none;

  &::before { content: none; }
  &::after  { content: none; }
}

// Footer
.testimonial-card__footer {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
}

.testimonial-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-md);
  flex-shrink: 0;
}

.testimonial-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testimonial-card__name {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text);
  font-style: normal;
}

.testimonial-card__role {
  font-size: var(--text-xs);
  color: var(--color-muted);
}
</style>
