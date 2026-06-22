<script setup lang="ts">
import schoolInfo from '~~/content/school-info.json'

const seo = useSeo('/notices')

// ── Load raw markdown files at build time ─────────────────────
// Paths are relative to this file (app/pages/notices.vue → ../../ = project root)
const rawNotices = import.meta.glob('../../content/notices/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const rawEvents = import.meta.glob('../../content/events/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// ── Lightweight frontmatter parser (no package needed) ────────
interface NoticeItem {
  slug:     string
  title:    string
  date:     string
  category: string
  excerpt:  string
}

function parseFrontmatter(raw: string): Record<string, string> | null {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const fm: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx > 0) {
      fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
    }
  }
  return fm
}

function buildList(rawMap: Record<string, string>): NoticeItem[] {
  return Object.entries(rawMap)
    .map(([filePath, raw]) => {
      const fm = parseFrontmatter(raw)
      if (!fm) return null
      return {
        slug:     filePath.split('/').pop()?.replace('.md', '') ?? '',
        title:    fm.title    ?? 'Untitled',
        date:     fm.date     ?? '',
        category: fm.category ?? 'General',
        excerpt:  fm.excerpt  ?? '',
      }
    })
    .filter((n): n is NoticeItem => n !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

const notices = buildList(rawNotices)
const events  = buildList(rawEvents)

// ── Date formatting ───────────────────────────────────────────
function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ── Category badge variant ────────────────────────────────────
const categoryVariant: Record<string, string> = {
  Admissions: 'notice-badge--admissions',
  Academics:  'notice-badge--academics',
  Events:     'notice-badge--events',
  General:    'notice-badge--general',
}

function badgeClass(category: string): string {
  return categoryVariant[category] ?? 'notice-badge--general'
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

  <!-- ── 1. Notice Board ─────────────────────────────────────── -->
  <section class="section" aria-labelledby="notices-title">
    <div class="container">
      <SectionHeader
        eyebrow="Notice Board"
        title="Latest Notices &amp; Circulars"
        description="Important notices, circulars, and announcements from the school."
        align="center"
      />

      <!-- Notices list -->
      <ul v-if="notices.length" class="notices-list" role="list">
        <li
          v-for="notice in notices"
          :key="notice.slug"
          class="notice-item"
        >
          <div class="notice-item__header">
            <span
              class="notice-badge"
              :class="badgeClass(notice.category)"
            >{{ notice.category }}</span>
            <time
              v-if="notice.date"
              class="notice-item__date"
              :datetime="notice.date"
            >{{ formatDate(notice.date) }}</time>
          </div>
          <h3 class="notice-item__title">{{ notice.title }}</h3>
          <p class="notice-item__excerpt">{{ notice.excerpt }}</p>
        </li>
      </ul>

      <!-- Empty state -->
      <div v-else class="notices-empty" role="status">
        <span class="notices-empty__icon" aria-hidden="true">📋</span>
        <p class="notices-empty__text">No notices available at the moment. Please check back soon.</p>
      </div>
    </div>
  </section>

  <!-- ── 2. Events ───────────────────────────────────────────── -->
  <section class="section-soft" aria-labelledby="events-title">
    <div class="container">
      <SectionHeader
        eyebrow="School Calendar"
        title="Upcoming Events"
        description="Celebrate, participate, and be part of our school's vibrant community life."
        align="center"
      />

      <ul v-if="events.length" class="notices-list" role="list">
        <li
          v-for="event in events"
          :key="event.slug"
          class="notice-item notice-item--event"
        >
          <div class="notice-item__header">
            <span class="notice-badge notice-badge--events">{{ event.category }}</span>
            <time
              v-if="event.date"
              class="notice-item__date"
              :datetime="event.date"
            >{{ formatDate(event.date) }}</time>
          </div>
          <h3 class="notice-item__title">{{ event.title }}</h3>
          <p class="notice-item__excerpt">{{ event.excerpt }}</p>
        </li>
      </ul>

      <div v-else class="notices-empty" role="status">
        <span class="notices-empty__icon" aria-hidden="true">📅</span>
        <p class="notices-empty__text">No upcoming events listed yet.</p>
      </div>
    </div>
  </section>

  <!-- ── 3. Archive / downloads note ─────────────────────────── -->
  <section class="section" aria-label="Notice archive">
    <div class="container">
      <div class="notice-archive">
        <div class="notice-archive__content">
          <h2 class="notice-archive__title">Looking for older notices or documents?</h2>
          <p class="notice-archive__text">
            Important forms, circulars, and the academic calendar are available for download
            on our Downloads page.
          </p>
        </div>
        <div class="cluster">
          <BaseButton to="/downloads" variant="primary">Go to Downloads</BaseButton>
          <BaseButton to="/contact"   variant="outline">Contact School Office</BaseButton>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 4. CTA ──────────────────────────────────────────────── -->
  <CTASection
    eyebrow="Stay Connected"
    title="Never Miss an Update"
    description="Contact the school office or visit us to receive the latest notices and event information."
    :primary="{ label: 'Contact Us', to: '/contact' }"
    :secondary="{ label: 'Apply for Admission', to: '/admissions' }"
    variant="primary"
  />
</template>

<style lang="scss" scoped>
// ── Notices list ──────────────────────────────────────────────
.notices-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  max-width: 860px;
  margin-inline: auto;
}

.notice-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-md);
  transition: box-shadow var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-card);
  }

  &.notice-item--event {
    border-left-color: var(--color-accent);
  }
}

.notice-item__header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}

.notice-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &--admissions {
    background-color: var(--color-primary-soft);
    color: var(--color-primary-dark);
  }

  &--academics {
    background-color: rgba(22, 163, 74, 0.12);
    color: var(--color-success);
  }

  &--events {
    background-color: rgba(245, 180, 0, 0.15);
    color: #92600a;
  }

  &--general {
    background-color: var(--color-bg-soft);
    color: var(--color-muted);
  }
}

.notice-item__date {
  font-size: var(--text-xs);
  color: var(--color-muted);
  font-weight: 500;
}

.notice-item__title {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
  line-height: 1.35;
}

.notice-item__excerpt {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

// ── Empty state ───────────────────────────────────────────────
.notices-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding-block: var(--space-lg);
  text-align: center;
}

.notices-empty__icon {
  font-size: 48px;
  line-height: 1;
}

.notices-empty__text {
  font-size: var(--text-md);
  color: var(--color-muted);
  margin-bottom: 0;
  max-width: none;
}

// ── Archive section ───────────────────────────────────────────
.notice-archive {
  background-color: var(--color-bg-soft);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: flex-start;
  max-width: 860px;
  margin-inline: auto;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.notice-archive__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.notice-archive__text {
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 0;
  max-width: none;
}

.notice-archive__content {
  flex: 1;
  min-width: 0;
}
</style>
