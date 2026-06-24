<script setup lang="ts">
import aboutData  from '~~/content/about.json'
import schoolInfo from '~~/content/school-info.json'

const seo = useSeo('/about')
const d   = aboutData
</script>

<template>
  <!-- ── Page hero ───────────────────────────────────────────── -->
  <PageHero
    :eyebrow="schoolInfo.name"
    :title="seo.heroTitle"
    :description="seo.description"
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: seo.heroTitle }]"
  />

  <!-- ── 1. School Overview ──────────────────────────────────── -->
  <section class="section about-overview" aria-labelledby="about-overview-title">
    <div class="container">
      <div class="split">
        <div>
          <span class="eyebrow">{{ d.overview.eyebrow }}</span>
          <h2 id="about-overview-title" class="section-title">{{ d.overview.title }}</h2>
          <p class="lead">{{ d.overview.description }}</p>
          <p class="about-overview__body">{{ d.overview.description2 }}</p>
          <div class="cluster mt-md">
            <BaseButton to="/admissions" variant="primary">Apply for Admission</BaseButton>
            <BaseButton to="/contact"    variant="outline">Contact Us</BaseButton>
          </div>
        </div>

        <img :src="d.overview.image" :alt="`${schoolInfo.name} school building`" class="about-building-img" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- ── 2. Mission & Vision ─────────────────────────────────── -->
  <section class="section-soft" aria-label="Mission and Vision">
    <div class="container">
      <div class="grid-2">
        <div class="mv-card">
          <div class="mv-card__icon" aria-hidden="true">🎯</div>
          <h2 class="mv-card__title">{{ d.mission.title }}</h2>
          <p class="mv-card__text">{{ d.mission.text }}</p>
        </div>
        <div class="mv-card mv-card--vision">
          <div class="mv-card__icon" aria-hidden="true">🌟</div>
          <h2 class="mv-card__title">{{ d.vision.title }}</h2>
          <p class="mv-card__text">{{ d.vision.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 3. Values ───────────────────────────────────────────── -->
  <section class="section" aria-labelledby="about-values-title">
    <div class="container">
      <SectionHeader
        eyebrow="What We Stand For"
        title="Our Core Values"
        align="center"
      />
      <ul class="values-grid" role="list">
        <li
          v-for="value in d.values"
          :key="value.title"
          class="value-card"
        >
          <h3 class="value-card__title">{{ value.title }}</h3>
          <p class="value-card__desc">{{ value.description }}</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 4. Principal Message ────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="principal-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.principalMessage.eyebrow"
        title="A Message From Our Principal"
        align="center"
      />
      <div class="principal-card">
        <img :src="d.principalMessage.photo" :alt="`${d.principalMessage.name}, ${d.principalMessage.designation}`" class="principal-photo" loading="lazy" />
        <div class="principal-content">
          <blockquote class="principal-quote">
            <p>{{ d.principalMessage.message }}</p>
          </blockquote>
          <div class="principal-meta">
            <strong class="principal-meta__name">{{ d.principalMessage.name }}</strong>
            <span class="principal-meta__role">{{ d.principalMessage.designation }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 5. History Timeline ─────────────────────────────────── -->
  <section class="section" aria-labelledby="timeline-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.timeline.eyebrow"
        :title="d.timeline.title"
        align="center"
      />
      <ol class="timeline" aria-label="School history milestones">
        <li
          v-for="item in d.timeline.items"
          :key="item.year"
          class="timeline-item"
        >
          <div class="timeline-item__year">{{ item.year }}</div>
          <div class="timeline-item__dot" aria-hidden="true"></div>
          <div class="timeline-item__content">
            <p>{{ item.event }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- ── 6. Why Parents Trust Us ─────────────────────────────── -->
  <section class="section-soft" aria-labelledby="trust-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.trustSection.eyebrow"
        :title="d.trustSection.title"
        align="center"
      />
      <ul class="trust-grid" role="list">
        <li
          v-for="item in d.trustSection.items"
          :key="item.title"
          class="trust-card"
        >
          <h3 class="trust-card__title">{{ item.title }}</h3>
          <p class="trust-card__desc">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 7. CTA ──────────────────────────────────────────────── -->
  <CTASection
    eyebrow="Be Part of Our Story"
    :title="`Join the ${schoolInfo.name} Family`"
    description="We welcome students and families who share our commitment to excellence, values, and lifelong learning."
    :primary="{ label: 'Apply for Admission', to: '/admissions' }"
    :secondary="{ label: 'Contact Us', to: '/contact' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ──────────────────────────────────────────────────
.about-overview__body {
  font-size: var(--text-md);
  color: var(--color-text);
  line-height: 1.7;
  max-width: none;
  margin-bottom: 0;
}

// ── School building image ─────────────────────────────────────
.about-building-img {
  width: 100%;
  border-radius: var(--radius-card);
  object-fit: cover;
  display: block;
}

// ── Mission / Vision cards ────────────────────────────────────
.mv-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  border-top: 4px solid var(--color-primary);
}

.mv-card--vision {
  border-top-color: var(--color-accent);
}

.mv-card__icon {
  font-size: 40px;
  line-height: 1;
  display: block;
  margin-bottom: var(--space-sm);
}

.mv-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

.mv-card__text {
  font-size: var(--text-md);
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 0;
  max-width: none;
}

// ── Values grid ───────────────────────────────────────────────
.values-grid {
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

.value-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
}

.value-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.value-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Principal card ────────────────────────────────────────────
.principal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  max-width: 840px;
  margin-inline: auto;
  background-color: var(--color-bg);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.principal-photo {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid var(--color-primary-soft);
}

.principal-content {
  flex: 1;
  min-width: 0;
}

.principal-quote {
  margin: 0 0 var(--space-md);
  padding-left: var(--space-md);
  border-left: 3px solid var(--color-primary);

  p {
    font-size: var(--text-md);
    color: var(--color-text);
    line-height: 1.8;
    font-style: italic;
    margin-bottom: 0;
    max-width: none;
  }
}

.principal-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.principal-meta__name {
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
}

.principal-meta__role {
  font-size: var(--text-sm);
  color: var(--color-muted);
}

// ── Timeline ──────────────────────────────────────────────────
.timeline {
  list-style: none;
  padding: 0;
  max-width: 780px;
  margin-inline: auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-border);

  @media (min-width: 768px) {
    left: 82px;
  }
}

.timeline-item {
  display: grid;
  grid-template-columns: 58px 28px 1fr;
  gap: var(--space-sm);
  align-items: flex-start;
  padding-bottom: var(--space-md);
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 70px 28px 1fr;
  }

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-item__year {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-primary);
  text-align: right;
  padding-top: 3px;
}

.timeline-item__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-primary);
  margin-top: 3px;
  flex-shrink: 0;
}

.timeline-item__content {
  p {
    font-size: var(--text-sm);
    color: var(--color-text);
    line-height: 1.6;
    margin-bottom: 0;
    max-width: none;
  }
}

// ── Trust / Why Parents ───────────────────────────────────────
.trust-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  padding: 0;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.trust-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
}

.trust-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-xs);
}

.trust-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}
</style>
