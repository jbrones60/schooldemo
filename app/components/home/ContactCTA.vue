<script setup lang="ts">
import homeData   from '~~/content/home.json'
import schoolInfo from '~~/content/school-info.json'

const d = homeData.contactCTA
</script>

<template>
  <section class="section-soft contact-cta-section" aria-labelledby="contact-cta-title">
    <div class="container contact-cta-inner">

      <SectionHeader
        :eyebrow="d.eyebrow"
        :title="d.title"
        :description="d.description"
        align="center"
      />

      <!-- Quick contact links -->
      <div class="contact-cta-links">
        <a
          :href="`tel:${schoolInfo.phone.replace(/\s/g, '')}`"
          class="contact-cta-link"
          aria-label="Call us"
        >
          <span aria-hidden="true">📞</span>
          <span>{{ schoolInfo.phone }}</span>
        </a>
        <a
          :href="`mailto:${schoolInfo.email}`"
          class="contact-cta-link"
          aria-label="Email us"
        >
          <span aria-hidden="true">✉️</span>
          <span>{{ schoolInfo.email }}</span>
        </a>
        <a
          :href="`https://wa.me/${schoolInfo.whatsapp.replace(/\D/g, '')}`"
          class="contact-cta-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
        >
          <span aria-hidden="true">💬</span>
          <span>WhatsApp Us</span>
        </a>
      </div>

      <!-- Primary action buttons -->
      <div class="contact-cta-actions">
        <BaseButton :to="d.ctaPrimary.to" variant="primary" size="lg">
          {{ d.ctaPrimary.label }}
        </BaseButton>
        <BaseButton :to="d.ctaSecondary.to" variant="outline" size="lg">
          {{ d.ctaSecondary.label }}
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-cta-inner {
  text-align: center;
  max-width: 700px;
  margin-inline: auto;
}

.contact-cta-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.contact-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  transition: border-color var(--transition-base), color var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
}

.contact-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
}
</style>
