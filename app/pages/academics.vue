<script setup lang="ts">
import academicsData from '~~/content/academics.json'
import schoolInfo    from '~~/content/school-info.json'

const seo = useSeo('/academics')
const d   = academicsData

const programIcons: Record<string, string> = {
  'pre-primary':   '🌱',
  'primary':       '📖',
  'middle-school': '🔬',
  'high-school':   '🎓',
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

  <!-- ── 1. Curriculum Overview ──────────────────────────────── -->
  <section class="section" aria-labelledby="acad-overview-title">
    <div class="container">
      <div class="acad-overview">
        <span class="eyebrow">{{ d.overview.eyebrow }}</span>
        <h2 id="acad-overview-title" class="section-title">{{ d.overview.title }}</h2>
        <p class="lead">{{ d.overview.description }}</p>
        <div class="cluster mt-md">
          <BaseButton to="/admissions" variant="primary">Apply for Admission</BaseButton>
          <BaseButton :to="d.calendarCTA.to" variant="outline">{{ d.calendarCTA.label }}</BaseButton>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 2. Programme Cards ───────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="acad-programs-title">
    <div class="container">
      <SectionHeader
        eyebrow="Our Programmes"
        title="Education at Every Stage"
        align="center"
      />
      <ul class="programs-grid" role="list">
        <li
          v-for="program in d.programs"
          :key="program.id"
          class="program-card"
        >
          <!-- CSS image placeholder — no broken img tag -->
          <div class="program-card__img-placeholder" aria-hidden="true">
            <span class="program-card__img-icon">{{ programIcons[program.id] || '📚' }}</span>
          </div>
          <div class="program-card__body">
            <span class="program-card__age">{{ program.ageGroup }}</span>
            <h3 class="program-card__title">{{ program.title }}</h3>
            <p class="program-card__desc">{{ program.description }}</p>
            <ul class="content-list-check program-card__highlights" :aria-label="`${program.title} highlights`">
              <li v-for="h in program.highlights" :key="h">{{ h }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 3. Teaching Methodology ─────────────────────────────── -->
  <section class="section" aria-labelledby="acad-method-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.methodology.eyebrow"
        :title="d.methodology.title"
        :description="d.methodology.description"
        align="center"
      />
      <ul class="methods-grid" role="list">
        <li
          v-for="approach in d.methodology.approaches"
          :key="approach.title"
          class="method-card"
        >
          <h3 class="method-card__title">{{ approach.title }}</h3>
          <p class="method-card__desc">{{ approach.description }}</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 4. Co-Curricular Activities ─────────────────────────── -->
  <section class="section-soft" aria-labelledby="acad-cocurr-title">
    <div class="container">
      <SectionHeader
        :eyebrow="d.cocurricular.eyebrow"
        :title="d.cocurricular.title"
        :description="d.cocurricular.description"
        align="center"
      />
      <ul class="activities-grid" role="list">
        <li
          v-for="cat in d.cocurricular.activities"
          :key="cat.category"
          class="activity-card"
        >
          <div class="activity-card__header">
            <span class="activity-card__icon" aria-hidden="true">{{ cat.icon }}</span>
            <h3 class="activity-card__category">{{ cat.category }}</h3>
          </div>
          <ul class="activity-card__tags" :aria-label="`${cat.category} activities`">
            <li v-for="item in cat.items" :key="item">{{ item }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── 5. Assessment Pattern ───────────────────────────────── -->
  <section class="section" aria-labelledby="acad-assess-title">
    <div class="container">
      <div class="assessment-block">
        <div class="assessment-block__inner">
          <span class="assessment-block__icon" aria-hidden="true">📋</span>
          <div>
            <h2 id="acad-assess-title" class="assessment-block__title">{{ d.assessment.title }}</h2>
            <p class="assessment-block__overview">{{ d.assessment.overview }}</p>
            <p class="assessment-block__note text-muted">{{ d.assessment.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 6. Bottom CTA ───────────────────────────────────────── -->
  <CTASection
    eyebrow="Ready to Learn?"
    title="Give Your Child the Best Start"
    :description="`Enrol at ${schoolInfo.name} and let your child thrive in an environment designed for excellence and growth.`"
    :primary="{ label: 'Apply for Admission', to: '/admissions' }"
    :secondary="{ label: 'Download Academic Calendar', to: '/downloads' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ──────────────────────────────────────────────────
.acad-overview {
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}

// ── Programmes grid ───────────────────────────────────────────
.programs-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  padding: 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.program-card {
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.program-card__img-placeholder {
  background: linear-gradient(135deg, var(--color-primary-soft) 0%, var(--color-bg-soft) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.program-card__img-icon {
  font-size: 52px;
  line-height: 1;
}

.program-card__body {
  padding: var(--space-md);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.program-card__age {
  display: inline-flex;
  align-self: flex-start;
  background-color: var(--color-primary-soft);
  color: var(--color-primary-dark);
  border-radius: var(--radius-pill);
  padding: 3px 12px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.03em;
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
  line-height: 1.6;
  margin-bottom: var(--space-sm);
  max-width: none;
}

.program-card__highlights {
  margin-top: auto;

  li {
    font-size: var(--text-sm);
    max-width: none;
  }
}

// ── Methods grid ──────────────────────────────────────────────
.methods-grid {
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

.method-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-primary);
}

.method-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.method-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Co-curricular grid ────────────────────────────────────────
.activities-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;
  padding: 0;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.activity-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
}

.activity-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.activity-card__icon {
  font-size: 30px;
  line-height: 1;
  flex-shrink: 0;
}

.activity-card__category {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
}

.activity-card__tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);

  li {
    background-color: var(--color-primary-soft);
    color: var(--color-primary-dark);
    border-radius: var(--radius-pill);
    padding: 4px 12px;
    font-size: var(--text-xs);
    font-weight: 600;
    max-width: none;
  }
}

// ── Assessment block ──────────────────────────────────────────
.assessment-block {
  max-width: 780px;
  margin-inline: auto;
}

.assessment-block__inner {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  background-color: var(--color-primary-soft);
  border: 1px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.assessment-block__icon {
  font-size: 36px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.assessment-block__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.assessment-block__overview {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: var(--space-xs);
  max-width: none;
}

.assessment-block__note {
  font-size: var(--text-sm);
  line-height: 1.5;
  margin-bottom: 0;
  max-width: none;
}
</style>
