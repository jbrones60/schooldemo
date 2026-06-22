<script setup lang="ts">
import homeData   from '~~/content/home.json'
import schoolInfo from '~~/content/school-info.json'

const d = homeData.hero
</script>

<template>
  <section class="hero" aria-label="School introduction">
    <div class="container hero__inner">

      <!-- Text column -->
      <div class="hero__text">
        <span class="hero__eyebrow">{{ d.eyebrow }}</span>

        <h1 class="hero__title">{{ d.title }}</h1>

        <p class="hero__subtitle">{{ d.subtitle }}</p>

        <div class="hero__actions">
          <BaseButton
            :to="d.ctaPrimary.to"
            variant="accent"
            size="lg"
          >
            {{ d.ctaPrimary.label }}
          </BaseButton>
          <BaseButton
            :to="d.ctaSecondary.to"
            variant="outline-white"
            size="lg"
          >
            {{ d.ctaSecondary.label }}
          </BaseButton>
        </div>

        <!-- Quick trust line -->
        <p class="hero__trust">
          Est. {{ schoolInfo.establishedYear }} · {{ schoolInfo.addressShort }}
        </p>
      </div>

      <!-- Image / visual column -->
      <div class="hero__visual" aria-hidden="true">
        <div class="hero__img-wrap">
          <!-- Real image — uncomment when available -->
          <!-- <img :src="d.image" :alt="d.imageAlt" class="hero__img" loading="eager" /> -->
          <div class="hero__img-placeholder">
            <span class="hero__img-icon">🏫</span>
            <span class="hero__img-label">{{ schoolInfo.name }}</span>
          </div>
        </div>

        <!-- Floating badge (text comes from home.json) -->
        <div v-if="d.badge" class="hero__badge">
          <span class="hero__badge-icon" aria-hidden="true">{{ d.badge.icon }}</span>
          <span class="hero__badge-text">{{ d.badge.text }}</span>
        </div>
      </div>

    </div>

    <!-- Decorative wave -->
    <div class="hero__wave" aria-hidden="true"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: var(--color-white);
  padding-top: var(--space-xl);
  padding-bottom: calc(var(--space-xl) + 32px);
  position: relative;
  overflow: hidden;
}

.hero__inner {
  display: grid;
  gap: var(--space-lg);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 55fr 45fr;
  }
}

// ── Text ─────────────────────────────────────────────────────
.hero__eyebrow {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.hero__title {
  font-family: var(--font-heading);
  font-size: var(--text-hero);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-white);
  margin-bottom: var(--space-sm);
}

.hero__subtitle {
  font-size: var(--text-lg);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  max-width: 52ch;
  margin-bottom: var(--space-md);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.hero__trust {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.04em;
  margin-bottom: 0;
  max-width: none;
}

// ── Visual ───────────────────────────────────────────────────
.hero__visual {
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

.hero__img-wrap {
  border-radius: var(--radius-card);
  overflow: hidden;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero__img-placeholder {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-card);
  aspect-ratio: 4 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.hero__img-icon {
  font-size: 72px;
  line-height: 1;
}

.hero__img-label {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
  padding-inline: var(--space-md);
}

// Floating badge
.hero__badge {
  position: absolute;
  bottom: -12px;
  left: -16px;
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-xs) var(--space-sm);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--shadow-soft);
}

.hero__badge-icon {
  font-size: 20px;
}

.hero__badge-text {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-primary-dark);
  white-space: nowrap;
}

// Decorative bottom wave
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
  background-color: var(--color-bg);
  clip-path: ellipse(55% 100% at 50% 100%);
}
</style>
