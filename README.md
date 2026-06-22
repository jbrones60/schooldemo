# Bright Future School — Website

Custom school website built with Nuxt 4 and custom SCSS.

## Tech Stack

- **Framework**: Nuxt 4 (static-first)
- **Styling**: Custom SCSS only — no Bootstrap, Tailwind, or UI frameworks
- **Content**: JSON + Markdown files in `/content`
- **Deployment**: `nuxt generate` → static output

## Getting Started

```bash
npm install
npm run dev
```

## Build and Deploy

```bash
# Build for SSR
npm run build

# Generate static site
npm run generate

# Preview static output locally
npm run preview
```

## Project Structure

```
school-website/
 ├─ app/                   ← Nuxt 4 source directory
 │   ├─ assets/scss/       ← Custom SCSS design system
 │   ├─ components/        ← Reusable Vue components
 │   ├─ layouts/           ← Page layouts
 │   └─ pages/             ← Route pages
 ├─ content/               ← All editable content (JSON + Markdown)
 ├─ public/                ← Static assets (images, PDFs)
 ├─ nuxt.config.ts
 └─ PROJECT_RULES.md       ← Architecture rules for this project
```

## Updating Content

All editable content lives in `/content`. **Do not edit Vue components to change content.**

| What to update | File |
|---|---|
| School name, phone, email, address | `content/school-info.json` |
| Navigation links | `content/navigation.json` |
| Homepage sections | `content/home.json` |
| Admissions info | `content/admissions.json` |
| Fee structure | `content/fee-structure.json` |
| Downloads list | `content/downloads.json` |
| Notices | `content/notices/*.md` |
| Gallery | `content/gallery.json` |
| SEO titles/descriptions | `content/seo.json` |

## Updating Theme Colors

All design tokens live in:

```
app/assets/scss/_variables.scss
app/assets/scss/themes/_theme-royal-blue.scss
```

To switch to a different theme, update the `@use` import in `main.scss`.

## Replacing Images

Drop real images into:

```
public/images/hero/
public/images/gallery/
public/images/logo/
public/images/faculty/
public/images/facilities/
```

Then update the relevant paths in the `/content` JSON files.

## Replacing Downloads

Drop PDF files into `public/downloads/` and update `content/downloads.json`.

---

*Phase 1 — Base structure only. Full UI coming in subsequent phases.*
