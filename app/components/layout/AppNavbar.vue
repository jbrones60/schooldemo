<script setup lang="ts">
import navigation from '~~/content/navigation.json'
import schoolInfo from '~~/content/school-info.json'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu  = () => { isMenuOpen.value = false }

// Close menu on route change
const route = useRoute()
watch(() => route.path, closeMenu)

// Scroll shadow
const handleScroll = () => { isScrolled.value = window.scrollY > 8 }

// Close on Escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled }"
    aria-label="Main navigation"
  >
    <div class="container navbar__inner">

      <!-- ── Logo ────────────────────────────────────────────── -->
      <NuxtLink to="/" class="navbar__logo" :aria-label="`${schoolInfo.name} — home`" @click="closeMenu">
        <!-- Real logo image — uncomment when /images/logo/logo.svg is available -->
        <!-- <img :src="schoolInfo.logo" :alt="schoolInfo.logoAlt" class="navbar__logo-img" /> -->
        <span class="navbar__logo-text">
          <span class="navbar__logo-short">BFS</span>
          <span class="navbar__logo-full">{{ schoolInfo.name }}</span>
        </span>
      </NuxtLink>

      <!-- ── Desktop navigation links ──────────────────────── -->
      <ul class="navbar__links" role="list" aria-label="Site pages">
        <li v-for="link in navigation" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="navbar__link"
            active-class=""
            exact-active-class="navbar__link--active"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- ── Desktop CTA button ────────────────────────────── -->
      <div class="navbar__cta-wrap">
        <BaseButton to="/admissions" variant="primary" size="sm">
          Apply Now
        </BaseButton>
      </div>

      <!-- ── Hamburger button (mobile only) ────────────────── -->
      <button
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': isMenuOpen }"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        type="button"
        @click="toggleMenu"
      >
        <span class="navbar__bar" aria-hidden="true" />
        <span class="navbar__bar" aria-hidden="true" />
        <span class="navbar__bar" aria-hidden="true" />
      </button>

    </div>

    <!-- ── Mobile navigation menu ──────────────────────────── -->
    <div
      id="mobile-nav"
      class="navbar__mobile"
      :class="{ 'navbar__mobile--open': isMenuOpen }"
      :aria-hidden="(!isMenuOpen).toString()"
    >
      <div class="container navbar__mobile-inner">

        <ul class="navbar__mobile-links" role="list">
          <li v-for="link in navigation" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="navbar__mobile-link"
              exact-active-class="navbar__mobile-link--active"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="navbar__mobile-cta">
          <BaseButton to="/admissions" variant="primary" block @click="closeMenu">
            Apply for Admission
          </BaseButton>
        </div>

        <!-- Quick contact strip -->
        <div class="navbar__mobile-contact">
          <a :href="`tel:${schoolInfo.phone.replace(/\s/g, '')}`" class="navbar__mobile-contact-link">
            📞 {{ schoolInfo.phone }}
          </a>
          <a :href="`mailto:${schoolInfo.email}`" class="navbar__mobile-contact-link">
            ✉️ {{ schoolInfo.email }}
          </a>
        </div>

      </div>
    </div>

  </nav>
</template>

<style lang="scss" scoped>
// ── Base navbar ──────────────────────────────────────────────
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  transition: box-shadow var(--transition-base);

  &.navbar--scrolled {
    box-shadow: var(--shadow-card);
  }
}

.navbar__inner {
  display: flex;
  align-items: center;
  height: 68px;
  gap: var(--space-sm);
}

// ── Logo ────────────────────────────────────────────────────
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 40px;
  width: auto;
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.navbar__logo-short {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.04em;

  // Hide abbreviation on wide screens
  @media (min-width: 400px) {
    display: none;
  }
}

.navbar__logo-full {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
  display: none;

  @media (min-width: 400px) {
    display: block;
  }
}

// ── Desktop nav links ────────────────────────────────────────
.navbar__links {
  display: none;
  list-style: none;
  align-items: center;
  gap: 2px;
  margin-inline: auto;
  flex-wrap: nowrap;

  @media (min-width: 1024px) {
    display: flex;
  }
}

.navbar__link {
  display: block;
  padding: 6px 9px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  transition: color var(--transition-base), background-color var(--transition-base);

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-primary-soft);
  }

  &.navbar__link--active {
    color: var(--color-primary);
    font-weight: 700;
  }
}

// ── Desktop CTA ──────────────────────────────────────────────
.navbar__cta-wrap {
  display: none;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    display: block;
  }
}

// ── Hamburger ────────────────────────────────────────────────
.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-left: auto;
  border-radius: var(--radius-sm);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  transition: background-color var(--transition-base);
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-bg-soft);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
}

.navbar__bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transition:
    transform 220ms ease,
    opacity 220ms ease;
}

// Animate hamburger → X
.navbar__hamburger--open {
  .navbar__bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .navbar__bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .navbar__bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}

// ── Mobile menu ──────────────────────────────────────────────
.navbar__mobile {
  display: none;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg);
  box-shadow: var(--shadow-soft);

  &.navbar__mobile--open {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none !important;
  }
}

.navbar__mobile-inner {
  padding-block: var(--space-sm);
  padding-bottom: var(--space-md);
}

.navbar__mobile-links {
  list-style: none;
  margin-bottom: var(--space-sm);
}

.navbar__mobile-link {
  display: block;
  padding: 12px 4px;
  font-size: var(--text-md);
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-base), padding-left var(--transition-base);

  &:hover,
  &.navbar__mobile-link--active {
    color: var(--color-primary);
    padding-left: 10px;
  }

  &.navbar__mobile-link--active {
    font-weight: 700;
  }
}

.navbar__mobile-cta {
  margin-bottom: var(--space-sm);
}

.navbar__mobile-contact {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.navbar__mobile-contact-link {
  font-size: var(--text-sm);
  color: var(--color-muted);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
}
</style>
