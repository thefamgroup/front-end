import sitemap from '@/app/sitemap'
import { SERVICES, LOCATIONS, getAllPageParams } from '@/lib/seo-data'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'
import { BIN_LOCATIONS } from '@/lib/bin-locations'
import { BLOG_POSTS } from '@/lib/data'

describe('master sitemap (app/sitemap.ts)', () => {
  const entries = sitemap()
  const urls = entries.map(e => e.url)

  it('has zero duplicate URLs', () => {
    const seen = new Set<string>()
    const dupes: string[] = []
    for (const url of urls) {
      if (seen.has(url)) dupes.push(url)
      seen.add(url)
    }
    expect(dupes).toEqual([])
  })

  it('every /cleaning and /blog URL uses a trailing slash, matching their canonical tags', () => {
    // Top-level static pages (e.g. /services, /about) intentionally have no trailing slash —
    // only the dynamic engines (cleaning/*, blog/*) standardise on one, matching their canonicals.
    const offenders = urls.filter(u => (u.includes('/cleaning/') || u.includes('/blog/')) && !u.endsWith('/'))
    expect(offenders).toEqual([])
  })

  it('Engine 1 (service x location) URL count matches SERVICES.length * LOCATIONS.length', () => {
    const engine1Urls = urls.filter(u =>
      SERVICES.some(s => u.includes(`/cleaning/${s.slug}/`) && u !== `https://www.thefamgroup.uk/cleaning/${s.slug}/`)
    )
    expect(engine1Urls.length).toBe(getAllPageParams().length)
  })

  it('includes a carpet-cleaning URL for every CARPET_LOCATIONS entry', () => {
    for (const loc of CARPET_LOCATIONS) {
      expect(urls).toContain(`https://www.thefamgroup.uk/cleaning/carpet-cleaning/${loc.slug}/`)
    }
  })

  it('includes an office-commercial-cleaning URL for every OFFICE_LOCATIONS entry', () => {
    for (const loc of OFFICE_LOCATIONS) {
      expect(urls).toContain(`https://www.thefamgroup.uk/cleaning/office-commercial-cleaning/${loc.slug}/`)
    }
  })

  it('includes a bin-cleaning URL for every BIN_LOCATIONS entry', () => {
    for (const loc of BIN_LOCATIONS) {
      expect(urls).toContain(`https://www.thefamgroup.uk/cleaning/bin-cleaning/${loc.slug}/`)
    }
  })

  it('includes a blog URL for every BLOG_POSTS entry', () => {
    for (const post of BLOG_POSTS) {
      expect(urls).toContain(`https://www.thefamgroup.uk/blog/${post.slug}/`)
    }
  })

  it('includes the Bolton hub URL', () => {
    expect(urls).toContain('https://www.thefamgroup.uk/cleaning/bolton/')
  })

  it('total URL count matches the sum of every engine plus static pages', () => {
    const staticCount = entries.length
      - getAllPageParams().length
      - SERVICES.length // service index pages
      - (CARPET_LOCATIONS.length + 1) // + hub
      - (OFFICE_LOCATIONS.length + 1)
      - (BIN_LOCATIONS.length + 1)
      - BLOG_POSTS.length
      - 1 // blog index
      - 1 // bolton hub
    // Static pages (home, services, prices, etc.) — assert it's a small positive number,
    // not that it's broken (new static pages are fine; a sudden drop to <=0 is not).
    expect(staticCount).toBeGreaterThan(5)
    expect(staticCount).toBeLessThan(20)
  })
})
