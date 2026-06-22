<script setup lang="ts">
import schoolInfo     from '~~/content/school-info.json'
import admissionsData from '~~/content/admissions.json'

const seo = useSeo('/admissions')

const d = admissionsData
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
  <section class="section adm-overview" aria-labelledby="adm-overview-title">
    <div class="container">
      <div class="split">
        <div>
          <span class="eyebrow">{{ d.overview.eyebrow }}</span>
          <h2 id="adm-overview-title" class="section-title">{{ d.overview.title }}</h2>
          <p class="lead">{{ d.overview.description }}</p>
          <div class="cluster mt-md">
            <BaseButton :to="d.enquiryCTA.to" variant="primary">{{ d.enquiryCTA.label }}</BaseButton>
            <BaseButton :to="d.feeStructureCTA.to" variant="outline">{{ d.feeStructureCTA.label }}</BaseButton>
          </div>
        </div>
        <div class="adm-note" role="note">
          <span class="adm-note__icon" aria-hidden="true">📢</span>
          <div>
            <strong class="adm-note__heading">Admissions Open</strong>
            <p class="adm-note__text">{{ d.overview.note }}</p>
            <BaseButton :to="d.downloadCTA.to" variant="light" size="sm" class="mt-xs">
              {{ d.downloadCTA.label }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 2. Classes Open ─────────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="adm-classes-title">
    <div class="container">
      <SectionHeader
        eyebrow="Seat Availability"
        title="Classes Open for Admission"
        align="center"
      />
      <ul class="classes-grid" role="list">
        <li
          v-for="item in d.classesOpen"
          :key="item.class"
          class="class-card card"
          :class="item.status === 'Open' ? 'class-card--open' : 'class-card--limited'"
        >
          <div class="class-card__header">
            <h3 class="class-card__name">{{ item.class }}</h3>
            <span
              class="class-card__badge"
              :class="item.status === 'Open' ? 'badge--open' : 'badge--limited'"
            >{{ item.status }}</span>
          </div>
          <p class="class-card__age">Age group: {{ item.ageGroup }}</p>
        </li>
      </ul>
      <p class="adm-note-small text-muted text-center mt-md">
        Seat availability varies. Contact us to confirm availability for your child's class.
      </p>
    </div>
  </section>

  <!-- ── 3. Admission Process ────────────────────────────────── -->
  <section class="section" aria-labelledby="adm-process-title">
    <div class="container">
      <SectionHeader
        eyebrow="How to Apply"
        :title="d.process.title"
        description="Follow these simple steps to complete your child's admission."
        align="center"
      />
      <ol class="process-list" aria-label="Admission steps">
        <li
          v-for="step in d.process.steps"
          :key="step.step"
          class="process-step"
        >
          <div class="process-step__num" aria-hidden="true">{{ step.step }}</div>
          <div class="process-step__content">
            <h3 class="process-step__title">{{ step.title }}</h3>
            <p class="process-step__desc">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- ── 4. Documents + Eligibility ─────────────────────────── -->
  <section class="section-soft" aria-labelledby="adm-docs-title">
    <div class="container">
      <div class="split-wide">

        <!-- Documents required -->
        <div>
          <SectionHeader
            eyebrow="Checklist"
            :title="d.documents.title"
            align="left"
          />
          <div class="card docs-card">
            <p class="docs-note text-muted">{{ d.documents.note }}</p>
            <ul class="docs-list content-list-check">
              <li v-for="item in d.documents.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Eligibility criteria -->
        <div>
          <SectionHeader
            eyebrow="Age Criteria"
            :title="d.eligibility.title"
            align="left"
          />
          <div class="card">
            <p class="docs-note text-muted">{{ d.eligibility.note }}</p>
            <div class="overflow-x-auto">
              <table class="data-table" aria-label="Age eligibility criteria">
                <thead>
                  <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Age as on 1st June</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in d.eligibility.criteria" :key="row.class">
                    <td>{{ row.class }}</td>
                    <td>{{ row.ageAsOn1June }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── 5. Important Dates ──────────────────────────────────── -->
  <section class="section" aria-labelledby="adm-dates-title">
    <div class="container">
      <SectionHeader
        eyebrow="Key Dates"
        :title="d.importantDates.title"
        align="center"
      />
      <p class="text-muted text-center mt-xs mb-md">{{ d.importantDates.note }}</p>
      <div class="dates-grid">
        <div
          v-for="item in d.importantDates.items"
          :key="item.event"
          class="date-card card-soft"
        >
          <p class="date-card__event">{{ item.event }}</p>
          <p class="date-card__date">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 6. FAQ ─────────────────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="adm-faq-title">
    <div class="container">
      <FAQSection
        eyebrow="Have Questions?"
        title="Frequently Asked Questions"
        description="Answers to the most common questions from parents about admissions."
        :items="d.faq"
        align="left"
      />
    </div>
  </section>

  <!-- ── 7. Bottom CTA ──────────────────────────────────────── -->
  <CTASection
    eyebrow="Ready to Apply?"
    title="Begin Your Child's Bright Future Today"
    description="Take the first step. Submit an enquiry or visit us at the school office — we'd love to meet you."
    :primary="d.enquiryCTA"
    :secondary="d.feeStructureCTA"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ─────────────────────────────────────────────────
.adm-overview {
  background-color: var(--color-bg);
}

.adm-note {
  background-color: var(--color-primary-soft);
  border: 1px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  align-items: flex-start;
  height: fit-content;
}

.adm-note__icon {
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.adm-note__heading {
  display: block;
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 6px;
}

.adm-note__text {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Classes grid ─────────────────────────────────────────────
.classes-grid {
  display: grid;
  gap: var(--space-md);
  list-style: none;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.class-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);

  &.class-card--open   { border-top: 3px solid var(--color-success); }
  &.class-card--limited { border-top: 3px solid var(--color-accent); }
}

.class-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}

.class-card__name {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
}

.class-card__badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: var(--text-xs);
  font-weight: 700;
  white-space: nowrap;

  &.badge--open    { background-color: var(--color-success-soft); color: var(--color-success); }
  &.badge--limited { background-color: rgba(245, 180, 0, 0.15);   color: #92600a; }
}

.class-card__age {
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin-bottom: 0;
  max-width: none;
}

.adm-note-small {
  font-size: var(--text-sm);
  margin-bottom: 0;
  max-width: none;
}

// ── Process steps ─────────────────────────────────────────────
.process-list {
  display: grid;
  gap: var(--space-md);
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.process-step {
  display: flex;
  gap: var(--space-sm);
  background-color: var(--color-bg-soft);
  border-radius: var(--radius-card);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
}

.process-step__num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-md);
  flex-shrink: 0;
}

.process-step__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 4px;
}

.process-step__desc {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Documents ────────────────────────────────────────────────
.docs-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
}

.docs-note {
  font-size: var(--text-sm);
  margin-bottom: var(--space-sm);
  max-width: none;
}

.docs-list {
  li {
    font-size: var(--text-sm);
  }
}

// ── Table (eligibility + dates) ───────────────────────────────
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);

  th, td {
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid var(--color-border);
  }

  th {
    font-weight: 700;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-muted);
    background-color: var(--color-bg-soft);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover td {
    background-color: var(--color-primary-soft);
  }
}

// ── Important dates ──────────────────────────────────────────
.dates-grid {
  display: grid;
  gap: var(--space-sm);
  max-width: 680px;
  margin-inline: auto;
}

.date-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  background-color: var(--color-bg-soft);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  flex-wrap: wrap;
}

.date-card__event {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0;
  max-width: none;
}

.date-card__date {
  font-size: var(--text-sm);
  color: var(--color-primary);
  font-weight: 700;
  margin-bottom: 0;
  max-width: none;
  white-space: nowrap;
}
</style>
