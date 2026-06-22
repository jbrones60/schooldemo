<script setup lang="ts">
import schoolInfo   from '~~/content/school-info.json'
import feeData      from '~~/content/fee-structure.json'

const seo = useSeo('/fee-structure')
</script>

<template>
  <!-- ── Page hero ───────────────────────────────────────────── -->
  <PageHero
    :eyebrow="schoolInfo.name"
    :title="seo.heroTitle"
    :description="seo.description"
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: seo.heroTitle }]"
  />

  <!-- ── 1. Disclaimer ──────────────────────────────────────── -->
  <section class="section" aria-label="Fee information disclaimer">
    <div class="container">
      <div class="fee-disclaimer" role="note">
        <span class="fee-disclaimer__icon" aria-hidden="true">ℹ️</span>
        <div>
          <strong class="fee-disclaimer__heading">Important Notice</strong>
          <p class="fee-disclaimer__text">{{ feeData.disclaimer }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 2. Fee sections ────────────────────────────────────── -->
  <section class="section-soft fee-tables-section" aria-labelledby="fee-tables-title">
    <div class="container">
      <SectionHeader
        eyebrow="Fee Details"
        title="Class-wise Fee Structure"
        description="The figures below are for general reference only. Please contact the school office for confirmed amounts."
        align="center"
      />

      <div class="fee-sections-grid">
        <div
          v-for="section in feeData.sections"
          :key="section.id"
          class="fee-section-card"
        >
          <div class="fee-section-card__header">
            <h3 class="fee-section-card__title">{{ section.title }}</h3>
            <span class="fee-section-card__classes">{{ section.classes }}</span>
          </div>

          <div class="overflow-x-auto">
            <table class="fee-table" :aria-label="`Fee structure for ${section.title}`">
              <thead>
                <tr>
                  <th scope="col">Fee Type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Frequency</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in section.rows" :key="row.feeType">
                  <td class="fee-table__type">{{ row.feeType }}</td>
                  <td class="fee-table__amount">{{ row.amount }}</td>
                  <td>{{ row.frequency }}</td>
                  <td class="fee-table__note">{{ row.note }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 3. Payment Instructions ────────────────────────────── -->
  <section class="section" aria-labelledby="payment-instructions-title">
    <div class="container">
      <div class="split">

        <div>
          <SectionHeader
            eyebrow="How to Pay"
            :title="feeData.paymentInstructions.title"
            align="left"
          />
          <ol class="instructions-list">
            <li
              v-for="(item, i) in feeData.paymentInstructions.items"
              :key="i"
              class="instructions-list__item"
            >
              {{ item }}
            </li>
          </ol>
        </div>

        <div class="fee-office-card">
          <span class="fee-office-card__icon" aria-hidden="true">🏢</span>
          <h3 class="fee-office-card__title">Need Confirmed Figures?</h3>
          <p class="fee-office-card__text">{{ feeData.officeNote }}</p>
          <div class="stack-sm mt-md">
            <BaseButton :to="feeData.contactCTA.to" variant="primary" block>
              {{ feeData.contactCTA.label }}
            </BaseButton>
            <BaseButton :to="feeData.downloadCTA.to" variant="outline" block>
              {{ feeData.downloadCTA.label }}
            </BaseButton>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── 4. Bottom CTA ──────────────────────────────────────── -->
  <CTASection
    eyebrow="Admissions Open"
    title="Ready to Enroll Your Child?"
    description="Contact us for confirmed fee details, seat availability, or to schedule a campus visit."
    :primary="{ label: 'Contact School Office', to: '/contact' }"
    :secondary="{ label: 'Admission Process', to: '/admissions' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Disclaimer ────────────────────────────────────────────────
.fee-disclaimer {
  background-color: var(--color-primary-soft);
  border: 1px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  align-items: flex-start;
  max-width: 860px;
  margin-inline: auto;
}

.fee-disclaimer__icon {
  font-size: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}

.fee-disclaimer__heading {
  display: block;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 6px;
}

.fee-disclaimer__text {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.65;
  margin-bottom: 0;
  max-width: none;
}

// ── Fee sections grid ─────────────────────────────────────────
.fee-tables-section {
  background-color: var(--color-bg-soft);
}

.fee-sections-grid {
  display: grid;
  gap: var(--space-md);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

// ── Fee section card ──────────────────────────────────────────
.fee-section-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
}

.fee-section-card__header {
  background-color: var(--color-primary);
  padding: var(--space-sm) var(--space-md);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.fee-section-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-white);
}

.fee-section-card__classes {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

// ── Fee table ─────────────────────────────────────────────────
.fee-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);

  th, td {
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid var(--color-border);
    white-space: nowrap;
  }

  th {
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-muted);
    background-color: var(--color-bg-soft);
    white-space: nowrap;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover td {
    background-color: var(--color-primary-soft);
  }
}

.fee-table__type {
  font-weight: 600;
  color: var(--color-text);
}

.fee-table__amount {
  color: var(--color-primary);
  font-weight: 600;
}

.fee-table__note {
  color: var(--color-muted);
  font-style: italic;
}

// ── Payment instructions ──────────────────────────────────────
.instructions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding-left: var(--space-md);
}

.instructions-list__item {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.65;
  padding-left: var(--space-xs);

  &::marker {
    color: var(--color-primary);
    font-weight: 700;
  }
}

// ── Office info card ──────────────────────────────────────────
.fee-office-card {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  text-align: center;
  height: fit-content;
}

.fee-office-card__icon {
  display: block;
  font-size: 40px;
  margin-bottom: var(--space-sm);
}

.fee-office-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.fee-office-card__text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.65;
  margin-bottom: 0;
  max-width: none;
}
</style>
