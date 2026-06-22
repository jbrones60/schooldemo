<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

withDefaults(defineProps<{
  items: FaqItem[]
  eyebrow?: string
  title?: string
  description?: string
  align?: 'center' | 'left'
}>(), {
  align: 'left',
})
</script>

<template>
  <div class="faq-section">
    <SectionHeader
      v-if="title || eyebrow"
      :eyebrow="eyebrow"
      :title="title"
      :description="description"
      :align="align"
    />

    <div v-if="items?.length" class="faq-list">
      <details
        v-for="(item, index) in items"
        :key="index"
        class="faq-item faq-details"
      >
        <summary class="faq-item__question">
          <span>{{ item.question }}</span>
          <span class="faq-item__icon" aria-hidden="true">▾</span>
        </summary>
        <div class="faq-item__answer">
          {{ item.answer }}
        </div>
      </details>
    </div>

    <p v-else class="text-muted">No questions available.</p>
  </div>
</template>

<style scoped>
/* Remove native disclosure triangle from <summary> */
.faq-details > summary {
  list-style: none;
}
.faq-details > summary::-webkit-details-marker {
  display: none;
}

/* Rotate arrow icon when open */
.faq-details[open] .faq-item__icon {
  transform: rotate(180deg);
}

/* Animate the answer panel */
.faq-item__answer {
  padding-bottom: var(--space-sm);
}
</style>
