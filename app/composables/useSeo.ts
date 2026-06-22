import seoData from '~~/content/seo.json'

type SeoPage = { title: string; description: string }

/**
 * Sets page SEO metadata from content/seo.json.
 * Falls back to seoData.default when the path has no entry.
 * Returns the resolved SEO object plus a display-friendly `heroTitle`
 * (first segment before " | " — suitable for PageHero and breadcrumbs).
 */
export function useSeo(path: string) {
  const pageMap = seoData.pages as Record<string, SeoPage>

  const seo: SeoPage = pageMap[path] ?? {
    title: seoData.default.siteName,
    description: seoData.default.description,
  }

  useSeoMeta({
    title:          seo.title,
    description:    seo.description,
    ogTitle:        seo.title,
    ogDescription:  seo.description,
    ogImage:        seoData.default.ogImage,
  })

  // Strip the site suffix for hero/breadcrumb display ("About Us | …" → "About Us")
  const heroTitle = seo.title.split(' | ')[0] ?? seo.title

  return { title: seo.title, description: seo.description, heroTitle }
}
