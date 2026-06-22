<script setup lang="ts">
import contactData from '~~/content/contact.json'
import schoolInfo  from '~~/content/school-info.json'

const seo = useSeo('/contact')
const d   = contactData

// ── Enquiry form state ────────────────────────────────────────
const formData = reactive<Record<string, string>>(
  Object.fromEntries(d.enquiryForm.fields.map(f => [f.name, '']))
)
const submitted  = ref(false)
const submitting = ref(false)

function handleSubmit() {
  submitting.value = true
  // Frontend-only placeholder — no backend connected in Phase 10
  setTimeout(() => {
    submitting.value = false
    submitted.value  = true
  }, 500)
}

function resetForm() {
  submitted.value = false
  for (const key in formData) {
    formData[key] = ''
  }
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
  <section class="section-soft contact-overview" aria-labelledby="contact-overview-title">
    <div class="container">
      <div class="contact-overview__inner">
        <div>
          <span class="eyebrow">{{ d.overview.eyebrow }}</span>
          <h2 id="contact-overview-title" class="section-title">{{ d.overview.title }}</h2>
          <p class="lead">{{ d.overview.description }}</p>
        </div>
        <!-- Quick action buttons from contact.json -->
        <div class="contact-quick-actions" aria-label="Quick contact options">
          <a
            v-for="action in d.quickActions"
            :key="action.label"
            :href="action.href"
            class="contact-quick-btn"
            :aria-label="action.label"
            :target="action.href.startsWith('http') ? '_blank' : undefined"
            :rel="action.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <span class="contact-quick-btn__icon" aria-hidden="true">{{ action.icon }}</span>
            <span class="contact-quick-btn__text">
              <strong>{{ action.label }}</strong>
              <small>{{ action.description }}</small>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 2. Details + Form ────────────────────────────────────── -->
  <section class="section" aria-labelledby="contact-main-title">
    <div class="container">
      <h2 id="contact-main-title" class="visually-hidden">Contact Details and Enquiry Form</h2>
      <div class="contact-layout">

        <!-- Left: contact details + map placeholder -->
        <div class="contact-left">
          <div class="card contact-details-card">
            <h3 class="contact-details-card__heading">School Office</h3>
            <ContactDetails
              :details="d.details"
              :office-hours="d.officeHours"
              :show-quick-actions="false"
            />
          </div>

          <!-- Google Maps placeholder -->
          <div class="map-placeholder" aria-label="Map placeholder — Google Maps embed will be added here">
            <div class="map-placeholder__inner">
              <span class="map-placeholder__icon" aria-hidden="true">📍</span>
              <p class="map-placeholder__heading">{{ d.details.addressShort }}</p>
              <p class="map-placeholder__sub">Google Maps embed will be placed here</p>
              <a
                :href="d.details.mapUrl"
                class="map-placeholder__link"
                target="_blank"
                rel="noopener noreferrer"
              >View on Map →</a>
            </div>
          </div>
        </div>

        <!-- Right: enquiry form -->
        <div class="contact-right">
          <div class="form-card" role="region" aria-labelledby="form-title">
            <h3 id="form-title" class="form-card__heading">{{ d.enquiryForm.title }}</h3>
            <p class="form-card__description text-muted">{{ d.enquiryForm.description }}</p>

            <!-- Success state -->
            <div v-if="submitted" class="form-success" role="alert" aria-live="polite">
              <span class="form-success__icon" aria-hidden="true">✅</span>
              <div>
                <strong class="form-success__heading">Enquiry Received!</strong>
                <p class="form-success__message">{{ d.enquiryForm.successMessage }}</p>
                <p class="form-success__demo-note text-muted">
                  Note: This is a demo form. Please contact the school office directly using the details on this page.
                </p>
                <button class="form-success__reset" @click="resetForm">Send Another Enquiry</button>
              </div>
            </div>

            <!-- Enquiry form — fields from contact.json -->
            <form
              v-else
              class="enquiry-form"
              novalidate
              aria-label="School enquiry form"
              @submit.prevent="handleSubmit"
            >
              <BaseFormField
                v-for="field in d.enquiryForm.fields"
                :key="field.name"
                :field="field"
                :model-value="formData[field.name]"
                @update:model-value="formData[field.name] = $event"
              />

              <div class="enquiry-form__footer">
                <BaseButton
                  type="submit"
                  variant="primary"
                  :disabled="submitting"
                >
                  {{ submitting ? 'Sending…' : d.enquiryForm.submitLabel }}
                </BaseButton>
                <p class="enquiry-form__note text-muted">
                  Fields marked <span aria-hidden="true">*</span><span class="visually-hidden">with asterisk</span> are required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 3. CTA ──────────────────────────────────────────────── -->
  <CTASection
    eyebrow="Admissions Open"
    :title="`Ready to Join ${schoolInfo.name}?`"
    description="Take the first step today. Submit an enquiry or visit our school office — we look forward to meeting your family."
    :primary="{ label: 'Apply for Admission', to: '/admissions' }"
    :secondary="{ label: 'Download Admission Form', to: '/downloads' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Overview ──────────────────────────────────────────────────
.contact-overview__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

// ── Quick action buttons ───────────────────────────────────────
.contact-quick-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex-shrink: 0;
  min-width: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
}

.contact-quick-btn {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 18px;
  background-color: var(--color-bg);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background-color var(--transition-base), border-color var(--transition-base);
  min-width: 200px;

  &:hover {
    background-color: var(--color-primary-soft);
    border-color: var(--color-primary);
  }
}

.contact-quick-btn__icon {
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
}

.contact-quick-btn__text {
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-text);
  }

  small {
    font-size: var(--text-xs);
    color: var(--color-muted);
    font-weight: 400;
  }
}

// ── Two-column layout ─────────────────────────────────────────
.contact-layout {
  display: grid;
  gap: var(--space-lg);
  align-items: start;

  @media (min-width: 860px) {
    grid-template-columns: 1fr 1.4fr;
  }
}

// ── Left column ───────────────────────────────────────────────
.contact-left {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-details-card {
  padding: var(--space-md);
  border-radius: var(--radius-card);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
}

.contact-details-card__heading {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

// ── Map placeholder ───────────────────────────────────────────
.map-placeholder {
  border-radius: var(--radius-card);
  background: linear-gradient(135deg, var(--color-primary-soft) 0%, var(--color-bg-soft) 100%);
  border: 1px solid var(--color-border);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md);
  text-align: center;
}

.map-placeholder__icon {
  font-size: 40px;
  line-height: 1;
}

.map-placeholder__heading {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0;
  max-width: none;
}

.map-placeholder__sub {
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin-bottom: 0;
  max-width: none;
}

.map-placeholder__link {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

// ── Right column — form card ──────────────────────────────────
.contact-right {
  min-width: 0;
}

.form-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-lg);

  @media (max-width: 480px) {
    padding: var(--space-md);
  }
}

.form-card__heading {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.form-card__description {
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
  max-width: none;
}

// ── Success state ─────────────────────────────────────────────
.form-success {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  background-color: rgba(22, 163, 74, 0.08);
  border: 1px solid var(--color-success);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.form-success__icon {
  font-size: 32px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.form-success__heading {
  display: block;
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-success);
  margin-bottom: var(--space-xs);
}

.form-success__message {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.6;
  max-width: none;
}

.form-success__demo-note {
  font-size: var(--text-xs);
  margin-top: var(--space-xs);
  max-width: none;
}

.form-success__reset {
  margin-top: var(--space-sm);
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  padding: 0;

  &:hover {
    color: var(--color-primary-dark);
  }
}

// ── Enquiry form ──────────────────────────────────────────────
.enquiry-form__footer {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.enquiry-form__note {
  font-size: var(--text-xs);
  margin-bottom: 0;
  max-width: none;
}
</style>
