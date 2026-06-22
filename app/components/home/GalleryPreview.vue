<script setup lang="ts">
import homeData   from '~~/content/home.json'
import galleryData from '~~/content/gallery.json'

const d = homeData.galleryPreview
// Show first 6 images as preview
const previewImages = galleryData.images.slice(0, 6)
</script>

<template>
  <section class="section gallery-preview" aria-labelledby="gallery-preview-title">
    <div class="container">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        :description="d.description"
        align="center"
      />

      <div class="gallery-grid" role="list" aria-label="Gallery preview">
        <div
          v-for="img in previewImages"
          :key="img.id"
          class="gallery-grid__item"
          role="listitem"
        >
          <div class="gallery-grid__img-wrap">
            <!-- Image will load when real photos are added -->
            <img
              :src="img.src"
              :alt="img.alt"
              class="gallery-grid__img"
              loading="lazy"
            />
            <!-- Placeholder visible when image fails to load -->
            <div class="gallery-grid__placeholder" aria-hidden="true">
              <span class="gallery-grid__placeholder-icon">📷</span>
            </div>
          </div>
          <p class="gallery-grid__label">{{ img.title }}</p>
        </div>
      </div>

      <div class="gallery-cta">
        <BaseButton :to="d.ctaTo" variant="primary">
          {{ d.ctaLabel }}
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-preview {
  background-color: var(--color-bg);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-grid__item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

// Image wrap — placeholder is the background; img overlays it
.gallery-grid__img-wrap {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary-soft), var(--color-bg-soft));
}

.gallery-grid__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  // Hides broken-image icon; placeholder bg shows instead
  color: transparent;
}

.gallery-grid__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // Hidden behind img; visible if img fails (img becomes transparent)
  pointer-events: none;
}

.gallery-grid__placeholder-icon {
  font-size: 28px;
  opacity: 0.4;
}

.gallery-grid__label {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-muted);
  text-align: center;
  margin-bottom: 0;
  max-width: none;
}

.gallery-cta {
  text-align: center;
}
</style>
