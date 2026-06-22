# Content Replacement Checklist

Use this checklist before taking the website live. All items marked below require editing content files in `/content/` — no Vue component changes are needed for any of them.

---

## 1. School Identity

**File:** `content/school-info.json`

- [ ] Replace `"name"` with the real school name
- [ ] Replace `"tagline"` with the school's tagline or motto
- [ ] Replace `"establishedYear"` with the actual founding year
- [ ] Replace `"phone"` with the school's phone number
- [ ] Replace `"whatsapp"` with the WhatsApp contact number
- [ ] Replace `"email"` with the school's email address
- [ ] Replace `"address"` and `"addressShort"` with the real address
- [ ] Replace `"principalName"` with the actual principal's name
- [ ] Replace `"logo"` path with the real logo file path
- [ ] Replace `"mapUrl"` with a real Google Maps URL or embed link
- [ ] Replace `"socialLinks.facebook"`, `instagram`, `youtube` with real URLs (or remove if unused)
- [ ] Update `"announcement"` — the text shown in the top announcement bar

---

## 2. Logo

- [ ] Add the real logo file to `public/images/logo/`
- [ ] Update `"logo"` path in `content/school-info.json` to point to it
- [ ] Update `"logoAlt"` text to match the logo description

---

## 3. SEO Metadata

**File:** `content/seo.json`

- [ ] Replace all `"title"` values — each page must have a unique title including the school name
- [ ] Replace all `"description"` values with accurate summaries for each page
- [ ] Update `"default.siteName"` with the real school name
- [ ] Update `"default.ogImage"` with a real Open Graph image path (ideally 1200×630 px)
- [ ] Update `"default.description"` with the school's main SEO description

---

## 4. Homepage

**File:** `content/home.json`

- [ ] Update `hero.title` and `hero.subtitle` with the real school's message
- [ ] Update `hero.eyebrow` (the small label above the title)
- [ ] Update `hero.badge.text` — the floating badge (e.g., admission year/session)
- [ ] Update `highlights` — update real student count, faculty count, years of operation
- [ ] Update `aboutPreview` — description, CTA label
- [ ] Update `whyChooseUs` items — titles and descriptions
- [ ] Update `academicsPreview` — description
- [ ] Update `facilitiesPreview` items if different from defaults
- [ ] Update `admissionsCTA` — especially the year reference (e.g., "2025–26")
- [ ] Update `noticesPreview.items` — replace with real recent notices
- [ ] Update `galleryPreview` description

---

## 5. About Page

**File:** `content/about.json`

- [ ] Update `overview.description` and `overview.description2` with the school's real story
- [ ] Update `mission.text` with the real mission statement
- [ ] Update `vision.text` with the real vision statement
- [ ] Update `values` — replace placeholder values with the school's actual core values
- [ ] Update `principalMessage.name` with the principal's real name
- [ ] Update `principalMessage.designation` (e.g., "Principal" or "Headmaster")
- [ ] Update `principalMessage.message` with a real message from the principal
- [ ] Update `principalMessage.photo` path and add the actual photo to `public/images/faculty/`
- [ ] Update `timeline.items` with the school's real history milestones
- [ ] Update `trustSection.items` if different from defaults

---

## 6. Admissions Page

**File:** `content/admissions.json`

- [ ] Update `overview.description` with the real admissions overview
- [ ] Update `overview.note` (the "admissions open" note)
- [ ] Update `classesOpen` — add/remove classes and update status (Open/Limited)
- [ ] Update each class's `ageGroup`
- [ ] Update `process.steps` if the admission process differs
- [ ] Update `eligibility.criteria` — age cutoff dates per class
- [ ] Update `documents.items` — add/remove required documents
- [ ] Update `importantDates.items` with real dates and events
- [ ] Update `faq` with real frequently asked questions

---

## 7. Fee Structure

**File:** `content/fee-structure.json`

- [ ] Update `disclaimer` text if the school has a specific fee disclaimer
- [ ] Update `sections` — replace all fee rows with real fee amounts
- [ ] Verify each row's `feeType`, `amount`, `frequency`, and `note`
- [ ] Update `paymentInstructions.items` with the school's payment process
- [ ] Update `officeNote` with the office confirmation note

> **Important:** Keep the disclaimer visible. Displaying placeholder amounts as final could mislead parents.

---

## 8. Downloads

**File:** `content/downloads.json`

- [ ] Add real PDF files to `public/downloads/`
- [ ] Update each item's `filePath` to point to the real file (e.g., `/downloads/admission-form-2025.pdf`)
- [ ] Update each item's `title`, `description`, and `fileType`
- [ ] Remove items that do not apply to this school
- [ ] Add new items as needed (e.g., timetable, handbook)

---

## 9. Gallery

**File:** `content/gallery.json`

- [ ] Add real photos to `public/images/gallery/`
- [ ] Replace each item's `src` with the real image path
- [ ] Update each item's `alt` text to accurately describe the photo
- [ ] Update each item's `title` and `category`
- [ ] Update `categories` list if different categories are needed
- [ ] Update `overview.description` with the school's gallery intro
- [ ] Remove the placeholder notice from the gallery page once real photos are added

---

## 10. Facilities

**File:** `content/facilities.json`

- [ ] Update each facility's `description` with accurate details
- [ ] Add real facility photos to `public/images/facilities/`
- [ ] Update each facility's `image` path to point to the real photo
- [ ] Remove or add facility items as needed

---

## 11. Academics

**File:** `content/academics.json`

- [ ] Update programme descriptions to match the actual curriculum/board
- [ ] Update `methodology.approaches` if needed
- [ ] Update `cocurricular.activities` with the school's actual activities and clubs
- [ ] Update `assessment.overview` and `assessment.note` to reflect the actual assessment system
- [ ] Add real academic programme images if available

---

## 12. Notices and Events

**Notices:** `content/notices/*.md`
**Events:** `content/events/*.md`

- [ ] Replace placeholder notices with real school notices
- [ ] Replace placeholder events with real upcoming events
- [ ] Ensure each file has correct frontmatter (`title`, `date`, `category`, `excerpt`)
- [ ] Delete placeholder files once real content is added

---

## 13. Contact Page

**File:** `content/contact.json`

- [ ] Update `details.address` with the real address
- [ ] Update `details.phone` and `details.whatsapp` / `details.whatsappUrl`
- [ ] Update `details.email`
- [ ] Update `details.mapUrl` or add an iframe embed code to `details.mapEmbed`
- [ ] Update `officeHours` with real school office hours
- [ ] Update `quickActions` button labels/descriptions if needed

---

## 14. Principal / Faculty Photos

- [ ] Add the principal's photo to `public/images/faculty/principal-placeholder.jpg` (or update the path in `about.json`)
- [ ] Once real photos are available, remove the CSS gradient placeholder in the About page by following the commented `<img>` tag instructions

---

## 15. Admission Year / Session References

Check and update these occurrences of the academic year (currently "2025–26"):

- [ ] `content/home.json` → `hero.badge.text`
- [ ] `content/home.json` → `admissionsCTA.description`
- [ ] `content/admissions.json` → `overview.note` and `importantDates`
- [ ] `content/seo.json` → relevant page descriptions

---

## 16. Social Media Links

If the school does not have social media accounts yet, the footer currently shows greyed-out placeholder buttons. To activate them:

- [ ] Update `content/school-info.json` → `socialLinks.facebook`, `instagram`, `youtube` with real URLs

---

## 17. Google Maps

- [ ] Replace `"mapUrl": "#"` in `content/school-info.json` and `content/contact.json` with a real Google Maps URL
- [ ] Optionally add a Google Maps iframe embed code to `content/contact.json` → `details.mapEmbed`

---

## Final Check

- [ ] Run `npm run generate` — confirm all 10 pages pre-render without errors
- [ ] Open each page in a browser and verify content is correct
- [ ] Test all phone, email, and WhatsApp links
- [ ] Test all download links
- [ ] Check mobile layout on a real device or browser dev tools
- [ ] Verify the contact form shows the demo message (form is not yet connected to a backend)
