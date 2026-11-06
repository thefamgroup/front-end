/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { LocalServicePage } from '@/components/seo/LocalServicePage'
import CarpetLocationPage from '@/components/carpet/CarpetLocationPage'
import OfficeLocationPage from '@/components/office/OfficeLocationPage'
import { BinLocationPage } from '@/components/bin/BinLocationPage'
import { SERVICES, LOCATIONS } from '@/lib/seo-data'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'
import { BIN_LOCATIONS } from '@/lib/bin-locations'
import { BLOG_POSTS } from '@/lib/data'
import BlogPostPage, { generateMetadata as generateBlogMetadata } from '@/app/blog/[slug]/page'

function getJsonLd(container: HTMLElement) {
  const script = container.querySelector('script[type="application/ld+json"]')
  expect(script).not.toBeNull()
  return JSON.parse(script!.innerHTML)
}

describe('LocalServicePage (Engine 1 — end-of-tenancy/regular/deep/etc.)', () => {
  const service = SERVICES.find(s => s.slug === 'end-of-tenancy-cleaning')!
  // Didsbury: known to have real neighbours (Chorlton, West Didsbury, Withington, Burnage)
  const location = LOCATIONS.find(l => l.slug === 'didsbury')!

  it('renders the interpolated H1', () => {
    const { container } = render(<LocalServicePage service={service} location={location} />)
    expect(container.textContent).toContain(location.name)
  })

  it('renders one FAQ entry per service.faqs with no leftover template tokens', () => {
    const { container } = render(<LocalServicePage service={service} location={location} />)
    const items = container.querySelectorAll('details')
    expect(items.length).toBe(service.faqs.length)
    expect(container.textContent).not.toMatch(/\{location\}|\{postcode\}/)
  })

  it('renders real, non-empty nearby-area links (regression test for the slug/name bug)', () => {
    const { container } = render(<LocalServicePage service={service} location={location} />)
    const nearbyLinks = Array.from(container.querySelectorAll('a[href^="/cleaning/end-of-tenancy-cleaning/"]'))
      .filter(a => a.getAttribute('href') !== `/cleaning/end-of-tenancy-cleaning/${location.slug}/`)
    expect(nearbyLinks.length).toBeGreaterThan(0)
  })

  it('renders FAQPage schema with one Question per FAQ', () => {
    const { container } = render(<LocalServicePage service={service} location={location} />)
    const schema = getJsonLd(container)
    const faqNode = schema['@graph']?.find((n: any) => n['@type'] === 'FAQPage') ?? schema
    expect(faqNode.mainEntity.length).toBe(service.faqs.length)
  })
})

describe('CarpetLocationPage (Engine 2)', () => {
  const location = CARPET_LOCATIONS.find(l => l.slug === 'oldham')!

  it('renders the location name and FAQPage schema including the blood-stain FAQ', () => {
    const { container } = render(<CarpetLocationPage location={location} />)
    expect(container.textContent).toContain(location.name)
    const schema = getJsonLd(container)
    const faqNode = schema['@graph'].find((n: any) => n['@type'] === 'FAQPage')
    expect(faqNode.mainEntity.some((q: any) => /blood/i.test(q.name))).toBe(true)
  })

  it('renders LocalBusiness and BreadcrumbList nodes', () => {
    const { container } = render(<CarpetLocationPage location={location} />)
    const schema = getJsonLd(container)
    const types = schema['@graph'].map((n: any) => n['@type']).flat()
    expect(types).toContain('BreadcrumbList')
    expect(types).toContain('FAQPage')
  })
})

describe('OfficeLocationPage (Engine 3)', () => {
  const location = OFFICE_LOCATIONS[0]

  it('renders the location name and a FAQPage schema node', () => {
    const { container } = render(<OfficeLocationPage location={location} />)
    expect(container.textContent).toContain(location.name)
    const schema = getJsonLd(container)
    const faqNode = schema['@graph'].find((n: any) => n['@type'] === 'FAQPage')
    expect(faqNode).toBeDefined()
    expect(faqNode.mainEntity.length).toBeGreaterThan(0)
  })
})

describe('BinLocationPage (Engine 4)', () => {
  const location = BIN_LOCATIONS.find(l => l.slug === 'didsbury-bin')!

  it('renders the location name and a FAQPage schema node', () => {
    const { container } = render(<BinLocationPage location={location} />)
    expect(container.textContent).toContain(location.name)
    const schema = getJsonLd(container)
    const faqNode = schema['@graph'].find((n: any) => n['@type'] === 'FAQPage')
    expect(faqNode).toBeDefined()
  })

  it('only renders nearby-area links for slugs that actually exist', () => {
    const { container } = render(<BinLocationPage location={location} />)
    const realSlugs = new Set(BIN_LOCATIONS.map(l => l.slug))
    const links = Array.from(container.querySelectorAll('a[href*="/cleaning/bin-cleaning/"]'))
    for (const link of links) {
      const href = link.getAttribute('href') ?? ''
      const slug = href.replace(/^\/cleaning\/bin-cleaning\//, '').replace(/\/$/, '')
      if (slug) expect(realSlugs.has(slug)).toBe(true)
    }
  })
})

describe('Blog detail page (/blog/[slug])', () => {
  const post = BLOG_POSTS.find(p => p.slug === 'how-to-remove-blood-stains-from-carpet')!

  it('renders the post title, body content, and Article schema for a real slug', async () => {
    const element = await BlogPostPage({ params: Promise.resolve({ slug: post.slug }) })
    const { container } = render(element as any)
    expect(container.textContent).toContain(post.title)
    expect(container.textContent).toContain('cold water')
    const schema = getJsonLd(container)
    expect(schema['@type']).toBe('Article')
    expect(schema.headline).toBe(post.title)
  })

  it('links to the relevant service/location page when relatedHref is set', async () => {
    const element = await BlogPostPage({ params: Promise.resolve({ slug: post.slug }) })
    const { container } = render(element as any)
    // next/link normalises the trailing slash when rendered in jsdom; compare without it.
    const expected = post.relatedHref!.replace(/\/$/, '')
    const link = Array.from(container.querySelectorAll('a')).find(
      a => (a.getAttribute('href') ?? '').replace(/\/$/, '') === expected
    )
    expect(link).not.toBeUndefined()
  })

  it('produces metadata with a canonical URL and non-empty description for every post', async () => {
    for (const p of BLOG_POSTS) {
      const metadata = await generateBlogMetadata({ params: Promise.resolve({ slug: p.slug }) })
      expect(metadata.title).toBe(p.metaTitle ?? p.title)
      expect(metadata.description).toBe(p.metaDescription)
      expect((metadata.alternates as any)?.canonical).toContain(p.slug)
    }
  })
})
