<script setup lang="ts">
interface OfficeHour {
  day: string
  hours: string
}

interface QuickAction {
  label: string
  icon?: string
  href: string
  description?: string
}

interface ContactInfo {
  address?: string
  phone?: string
  whatsapp?: string
  whatsappUrl?: string
  email?: string
  mapUrl?: string
}

withDefaults(defineProps<{
  details: ContactInfo
  officeHours?: OfficeHour[]
  quickActions?: QuickAction[]
  showQuickActions?: boolean
}>(), {
  officeHours: () => [],
  quickActions: () => [],
  showQuickActions: true,
})
</script>

<template>
  <div class="contact-details">

    <!-- Quick action buttons -->
    <div v-if="showQuickActions && quickActions.length" class="contact-actions">
      <a
        v-for="action in quickActions"
        :key="action.label"
        :href="action.href"
        class="contact-action-btn"
        :aria-label="action.label"
      >
        <BaseIcon v-if="action.icon" :name="action.icon" size="lg" :label="action.label" />
        <span class="contact-action-btn__text">
          <strong>{{ action.label }}</strong>
          <small v-if="action.description">{{ action.description }}</small>
        </span>
      </a>
    </div>

    <!-- Contact info list -->
    <ul class="contact-info-list" aria-label="Contact information">

      <li v-if="details.address" class="contact-info-item">
        <span class="contact-info-item__icon" aria-hidden="true">📍</span>
        <div class="contact-info-item__content">
          <strong class="contact-info-item__label">Address</strong>
          <address class="contact-info-item__value">{{ details.address }}</address>
        </div>
      </li>

      <li v-if="details.phone" class="contact-info-item">
        <span class="contact-info-item__icon" aria-hidden="true">📞</span>
        <div class="contact-info-item__content">
          <strong class="contact-info-item__label">Phone</strong>
          <a
            :href="`tel:${details.phone.replace(/\s/g, '')}`"
            class="contact-info-item__value contact-link"
          >{{ details.phone }}</a>
        </div>
      </li>

      <li v-if="details.whatsapp" class="contact-info-item">
        <span class="contact-info-item__icon" aria-hidden="true">💬</span>
        <div class="contact-info-item__content">
          <strong class="contact-info-item__label">WhatsApp</strong>
          <a
            :href="details.whatsappUrl || `https://wa.me/${details.whatsapp.replace(/\D/g, '')}`"
            class="contact-info-item__value contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >{{ details.whatsapp }}</a>
        </div>
      </li>

      <li v-if="details.email" class="contact-info-item">
        <span class="contact-info-item__icon" aria-hidden="true">✉️</span>
        <div class="contact-info-item__content">
          <strong class="contact-info-item__label">Email</strong>
          <a
            :href="`mailto:${details.email}`"
            class="contact-info-item__value contact-link"
          >{{ details.email }}</a>
        </div>
      </li>

    </ul>

    <!-- Office hours -->
    <div v-if="officeHours.length" class="office-hours">
      <h3 class="office-hours__title">Office Hours</h3>
      <ul class="office-hours__list">
        <li
          v-for="row in officeHours"
          :key="row.day"
          class="office-hours__row"
        >
          <span class="office-hours__day">{{ row.day }}</span>
          <span class="office-hours__time">{{ row.hours }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
/* Quick action buttons */
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.contact-action-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 12px 20px;
  background-color: var(--color-primary-soft);
  color: var(--color-primary-dark);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 600;
  transition: background-color var(--transition-base), color var(--transition-base);
  flex: 1;
  min-width: 160px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}

.contact-action-btn__text {
  display: flex;
  flex-direction: column;

  small {
    font-size: var(--text-xs);
    font-weight: 400;
    opacity: 0.85;
  }
}

/* Contact info list */
.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
}

.contact-info-item__icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-info-item__content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-info-item__label {
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-muted);
}

.contact-info-item__value {
  font-size: var(--text-md);
  color: var(--color-text);
  font-style: normal;
}

.contact-link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: var(--color-primary-dark);
  }
}

/* Office hours */
.office-hours {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-sm);
}

.office-hours__title {
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-muted);
  margin-bottom: var(--space-xs);
}

.office-hours__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.office-hours__row {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  color: var(--color-text);
  gap: var(--space-sm);
}

.office-hours__day {
  font-weight: 500;
}

.office-hours__time {
  color: var(--color-muted);
  text-align: right;
}
</style>
