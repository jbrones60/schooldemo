# Ruthless Conversion + UX Audit — School Website

**Project audited:** `schooldemo-main.zip`  
**Stack observed:** Nuxt 4, custom SCSS, static generation, JSON/Markdown content  
**Primary conversion goal for this website:** turn parent visitors into **admission enquiries, WhatsApp conversations, campus visit requests, or phone calls**.

> Note: I treated the “free trial” framing as the equivalent school-site conversion action: **submit enquiry / call / WhatsApp / book visit**.

---

## Executive Verdict

The build is technically clean and far better structured than a typical vibe-coded AI project. The architecture is strong: Nuxt 4, custom SCSS, content-driven JSON/Markdown, static generation, reusable components, and documentation are all in place.

But as a conversion asset, it still feels like a polished template, not a trust-building school website. Parents will not convert because the current site has three major problems:

1. **It is not actually capturing leads yet.**
2. **It still feels generic and placeholder-heavy.**
3. **Railway deployment is configured in a way that can damage direct-route SEO/rendering.**

The next work should not be “more pages.” The next work should be **trust, urgency, proof, and lead capture**.

---

# Pass 1 — Ruthless Founder/UI Designer Audit

## First impression

The site looks organized, but not yet “real.” The layout is clean, but the brand still feels assembled from safe school-template blocks: blue gradient hero, emoji icons, generic “values and excellence” copy, generic photos, generic testimonials, generic school name, generic map placeholder.

It passes a technical checklist. It does not yet pass the parent trust test.

## What feels strong

- Clean Nuxt architecture.
- Content-driven data structure is a good foundation.
- Static generation works.
- Mobile-first layout seems considered.
- Admissions, fees, downloads, gallery, notices, and contact exist.
- Reusable design system avoids Tailwind/Bootstrap mess.
- Documentation is strong.

## What feels weak

- The hero does not sell a specific school. It sells “a school.”
- The CTA is too soft. “Apply for Admission” is good, but the fastest parent action is **Call / WhatsApp / Book a Visit**.
- The contact form is fake. That destroys trust instantly.
- The images look generic/AI/staged.
- Emojis make the product feel less premium.
- The top navigation has too many equally weighted choices.
- There is no hard proof: affiliation, board, real principal, real photos, real address map, parent names/classes, safety proof, admission deadline, seat count, results, awards.
- The fee/download content looks placeholder, so parents may assume the whole site is placeholder.

---

# Pass 2 — First-Time End User Clickthrough

## User journey: homepage

I land on the homepage. It is clean, but I immediately ask:

> “Is this a real school or a demo?”

The school name is generic. The visuals are polished but staged. The copy says “values, discipline, excellence,” which every school says. I see admission CTA, but not enough proof to click confidently.

**Moment of doubt:** no real logo, no real campus identity, no affiliation/board proof, no real local landmark.

## User journey: admissions

The admissions page is useful and structured. But I want a fast action: “Can someone call me?” The page gives information, but not enough urgency or direct conversion.

**Moment of doubt:** I do not see a dedicated admission enquiry widget embedded on this page. I have to go elsewhere.

## User journey: fee structure

The fee table is helpful. But the disclaimer and placeholder nature reduce trust.

**Moment of doubt:** if the fee information is not confirmed, I might just call instead. That is okay, but the page should push me to **Call Admissions Office / WhatsApp Fee Details**.

## User journey: downloads

The download page exists, but placeholder PDFs are dangerous. A parent clicking a fake prospectus or empty PDF will lose trust immediately.

**Moment of doubt:** “This site is not ready.”

## User journey: gallery

The gallery has a filter UI, which is good. But generic images reduce authenticity. Parents care about real classrooms, labs, campus, transport, playground, safety, and real students.

**Moment of doubt:** “Are these real photos from this school?”

## User journey: contact

This should be the conversion page. It currently has good quick actions, but the form is a demo. When the success message says the form is not connected, I lose confidence.

**Exit point:** fake form submission.

## Mobile journey

The mobile structure is usable, but there is no persistent bottom action. On a school website, mobile parents should always see one-tap:

- Call
- WhatsApp
- Apply / Enquire

Without that, the site makes the visitor work too hard.

---

# Prioritized Fix Backlog

---

## CRITICAL

### C1. Railway static deployment is misconfigured with `--single`

**Severity:** Critical  
**File:** `railway.toml`

Current start command:

```toml
startCommand = "npx serve .output/public --single --listen $PORT"
```

**Why this is bad:**  
For a prerendered Nuxt static site, `--single` can serve the root page for direct visits like `/about`, `/admissions`, and `/contact`. I verified this behavior locally when serving with `--single`: direct route HTML came back as the homepage. Without `--single`, `/about` correctly served the About page HTML.

That means SEO and first paint can be wrong for direct links. A parent opening `/admissions` from Google or WhatsApp may initially receive homepage HTML.

**Fix:**  
Serve `.output/public` normally without SPA fallback.

Recommended:

```toml
[build]
buildCommand = "npm run generate"

[deploy]
startCommand = "npx serve .output/public --listen $PORT"
healthcheckPath = "/"
healthcheckTimeout = 100
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

Better: add `serve` as a dependency or use Railway static hosting if available, so runtime does not rely on `npx` downloading packages.

**Claude Code prompt:**

```text
Fix Railway deployment for a prerendered Nuxt static site.

Open railway.toml and remove --single from the serve command. The site generates route-specific HTML in .output/public, so direct routes like /about and /admissions must serve their own index.html, not the homepage.

Change:
startCommand = "npx serve .output/public --single --listen $PORT"

To:
startCommand = "npx serve .output/public --listen $PORT"

Also add serve as a production dependency if needed so Railway does not download it at runtime. Do not change the Nuxt app architecture. Run npm run generate and verify .output/public/about/index.html and .output/public/admissions/index.html exist.
```

---

### C2. Contact form is fake and destroys trust

**Severity:** Critical  
**Files:** `app/pages/contact.vue`, `content/contact.json`

The contact form currently shows a fake success state:

> “This is a demo form. Please contact the school office directly…”

This is conversion suicide. If the parent submits an enquiry and then learns it was fake, trust is gone.

**Fix options:**

Best quick fix:
- Submit to WhatsApp with prefilled message.
- Or submit to a Railway API endpoint.
- Or use Formspree / Basin / Getform.
- Or, if deployed on Netlify later, use Netlify Forms.

Since the user has Railway, the clean approach is:
- Add a simple server API route later, or
- For now convert form submit into a WhatsApp prefilled message and open it in a new tab.

**Better form CTA:**  
Change from `Send Enquiry` to:

```text
Request Admission Callback
```

**Required fields only:**

- Parent name
- Phone / WhatsApp number
- Class applying for
- Message optional

Make email optional or remove it.

**Claude Code prompt:**

```text
Fix the contact enquiry form so it is not a fake demo.

Current behavior shows a demo success message. Replace this with a real conversion fallback: on submit, build a WhatsApp prefilled message from the form data and open the school's WhatsApp URL from contact.json.

Requirements:
1. Keep fields driven by content/contact.json.
2. Validate required fields before submission.
3. Remove all "demo form" language from the UI.
4. Change submit label to "Request Admission Callback".
5. On submit, create a WhatsApp message including parent name, phone, student name, class applied, and message.
6. Open https://wa.me/<school-number>?text=<encoded-message>.
7. Show a success/help message: "Your WhatsApp message is ready. Please send it to complete your enquiry."
8. Do not add backend logic yet.
9. Do not hardcode the WhatsApp number; read it from contact.json or school-info.json.
```

---

### C3. Admission year/session is outdated and scattered

**Severity:** Critical  
**Files:** `content/home.json`, `content/school-info.json`, `content/seo.json`, `content/admissions.json`, `content/notices/*.md`

The site says admissions open for **2025–26**. Today the project is being reviewed in 2026. This makes the site look abandoned.

**Fix:**  
Create one central session value:

```json
"admissionSession": "2026–27"
```

Put it in `content/school-info.json` or `content/admissions.json`, then reference it everywhere.

**Claude Code prompt:**

```text
Centralize the admission academic year/session.

Add an admissionSession field to content/school-info.json:
"admissionSession": "2026–27"

Replace hardcoded "2025–26" references in content/home.json, content/seo.json, content/admissions.json, and content/notices/*.md with updated 2026–27 content.

If a Vue component displays the admission session, it must read from content, not hardcode it.

Run a project-wide search for "2025" and "2025–26" and ensure no outdated admission-year references remain except historical timeline content if intentional.
```

---

### C4. The site still looks like a template because identity is fake

**Severity:** Critical  
**Files:** `content/school-info.json`, `content/about.json`, `content/testimonials.json`, `public/images/`, `app/components/layout/AppNavbar.vue`

The project currently uses:

- Bright Future School
- BFS text logo
- generic phone
- generic address
- generic photos
- generic principal
- generic testimonials

This is acceptable during development, but unacceptable for launch. A school website must feel local and real within 5 seconds.

**Fix:**  
Before launch, replace:

- School name
- Logo
- Address
- Map link
- Real WhatsApp/phone/email
- Board/affiliation
- Real principal name/photo/message
- Real campus photos
- Real testimonials with parent name + child class
- Real gallery/event photos

**Design instruction:**  
Do not launch with a text-only BFS logo. Add even a simple crest/mark.

**Claude Code prompt:**

```text
Add a launch-readiness identity layer.

Create a new docs/launch-required-real-content.md file listing all real identity assets required before launch:
- school name
- logo
- phone
- WhatsApp
- email
- full address
- Google Maps link/embed
- board/affiliation
- principal name/photo/message
- campus photos
- gallery photos
- testimonials
- fee PDFs
- admission form/prospectus PDFs

Also update README to clearly state that launching with placeholder identity is not allowed.
Do not replace content with invented real data.
```

---

### C5. The hero is polished but not conversion-obsessed

**Severity:** Critical  
**Files:** `app/components/home/HeroSection.vue`, `content/home.json`

Current hero CTA:

- Apply for Admission
- Explore Our School

This is okay, but not sharp enough. A parent often wants immediate human contact, not a journey through pages.

**Fix:**  
Hero should have a conversion cluster:

Primary:
```text
Request Admission Callback
```

Secondary:
```text
WhatsApp Admissions
```

Tertiary:
```text
View Fees
```

Also show a trust strip above/below CTA:

```text
Admissions open for 2026–27 · Pre-Primary to Class 10 · Campus visits available
```

**Claude Code prompt:**

```text
Upgrade the homepage hero for conversion.

Update content/home.json hero CTAs and HeroSection.vue to support:
1. Primary CTA: Request Admission Callback → /contact
2. Secondary CTA: WhatsApp Admissions → WhatsApp URL from school-info/contact data
3. Tertiary text link: View Fee Structure → /fee-structure

Add a compact trust line driven by content:
"Admissions open for 2026–27 · Pre-Primary to Class 10 · Campus visits available"

Do not hardcode school name, admission session, or WhatsApp number in the component.
Keep the existing visual style but make the CTA area more conversion-focused.
```

---

### C6. No persistent mobile conversion bar

**Severity:** Critical  
**Files:** `app/layouts/default.vue`, `app/components/layout/`

Most parents will visit on mobile. The site should always keep one-tap conversion actions visible.

**Fix:**  
Add a mobile-only sticky bottom bar:

- Call
- WhatsApp
- Apply

Show only under 768px. Add bottom padding to the main layout so it does not cover content.

**Claude Code prompt:**

```text
Add a mobile-only sticky conversion bar.

Create app/components/layout/MobileStickyCTA.vue.
It should read phone/WhatsApp from content/school-info.json or content/contact.json.

Buttons:
1. Call → tel:
2. WhatsApp → wa.me link
3. Apply → /admissions or /contact

Requirements:
- Mobile only below 768px.
- Fixed bottom.
- Accessible labels.
- Uses theme variables.
- Does not cover footer/content; add layout padding-bottom on mobile if needed.
- No hardcoded phone numbers.
Add it to app/layouts/default.vue after AppFooter or inside layout root.
```

---

## HIGH IMPACT

### H1. Navigation has too many top-level links

**Impact:** High  
**File:** `content/navigation.json`, `AppNavbar.vue`

There are 10 navigation links plus an Apply button. That is too much cognitive load.

**Fix:**  
Keep top nav focused:

- Home
- About
- Admissions
- Academics
- Facilities
- Gallery
- Contact

Move these into a “Resources” dropdown/menu:

- Notices
- Downloads
- Fee Structure

For mobile, grouping is even more important.

**Claude Code prompt:**

```text
Simplify the desktop navigation for conversion.

Update navigation structure to support grouping:
Top-level: Home, About, Admissions, Academics, Facilities, Gallery, Contact
Resources group: Notices, Downloads, Fee Structure

Update AppNavbar.vue to render grouped resources as a simple dropdown or compact submenu on desktop and as grouped links on mobile.

Do not hardcode labels/routes in the template; use content/navigation.json.
Keep the Apply Now CTA visible.
```

---

### H2. Emojis make the UI feel less premium

**Impact:** High  
**Files:** many home/page components, content JSON files

The site uses emoji icons heavily: 🎓, 🏫, 👩‍🏫, 📚, 🌱, ⚽, 🛡️, etc. This makes the interface feel less like Linear/Vercel and more like a quick AI-generated template.

**Fix:**  
Replace emojis with:
- CSS icon circles with initials/symbols,
- simple inline SVG components,
- or a small internal icon map.

Do not install a heavy icon library yet.

**Claude Code prompt:**

```text
Remove emoji-driven visual language from the public UI.

Create a lightweight internal icon system in BaseIcon.vue that maps semantic icon names to simple inline SVG icons or clean text-free CSS symbols.

Update content JSON icon values from emoji to semantic names:
education, faculty, academics, values, sports, safety, classroom, lab, library, transport, phone, email, whatsapp.

Update components to render BaseIcon with semantic names. Avoid installing an icon library.
Decorative icons should use aria-hidden="true".
```

---

### H3. Typography feels generic and dated

**Impact:** High  
**Files:** `app/assets/scss/_variables.scss`, `_typography.scss`

The Georgia heading style gives an older institutional feel, but the requested direction was modern, clean, academic. It can work, but right now it feels default rather than designed.

**Fix:**  
Use a sharper system stack:
- Body: system sans
- Headings: same sans with stronger weight, tighter tracking

Or use a carefully selected webfont later.

**Claude Code prompt:**

```text
Modernize typography without adding external font dependencies.

Update SCSS tokens:
- Use a modern system sans stack for both body and heading.
- Make headings bolder, cleaner, and slightly tighter.
- Keep readable paragraph line-height.
- Preserve mobile clamp sizing.

Do not import Google Fonts yet.
Check all pages after the typography change.
```

---

### H4. Real proof is missing above the fold

**Impact:** High  
**Files:** `content/home.json`, `HeroSection.vue`, `QuickHighlights.vue`

The current highlights are generic:

- 500+ students
- 30+ faculty
- 18+ years
- 10+ activities

These help, but they are not specific proof.

**Fix:**  
Add proof chips:

- Board/affiliation
- Classes offered
- School timing
- Transport available
- Campus visits open
- Safety/CCTV

**Claude Code prompt:**

```text
Add a proof strip to the homepage hero or immediately below it.

Content should be driven by home.json:
- Board / curriculum placeholder
- Pre-Primary to Class 10
- Transport available
- Campus visits open
- Safe campus / CCTV

Render as compact proof chips/cards below the hero CTA area.
No hardcoded values in the component.
```

---

### H5. Contact page asks too much before proving value

**Impact:** High  
**Files:** `content/contact.json`, `app/pages/contact.vue`

The enquiry form has six fields. That is not terrible, but for first contact, it should be lighter.

**Fix:**  
For the primary form, use only:

1. Parent name
2. WhatsApp number
3. Class applying for
4. Message optional

Student name can come later.

**Claude Code prompt:**

```text
Reduce enquiry form friction.

Update content/contact.json enquiryForm.fields to make the primary form shorter:
- parentName required
- phone required
- classApplied required
- message optional

Remove studentName from the first-step form or make it optional. Keep email optional or remove it.

Update success/help copy to push WhatsApp/callback completion.
```

---

### H6. Gallery still needs authenticity labels

**Impact:** High  
**Files:** `content/gallery.json`, `app/pages/gallery.vue`

Even with real photos, gallery needs context: date, event, location, class, category. Parents want proof.

**Fix:**  
Add fields:

```json
"date": "2026",
"location": "School Campus",
"caption": "Students participating in..."
```

**Claude Code prompt:**

```text
Improve gallery credibility.

Update gallery.json items to support caption, year/date, and location fields.
Update Gallery page cards to display title, category, and a small caption/location line.

Keep placeholders for now, but make the data model ready for real school photos.
```

---

### H7. Downloads page should not expose fake PDFs at launch

**Impact:** High  
**Files:** `public/downloads/`, `content/downloads.json`, `app/pages/downloads.vue`

Placeholder PDFs are useful for development but dangerous in production.

**Fix:**  
Add `isPlaceholder` or `isPublished` field to downloads. Hide or mark unpublished files before launch.

**Claude Code prompt:**

```text
Make downloads launch-safe.

Add an isPublished boolean to each item in content/downloads.json.
Update Downloads page to show only published downloads by default.
If no published downloads exist, show a helpful message:
"Official documents will be uploaded soon. Please contact the school office."

Do not show fake placeholder PDFs as real documents.
```

---

### H8. Map placeholder weakens local trust

**Impact:** High  
**Files:** `content/contact.json`, `app/pages/contact.vue`

The map URL is `#`, and the map is a placeholder. For local school conversion, map trust is important.

**Fix:**  
Add real Google Maps URL/embed before launch. If unavailable, hide “View on Map.”

**Claude Code prompt:**

```text
Make the map section safe and credible.

Update Contact page:
- If mapUrl is "#" or empty, do not render a "View on Map" link.
- If mapEmbed exists, render the embed.
- If mapEmbed is empty, render a clean placeholder that says "Map will be updated soon" without a fake clickable link.

Keep map data in contact.json.
```

---

### H9. SEO lacks sitemap, robots, and structured data

**Impact:** High  
**Files:** `public/`, `nuxt.config.ts`, `content/school-info.json`

The site has page SEO, but not full launch SEO.

**Fix:**

- Add `public/robots.txt`
- Add static `public/sitemap.xml` or generate one
- Add `School` / `EducationalOrganization` JSON-LD
- Add local address/phone structured data

**Claude Code prompt:**

```text
Add launch-ready SEO basics without adding heavy packages.

1. Create public/robots.txt allowing all crawlers and pointing to /sitemap.xml.
2. Create public/sitemap.xml with all 10 routes.
3. Add a JSON-LD structured data block for the school in the default layout or a composable, using content/school-info.json.
4. Use @type "School" or "EducationalOrganization".
5. Include name, url placeholder, address, telephone, email, and social links if present.
6. Do not hardcode school data inside the JSON-LD component.
```

---

### H10. Image performance and layout stability need tightening

**Impact:** High  
**Files:** `public/images/`, components using `<img>`

The images are JPG and some are large. Components should include width/height or aspect-ratio containers to reduce layout shift.

**Fix:**

- Convert hero/about images to WebP/AVIF.
- Add width/height attributes where `<img>` is used.
- Use `loading="lazy"` for non-critical images.
- Keep hero image eager only if it is above the fold.
- Use real dimensions.

**Claude Code prompt:**

```text
Improve image performance and layout stability.

Audit all <img> tags.
For each image:
- Add width and height attributes where possible.
- Keep object-fit and aspect-ratio wrappers.
- Use loading="lazy" for non-hero images.
- Keep hero image eager only on desktop if necessary.

Do not install Nuxt Image yet. Do not change image content.
Add a docs/image-optimization-guide.md explaining how to replace JPGs with WebP later.
```

---

### H11. Testimonials are generic and need proof structure

**Impact:** High  
**Files:** `content/testimonials.json`, `TestimonialsSection.vue`

Current testimonials feel generic. Real parent proof should include:

- Parent name
- Child class
- Specific outcome
- Optional photo
- Location/neighborhood

**Claude Code prompt:**

```text
Upgrade the testimonial data model.

Update testimonials.json to support:
- parentName
- relation
- childClass
- quote
- outcomeTag
- optional photo

Update TestimonialsSection.vue to display childClass and outcomeTag if present.
Do not invent real testimonials; keep placeholders clearly replaceable.
```

---

### H12. Notices are parsed in page only; homepage notices are duplicated

**Impact:** High  
**Files:** `content/home.json`, `app/components/home/NoticesPreview.vue`, `app/pages/notices.vue`

The homepage uses `home.json.noticesPreview.items`, while the notices page parses Markdown. This creates stale duplicated notices.

**Fix:**  
Create a shared composable for markdown notices, then use it in both homepage preview and notices page.

**Claude Code prompt:**

```text
Remove duplicated notices data.

Create a composable useNotices.ts that loads and parses content/notices/*.md and content/events/*.md using the existing import.meta.glob raw approach.

Use this composable in:
- app/pages/notices.vue
- app/components/home/NoticesPreview.vue

Remove hardcoded noticesPreview.items from content/home.json or keep only heading/CTA text there.
Homepage should show latest 3 parsed notices.
Do not add a markdown package.
```

---

### H13. Admissions page needs an embedded conversion form

**Impact:** High  
**Files:** `app/pages/admissions.vue`, `contact.json`, possible reusable form component`

Admissions is where intent is highest. Do not make parents travel to Contact.

**Fix:**  
Add a compact enquiry card in admissions page right column or after overview.

**Claude Code prompt:**

```text
Add a compact admission enquiry CTA/form to the Admissions page.

Option A: reusable mini form driven by contact.json fields.
Option B: strong CTA card with Call, WhatsApp, and Request Callback buttons.

Keep it above the fold on desktop and near the top on mobile.
No backend required if using WhatsApp prefill from the contact form fix.
```

---

## NICE TO HAVE

### N1. Create a custom 404 page

Add a school-branded 404 with buttons:

- Go Home
- Contact School
- Admissions

---

### N2. Add favicon and social preview image

Current OG image points to a placeholder logo. Add:

- favicon
- `og-school-preview.jpg`
- Apple touch icon

---

### N3. Add subtle motion, not animation theater

Use small CSS transitions only:

- card hover lift
- button hover
- section fade if desired later

No GSAP. No animation library.

---

### N4. Add a Faculty/Leadership page

There is faculty content but no faculty route. Parents care about teachers. Add later:

- Principal
- Teaching staff
- Qualifications
- Departments

---

### N5. Add a campus visit flow

A dedicated “Book Campus Visit” page or section could convert better than a general contact form.

---

### N6. Add FAQ search/filter on Admissions

Not required now, but useful if admissions FAQ grows.

---

### N7. Add Decap CMS later

Do not add now. After real content is ready, Decap CMS can let staff edit notices/downloads without developer access.

---

# Recommended Implementation Order

## Sprint 1 — Conversion blockers

1. Fix Railway `--single`.
2. Make contact form real via WhatsApp prefill.
3. Centralize admission session and update to 2026–27.
4. Add mobile sticky CTA.
5. Upgrade hero CTA cluster.

## Sprint 2 — Trust blockers

1. Replace logo/name/contact/map with real school data.
2. Hide placeholder PDFs unless published.
3. Add proof strip.
4. Add structured data, sitemap, robots.
5. Add real photos or clearly mark placeholders as development-only.

## Sprint 3 — Premium UI polish

1. Replace emoji icons.
2. Simplify navigation.
3. Modernize typography.
4. Tighten testimonials.
5. Remove duplicate notices data.

---

# One-Shot Claude Code Prompt for the Next Phase

Use this if you want Claude Code to implement the highest-priority fixes in one controlled pass.

```text
You are improving a Nuxt 4 static school website for conversion and launch readiness.

Read:
- PROJECT_RULES.md
- README.md
- docs/final-qa-checklist.md
- ruthless-conversion-ux-audit.md

Implement only the CRITICAL fixes from the audit:

1. Fix railway.toml by removing --single from the serve command.
2. Ensure direct routes like /about and /admissions serve their own prerendered HTML.
3. Make the contact form non-fake by converting submit into a WhatsApp prefilled message flow using data from contact.json/school-info.json.
4. Remove all "demo form" language from the UI.
5. Centralize admission session as admissionSession in content/school-info.json and update outdated 2025–26 references to 2026–27.
6. Upgrade the homepage hero CTAs to focus on Request Admission Callback, WhatsApp Admissions, and View Fee Structure.
7. Add a mobile-only sticky CTA bar with Call, WhatsApp, and Apply.
8. Do not add backend logic.
9. Do not install UI frameworks.
10. Do not hardcode phone, WhatsApp, school name, or admission session in Vue templates.
11. Keep all content-driven architecture intact.
12. Run npm run generate and confirm all 10 routes prerender.

Report:
- Files changed
- What was fixed
- Any remaining critical issue
- Build/generate result
```

---

# Final Founder Verdict

This is a solid technical build, but not yet a real conversion machine.

Right now it says:

> “Here is a nicely structured school website template.”

It needs to say:

> “This is a real school near you. Admissions are open. Parents trust us. Tap WhatsApp now and our admissions team will help you today.”

That is the difference between a website and a lead engine.
