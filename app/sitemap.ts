import { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS } from '@/lib/seo-data'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.thefamgroup.uk'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/cleaning/`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/services`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/quote`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/prices`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/service-areas`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`,              lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy-policy`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms-of-service`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Engine 1: 6 service index pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${base}/cleaning/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Engine 1: 6 services × 229 locations
  const locationPages: MetadataRoute.Sitemap = SERVICES.flatMap(s =>
    LOCATIONS.map(l => ({
      url: `${base}/cleaning/${s.slug}/${l.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: l.tier === 1 ? 0.8 : l.tier === 2 ? 0.7 : 0.6,
    }))
  )

  // Engine 2: carpet cleaning hub + 59 location pages
  const carpetPages: MetadataRoute.Sitemap = [
    { url: `${base}/cleaning/carpet-cleaning/`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...CARPET_LOCATIONS.map(l => ({
      url: `${base}/cleaning/carpet-cleaning/${l.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: l.tier === 1 ? 0.7 : 0.6,
    })),
  ]

  // Engine 3: office cleaning hub + 42 location pages
  const officePages: MetadataRoute.Sitemap = [
    { url: `${base}/cleaning/office-commercial-cleaning/`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...OFFICE_LOCATIONS.map(l => ({
      url: `${base}/cleaning/office-commercial-cleaning/${l.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: l.tier === 1 ? 0.7 : 0.6,
    })),
  ]

  return [...staticPages, ...servicePages, ...locationPages, ...carpetPages, ...officePages]
}
