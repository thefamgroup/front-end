import { MetadataRoute } from 'next'
import { BIN_LOCATIONS } from '@/lib/bin-locations'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thefamgroup.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  entries.push({
    url: `${BASE}/cleaning/bin-cleaning/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  for (const location of BIN_LOCATIONS) {
    entries.push({
      url: `${BASE}/cleaning/bin-cleaning/${location.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: location.tier === 1 ? 0.8 : 0.7,
    })
  }

  return entries
}
