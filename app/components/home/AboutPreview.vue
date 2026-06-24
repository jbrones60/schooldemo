<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.aboutPreview
</script>

<template>
  <section class="section about-preview" aria-labelledby="about-preview-title">
    <div class="container">
      <div class="about-preview__grid">

        <!-- Text column -->
        <div class="about-preview__text">
          <SectionHeader
            :eyebrow="d.eyebrow"
            title=""
            align="left"
          />
          <h2 id="about-preview-title" class="section-title">{{ d.title }}</h2>
          <p class="about-preview__desc">{{ d.description }}</p>
          <BaseButton :to="d.ctaTo" variant="primary" class="mt-sm">
            {{ d.ctaLabel }}
          </BaseButton>
        </div>

        <!-- Image column -->
        <div class="about-preview__visual" aria-hidden="true">
          <div class="about-preview__img-wrap">
            <img :src="d.image" :alt="d.imageAlt" class="about-preview__img" loading="lazy" />
          </div>

          <!-- Accent card overlay -->
          <div class="about-preview__accent-card">
            <span class="about-preview__accent-icon">🎖️</span>
            <div>
              <strong class="about-preview__accent-title">Trusted by Parents</strong>
              <span class="about-preview__accent-sub">Since 2005</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-preview {
  background-color: var(--color-bg);
}

.about-preview__grid {
  display: grid;
  gap: var(--space-xl);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.about-preview__text {
  // Section header already handles eyebrow; manually add heading here
  .section-title {
    margin-top: calc(-1 * var(--space-xs));
    margin-bottom: var(--space-sm);
  }
}

.about-preview__desc {
  font-size: var(--text-md);
  color: var(--color-muted);
  line-height: 1.75;
  max-width: 60ch;
  margin-bottom: var(--space-md);
}

// Image
.about-preview__visual {
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

.about-preview__img-wrap {
  border-radius: var(--radius-card);
  overflow: hidden;
}

.about-preview__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.about-preview__img-placeholder {
  background: linear-gradient(135deg, var(--color-primary-soft), var(--color-bg-soft));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  aspect-ratio: 4/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.about-preview__img-icon {
  font-size: 64px;
  line-height: 1;
}

.about-preview__img-text {
  font-size: var(--text-xs);
  color: var(--color-muted);
  font-style: italic;
}

// Accent card
.about-preview__accent-card {
  position: absolute;
  bottom: -20px;
  right: -16px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-soft);
}

.about-preview__accent-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.about-preview__accent-title {
  display: block;
  font-size: var(--text-sm);
  font-weight: 700;
}

.about-preview__accent-sub {
  display: block;
  font-size: var(--text-xs);
  opacity: 0.8;
}
</style>
