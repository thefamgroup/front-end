import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thefamgroup.uk'
  const now = new Date()
  return [
    { url: base,                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/quote`,       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/prices`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`,     lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
