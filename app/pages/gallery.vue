<script setup lang="ts">
import galleryData from '~~/content/gallery.json'
import schoolInfo  from '~~/content/school-info.json'

const seo = useSeo('/gallery')
const d   = galleryData

const activeCategory = ref('All')

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? d.images
    : d.images.filter(img => img.category === activeCategory.value)
)

const categoryIcons: Record<string, string> = {
  Campus:     '🏫',
  Classrooms: '📚',
  Sports:     '⚽',
  Events:     '🎉',
  Labs:       '🔬',
}
</script>

<template>
  <!-- ── Page hero ───────────────────────────────────────────── -->
  <PageHero
    :eyebrow="schoolInfo.name"
    :title="seo.heroTitle"
    :description="seo.description"
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: seo.heroTitle }]"
  />

  <!-- ── 1. Overview ─────────────────────────────────────────── -->
  <section class="section" aria-labelledby="gallery-overview-title">
    <div class="container">
      <div class="gallery-overview">
        <span class="eyebrow">{{ d.overview.eyebrow }}</span>
        <h2 id="gallery-overview-title" class="section-title">{{ d.overview.title }}</h2>
        <p class="lead">{{ d.overview.description }}</p>
      </div>
    </div>
  </section>

  <!-- ── 2. Filter tabs + Image grid ─────────────────────────── -->
  <section class="section-soft" aria-labelledby="gallery-grid-label">
    <div class="container">
      <h2 id="gallery-grid-label" class="visually-hidden">Gallery Photos</h2>

      <!-- Category filter -->
      <nav class="gallery-filter" aria-label="Filter gallery by category">
        <ul class="gallery-filter__list" role="list">
          <li v-for="cat in d.categories" :key="cat">
            <button
              class="gallery-filter__btn"
              :class="{ 'is-active': activeCategory === cat }"
              :aria-pressed="activeCategory === cat"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Gallery grid — CSS placeholders, no broken images -->
      <ul
        v-if="filtered.length"
        class="gallery-grid"
        role="list"
        :aria-label="`${activeCategory} gallery photos`"
      >
        <li
          v-for="img in filtered"
          :key="img.id"
          class="gallery-card"
        >
          <div
            class="gallery-card__placeholder"
            role="img"
            :aria-label="img.alt"
          >
            <span class="gallery-card__placeholder-icon" aria-hidden="true">
              {{ categoryIcons[img.category] || '📷' }}
            </span>
          </div>
          <div class="gallery-card__info">
            <span class="gallery-card__badge">{{ img.category }}</span>
            <p class="gallery-card__title">{{ img.title }}</p>
          </div>
        </li>
      </ul>

      <!-- Empty state -->
      <div v-else class="gallery-empty" role="status" aria-live="polite">
        <span class="gallery-empty__icon" aria-hidden="true">🖼️</span>
        <p class="gallery-empty__text">No photos available in this category yet.</p>
      </div>
    </div>
  </section>

  <!-- ── 3. Placeholder info notice ──────────────────────────── -->
  <section class="section" aria-label="Gallery information">
    <div class="container">
      <div class="gallery-notice">
        <span class="gallery-notice__icon" aria-hidden="true">📸</span>
        <div>
          <h3 class="gallery-notice__title">Real Photos Coming Soon</h3>
          <p class="gallery-notice__text">
            This gallery currently shows placeholder cards. Real photos of the campus, classrooms, sports
            events, annual day, and activities will be added before the website goes live.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 4. CTA ──────────────────────────────────────────────── -->
  <CTASection
    eyebrow="Visit Our Campus"
    title="See the School in Person"
    :description="`A campus visit is the best way to experience ${schoolInfo.name}. Book a visit today.`"
    :primary="{ label: 'Contact Us', to: '/contact' }"
    :secondary="{ label: 'Apply for Admission', to: '/admissions' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ──────────────────────────────────────────────────
.gallery-overview {
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
}

// ── Filter bar ────────────────────────────────────────────────
.gallery-filter {
  margin-bottom: var(--space-md);
}

.gallery-filter__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  list-style: none;
  padding: 0;
}

.gallery-filter__btn {
  padding: 8px 20px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-pill);
  background-color: var(--color-bg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-muted);
  cursor: pointer;
  transition:
    background-color var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }

  &.is-active {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-white);
  }
}

// ── Gallery grid ──────────────────────────────────────────────
.gallery-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  padding: 0;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-card {
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-3px);
  }
}

.gallery-card__placeholder {
  background: linear-gradient(135deg, var(--color-primary-soft) 0%, var(--color-bg-soft) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 3;
  border-bottom: 1px solid var(--color-border);
}

.gallery-card__placeholder-icon {
  font-size: 48px;
  line-height: 1;
}

.gallery-card__info {
  padding: var(--space-sm) var(--space-md);
}

.gallery-card__badge {
  display: inline-block;
  background-color: var(--color-primary-soft);
  color: var(--color-primary-dark);
  border-radius: var(--radius-pill);
  padding: 2px 10px;
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: 6px;
}

.gallery-card__title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0;
  max-width: none;
}

// ── Empty state ───────────────────────────────────────────────
.gallery-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding-block: var(--space-xl);
  text-align: center;
}

.gallery-empty__icon {
  font-size: 56px;
  line-height: 1;
}

.gallery-empty__text {
  font-size: var(--text-md);
  color: var(--color-muted);
  margin-bottom: 0;
  max-width: none;
}

// ── Placeholder info notice ───────────────────────────────────
.gallery-notice {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  background-color: var(--color-primary-soft);
  border: 1px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  max-width: 700px;
  margin-inline: auto;
}

.gallery-notice__icon {
  font-size: 28px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.gallery-notice__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-xs);
}

.gallery-notice__text {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}
</style>
