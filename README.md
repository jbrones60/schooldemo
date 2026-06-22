# Bright Future School — Website

A complete, production-ready school website built with **Nuxt 4** and **custom SCSS only**. Static-first, content-driven, mobile-first, and CMS-ready.

> **Placeholder content** is used throughout. Replace all generic data in `/content` before going live. See the [Content Replacement Checklist](docs/content-replacement-checklist.md).

---

## Tech Stack

| Area | Choice |
|---|---|
| Framework | Nuxt 4 (static-first) |
| Styling | Custom SCSS — no Bootstrap, Tailwind, or UI frameworks |
| Content | JSON files + Markdown files in `/content` |
| Language | TypeScript (Vue 3 `<script setup>`) |
| Deployment | `nuxt generate` → static HTML/CSS/JS |
| Node version | 18+ recommended |

---

## Pages (10 total)

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/admissions` | Admissions |
| `/academics` | Academics |
| `/facilities` | Facilities |
| `/gallery` | Gallery |
| `/notices` | Notices & Events |
| `/downloads` | Downloads |
| `/fee-structure` | Fee Structure |
| `/contact` | Contact |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (hot reload)
npm run dev
```

The dev server starts at `http://localhost:3000`.

---

## Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for SSR / Node server deployment
npm run generate     # Generate fully static site → .output/public/

# Preview
npm run preview      # Preview the SSR build locally
```

For static hosting (Vercel, Netlify, Cloudflare Pages), use `npm run generate`.

---

## Folder Structure

```
bright-future-school/
│
├─ app/                          ← Nuxt 4 source directory (srcDir)
│   ├─ assets/
│   │   └─ scss/
│   │       ├─ main.scss         ← Imports all partials in order
│   │       ├─ _variables.scss   ← Spacing, typography, radius, shadow tokens
│   │       ├─ _reset.scss       ← Modern CSS reset
│   │       ├─ _typography.scss  ← Base type styles and link styles
│   │       ├─ _layout.scss      ← Container, section, grid, split primitives
│   │       ├─ _buttons.scss     ← Button variants
│   │       ├─ _cards.scss       ← Card variants
│   │       ├─ _forms.scss       ← Form controls and layout
│   │       ├─ _sections.scss    ← Section patterns (hero, FAQ, notices, etc.)
│   │       ├─ _utilities.scss   ← Minimal utility classes
│   │       └─ themes/
│   │           ├─ _theme-royal-blue.scss  ← ACTIVE theme (color tokens)
│   │           ├─ _theme-green-cream.scss ← Future theme option
│   │           └─ _theme-maroon-gold.scss ← Future theme option
│   │
│   ├─ components/
│   │   ├─ base/                 ← Generic reusable components
│   │   │   ├─ BaseButton.vue
│   │   │   ├─ BaseCard.vue
│   │   │   ├─ BaseIcon.vue
│   │   │   ├─ BaseFormField.vue
│   │   │   └─ SectionHeader.vue
│   │   ├─ layout/               ← Site-level layout components
│   │   │   ├─ AppNavbar.vue
│   │   │   ├─ AppFooter.vue
│   │   │   └─ TopAnnouncement.vue
│   │   ├─ sections/             ← Shared page-section components
│   │   │   ├─ PageHero.vue
│   │   │   ├─ CTASection.vue
│   │   │   ├─ FAQSection.vue
│   │   │   └─ ContactDetails.vue
│   │   └─ home/                 ← Homepage-specific components
│   │       ├─ HeroSection.vue
│   │       ├─ QuickHighlights.vue
│   │       ├─ AboutPreview.vue
│   │       ├─ WhyChooseUs.vue
│   │       ├─ AcademicsPreview.vue
│   │       ├─ FacilitiesPreview.vue
│   │       ├─ AdmissionsCTA.vue
│   │       ├─ NoticesPreview.vue
│   │       ├─ GalleryPreview.vue
│   │       ├─ TestimonialsSection.vue
│   │       └─ ContactCTA.vue
│   │
│   ├─ composables/
│   │   └─ useSeo.ts             ← Reads content/seo.json and sets page metadata
│   │
│   ├─ layouts/
│   │   └─ default.vue           ← TopAnnouncement + AppNavbar + <slot> + AppFooter
│   │
│   └─ pages/                    ← One .vue file per route
│       ├─ index.vue
│       ├─ about.vue
│       ├─ admissions.vue
│       ├─ academics.vue
│       ├─ facilities.vue
│       ├─ gallery.vue
│       ├─ notices.vue
│       ├─ downloads.vue
│       ├─ fee-structure.vue
│       └─ contact.vue
│
├─ content/                      ← ALL editable content lives here
│   ├─ school-info.json          ← School identity, contact, social links
│   ├─ navigation.json           ← Navbar and footer links
│   ├─ home.json                 ← Homepage section data
│   ├─ about.json                ← About page data
│   ├─ admissions.json           ← Admissions page data
│   ├─ academics.json            ← Academics page data
│   ├─ facilities.json           ← Facilities page data
│   ├─ faculty.json              ← Faculty/staff data (ready for future use)
│   ├─ gallery.json              ← Gallery images and categories
│   ├─ testimonials.json         ← Parent/student testimonials
│   ├─ downloads.json            ← Downloadable documents list
│   ├─ fee-structure.json        ← Fee table data
│   ├─ contact.json              ← Contact page data + enquiry form fields
│   ├─ seo.json                  ← Per-page SEO titles and descriptions
│   ├─ notices/                  ← Markdown notice files (one per notice)
│   │   ├─ admissions-open.md
│   │   ├─ holiday-notice.md
│   │   └─ exam-schedule.md
│   └─ events/                   ← Markdown event files (one per event)
│       ├─ annual-day.md
│       └─ sports-day.md
│
├─ public/                       ← Static assets (served as-is)
│   ├─ images/
│   │   ├─ logo/                 ← School logo
│   │   ├─ hero/                 ← Hero section images
│   │   ├─ about/                ← About page images
│   │   ├─ gallery/              ← Gallery photos
│   │   ├─ faculty/              ← Faculty/principal photos
│   │   ├─ facilities/           ← Facility photos
│   │   └─ academics/            ← Academics section images
│   └─ downloads/                ← PDFs and downloadable files
│
├─ docs/                         ← Project documentation
│   ├─ content-replacement-checklist.md
│   ├─ future-cms-admin-plan.md
│   └─ final-qa-checklist.md
│
├─ nuxt.config.ts
├─ package.json
├─ PROJECT_RULES.md              ← Architecture rules all contributors must follow
└─ README.md
```

---

## Updating Content

**Never edit Vue components to change school content.** All content lives in `/content`. Edit JSON or Markdown files only.

### School Identity and Contact

**File:** `content/school-info.json`

Update: school name, tagline, established year, phone, WhatsApp number, email, address, logo path, Google Maps URL, social media links, and the top announcement bar text.

### Navigation Links

**File:** `content/navigation.json`

Update page labels and routes. Used by the navbar and footer automatically.

### Homepage Sections

**File:** `content/home.json`

Sections: hero text, quick highlights/stats, about preview, why choose us, academics preview, facilities preview, admissions CTA, notices preview, gallery preview, testimonials, contact CTA, and the hero floating badge.

### About Page

**File:** `content/about.json`

Sections: school overview, mission, vision, values, principal message (name, designation, message, photo path), history timeline, and trust section.

### Admissions Page

**File:** `content/admissions.json`

Sections: overview, classes open, admission process steps, eligibility criteria, documents required, important dates, enquiry/fee CTA links, and FAQ.

### Academics Page

**File:** `content/academics.json`

Sections: overview, programme cards (pre-primary through high school), teaching methodology, co-curricular activities, assessment note, and calendar CTA.

### Facilities Page

**File:** `content/facilities.json`

List of facility items, each with: id, icon, title, description, image path, and alt text.

### Gallery

**File:** `content/gallery.json`

List of gallery images. Each item has: id, src, alt, title, category. Categories list controls the filter tabs.

**Images:** Drop photos into `public/images/gallery/` and update the `src` paths in `gallery.json`.

### Downloads

**File:** `content/downloads.json`

List of downloadable documents. Each item has: id, title, description, category, fileType, filePath, and icon.

**PDFs:** Drop files into `public/downloads/` and update the `filePath` values in `downloads.json`.

### Fee Structure

**File:** `content/fee-structure.json`

Disclaimer text, fee sections (each with title, classes, and fee rows), payment instructions, and CTA links.

### Notices and Events

**Notices:** Add/edit Markdown files in `content/notices/`
**Events:** Add/edit Markdown files in `content/events/`

Each file needs frontmatter:

```markdown
---
title: Notice Title
date: 2025-01-15
category: Admissions
excerpt: Short summary shown in the listing.
---

Full notice body text here...
```

Categories used: `Admissions`, `Academics`, `Events`, `General`

### Contact Page

**File:** `content/contact.json`

Address, phone, WhatsApp URL, email, map URL/embed, office hours, quick action buttons, and enquiry form field definitions.

### SEO Metadata

**File:** `content/seo.json`

Per-page SEO titles and descriptions. Format:

```json
"pages": {
  "/about": {
    "title": "About Us | School Name",
    "description": "..."
  }
}
```

Also set default Open Graph title, description, and image.

### Faculty Data

**File:** `content/faculty.json`

Ready for future use. Not yet wired to a dedicated faculty page (can be added in a future phase).

### Testimonials

**File:** `content/testimonials.json`

Parent and student testimonials shown on the homepage.

---

## Replacing Images

Drop real photos into the correct folder under `public/images/` and update the matching `src` or `image` field in the relevant content JSON file.

| Image type | Folder | Content file to update |
|---|---|---|
| School logo | `public/images/logo/` | `content/school-info.json` → `logo` |
| Hero background | `public/images/hero/` | `content/home.json` → `hero.image` |
| About / building | `public/images/about/` | `content/about.json` → `overview.image` |
| Principal photo | `public/images/faculty/` | `content/about.json` → `principalMessage.photo` |
| Gallery photos | `public/images/gallery/` | `content/gallery.json` → each `src` |
| Facility photos | `public/images/facilities/` | `content/facilities.json` → each `image` |
| Academics photos | `public/images/academics/` | `content/academics.json` → each `image` |

After adding images, remove the CSS placeholder in the relevant component by uncommenting the `<img>` tag and removing the placeholder `<div>`.

---

## Replacing PDFs and Downloads

1. Drop PDF files into `public/downloads/`
2. Update `content/downloads.json` — set each item's `filePath` to `/downloads/your-file.pdf`

The download button links directly to the file path. No code changes needed.

---

## Changing Colors and Theme

All color tokens are defined in one file:

```
app/assets/scss/themes/_theme-royal-blue.scss
```

This file defines CSS custom properties for primary, accent, background, text, border, and utility colors.

### Switching to a Different Theme

To switch the active color theme, edit one line in `app/assets/scss/main.scss`:

```scss
// Current active theme
@use 'themes/theme-royal-blue';

// To switch to green + cream:
// @use 'themes/theme-green-cream';

// To switch to maroon + gold:
// @use 'themes/theme-maroon-gold';
```

The alternative theme files (`_theme-green-cream.scss`, `_theme-maroon-gold.scss`) already exist and define the same CSS variable names. Populate them with your chosen colors and toggle the import.

### Modifying Spacing, Typography, Radius, Shadows

All non-color design tokens (spacing, font sizes, border radius, shadows, container width) are in:

```
app/assets/scss/_variables.scss
```

---

## Deployment

The static output from `npm run generate` is placed in `.output/public/`. Deploy this folder to any static host.

### Vercel

Vercel auto-detects Nuxt projects.

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Vercel auto-configures build settings. If prompted:
   - **Build command:** `npm run generate`
   - **Output directory:** `.output/public`
4. Deploy.

For manual deploys via CLI:

```bash
npm install -g vercel
vercel --prod
```

### Netlify

1. Connect the repository in the Netlify dashboard.
2. Set build settings:
   - **Build command:** `npm run generate`
   - **Publish directory:** `.output/public`
3. Deploy.

Or create a `netlify.toml` at the project root:

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"
```

### Cloudflare Pages

1. Connect the repository in the Cloudflare Pages dashboard.
2. Set build settings:
   - **Framework preset:** Nuxt.js
   - **Build command:** `npm run generate`
   - **Build output directory:** `.output/public`
3. Deploy.

### Railway (Static)

1. Create a new project in Railway.
2. Connect the GitHub repository.
3. Set the start command to serve the static output:
   ```bash
   npx serve .output/public
   ```
4. Add a build command: `npm run generate`

Alternatively, deploy the `.output/public` folder directly using Railway's static site option.

---

## Future CMS and Admin Options

See [`docs/future-cms-admin-plan.md`](docs/future-cms-admin-plan.md) for a full overview of CMS options when the school is ready to edit content without touching code.

---

## Documentation

| File | Contents |
|---|---|
| `docs/content-replacement-checklist.md` | Step-by-step checklist to replace all placeholder content before going live |
| `docs/future-cms-admin-plan.md` | Options for adding a content editor (Decap CMS, Nuxt Studio, Directus, Laravel) |
| `docs/final-qa-checklist.md` | Pre-launch quality assurance checklist |
| `PROJECT_RULES.md` | Architecture and coding rules all contributors must follow |

---

## Notes

- All placeholder content uses **Bright Future School** as the school name and **Guntur, Andhra Pradesh** as location. Replace before going live.
- Contact form is frontend-only in Version 1. Backend submission can be added in a future phase.
- Gallery images are CSS placeholders until real photos are provided.
- The website is designed to be **theme-switchable** by changing one SCSS import.
- All content is **replaceable without touching Vue components**.
