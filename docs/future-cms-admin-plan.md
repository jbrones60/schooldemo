# Future CMS and Admin Options

This document outlines options for giving the school office a content editing interface — so they can update notices, fees, gallery, and admissions information without touching code.

> **Current status:** CMS and admin are not implemented. The website is Version 1. Content is managed by editing JSON/Markdown files in `/content/` directly (or via Git).

---

## When to Add a CMS

Add a CMS when:

- The school needs to post notices or events frequently
- A non-technical staff member needs to update content
- The school wants to manage gallery photos without code access
- The admissions process needs frequent updates during enrollment season

Until then, the existing JSON/Markdown content approach works well for occasional updates.

---

## Option 1: Decap CMS (formerly Netlify CMS)

**Best for:** Simple Git-based editing. No separate backend server required.

**How it works:**
- A web-based editor UI is added to the site (e.g., at `/admin`)
- Editors log in via GitHub OAuth
- Edits are committed directly to the Git repository as JSON/Markdown changes
- The static site rebuilds automatically when changes are pushed

**Pros:**
- Free and open source
- No separate server or database needed
- Editors use a friendly form-based UI
- Works perfectly with the existing `/content` structure
- Compatible with Netlify, Cloudflare Pages, Vercel

**Cons:**
- Requires Git access and OAuth setup
- Limited UI for complex data structures
- No real-time preview without extra configuration

**Integration steps:**
1. Install `@nuxtjs/decap-cms` module (or add static admin files)
2. Create `public/admin/config.yml` mapping to content files
3. Set up GitHub OAuth (or Netlify Identity for simpler setup)
4. Add the `/admin` route to the site

**Reference:** https://decapcms.org

---

## Option 2: Nuxt Studio

**Best for:** In-browser visual content editing designed for Nuxt projects.

**How it works:**
- Nuxt Studio provides a cloud-based editor for Nuxt Content-powered sites
- Editors see a visual preview while editing JSON/Markdown
- Requires migrating from plain JSON imports to `@nuxt/content` module

**Pros:**
- Purpose-built for Nuxt
- Visual editing with live preview
- No separate backend needed
- Managed hosting for the editor

**Cons:**
- Requires migrating content reads to `@nuxt/content` module (code change)
- Paid service after free tier
- Less suitable if an ERP/school management system integration is planned

**Integration steps:**
1. Install `@nuxt/content` module
2. Migrate content imports from raw JSON to `queryCollection()` composable
3. Connect to Nuxt Studio via their platform

**Reference:** https://nuxt.studio

---

## Option 3: Directus

**Best for:** A professional admin panel with a full database backend. Good choice if the school needs multi-user management, roles, or a proper API.

**How it works:**
- Directus runs as a separate Node.js + database server
- Provides a full admin dashboard for content editors
- The Nuxt frontend fetches data from the Directus REST or GraphQL API instead of local JSON files

**Pros:**
- Full-featured CMS with roles and permissions
- Supports any content type (notices, gallery, fee tables, etc.)
- REST and GraphQL API ready for future mobile apps or school ERP integration
- Can run self-hosted on any server

**Cons:**
- Requires a separate server (VPS, Railway, Render) and database (PostgreSQL or SQLite)
- Requires refactoring all content imports from JSON to API calls
- More complex initial setup
- Running cost for the backend server

**Integration steps:**
1. Deploy Directus on a VPS or Railway/Render
2. Create content collections mirroring the current JSON structure
3. Replace JSON imports in pages with `useFetch()` calls to the Directus API
4. Switch from static generation to ISR (Incremental Static Regeneration) or SSR

**Reference:** https://directus.io

---

## Option 4: Laravel Backend (School ERP Integration)

**Best for:** If the school already uses or plans to build a school management system (ERP) with student data, fee collection, attendance, results, etc.

**How it works:**
- A Laravel backend serves as the API layer
- Manages students, fees, attendance, results, and notices in a relational database
- The Nuxt frontend consumes the API via REST or GraphQL
- The school's admin staff use a Laravel-powered admin panel (Nova, Filament, or custom)

**Pros:**
- Full school ERP capability (student records, fees, results, attendance)
- Single source of truth for all school data
- Parents can be given a login portal
- Scales to a full school management system

**Cons:**
- Significant development effort
- Requires PHP/Laravel expertise
- Requires a hosted server with PHP and MySQL/PostgreSQL
- Complete frontend data layer refactor needed

**When to consider:**
- When the school is ready to manage student admissions, fee payments, and results online
- When a parent/student portal is needed
- When the website needs to reflect live data (seat availability, fee dues, etc.)

---

## Recommendation for This Project

| Timeline | Recommendation |
|---|---|
| Short term (next 6 months) | Keep editing JSON/Markdown files directly. Use Git commits. |
| Medium term (6–18 months) | Add **Decap CMS** for simple notice and gallery management. Zero server cost. |
| Long term (18 months+) | Evaluate **Directus** or **Laravel** based on whether a full school ERP is needed. |

---

## Notes for the Developer

- The current architecture is **CMS-ready by design**. All content is in `/content/` as flat JSON/Markdown files — not hardcoded in components.
- Switching to any CMS will mainly involve **replacing the data source** (JSON import → API call) in page components.
- The SCSS design system, components, and layout are CMS-agnostic and will not need to change.
- The contact enquiry form (currently frontend-only) will need a backend endpoint when real form submission is required.
