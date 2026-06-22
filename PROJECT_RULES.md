# PROJECT_RULES.md

## School Website — Project Architecture Rules

All contributors and AI coding agents must follow these rules at every phase.
No exceptions unless explicitly agreed and documented.

---

## 1. Framework and Stack

- Frontend framework: **Nuxt** (latest stable).
- Styling: **Custom SCSS only**.
- Do NOT use Bootstrap, Tailwind CSS, Vuetify, Nuxt UI, DaisyUI, PrimeVue, Quasar, or any other heavy UI framework.
- Do NOT use utility-class-based CSS libraries.
- Do NOT add any animation library (AOS, GSAP, Framer Motion equivalents) unless explicitly approved.
- Static-first build: target `nuxt generate` for static deployment.

---

## 2. Content-Driven Architecture

The website must be content-driven, not hardcoded.

Before hardcoding any value inside a component or page, ask:

> Will this value change later?

If yes — it must NOT be hardcoded inside a component.

### What must never be hardcoded inside Vue components or pages:

- School name
- School tagline
- Logo path
- Phone number
- WhatsApp number
- Email address
- Physical address
- Google Maps link
- Office hours
- Social media links
- Principal / chairman name or message
- Admission overview, process steps, documents required, dates
- Fee rows, fee amounts, fee disclaimer
- Download items and file paths
- Notice content
- Event content
- Gallery items and image paths
- Faculty names and details
- Facility names and descriptions
- SEO page titles and descriptions
- Open Graph metadata
- Curriculum / academic program details
- Co-curricular activity list
- Testimonial content

### Where content must live:

| Content type | Location |
|---|---|
| School identity / contact | `content/school-info.json` |
| Navigation links | `content/navigation.json` |
| Homepage section data | `content/home.json` |
| About page data | `content/about.json` |
| Admissions data | `content/admissions.json` |
| Academics data | `content/academics.json` |
| Facilities data | `content/facilities.json` |
| Faculty data | `content/faculty.json` |
| Gallery data | `content/gallery.json` |
| Testimonials | `content/testimonials.json` |
| Downloads list | `content/downloads.json` |
| Fee structure | `content/fee-structure.json` |
| Contact page data | `content/contact.json` |
| SEO metadata | `content/seo.json` |
| Notices | `content/notices/*.md` |
| Events | `content/events/*.md` |

---

## 3. SCSS Design System Rules

- All colors, spacing, font sizes, border radius, shadows, and container widths must be defined as **CSS custom properties** (variables) in the SCSS design system.
- No raw color hex values (e.g., `#1455d9`) anywhere except inside `_variables.scss` or theme files.
- No raw pixel spacing values (e.g., `padding: 24px`) except inside `_variables.scss`.
- SCSS files must follow this structure:

```
app/assets/scss/
 ├─ main.scss            ← imports all partials
 ├─ _reset.scss
 ├─ _variables.scss      ← CSS custom properties (:root)
 ├─ _typography.scss
 ├─ _layout.scss
 ├─ _buttons.scss
 ├─ _cards.scss
 ├─ _forms.scss
 ├─ _sections.scss
 ├─ _utilities.scss
 └─ themes/
     ├─ _theme-royal-blue.scss    ← active theme
     ├─ _theme-green-cream.scss   ← future option
     └─ _theme-maroon-gold.scss   ← future option
```

- Active theme is **royal blue + white + light grey**.
- Switching theme in the future must be achievable by changing only the active theme file import in `main.scss`.

### Required CSS variables (defined in `_variables.scss` or active theme file):

```scss
:root {
  --color-primary: #1455d9;
  --color-primary-dark: #0b3a99;
  --color-primary-soft: #eaf1ff;
  --color-accent: #f5b400;

  --color-bg: #ffffff;
  --color-bg-soft: #f4f7fb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;

  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-heading: Georgia, "Times New Roman", serif;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-md: 16px;
  --text-lg: 20px;
  --text-xl: 28px;
  --text-2xl: 40px;
  --text-hero: clamp(36px, 6vw, 64px);

  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --space-2xl: 96px;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-card: 20px;
  --radius-pill: 999px;

  --shadow-card: 0 12px 32px rgba(15, 35, 80, 0.08);
  --shadow-soft: 0 18px 50px rgba(15, 35, 80, 0.10);

  --container-width: 1180px;
}
```

---

## 4. Component Rules

- Components must accept **props** for any varying content.
- Components must not import and use content JSON files directly unless it is a layout-level or page-level component.
- Base components (buttons, cards, section headers) must be generic and reusable across all pages.
- Required base components:
  - `BaseButton.vue`
  - `BaseCard.vue`
  - `SectionHeader.vue`
  - `PageHero.vue`
  - `CTASection.vue`
  - `FAQSection.vue`
  - `ContactDetails.vue`
- Layout components:
  - `TopAnnouncement.vue`
  - `AppNavbar.vue`
  - `AppFooter.vue`
  - `default.vue` (Nuxt layout)
- Components must use design system classes and CSS variables — no inline styles.
- Components must be written with semantic HTML for accessibility.
- Components must be mobile-first.

---

## 5. Mobile-First Rules

- All layouts must be designed for mobile screen first.
- Desktop layout is added using `min-width` breakpoints, not `max-width`.
- No layout must overflow horizontally on any screen size.
- Navbar must include a working mobile menu.
- Fee tables must be readable on mobile (horizontal scroll or stacked).
- Gallery must not overflow on mobile.

---

## 6. Pages Required

Version 1 must include all 10 pages:

| # | Page | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | About | `/about` |
| 3 | Admissions | `/admissions` |
| 4 | Academics | `/academics` |
| 5 | Facilities | `/facilities` |
| 6 | Gallery | `/gallery` |
| 7 | Notices | `/notices` |
| 8 | Downloads | `/downloads` |
| 9 | Fee Structure | `/fee-structure` |
| 10 | Contact | `/contact` |

All routes must be reachable and not return 404.

---

## 7. SEO Rules

- Every page must have a unique `<title>` and `<meta name="description">`.
- SEO data must come from `content/seo.json`, not hardcoded per page.
- Open Graph defaults must be configured in `nuxt.config.ts`.
- All images must have descriptive `alt` text, sourced from content files.

---

## 8. Placeholder Content Rules

- Use **"Bright Future School"** as the placeholder school name.
- Use **"Learning with values, discipline, and excellence."** as the placeholder tagline.
- Use **Guntur, Andhra Pradesh** as the placeholder location.
- Use **+91 98765 43210** as placeholder phone.
- Use **info@brightfutureschool.edu.in** as placeholder email.
- Use generic/royalty-free placeholder images only (no real student photos).
- All placeholder content must be stored in content files — never inside components.

---

## 9. Phase Discipline Rules

- Each build phase must be completed and reviewed before starting the next.
- Each phase ends with a git commit.
- No phase must break a previously completed feature.
- Do not add features that are not listed in the current phase prompt.
- Do not refactor working code from previous phases unless the current phase explicitly requires it.

---

## 10. Things Explicitly Forbidden

| Forbidden | Reason |
|---|---|
| Bootstrap | Heavy, not custom SCSS |
| Tailwind CSS | Utility-class framework, violates design system rule |
| Vuetify | Heavy UI framework |
| Nuxt UI | Heavy UI framework |
| DaisyUI | Tailwind-based, forbidden |
| Hardcoded school name in components | Must come from content file |
| Hardcoded phone/email in components | Must come from content file |
| Hardcoded fee rows in page component | Must come from fee-structure.json |
| Hardcoded color hex in component `<style>` | Must use CSS variable |
| One-giant-prompt builds | Use phase-by-phase workflow |
| Installing unnecessary dependencies | Keep build lean |
| Skipping mobile testing per phase | Mobile-first is mandatory |
| Admin/CMS in early phases | Deferred to post-launch if needed |

---

## 11. Deployment Target

- Primary: Static generation via `nuxt generate`.
- Compatible with: Vercel, Netlify, Cloudflare Pages, Railway static.
- No server-side backend required for Version 1.
- Contact form is frontend-only placeholder in Version 1.

---

## 12. Future-Ready Rules

- Theme must be switchable to **green + cream** or **maroon + gold** via SCSS theme file change only.
- Content files must be replaceable with real school data without touching Vue components.
- Architecture must be ready for future CMS integration (Decap CMS, Nuxt Studio, Directus, or Laravel backend).
- No hardcoded structure that would require component rewrites to change content.

---

_Last updated: Phase 0 — Project Baseline_
