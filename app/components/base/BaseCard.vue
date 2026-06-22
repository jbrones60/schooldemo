<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  text?: string
  image?: string
  imageAlt?: string
  tag?: string
  variant?: 'default' | 'soft' | 'primary' | 'shadow'
  hover?: boolean
  imageHeight?: string
}>(), {
  variant: 'default',
  imageHeight: '200px',
})

const variantClass: Record<string, string> = {
  default: 'card',
  soft:    'card-soft',
  primary: 'card-primary',
  shadow:  'card-shadow',
}
</script>

<template>
  <div :class="[variantClass[variant], hover && 'card-hover']">

    <!-- Image slot — falls back to image prop -->
    <slot name="image">
      <div v-if="image" class="card-image" :style="{ '--img-h': imageHeight }">
        <img :src="image" :alt="imageAlt ?? ''" loading="lazy" />
      </div>
    </slot>

    <!-- Tag / category label -->
    <slot name="tag">
      <span v-if="tag" class="card-tag">{{ tag }}</span>
    </slot>

    <!-- Title -->
    <slot name="title">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
    </slot>

    <!-- Body: default slot first, then text prop fallback -->
    <slot>
      <p v-if="text" class="card-text">{{ text }}</p>
    </slot>

    <!-- Footer -->
    <slot name="footer" />

  </div>
</template>

<style scoped>
.card-image img {
  height: var(--img-h, 200px);
}
</style>
