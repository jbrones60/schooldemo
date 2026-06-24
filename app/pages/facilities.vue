<script setup lang="ts">
import facilitiesData from '~~/content/facilities.json'
import schoolInfo     from '~~/content/school-info.json'

const seo = useSeo('/facilities')
const d   = facilitiesData

const securityItem  = d.items.find(i => i.id === 'cctv-security')
const transportItem = d.items.find(i => i.id === 'transport')
const mainItems     = d.items.filter(i => i.id !== 'cctv-security' && i.id !== 'transport')
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
  <section class="section" aria-labelledby="fac-overview-title">
    <div class="container">
      <div class="fac-overview">
        <span class="eyebrow">{{ d.overview.eyebrow }}</span>
        <h2 id="fac-overview-title" class="section-title">{{ d.overview.title }}</h2>
        <p class="lead">{{ d.overview.description }}</p>
      </div>
    </div>
  </section>

  <!-- ── 2. Facilities Grid ──────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="fac-grid-heading">
    <div class="container">
      <SectionHeader
        eyebrow="What We Offer"
        title="Our Facilities at a Glance"
        align="center"
      />
      <ul class="fac-grid" role="list">
        <li
          v-for="item in mainItems"
          :key="item.id"
          class="fac-card"
        >
          <img :src="item.image" :alt="item.title" class="fac-card__img" loading="lazy" />
          <div class="fac-card__body">
            <h3 class="fac-card__title">{{ item.title }}</h3>
            <p class="fac-card__desc">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 3. Safety & Security Highlight ─────────────────────── -->
  <section
    v-if="securityItem"
    class="section"
    aria-labelledby="fac-security-title"
  >
    <div class="container">
      <div class="security-highlight">
        <div class="security-highlight__icon-wrap" aria-hidden="true">
          <span class="security-highlight__icon">{{ securityItem.icon }}</span>
        </div>
        <div class="security-highlight__content">
          <span class="security-highlight__eyebrow">Student Safety</span>
          <h2 id="fac-security-title" class="security-highlight__title">
            {{ securityItem.title }}
          </h2>
          <p class="security-highlight__desc">{{ securityItem.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 4. Transport ────────────────────────────────────────── -->
  <section
    v-if="transportItem"
    class="section-soft"
    aria-labelledby="fac-transport-title"
  >
    <div class="container">
      <div class="transport-section">
        <!-- CSS placeholder for missing bus/transport image -->
        <div class="transport-section__img-placeholder" aria-hidden="true">
          <span class="transport-section__icon">{{ transportItem.icon }}</span>
          <p class="transport-section__placeholder-label">School Transport</p>
        </div>
        <div class="transport-section__content">
          <span class="eyebrow">Getting to School</span>
          <h2 id="fac-transport-title" class="section-title">{{ transportItem.title }}</h2>
          <p class="transport-section__desc">{{ transportItem.description }}</p>
          <div class="cluster mt-md">
            <BaseButton to="/contact"   variant="primary">Enquire About Transport</BaseButton>
            <BaseButton to="/downloads" variant="outline">Transport Application</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 5. Bottom CTA ───────────────────────────────────────── -->
  <CTASection
    eyebrow="Visit Our Campus"
    title="See Our Facilities in Person"
    :description="`We invite you to schedule a campus visit and experience the ${schoolInfo.name} environment for yourself.`"
    :primary="{ label: 'Contact Us', to: '/contact' }"
    :secondary="{ label: 'Apply for Admission', to: '/admissions' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ──────────────────────────────────────────────────
.fac-overview {
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}

// ── Facilities grid ───────────────────────────────────────────
.fac-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  padding: 0;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.fac-card {
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-3px);
  }
}

.fac-card__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.fac-card__body {
  padding: var(--space-md);
  flex: 1;
}

.fac-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.fac-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Security highlight ────────────────────────────────────────
.security-highlight {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  color: var(--color-white);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: var(--space-lg);
  }
}

.security-highlight__icon-wrap {
  width: 88px;
  height: 88px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.security-highlight__icon {
  font-size: 44px;
  line-height: 1;
}

.security-highlight__eyebrow {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
}

.security-highlight__title {
  font-family: var(--font-heading);
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-xs);
}

.security-highlight__desc {
  font-size: var(--text-md);
  color: var(--color-white);
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 0;
  max-width: none;
}

// ── Transport section ─────────────────────────────────────────
.transport-section {
  display: grid;
  gap: var(--space-lg);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

.transport-section__img-placeholder {
  background: linear-gradient(135deg, var(--color-primary-soft) 0%, var(--color-bg-soft) 100%);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  gap: var(--space-sm);
  padding: var(--space-md);
}

.transport-section__icon {
  font-size: 60px;
  line-height: 1;
}

.transport-section__placeholder-label {
  font-size: var(--text-sm);
  color: var(--color-muted);
  font-weight: 500;
  margin-bottom: 0;
  max-width: none;
  text-align: center;
}

.transport-section__desc {
  font-size: var(--text-md);
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 0;
  max-width: none;
}
</style>
