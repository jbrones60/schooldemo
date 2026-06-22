<script setup lang="ts">
import homeData from '~~/content/home.json'

const d = homeData.noticesPreview
</script>

<template>
  <section class="section notices-preview" aria-labelledby="notices-preview-title">
    <div class="container">
      <div class="notices-layout">

        <!-- Left: header + list -->
        <div class="notices-main">
          <SectionHeader
            :eyebrow="d.eyebrow"
            :title="d.title"
            :description="d.description"
            align="left"
          />

          <ul class="notice-list" role="list" aria-label="Latest notices">
            <li
              v-for="(item, index) in d.items"
              :key="index"
              class="notice-item"
            >
              <div class="notice-item__date" aria-label="`${item.dateShort.day} ${item.dateShort.month}`">
                <span class="day">{{ item.dateShort.day }}</span>
                <span class="month">{{ item.dateShort.month }}</span>
              </div>
              <div class="notice-item__content">
                <span class="notice-item__category">{{ item.category }}</span>
                <p class="notice-item__title">{{ item.title }}</p>
                <p class="notice-item__excerpt">{{ item.excerpt }}</p>
              </div>
            </li>
          </ul>

          <BaseButton :to="d.ctaTo" variant="outline" class="mt-md">
            {{ d.ctaLabel }}
          </BaseButton>
        </div>

        <!-- Right: CTA panel -->
        <aside class="notices-aside" aria-label="Stay informed">
          <div class="notices-aside__card">
            <span class="notices-aside__icon" aria-hidden="true">🔔</span>
            <h3 class="notices-aside__title">Stay Updated</h3>
            <p class="notices-aside__text">
              Check our notices board regularly for important announcements, circulars, and school updates.
            </p>
            <BaseButton to="/notices" variant="primary" block>
              All Notices
            </BaseButton>
            <BaseButton to="/downloads" variant="light" block class="mt-xs">
              School Downloads
            </BaseButton>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.notices-preview {
  background-color: var(--color-bg-soft);
}

.notices-layout {
  display: grid;
  gap: var(--space-lg);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 320px;
    align-items: start;
  }
}

// Notice list
.notice-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.notice-item {
  display: flex;
  gap: var(--space-sm);
  align-items: flex-start;
  padding-block: var(--space-sm);
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
}

.notice-item__date {
  flex-shrink: 0;
  background-color: var(--color-primary-soft);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  text-align: center;
  min-width: 52px;

  .day {
    display: block;
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1;
  }

  .month {
    display: block;
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--color-primary-dark);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
}

.notice-item__content {
  flex: 1;
  min-width: 0;
}

.notice-item__category {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}

.notice-item__title {
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
  max-width: none;
  line-height: 1.4;
}

.notice-item__excerpt {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.55;
  margin-bottom: 0;
  max-width: none;
}

// Aside card
.notices-aside__card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.notices-aside__icon {
  font-size: 36px;
  display: block;
  margin-bottom: var(--space-xs);
}

.notices-aside__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
}

.notices-aside__text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: var(--space-sm);
  max-width: none;
}
</style>
