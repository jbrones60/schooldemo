<script setup lang="ts">
withDefaults(defineProps<{
  /** Emoji, Unicode character, or future icon name */
  name: string
  /** Accessible label. If omitted the icon is hidden from assistive tech. */
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  size: 'md',
})

const sizeMap: Record<string, string> = {
  xs:  '14px',
  sm:  '18px',
  md:  '24px',
  lg:  '32px',
  xl:  '48px',
}
</script>

<template>
  <span
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="!label ? 'true' : undefined"
    class="base-icon"
    :style="{ fontSize: sizeMap[size] }"
  >{{ name }}</span>
</template>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  user-select: none;
  flex-shrink: 0;
}
</style>
