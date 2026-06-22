# Final QA Checklist

Pre-launch quality assurance checklist for the Bright Future School website. Complete this before deploying to production.

---

## 1. Pages

Verify each page loads without errors:

- [ ] Home (`/`)
- [ ] About (`/about`)
- [ ] Admissions (`/admissions`)
- [ ] Academics (`/academics`)
- [ ] Facilities (`/facilities`)
- [ ] Gallery (`/gallery`)
- [ ] Notices (`/notices`)
- [ ] Downloads (`/downloads`)
- [ ] Fee Structure (`/fee-structure`)
- [ ] Contact (`/contact`)
- [ ] 404 page (navigate to `/nonexistent-page`)

---

## 2. Static Generation

- [ ] `npm run generate` completes without errors
- [ ] All 10 routes appear in the pre-render output
- [ ] `.output/public/` folder is created
- [ ] `npm run preview` or `npx serve .output/public` shows the site correctly

---

## 3. Mobile Layout

Test on a real mobile device (or Chrome DevTools at 375px, 768px):

- [ ] Navbar: hamburger button is visible on mobile
- [ ] Navbar: mobile menu opens and closes correctly
- [ ] Navbar: all links are reachable in mobile menu
- [ ] Navbar: Apply button is shown in mobile menu
- [ ] Hero section: text and CTA buttons are readable, not cramped
- [ ] About page: overview split becomes single column on mobile
- [ ] Admissions page: process steps stack correctly on mobile
- [ ] Fee structure page: tables scroll horizontally on mobile
- [ ] Gallery page: grid shows 1 column on small screens
- [ ] Contact page: form is full width on mobile
- [ ] Footer: three columns stack into single column on mobile
- [ ] No horizontal scroll on any page on mobile
- [ ] All card grids stack correctly on mobile

---

## 4. Accessibility

- [ ] Skip-to-main link appears on keyboard focus (Tab key from top of page)
- [ ] All interactive elements (buttons, links, inputs) have visible focus rings
- [ ] Gallery filter buttons have focus rings when tabbed to
- [ ] Mobile hamburger button works with keyboard
- [ ] All form fields have visible labels
- [ ] Required fields are marked with asterisk
- [ ] Enquiry form shows a success message after submission
- [ ] All images (when present) have descriptive alt text
- [ ] CSS placeholder icons have `aria-hidden="true"` where decorative
- [ ] Notices use semantic `<time>` elements with `datetime` attribute
- [ ] Fee tables have `<th scope="col">` headers
- [ ] `<h1>` exists on every page (from PageHero)
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)

---

## 5. Navigation and Links

- [ ] All navbar links navigate to the correct page
- [ ] All footer links navigate to the correct page
- [ ] All "Apply for Admission" buttons link to `/admissions`
- [ ] All "Contact Us" buttons link to `/contact`
- [ ] All "Downloads" buttons link to `/downloads`
- [ ] CTA buttons on inner pages link correctly
- [ ] Breadcrumb "Home" link returns to homepage
- [ ] Logo in navbar links to homepage

---

## 6. Contact and Action Links

- [ ] Phone link (`tel:...`) opens the phone dialler on mobile
- [ ] Email link (`mailto:...`) opens an email client
- [ ] WhatsApp link opens WhatsApp (test on mobile)
- [ ] Social media links in footer open in a new tab (once real URLs are added)
- [ ] Google Maps link opens a map (once real URL is added)

---

## 7. Download Links

- [ ] All download buttons on the Downloads page link to valid files
- [ ] Files open or download when the button is clicked
- [ ] PDF files load correctly in browser
- [ ] Placeholder PDFs are replaced with real documents before launch

---

## 8. SEO

- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a `<meta name="description">` tag
- [ ] Home page title includes the school name
- [ ] Open Graph title and description are set correctly
- [ ] Open Graph image is a valid path (once a real image is added)
- [ ] No duplicate title tags across pages
- [ ] URL slugs are clean (`/about`, `/admissions`, etc.)

---

## 9. Content Quality

- [ ] School name is correct on all pages (comes from `school-info.json`)
- [ ] Phone number is correct
- [ ] Email address is correct
- [ ] Address is correct
- [ ] Principal name is updated (not "Principal Name")
- [ ] Principal photo is real (not initials placeholder)
- [ ] Admission year references are current (e.g., "2025–26" updated to active year)
- [ ] Fee amounts are real (not placeholder amounts)
- [ ] Gallery shows real photos (not CSS placeholders)
- [ ] Notices are current and relevant
- [ ] Downloads link to real files
- [ ] No lorem ipsum or "coming soon" text remains

---

## 10. Design Consistency

- [ ] Royal blue color is consistent across all pages
- [ ] Button styles are consistent (primary, outline, light variants)
- [ ] Card styles are consistent
- [ ] Section spacing is consistent
- [ ] Typography is consistent (heading font, body font)
- [ ] No visible broken layout or overlapping elements
- [ ] Gallery placeholder notice is removed once real photos are added

---

## 11. Performance (Basic)

- [ ] Page loads in under 3 seconds on a standard connection
- [ ] No large uncompressed images (compress all images before upload — recommended: ≤200KB per image)
- [ ] No unnecessary JavaScript libraries added
- [ ] Build size is reasonable (check `.output/public` folder size)

---

## 12. Deployment

- [ ] Static files deploy successfully to the chosen hosting platform
- [ ] All 10 page routes work after deployment (test by navigating directly to each URL)
- [ ] 404 page shows correctly for unknown routes
- [ ] HTTPS is enabled on the live domain
- [ ] Custom domain is pointed to the hosting provider (if applicable)
- [ ] Announcement bar text is updated for live launch

---

## Sign-off

| Area | Checked by | Date |
|---|---|---|
| Pages and navigation | | |
| Mobile layout | | |
| Accessibility | | |
| SEO metadata | | |
| Content accuracy | | |
| Download links | | |
| Deployment | | |
