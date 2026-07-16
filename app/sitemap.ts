import { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.thefamgroup.uk'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/cleaning/`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/services`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/quote`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/prices`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`,              lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy-policy`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms-of-service`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // 8 service index pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${base}/cleaning/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 480 service × location pages
  const locationPages: MetadataRoute.Sitemap = SERVICES.flatMap(s =>
    LOCATIONS.map(l => ({
      url: `${base}/cleaning/${s.slug}/${l.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: l.tier === 1 ? 0.8 : l.tier === 2 ? 0.7 : 0.6,
    }))
  )

  return [...staticPages, ...servicePages, ...locationPages]
}
