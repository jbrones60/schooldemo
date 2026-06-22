# School Website Phase Build Plan v2

## 0. Project Direction

Build a **custom clean school website** using **Nuxt + custom SCSS**.

This project is **static-first**, but it must be built as a **content-driven website**, not hardcoded HTML. The goal is to make the website easy to update, easy to redesign, and ready for future CMS/admin integration.

---

## 1. Confirmed Decisions

| Area | Decision |
|---|---|
| Project type | School website |
| Build style | Custom clean build |
| Direct fork | No |
| Inspiration | Use selected GitHub school/education repos only for ideas |
| Frontend | Nuxt |
| Styling | Custom SCSS only |
| UI framework | No Bootstrap, no Tailwind-heavy setup, no heavy UI library |
| Website mode | Static-first |
| Content | Generic placeholder content first, replaceable later |
| Photos | Generic/placeholder photos first, real school photos later |
| Admin/CMS | Later if needed |
| Main theme | Royal blue + white + light grey |
| Theme system | SCSS variables, theme-ready |
| Mobile | Mobile-first |
| Architecture | Content-driven, not hardcoded |

---

## 2. Main Build Philosophy

The website should be:

- Cleanly coded
- Mobile-first
- SEO-friendly
- Fast loading
- Easy to update
- Easy to redesign
- Content-driven
- Future CMS/admin-ready
- Not dependent on heavy UI frameworks
- Not full of hardcoded values

### Core Rule

Ask this before hardcoding anything:

> Will this change later?

If yes, do not hardcode it inside components.

---

## 3. Version 1 Pages

Version 1 must include **10 pages**:

1. Home
2. About
3. Admissions
4. Academics
5. Facilities
6. Gallery
7. Notices
8. Downloads
9. Fee Structure
10. Contact

---

## 4. Homepage Sections

The homepage should include:

1. Top announcement bar
2. Navbar
3. Hero section
4. Quick highlights
5. About school preview
6. Why choose us
7. Academics/programs preview
8. Facilities preview
9. Admissions call-to-action
10. Notices/events preview
11. Gallery preview
12. Parent/student testimonials
13. Contact/enquiry call-to-action
14. Footer

---

## 5. Theme Direction

Main design theme:

- Royal blue
- White
- Light grey
- Optional warm accent for buttons/highlights

Design feeling:

- Modern
- Clean
- Academic
- Parent-friendly
- Admission-focused
- Professional
- Trustworthy

### Future Theme Options

The website should be able to switch later to:

- Green + cream
- Maroon + gold

This should be possible mainly through SCSS theme variable changes.

---

## 6. Non-Hardcoded Rules

Do not hardcode these inside page/components:

- Colors
- Font sizes
- Spacing
- Border radius
- Shadows
- School name
- Logo path
- Phone number
- Email
- Address
- Google Maps link
- WhatsApp number
- Social links
- Principal/chairman message
- Admission content
- Fee details
- Download items
- Notices
- Events
- Gallery items
- Faculty details
- Facilities
- SEO page titles/descriptions

Use:

- SCSS variables
- Reusable components
- Content JSON/Markdown files
- Centralized constants/configuration
- Page-specific SEO data

---

## 7. Suggested Folder Structure

```text
school-website/
 ├─ app/
 │   ├─ assets/
 │   │   └─ scss/
 │   │       ├─ main.scss
 │   │       ├─ _reset.scss
 │   │       ├─ _variables.scss
 │   │       ├─ _typography.scss
 │   │       ├─ _layout.scss
 │   │       ├─ _buttons.scss
 │   │       ├─ _cards.scss
 │   │       ├─ _forms.scss
 │   │       ├─ _sections.scss
 │   │       ├─ _utilities.scss
 │   │       └─ themes/
 │   │           ├─ _theme-royal-blue.scss
 │   │           ├─ _theme-green-cream.scss
 │   │           └─ _theme-maroon-gold.scss
 │   ├─ components/
 │   │   ├─ base/
 │   │   │   ├─ BaseButton.vue
 │   │   │   ├─ BaseCard.vue
 │   │   │   ├─ BaseIcon.vue
 │   │   │   └─ SectionHeader.vue
 │   │   ├─ layout/
 │   │   │   ├─ AppNavbar.vue
 │   │   │   ├─ AppFooter.vue
 │   │   │   └─ TopAnnouncement.vue
 │   │   ├─ home/
 │   │   │   ├─ HeroSection.vue
 │   │   │   ├─ QuickHighlights.vue
 │   │   │   ├─ AboutPreview.vue
 │   │   │   ├─ WhyChooseUs.vue
 │   │   │   ├─ AcademicsPreview.vue
 │   │   │   ├─ FacilitiesPreview.vue
 │   │   │   ├─ AdmissionsCTA.vue
 │   │   │   ├─ NoticesPreview.vue
 │   │   │   ├─ GalleryPreview.vue
 │   │   │   ├─ TestimonialsSection.vue
 │   │   │   └─ ContactCTA.vue
 │   │   ├─ cards/
 │   │   │   ├─ NoticeCard.vue
 │   │   │   ├─ FacultyCard.vue
 │   │   │   ├─ FacilityCard.vue
 │   │   │   ├─ GalleryCard.vue
 │   │   │   ├─ DownloadCard.vue
 │   │   │   └─ FeeCard.vue
 │   │   └─ sections/
 │   │       ├─ PageHero.vue
 │   │       ├─ CTASection.vue
 │   │       ├─ FAQSection.vue
 │   │       └─ ContactDetails.vue
 │   ├─ layouts/
 │   │   └─ default.vue
 │   └─ pages/
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
 ├─ content/
 │   ├─ school-info.json
 │   ├─ navigation.json
 │   ├─ home.json
 │   ├─ about.json
 │   ├─ admissions.json
 │   ├─ academics.json
 │   ├─ facilities.json
 │   ├─ faculty.json
 │   ├─ gallery.json
 │   ├─ testimonials.json
 │   ├─ downloads.json
 │   ├─ fee-structure.json
 │   ├─ contact.json
 │   ├─ seo.json
 │   ├─ notices/
 │   │   ├─ admissions-open.md
 │   │   ├─ holiday-notice.md
 │   │   └─ exam-schedule.md
 │   └─ events/
 │       ├─ annual-day.md
 │       └─ sports-day.md
 ├─ public/
 │   ├─ downloads/
 │   │   ├─ admission-form-placeholder.pdf
 │   │   ├─ prospectus-placeholder.pdf
 │   │   └─ fee-structure-placeholder.pdf
 │   └─ images/
 │       ├─ hero/
 │       ├─ logo/
 │       ├─ gallery/
 │       ├─ faculty/
 │       ├─ facilities/
 │       ├─ academics/
 │       └─ icons/
 ├─ nuxt.config.ts
 ├─ package.json
 └─ README.md
```

---

## 8. Initial Generic Content Strategy

Because real school details are not available yet, use generic placeholders.

### Generic School Identity

Use placeholder school name:

```text
Bright Future School
```

Generic tagline:

```text
Learning with values, discipline, and excellence.
```

Generic location:

```text
Guntur, Andhra Pradesh
```

Generic phone/email:

```text
+91 98765 43210
info@brightfutureschool.edu.in
```

These should be stored in:

```text
content/school-info.json
```

Never hardcode these directly inside components.

---

## 9. Required Content Files

### `content/school-info.json`

```json
{
  "name": "Bright Future School",
  "tagline": "Learning with values, discipline, and excellence.",
  "establishedYear": "2005",
  "phone": "+91 98765 43210",
  "whatsapp": "+91 98765 43210",
  "email": "info@brightfutureschool.edu.in",
  "address": "Guntur, Andhra Pradesh",
  "principalName": "Principal Name",
  "logo": "/images/logo/logo-placeholder.svg",
  "mapUrl": "#",
  "socialLinks": {
    "facebook": "#",
    "instagram": "#",
    "youtube": "#"
  }
}
```

### `content/navigation.json`

```json
[
  { "label": "Home", "to": "/" },
  { "label": "About", "to": "/about" },
  { "label": "Admissions", "to": "/admissions" },
  { "label": "Academics", "to": "/academics" },
  { "label": "Facilities", "to": "/facilities" },
  { "label": "Gallery", "to": "/gallery" },
  { "label": "Notices", "to": "/notices" },
  { "label": "Downloads", "to": "/downloads" },
  { "label": "Fee Structure", "to": "/fee-structure" },
  { "label": "Contact", "to": "/contact" }
]
```

### `content/admissions.json`

Should include:

- Admission overview
- Classes offered
- Admission process steps
- Eligibility/age criteria placeholders
- Documents required
- Important dates placeholders
- Enquiry CTA
- Fee structure CTA
- FAQ items

### `content/downloads.json`

Should include:

- Admission form
- Prospectus
- Fee structure PDF
- Academic calendar
- Transport form
- School handbook
- Transfer certificate request form placeholder

### `content/fee-structure.json`

Should include:

- Fee note/disclaimer
- Class-wise fee rows
- Admission fee placeholder
- Tuition fee placeholder
- Transport fee placeholder
- Payment instructions
- Office confirmation note
- Contact CTA

---

## 10. Page Content Requirements

## 10.1 Home Page

Must include:

- Hero with school name, tagline, and admission CTA
- Quick stats/highlights
- About preview
- Why choose us
- Academics preview
- Facilities preview
- Admissions CTA
- Latest notices preview
- Gallery preview
- Testimonials
- Contact CTA

## 10.2 About Page

Must include:

- School overview
- Mission
- Vision
- Values
- Principal/chairman message placeholder
- History/timeline placeholder
- Why parents trust the school

## 10.3 Admissions Page

Must include:

- Admission overview
- Classes open for admission
- Admission process
- Age/eligibility criteria placeholder
- Documents required
- Important dates placeholder
- Enquiry CTA
- Fee structure CTA
- FAQ section

Suggested admission process:

1. Submit enquiry
2. Visit school office / campus tour
3. Collect or download admission form
4. Submit required documents
5. Student interaction/assessment if required
6. Fee payment and confirmation
7. Admission confirmation

Suggested documents required:

- Birth certificate
- Aadhaar card copy
- Passport size photos
- Previous school transfer certificate if applicable
- Previous academic records if applicable
- Parent/guardian ID proof
- Address proof
- Caste/income certificate if applicable

## 10.4 Academics Page

Must include:

- Curriculum placeholder
- Programs/classes offered
- Teaching methodology
- Co-curricular activities
- Assessment pattern placeholder
- Academic calendar CTA/download

Suggested programs:

- Pre-primary
- Primary
- Middle school
- High school

## 10.5 Facilities Page

Must include:

- Smart classrooms
- Science lab
- Computer lab
- Library
- Playground
- Transport
- CCTV/security
- Activity rooms
- Clean campus
- Drinking water/sanitation

## 10.6 Gallery Page

Must include:

- Image grid
- Categories
- Placeholder generic images
- Events/campus/classroom/sports categories
- Future-ready structure for real photos

## 10.7 Notices Page

Must include:

- Notice list
- Date
- Category
- Notice details link or expandable section
- Placeholder notices from markdown files

Suggested placeholder notices:

- Admissions open
- Holiday notice
- Exam timetable
- Parent-teacher meeting
- Annual day announcement

## 10.8 Downloads Page

Must include:

- Download cards
- File name
- Short description
- File type
- Download button
- Placeholder PDF files

Suggested downloads:

- Admission Form
- School Prospectus
- Fee Structure
- Academic Calendar
- Transport Application
- School Handbook
- Parent Declaration Form

## 10.9 Fee Structure Page

Must include:

- Clear fee disclaimer
- Class-wise table
- Admission fee
- Tuition fee
- Transport fee placeholder
- Payment instructions
- Office contact CTA

Important disclaimer:

```text
The fee details shown here are for general information only. Please contact the school office for the latest and confirmed fee structure.
```

## 10.10 Contact Page

Must include:

- Address
- Phone
- WhatsApp
- Email
- Office hours
- Google Maps embed placeholder
- Enquiry form UI
- Quick CTA buttons

---

## 11. SCSS Design System Requirements

Use custom SCSS only.

### Required SCSS Files

```text
app/assets/scss/
 ├─ main.scss
 ├─ _reset.scss
 ├─ _variables.scss
 ├─ _typography.scss
 ├─ _layout.scss
 ├─ _buttons.scss
 ├─ _cards.scss
 ├─ _forms.scss
 ├─ _sections.scss
 ├─ _utilities.scss
 └─ themes/
     ├─ _theme-royal-blue.scss
     ├─ _theme-green-cream.scss
     └─ _theme-maroon-gold.scss
```

### Required CSS Variables

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

## 12. AI Coding Workflow

Recommended workflow:

1. Start a new Git branch for each phase.
2. Give only one phase prompt at a time to Codex/Claude Code.
3. Review changed files.
4. Run verification commands.
5. Check mobile layout manually.
6. Commit only when the phase passes.
7. Move to next phase.

Do not give all phases together as one build prompt.

---

# 13. Phase-by-Phase Build Plan and Prompts

---

## Phase 0: Project Baseline and Rules

### Goal

Create a project instruction file so the AI coding agent follows the architecture rules.

### Prompt

```text
You are working on a custom clean school website.

Before coding, create or update PROJECT_RULES.md with the following rules:

1. Use Nuxt as the frontend framework.
2. Use custom SCSS only.
3. Do not use Bootstrap, Tailwind CSS, Vuetify, Nuxt UI, DaisyUI, or any heavy UI framework.
4. Build the website as static-first.
5. Build it as content-driven, not hardcoded HTML.
6. Store changing content in JSON/Markdown files under /content.
7. Use SCSS variables for colors, spacing, typography, radius, and shadows.
8. Use reusable Vue components for buttons, cards, sections, navbar, footer, and CTAs.
9. Main theme is royal blue + white + light grey.
10. Keep theme files ready for green/cream and maroon/gold.
11. Mobile-first design is mandatory.
12. Use generic placeholder school information for now.
13. Include pages: Home, About, Admissions, Academics, Facilities, Gallery, Notices, Downloads, Fee Structure, Contact.
14. Do not hardcode school name, phone, email, address, notices, gallery, faculty, admissions, fee details, downloads, or SEO metadata inside components.
15. Each phase must preserve existing working features.

After creating PROJECT_RULES.md, stop.
```

### Acceptance Criteria

- `PROJECT_RULES.md` exists.
- Rules are clear.
- No app code changes are required in this phase.

### Commit

```text
docs: add project build rules
```

---

## Phase 1: Nuxt Setup and Base Structure

### Goal

Create the Nuxt project and basic folder structure.

### Prompt

```text
Set up the Nuxt school website project according to PROJECT_RULES.md.

Requirements:
1. Create a Nuxt project structure.
2. Configure custom SCSS global loading.
3. Create the required app folder structure:
   - app/assets/scss
   - app/components/base
   - app/components/layout
   - app/components/home
   - app/components/cards
   - app/components/sections
   - app/layouts
   - app/pages
4. Create content folder structure:
   - content/school-info.json
   - content/navigation.json
   - content/home.json
   - content/about.json
   - content/admissions.json
   - content/academics.json
   - content/facilities.json
   - content/faculty.json
   - content/gallery.json
   - content/testimonials.json
   - content/downloads.json
   - content/fee-structure.json
   - content/contact.json
   - content/seo.json
   - content/notices
   - content/events
5. Create public image/download folders.
6. Add placeholder README instructions.
7. Do not build full UI yet.

Stop after the base structure is created.
```

### Acceptance Criteria

- Nuxt app runs.
- Folder structure exists.
- Content files exist.
- SCSS is configured globally.
- No heavy UI framework added.

### Verification

```bash
npm install
npm run dev
```

### Commit

```text
chore: initialize Nuxt school website structure
```

---

## Phase 2: SCSS Design System

### Goal

Build the reusable custom SCSS foundation.

### Prompt

```text
Implement the custom SCSS design system according to PROJECT_RULES.md.

Requirements:
1. Create these SCSS files:
   - main.scss
   - _reset.scss
   - _variables.scss
   - _typography.scss
   - _layout.scss
   - _buttons.scss
   - _cards.scss
   - _forms.scss
   - _sections.scss
   - _utilities.scss
   - themes/_theme-royal-blue.scss
   - themes/_theme-green-cream.scss
   - themes/_theme-maroon-gold.scss
2. Define CSS variables for:
   - colors
   - spacing
   - font sizes
   - radius
   - shadows
   - container width
3. Main active theme must be royal blue + white + light grey.
4. Add basic mobile-first layout classes:
   - .container
   - .section
   - .section-soft
   - .grid
   - .stack
5. Add reusable button classes:
   - .btn
   - .btn-primary
   - .btn-outline
   - .btn-light
6. Add card styles:
   - .card
   - .card-hover
7. Do not style page-specific sections yet.
8. Do not use external CSS frameworks.

Stop after SCSS foundation is complete.
```

### Acceptance Criteria

- Global SCSS loads successfully.
- Theme variables are in one place.
- No hardcoded repeated colors across multiple files.
- No Bootstrap/Tailwind added.

### Verification

```bash
npm run dev
```

### Commit

```text
style: add custom SCSS design system
```

---

## Phase 3: Content Data Setup

### Goal

Add generic placeholder data for all pages.

### Prompt

```text
Populate the content files with generic placeholder school website data.

Requirements:
1. Use "Bright Future School" as placeholder school name.
2. Fill school-info.json with generic school identity/contact details.
3. Fill navigation.json with all 10 page links:
   Home, About, Admissions, Academics, Facilities, Gallery, Notices, Downloads, Fee Structure, Contact.
4. Fill home.json with:
   - hero text
   - highlights
   - why choose us
   - CTA text
5. Fill admissions.json with:
   - overview
   - classes open
   - admission process steps
   - documents required
   - age/eligibility placeholder
   - important dates placeholder
   - FAQ
6. Fill academics.json with:
   - pre-primary
   - primary
   - middle school
   - high school
   - teaching methodology
7. Fill facilities.json with:
   - smart classrooms
   - science lab
   - computer lab
   - library
   - playground
   - transport
   - CCTV/security
8. Fill gallery.json with placeholder image paths and categories.
9. Fill downloads.json with placeholder downloadable documents.
10. Fill fee-structure.json with placeholder fee rows and disclaimer.
11. Fill contact.json with generic contact and enquiry info.
12. Add 3 placeholder notice markdown files.
13. Add 2 placeholder event markdown files.
14. Ensure content is easy to replace later.

Do not build UI yet.
```

### Acceptance Criteria

- All content files contain valid JSON/Markdown.
- Navigation includes 10 pages.
- Admissions, downloads, and fee structure content exists.
- No changing content is hardcoded in Vue components.

### Commit

```text
content: add generic school website placeholder data
```

---

## Phase 4: Base Components

### Goal

Create reusable components used across the website.

### Prompt

```text
Build reusable base and shared components using the existing SCSS design system and content files.

Components to create:
1. BaseButton.vue
2. BaseCard.vue
3. SectionHeader.vue
4. PageHero.vue
5. CTASection.vue
6. FAQSection.vue
7. ContactDetails.vue

Requirements:
- Components should accept props.
- Components should not hardcode school-specific content.
- Components should use design system classes and SCSS variables.
- Components should be mobile-first.
- Components should be accessible with proper semantic HTML.
- Do not build page layouts yet.

Stop after reusable components are complete.
```

### Acceptance Criteria

- Components are reusable.
- No school data hardcoded.
- No inline color styles.
- Components compile.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: add reusable base components
```

---

## Phase 5: Layout, Navbar, Footer, Mobile Menu

### Goal

Build the main layout structure.

### Prompt

```text
Build the global layout components.

Components:
1. TopAnnouncement.vue
2. AppNavbar.vue
3. AppFooter.vue
4. default.vue layout

Requirements:
- Navbar links must come from content/navigation.json.
- School name/logo/contact must come from content/school-info.json.
- Include mobile menu.
- Footer must include:
  - school info
  - quick links
  - contact details
  - social links placeholders
  - copyright
- Top announcement should use generic placeholder text from content or local data file.
- Layout must be mobile-first.
- Do not hardcode phone, email, address, school name, or nav links inside components.
- Do not build homepage sections yet.

Stop after layout works on all pages.
```

### Acceptance Criteria

- Navbar works on desktop and mobile.
- Footer uses content data.
- All routes are reachable.
- No nav/contact hardcoding.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: build global layout navbar and footer
```

---

## Phase 6: Page Shells and SEO

### Goal

Create all 10 page shells with page hero and SEO metadata.

### Prompt

```text
Create all 10 page shells:
1. Home
2. About
3. Admissions
4. Academics
5. Facilities
6. Gallery
7. Notices
8. Downloads
9. Fee Structure
10. Contact

Requirements:
- Each page should render.
- Each inner page should use PageHero.
- Add SEO metadata per page using content/seo.json.
- Page titles and descriptions must not be hardcoded randomly.
- Add placeholder content sections only where needed.
- Do not build full detailed page UI yet.
- Ensure route names match:
  /about
  /admissions
  /academics
  /facilities
  /gallery
  /notices
  /downloads
  /fee-structure
  /contact

Stop after all pages and SEO shells are complete.
```

### Acceptance Criteria

- All 10 pages render.
- SEO metadata exists per page.
- No broken routes.
- Mobile layout does not overflow.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: add page shells and SEO metadata
```

---

## Phase 7: Homepage Build

### Goal

Build the complete homepage.

### Prompt

```text
Build the homepage using reusable components and content files.

Homepage sections:
1. Top announcement bar is already in layout.
2. Hero section
3. Quick highlights
4. About school preview
5. Why choose us
6. Academics/programs preview
7. Facilities preview
8. Admissions call-to-action
9. Notices/events preview
10. Gallery preview
11. Testimonials
12. Contact/enquiry CTA

Requirements:
- Use content/home.json, school-info.json, admissions.json, academics.json, facilities.json, gallery.json, testimonials.json, and notices markdown where needed.
- Use component files under app/components/home.
- Do not hardcode changing content directly in index.vue.
- Use royal blue theme variables.
- Make it mobile-first and visually polished.
- Keep sections clean, parent-friendly, and admission-focused.
- Use generic placeholder image paths for now.
- Avoid large animations and unnecessary dependencies.

Stop after homepage is complete.
```

### Acceptance Criteria

- Homepage looks complete.
- Mobile layout works.
- Content comes from data files.
- No hardcoded school info.
- CTA buttons link correctly.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: build content-driven homepage
```

---

## Phase 8: Admissions, Fee Structure, Downloads Pages

### Goal

Build the most important conversion pages.

### Prompt

```text
Build the Admissions, Fee Structure, and Downloads pages.

Admissions page requirements:
- Admission overview
- Classes open for admission
- Admission process timeline/steps
- Documents required
- Eligibility/age criteria placeholder
- Important dates placeholder
- FAQ section
- CTA to contact/enquiry
- CTA to fee structure

Fee Structure page requirements:
- Fee disclaimer
- Class-wise placeholder fee table
- Admission fee
- Tuition fee
- Transport fee placeholder
- Payment instructions
- Contact school office CTA

Downloads page requirements:
- Download cards
- Placeholder PDFs from public/downloads
- File name
- Description
- File type
- Download button

General requirements:
- Use content/admissions.json, content/fee-structure.json, and content/downloads.json.
- Do not hardcode fee rows, documents, process steps, or FAQ in page components.
- Use reusable BaseCard, SectionHeader, FAQSection, CTASection.
- Mobile-first.
- Accessible tables/cards.

Stop after these three pages are complete.
```

### Acceptance Criteria

- Admissions page is complete and useful.
- Fee table is readable on mobile.
- Downloads page cards work.
- Content is data-driven.
- Placeholder PDF links do not break.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: build admissions fee structure and downloads pages
```

---

## Phase 9: About, Academics, Facilities Pages

### Goal

Build informational pages.

### Prompt

```text
Build the About, Academics, and Facilities pages.

About page:
- School overview
- Mission
- Vision
- Values
- Principal/chairman message placeholder
- Timeline/history placeholder
- Trust/why parents choose us section

Academics page:
- Curriculum overview placeholder
- Programs/classes offered
- Teaching methodology
- Co-curricular activities
- Assessment pattern placeholder
- Academic calendar CTA

Facilities page:
- Facility cards/grid
- Detailed facility sections
- Safety/security section
- Transport placeholder
- CTA to contact/admissions

Requirements:
- Use content/about.json, content/academics.json, and content/facilities.json.
- Do not hardcode changing content.
- Use reusable cards/section components.
- Mobile-first layout.
- Keep design consistent with homepage.

Stop after these pages are complete.
```

### Acceptance Criteria

- All three pages are complete.
- Content comes from JSON.
- Facility cards are responsive.
- No page looks empty/generic beyond acceptable placeholder content.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: build about academics and facilities pages
```

---

## Phase 10: Gallery, Notices, Contact Pages

### Goal

Build remaining content/contact pages.

### Prompt

```text
Build the Gallery, Notices, and Contact pages.

Gallery page:
- Responsive image grid
- Category labels
- Placeholder generic images
- Empty/fallback state if no images

Notices page:
- List notice markdown files
- Show title, date, category, excerpt
- Provide detail/expandable view or clear listing
- Placeholder notices: admissions open, holiday notice, exam schedule

Contact page:
- Contact details from content/contact.json and school-info.json
- Enquiry form UI
- Office hours
- WhatsApp/Call/Email CTA buttons
- Google Maps placeholder/embed area
- Address section

Requirements:
- Do not hardcode contact details.
- Gallery content must come from gallery.json.
- Notices content must come from markdown files or structured notice data.
- Contact form can be frontend-only placeholder for now.
- Mobile-first.
- No backend required.

Stop after these pages are complete.
```

### Acceptance Criteria

- Gallery grid works on mobile and desktop.
- Notices render correctly.
- Contact page is complete.
- Enquiry form UI exists.
- No backend form submission required yet.

### Verification

```bash
npm run dev
```

### Commit

```text
feat: build gallery notices and contact pages
```

---

## Phase 11: Responsive Polish, Accessibility, and Content Cleanup

### Goal

Polish the website before deployment.

### Prompt

```text
Perform responsive, accessibility, and content cleanup.

Requirements:
1. Check every page on mobile, tablet, and desktop.
2. Fix horizontal overflow.
3. Improve spacing consistency.
4. Ensure headings follow logical order.
5. Ensure buttons/links have accessible labels.
6. Ensure images have alt text from content files.
7. Ensure fee tables are readable on mobile.
8. Ensure navbar mobile menu works smoothly.
9. Remove unused components/styles.
10. Remove repeated hardcoded values.
11. Confirm theme variables are used consistently.
12. Make generic content professional and parent-friendly.

Do not add new major features.
Stop after polish is complete.
```

### Acceptance Criteria

- No horizontal overflow on mobile.
- All pages look consistent.
- Accessibility basics are handled.
- No obvious hardcoded repeated values.
- No unused heavy dependencies.

### Verification

```bash
npm run dev
npm run build
```

### Commit

```text
refactor: polish responsive design and accessibility
```

---

## Phase 12: Static Generation and Deployment Preparation

### Goal

Prepare for production deployment.

### Prompt

```text
Prepare the Nuxt school website for static deployment.

Requirements:
1. Ensure the project can build successfully.
2. Configure static generation/prerendering as needed.
3. Add/update README with:
   - installation steps
   - development command
   - build command
   - generate/static command
   - where to update content
   - where to update theme colors
   - where to replace images
   - where to replace downloads
4. Add deployment notes for Vercel, Netlify, Cloudflare Pages, and Railway static deployment.
5. Add a content replacement checklist.
6. Add a future CMS/admin section:
   - Decap CMS option
   - Nuxt Studio option
   - Directus option
   - Laravel backend option if connected to ERP later
7. Do not add CMS now.

Stop after deployment preparation is complete.
```

### Acceptance Criteria

- Build passes.
- Static generation works.
- README is useful.
- Content replacement instructions are clear.
- Future CMS is documented but not implemented.

### Verification

```bash
npm run build
npm run generate
```

### Commit

```text
docs: add deployment and content replacement guide
```

---

# 14. Final Testing Checklist

Before final deployment, check:

## Pages

- [ ] Home
- [ ] About
- [ ] Admissions
- [ ] Academics
- [ ] Facilities
- [ ] Gallery
- [ ] Notices
- [ ] Downloads
- [ ] Fee Structure
- [ ] Contact

## Mobile

- [ ] Navbar works
- [ ] Mobile menu works
- [ ] Hero section fits
- [ ] Cards stack properly
- [ ] Fee table is readable
- [ ] Gallery does not overflow
- [ ] Contact form fits
- [ ] Footer is clean

## Content

- [ ] School name comes from content file
- [ ] Phone/email/address come from content file
- [ ] Notices come from content files
- [ ] Gallery comes from content file
- [ ] Fees come from content file
- [ ] Downloads come from content file
- [ ] Admissions content comes from content file

## Design

- [ ] Royal blue theme is consistent
- [ ] No random hardcoded colors
- [ ] Spacing is consistent
- [ ] Typography is consistent
- [ ] Buttons are consistent
- [ ] Cards are consistent

## SEO

- [ ] Each page has title
- [ ] Each page has description
- [ ] Open Graph defaults are set
- [ ] Images have alt text
- [ ] URLs are clean

## Performance

- [ ] Images are optimized/reasonable
- [ ] No heavy UI framework
- [ ] No unnecessary animation library
- [ ] Build size acceptable
- [ ] Static generation works

---

# 15. Recommended Development Method

Best method:

```text
One phase = one prompt = one review = one commit
```

Do not ask the AI coding tool to build the full project in one shot.

This is more efficient because:

- Bugs are smaller
- Review is easier
- Design stays consistent
- Hardcoding can be caught early
- Mobile problems are fixed phase-by-phase
- The project remains maintainable

---

# 16. Suggested Git Branching

```text
main
 ├─ phase-0-project-rules
 ├─ phase-1-nuxt-setup
 ├─ phase-2-scss-system
 ├─ phase-3-content-data
 ├─ phase-4-base-components
 ├─ phase-5-layout
 ├─ phase-6-pages-seo
 ├─ phase-7-homepage
 ├─ phase-8-admissions-fees-downloads
 ├─ phase-9-info-pages
 ├─ phase-10-gallery-notices-contact
 ├─ phase-11-polish
 └─ phase-12-deployment
```

For a small project, separate branches are optional. But commits per phase are strongly recommended.

---

# 17. Final Recommendation

This phase-based plan is the best approach for this project.

Avoid:

- One giant prompt
- Directly forking a repo
- Hardcoded HTML
- Heavy UI frameworks
- Styling everything randomly
- Building admin/CMS too early

Follow:

- Clean Nuxt setup
- Custom SCSS design system
- Content-driven structure
- Mobile-first pages
- Generic content now
- Replaceable real content later
- Future CMS/admin-ready architecture
