<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'outline' | 'outline-white' | 'light' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const nuxtLink = resolveComponent('NuxtLink')

const tag = computed(() => {
  if (props.to) return nuxtLink
  if (props.href) return 'a'
  return 'button'
})

const attrs = computed(() => {
  if (props.to) {
    return { to: props.to }
  }
  if (props.href) {
    return {
      href: props.href,
      ...(props.external && { target: '_blank', rel: 'noopener noreferrer' }),
    }
  }
  return { type: props.type, disabled: props.disabled || undefined }
})

const classes = computed(() => [
  'btn',
  `btn-${props.variant}`,
  props.size !== 'md' && `btn-${props.size}`,
  props.block && 'btn-block',
  props.disabled && 'is-disabled',
])
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    :class="classes"
    :aria-disabled="disabled || undefined"
  >
    <slot />
  </component>
</template>
