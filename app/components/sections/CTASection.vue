<script setup lang="ts">
import { useId } from 'vue'

interface CtaItem {
  label: string
  to?: string
  href?: string
}

withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  primary?: CtaItem
  secondary?: CtaItem
  /** 'primary' = royal blue bg | 'soft' = light grey bg */
  variant?: 'primary' | 'soft'
}>(), {
  variant: 'primary',
})

const titleId = useId()
</script>

<template>
  <section
    :class="variant === 'soft' ? 'section-soft' : 'section-primary'"
    :aria-labelledby="titleId"
  >
    <div class="container cta-inner">

      <span
        v-if="eyebrow"
        class="eyebrow cta-eyebrow"
        :class="{ 'cta-eyebrow--primary': variant === 'primary' }"
      >
        {{ eyebrow }}
      </span>

      <h2
        :id="titleId"
        :class="variant === 'primary' ? 'section-title-white' : 'section-title'"
      >
        {{ title }}
      </h2>

      <p
        v-if="description"
        :class="variant === 'primary' ? 'section-description-white' : 'section-description'"
      >
        {{ description }}
      </p>

      <div v-if="primary || secondary || $slots.actions" class="cta-actions">
        <slot name="actions">
          <BaseButton
            v-if="primary"
            :to="primary.to"
            :href="primary.href"
            :variant="variant === 'primary' ? 'accent' : 'primary'"
          >
            {{ primary.label }}
          </BaseButton>

          <BaseButton
            v-if="secondary"
            :to="secondary.to"
            :href="secondary.href"
            :variant="variant === 'primary' ? 'outline-white' : 'outline'"
          >
            {{ secondary.label }}
          </BaseButton>
        </slot>
      </div>

      <!-- Optional slot for extra content below buttons -->
      <slot />

    </div>
  </section>
</template>

<style scoped>
.cta-inner {
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
}

.cta-eyebrow--primary {
  color: var(--color-accent);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  margin-top: var(--space-md);
}
</style>
