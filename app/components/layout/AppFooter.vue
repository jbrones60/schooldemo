<script setup lang="ts">
import navigation from '~~/content/navigation.json'
import schoolInfo from '~~/content/school-info.json'

const currentYear = new Date().getFullYear()

// Split navigation into two columns for footer
const navHalf = Math.ceil(navigation.length / 2)
const navCol1 = navigation.slice(0, navHalf)
const navCol2 = navigation.slice(navHalf)
</script>

<template>
  <footer class="site-footer" aria-label="Site footer">

    <!-- ── Main footer columns ─────────────────────────────── -->
    <div class="footer-main">
      <div class="container footer-grid">

        <!-- Column 1: School branding -->
        <div class="footer-col footer-col--brand">
          <p class="footer-school-name">{{ schoolInfo.name }}</p>
          <p class="footer-tagline">{{ schoolInfo.tagline }}</p>
          <p class="footer-established">Est. {{ schoolInfo.establishedYear }}</p>

          <!-- Social links -->
          <div class="footer-social" aria-label="Social media links">
            <a
              v-if="schoolInfo.socialLinks?.facebook !== '#'"
              :href="schoolInfo.socialLinks.facebook"
              class="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >fb</a>
            <a
              v-if="schoolInfo.socialLinks?.instagram !== '#'"
              :href="schoolInfo.socialLinks.instagram"
              class="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >ig</a>
            <a
              v-if="schoolInfo.socialLinks?.youtube !== '#'"
              :href="schoolInfo.socialLinks.youtube"
              class="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >yt</a>

            <!-- Placeholder when social links not set -->
            <template v-if="schoolInfo.socialLinks?.facebook === '#'">
              <span class="footer-social-placeholder" title="Facebook — link coming soon">fb</span>
              <span class="footer-social-placeholder" title="Instagram — link coming soon">ig</span>
              <span class="footer-social-placeholder" title="YouTube — link coming soon">yt</span>
            </template>
          </div>
        </div>

        <!-- Column 2: Quick links (split into two sub-columns) -->
        <div class="footer-col footer-col--links">
          <h3 class="footer-heading">Quick Links</h3>
          <div class="footer-nav-grid">
            <ul class="footer-nav" role="list">
              <li v-for="link in navCol1" :key="link.to">
                <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
            <ul class="footer-nav" role="list">
              <li v-for="link in navCol2" :key="link.to">
                <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 3: Contact details -->
        <div class="footer-col footer-col--contact">
          <h3 class="footer-heading">Contact Us</h3>

          <address class="footer-address">
            <ul class="footer-contact-list" aria-label="Contact information">

              <li v-if="schoolInfo.address" class="footer-contact-item">
                <span aria-hidden="true">📍</span>
                <span>{{ schoolInfo.address }}</span>
              </li>

              <li v-if="schoolInfo.phone" class="footer-contact-item">
                <span aria-hidden="true">📞</span>
                <a
                  :href="`tel:${schoolInfo.phone.replace(/\s/g, '')}`"
                  class="footer-contact-link"
                >{{ schoolInfo.phone }}</a>
              </li>

              <li v-if="schoolInfo.whatsapp" class="footer-contact-item">
                <span aria-hidden="true">💬</span>
                <a
                  :href="`https://wa.me/${schoolInfo.whatsapp.replace(/\D/g, '')}`"
                  class="footer-contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >WhatsApp Us</a>
              </li>

              <li v-if="schoolInfo.email" class="footer-contact-item">
                <span aria-hidden="true">✉️</span>
                <a
                  :href="`mailto:${schoolInfo.email}`"
                  class="footer-contact-link"
                >{{ schoolInfo.email }}</a>
              </li>

            </ul>
          </address>

          <div class="footer-admission-cta">
            <BaseButton to="/admissions" variant="outline-white" size="sm">
              Apply for Admission
            </BaseButton>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Copyright bar ───────────────────────────────────── -->
    <div class="footer-bottom">
      <div class="container footer-bottom__inner">
        <p class="footer-copyright">
          © {{ currentYear }} {{ schoolInfo.name }}. All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <NuxtLink to="/contact" class="footer-bottom-link">Contact</NuxtLink>
          <NuxtLink to="/downloads" class="footer-bottom-link">Downloads</NuxtLink>
          <NuxtLink to="/notices" class="footer-bottom-link">Notices</NuxtLink>
        </div>
      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
// ── Footer base ──────────────────────────────────────────────
.site-footer {
  background-color: var(--color-dark);
  color: var(--color-white);
  margin-top: auto;
}

// ── Main columns grid ─────────────────────────────────────────
.footer-main {
  padding-block: var(--space-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-grid {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.4fr 1.6fr 1.4fr;
  }
}

// ── Column base ──────────────────────────────────────────────
.footer-col {}

// ── Branding column ──────────────────────────────────────────
.footer-school-name {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-xs);
  max-width: none;
}

.footer-tagline {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: var(--space-xs);
  max-width: 28ch;
}

.footer-established {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--space-md);
  max-width: none;
}

// Social links
.footer-social {
  display: flex;
  gap: var(--space-xs);
}

.footer-social-link,
.footer-social-placeholder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: background-color var(--transition-base), color var(--transition-base);
}

.footer-social-link {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}

.footer-social-placeholder {
  background-color: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.35);
  cursor: default;
}

// ── Links column ──────────────────────────────────────────────
.footer-heading {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: var(--space-sm);
}

.footer-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xs);
}

.footer-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color var(--transition-base);

  &:hover {
    color: var(--color-white);
  }

  &.router-link-exact-active {
    color: var(--color-accent);
  }
}

// ── Contact column ───────────────────────────────────────────
.footer-address {
  font-style: normal;
  margin-bottom: var(--space-md);
}

.footer-contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.footer-contact-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color var(--transition-base);

  &:hover {
    color: var(--color-accent);
  }
}

.footer-admission-cta {
  margin-top: var(--space-md);
}

// ── Copyright bar ─────────────────────────────────────────────
.footer-bottom {
  padding-block: var(--space-sm);
  background-color: rgba(0, 0, 0, 0.25);
}

.footer-bottom__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
}

.footer-copyright {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0;
  max-width: none;
}

.footer-bottom-links {
  display: flex;
  gap: var(--space-md);
}

.footer-bottom-link {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color var(--transition-base);

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
