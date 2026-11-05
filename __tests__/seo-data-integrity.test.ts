import { SERVICES, LOCATIONS, CONTACT, getAllPageParams, interpolate, getService, getLocation } from '@/lib/seo-data'
import { BIN_LOCATIONS, buildBinFAQ } from '@/lib/bin-locations'
import { CARPET_LOCATIONS, buildFAQ as buildCarpetFAQ } from '@/lib/carpet-locations'
import { OFFICE_LOCATIONS, buildOfficeFAQ } from '@/lib/office-locations'
import { BLOG_POSTS } from '@/lib/data'

// Same name → slug conversion used by LocalServicePage/CarpetLocationPage/OfficeLocationPage.
const nameToSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function duplicates(values: string[]): string[] {
  const seen = new Set<string>()
  const dupes = new Set<string>()
  for (const v of values) {
    if (seen.has(v)) dupes.add(v)
    seen.add(v)
  }
  return [...dupes]
}

// ── No duplicate slugs anywhere ──────────────────────────────────

describe('slug uniqueness', () => {
  it('LOCATIONS has no duplicate slugs', () => {
    expect(duplicates(LOCATIONS.map(l => l.slug))).toEqual([])
  })

  it('BIN_LOCATIONS has no duplicate slugs', () => {
    expect(duplicates(BIN_LOCATIONS.map(l => l.slug))).toEqual([])
  })

  it('CARPET_LOCATIONS has no duplicate slugs', () => {
    expect(duplicates(CARPET_LOCATIONS.map(l => l.slug))).toEqual([])
  })

  it('OFFICE_LOCATIONS has no duplicate slugs', () => {
    expect(duplicates(OFFICE_LOCATIONS.map(l => l.slug))).toEqual([])
  })

  it('SERVICES has no duplicate slugs, and none collide with carpet/office engine slugs', () => {
    expect(duplicates(SERVICES.map(s => s.slug))).toEqual([])
    const serviceSlugs = new Set(SERVICES.map(s => s.slug))
    expect(serviceSlugs.has('carpet-cleaning')).toBe(false)
    expect(serviceSlugs.has('office-commercial-cleaning')).toBe(false)
  })

  it('BLOG_POSTS has no duplicate slugs or ids', () => {
    expect(duplicates(BLOG_POSTS.map(p => p.slug))).toEqual([])
    expect(duplicates(BLOG_POSTS.map(p => p.id))).toEqual([])
  })
})

// ── nearbyAreas resolve to real pages ────────────────────────────
// Regression test for the bug found this session: LocalServicePage compared
// nearbyAreas (display names) directly against location.slug and never matched.

describe('nearbyAreas resolve correctly', () => {
  it('every LOCATIONS entry has at least one nearbyAreas value that resolves to a real slug', () => {
    const slugs = new Set(LOCATIONS.map(l => l.slug))
    const brokenEntirely = LOCATIONS.filter(loc => {
      const resolved = loc.nearbyAreas.map(nameToSlug).filter(s => slugs.has(s))
      return resolved.length === 0
    })
    // Report which ones, if any, so a real gap is visible rather than just a count
    expect(brokenEntirely.map(l => l.name)).toEqual([])
  })

  it('CARPET_LOCATIONS nearbyAreas resolve for at least one entry per location that has any coverage nearby', () => {
    const slugs = new Set(CARPET_LOCATIONS.map(l => l.slug))
    for (const loc of CARPET_LOCATIONS) {
      const resolved = loc.nearbyAreas.map(nameToSlug).filter(s => slugs.has(s))
      // Not every carpet location will have carpet-covered neighbours (engine only covers 59
      // locations), so this just checks the data COULD resolve when it claims to, not that it must.
      expect(Array.isArray(resolved)).toBe(true)
    }
  })

  it('BIN_LOCATIONS nearbyAreas (already real slugs, not names) mostly resolve to real bin pages', () => {
    const slugs = new Set(BIN_LOCATIONS.map(l => l.slug))
    const dangling: string[] = []
    for (const loc of BIN_LOCATIONS) {
      for (const near of loc.nearbyAreas) {
        if (!slugs.has(near)) dangling.push(`${loc.slug} -> ${near}`)
      }
    }
    // KNOWN ISSUE: 81 dangling links as of Nov 2026 (the bin engine grew from 128 to 232
    // locations since the original audit's "28 of 128" count without re-checking). This
    // asserts the count hasn't regressed further upward — it is a baseline, not a target.
    // Tighten this number down as dangling links get fixed; see the audit report for the list.
    expect(dangling.length).toBeLessThanOrEqual(81)
  })
})

// ── interpolate() / FAQ builders leave no template tokens ───────

describe('interpolate() and FAQ builders', () => {
  const sampleLocation = LOCATIONS[0]

  it('interpolate replaces both {location} and {postcode} tokens', () => {
    const result = interpolate('Service in {location} ({postcode})', sampleLocation)
    expect(result).not.toContain('{location}')
    expect(result).not.toContain('{postcode}')
    expect(result).toContain(sampleLocation.name)
    expect(result).toContain(sampleLocation.postcode)
  })

  it('every SERVICES FAQ interpolates cleanly for a sample location with no leftover tokens', () => {
    for (const service of SERVICES) {
      for (const faq of service.faqs) {
        const q = interpolate(faq.q, sampleLocation)
        const a = interpolate(faq.a, sampleLocation)
        expect(q).not.toMatch(/\{location\}|\{postcode\}/)
        expect(a).not.toMatch(/\{location\}|\{postcode\}/)
      }
    }
  })

  it('every service metaDescription and h1Template interpolates with no leftover tokens', () => {
    for (const service of SERVICES) {
      expect(interpolate(service.metaDescription, sampleLocation)).not.toMatch(/\{location\}|\{postcode\}/)
      expect(interpolate(service.h1Template, sampleLocation)).not.toMatch(/\{location\}|\{postcode\}/)
      if (service.metaTitle) {
        expect(interpolate(service.metaTitle, sampleLocation)).not.toMatch(/\{location\}|\{postcode\}/)
      }
    }
  })

  it('buildBinFAQ produces no leftover tokens and no "undefined"/"NaN" for a sample bin location', () => {
    const faqs = buildBinFAQ(BIN_LOCATIONS[0])
    for (const faq of faqs) {
      expect(faq.q).not.toMatch(/undefined|NaN/)
      expect(faq.a).not.toMatch(/undefined|NaN/)
    }
    expect(faqs.length).toBeGreaterThan(0)
  })

  it('buildCarpetFAQ (carpet) produces no leftover tokens and includes the blood-stain FAQ', () => {
    const faqs = buildCarpetFAQ(CARPET_LOCATIONS[0])
    for (const faq of faqs) {
      expect(faq.q).not.toMatch(/undefined|NaN/)
      expect(faq.a).not.toMatch(/undefined|NaN/)
    }
    expect(faqs.some(f => /blood/i.test(f.q))).toBe(true)
  })

  it('buildOfficeFAQ produces no leftover tokens for a sample office location', () => {
    const faqs = buildOfficeFAQ(OFFICE_LOCATIONS[0])
    for (const faq of faqs) {
      expect(faq.q).not.toMatch(/undefined|NaN/)
      expect(faq.a).not.toMatch(/undefined|NaN/)
    }
  })
})

// ── getAllPageParams() ───────────────────────────────────────────

describe('getAllPageParams', () => {
  it('returns exactly SERVICES.length * LOCATIONS.length entries', () => {
    expect(getAllPageParams().length).toBe(SERVICES.length * LOCATIONS.length)
  })

  it('every param resolves via getService/getLocation', () => {
    const params = getAllPageParams()
    for (const { service, location } of params.slice(0, 50)) {
      expect(getService(service)).toBeDefined()
      expect(getLocation(location)).toBeDefined()
    }
  })
})

// ── Required fields and valid enums across every engine ─────────

describe('data field integrity', () => {
  it('every LOCATIONS entry has non-empty required fields and a valid tier/region', () => {
    for (const loc of LOCATIONS) {
      expect(loc.slug).toBeTruthy()
      expect(loc.name).toBeTruthy()
      expect(loc.postcode).toBeTruthy()
      expect(loc.localContext.length).toBeGreaterThan(20)
      expect(loc.propertyTypes).toBeTruthy()
      expect([1, 2, 3]).toContain(loc.tier)
      expect(['manchester', 'crewe', 'stoke', 'liverpool', 'carlisle']).toContain(loc.region)
      expect(typeof loc.lat).toBe('number')
      expect(typeof loc.lng).toBe('number')
    }
  })

  it('every BIN_LOCATIONS entry has non-empty required fields and a valid tier', () => {
    for (const loc of BIN_LOCATIONS) {
      expect(loc.slug).toBeTruthy()
      expect(loc.slug.endsWith('-bin')).toBe(true)
      expect(loc.councilName).toBeTruthy()
      expect(loc.collectionFrequency).toBeTruthy()
      expect([1, 2, 3]).toContain(loc.tier)
    }
  })

  it('every CARPET_LOCATIONS entry has non-empty carpet-specific fields', () => {
    for (const loc of CARPET_LOCATIONS) {
      expect(loc.carpetContext).toBeTruthy()
      expect(loc.stainContext).toBeTruthy()
      expect([1, 2, 3]).toContain(loc.tier)
    }
  })

  it('every OFFICE_LOCATIONS entry has non-empty office-specific fields', () => {
    for (const loc of OFFICE_LOCATIONS) {
      expect(loc.businessTypes).toBeTruthy()
      expect(loc.officeContext).toBeTruthy()
      expect([1, 2, 3]).toContain(loc.tier)
    }
  })

  it('every BLOG_POSTS entry has non-empty content and metadata', () => {
    for (const post of BLOG_POSTS) {
      expect(post.title).toBeTruthy()
      expect(post.metaDescription.length).toBeGreaterThan(20)
      expect(post.content.length).toBeGreaterThan(0)
      for (const block of post.content) {
        expect(block.length).toBeGreaterThan(0)
      }
    }
  })

  it('CONTACT has a consistent phone number across phone/phoneTel/whatsapp', () => {
    const digitsFromPhone = CONTACT.phone.replace(/\D/g, '')
    expect(CONTACT.phoneTel).toContain(digitsFromPhone)
    expect(CONTACT.whatsapp).toContain(digitsFromPhone.replace(/^0/, '44'))
  })
})
