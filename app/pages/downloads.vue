<script setup lang="ts">
import schoolInfo    from '~~/content/school-info.json'
import downloadsData from '~~/content/downloads.json'

const seo = useSeo('/downloads')

const d = downloadsData
</script>

<template>
  <!-- ── Page hero ───────────────────────────────────────────── -->
  <PageHero
    :eyebrow="schoolInfo.name"
    :title="seo.heroTitle"
    :description="seo.description"
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: seo.heroTitle }]"
  />

  <!-- ── Download cards grid ────────────────────────────────── -->
  <section class="section" aria-labelledby="downloads-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.overview.eyebrow"
        :title="d.overview.title"
        :description="d.overview.description"
        align="center"
      />

      <!-- Grid of download cards -->
      <ul
        v-if="d.items.length"
        class="downloads-grid"
        role="list"
        aria-label="Available downloads"
      >
        <li
          v-for="item in d.items"
          :key="item.id"
          class="download-card"
        >
          <!-- Icon + category -->
          <div class="download-card__top">
            <span class="download-card__icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="download-card__category">{{ item.category }}</span>
          </div>

          <!-- Content -->
          <div class="download-card__body">
            <h3 class="download-card__title">{{ item.title }}</h3>
            <p class="download-card__desc">{{ item.description }}</p>
          </div>

          <!-- Footer: type + download button -->
          <div class="download-card__footer">
            <span class="download-card__filetype">
              <span aria-hidden="true">📎</span> {{ item.fileType }}
            </span>
            <BaseButton
              :href="item.filePath"
              variant="primary"
              size="sm"
              :aria-label="`Download ${item.title}`"
              external
            >
              Download
            </BaseButton>
          </div>
        </li>
      </ul>

      <!-- Fallback if no downloads -->
      <div v-else class="downloads-empty text-center">
        <p class="text-muted">No documents available at the moment. Please check back soon.</p>
      </div>
    </div>
  </section>

  <!-- ── Office contact note ────────────────────────────────── -->
  <section class="section-soft" aria-label="Contact information for downloads">
    <div class="container">
      <div class="contact-note">
        <span class="contact-note__icon" aria-hidden="true">💬</span>
        <div class="contact-note__content">
          <h3 class="contact-note__title">Can't find what you need?</h3>
          <p class="contact-note__text">
            If a document you need is not listed here, please contact our school office directly.
            We'll be happy to assist you.
          </p>
        </div>
        <div class="contact-note__actions">
          <BaseButton to="/contact" variant="primary">Contact Us</BaseButton>
          <BaseButton
            :href="`tel:${schoolInfo.phone.replace(/\s/g, '')}`"
            variant="outline"
          >
            📞 {{ schoolInfo.phone }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Bottom CTA ─────────────────────────────────────────── -->
  <CTASection
    eyebrow="Interested in Admissions?"
    title="Apply for the Academic Year 2025–26"
    description="Download the admission form above and visit our school office to begin the admission process."
    :primary="{ label: 'Admissions Process', to: '/admissions' }"
    :secondary="{ label: 'Contact School Office', to: '/contact' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Downloads grid ────────────────────────────────────────────
.downloads-grid {
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

// ── Download card ─────────────────────────────────────────────
.download-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  transition: box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-2px);
  }
}

.download-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.download-card__icon {
  font-size: 32px;
  line-height: 1;
}

.download-card__category {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  background-color: var(--color-primary-soft);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}

.download-card__body {
  flex: 1;
}

.download-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
  line-height: 1.3;
}

.download-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

.download-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.download-card__filetype {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 4px;
}

// ── Empty state ───────────────────────────────────────────────
.downloads-empty {
  padding: var(--space-xl) 0;
}

// ── Contact note ──────────────────────────────────────────────
.contact-note {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
  max-width: 860px;
  margin-inline: auto;
}

.contact-note__icon {
  font-size: 36px;
  flex-shrink: 0;
}

.contact-note__content {
  flex: 1;
  min-width: 200px;
}

.contact-note__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 6px;
}

.contact-note__text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

.contact-note__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  flex-shrink: 0;
}
</style>
