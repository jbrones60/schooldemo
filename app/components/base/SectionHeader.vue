<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  description?: string
  align?: 'center' | 'left'
  /** Cap the width of the description text for readability */
  narrow?: boolean
}>(), {
  align: 'center',
})
</script>

<template>
  <div
    :class="[
      align === 'center' ? 'section-header' : 'section-header-left',
    ]"
  >
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>

    <h2 v-if="title" class="section-title">{{ title }}</h2>

    <p
      v-if="description"
      class="section-description"
      :class="{ 'max-w-prose': narrow }"
    >
      {{ description }}
    </p>

    <!-- Optional additional content (e.g. a CTA link inline) -->
    <slot />
  </div>
</template>
