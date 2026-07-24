import type { MetadataRoute } from 'next'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'

const BASE_URL = 'https://www.thefamgroup.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const hubEntry: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/cleaning/office-commercial-cleaning/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const locationEntries: MetadataRoute.Sitemap = OFFICE_LOCATIONS.map(loc => ({
    url: `${BASE_URL}/cleaning/office-commercial-cleaning/${loc.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: loc.tier === 1 ? 0.7 : 0.6,
  }))

  return [...hubEntry, ...locationEntries]
}
