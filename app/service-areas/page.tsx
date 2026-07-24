import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/data'
import {
  LOCATIONS_EXPANDED, REGIONS, getLocationsByRegion, TOTAL_LOCATIONS,
  type Region,
} from '@/lib/locations-expanded'

export const metadata: Metadata = {
  title: 'Service Areas — Cleaning Services Across Manchester, Liverpool, Cheshire & More',
  description: `thefamgroup provides professional cleaning services across ${TOTAL_LOCATIONS}+ towns and cities — Greater Manchester, Liverpool & Merseyside, Cheshire East, and Stoke-on-Trent. DBS-checked, insured, no contracts.`,
  alternates: { canonical: '/service-areas' },
}

const REGION_STYLE: Record<Region, { colour: string; badge: string }> = {
  manchester: { colour: 'bg-brand-50 border-brand-200',    badge: 'bg-brand-500' },
  crewe:      { colour: 'bg-emerald-50 border-emerald-200', badge: 'bg-emerald-600' },
  stoke:      { colour: 'bg-amber-50 border-amber-200',     badge: 'bg-amber-500' },
  liverpool:  { colour: 'bg-blue-50 border-blue-200',       badge: 'bg-blue-500' },
  carlisle:   { colour: 'bg-purple-50 border-purple-200',   badge: 'bg-purple-600' },
}

const SERVICES = [
  { name: 'End of Tenancy Cleaning', slug: 'end-of-tenancy-cleaning' },
  { name: 'Deep Cleaning',           slug: 'deep-cleaning' },
  { name: 'Regular Home Cleaning',   slug: 'regular-house-cleaning' },
  { name: 'Office Cleaning',         slug: 'commercial-office-cleaning' },
  { name: 'Airbnb / Short-Let',      slug: 'airbnb-short-let-cleaning' },
  { name: 'Post-Construction',       slug: 'post-construction-cleaning' },
  { name: 'Move In / Out Clean',     slug: 'move-in-out-cleaning' },
  { name: 'Managed Properties',      slug: 'managed-property-cleaning' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'thefamgroup Cleaning Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'thefamgroup',
    url: 'https://thefamgroup.uk',
    telephone: '+447767759013',
  },
  areaServed: LOCATIONS_EXPANDED.map(l => ({ '@type': 'City', name: l.name })),
}

export default function ServiceAreasPage() {
  const regionKeys = Object.keys(REGIONS) as Region[]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-500 py-16">
        <div className="container-wide text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-5 text-sm font-medium">
            <MapPin size={14} /> Areas We Cover
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,56px)] font-extrabold leading-tight mb-4">
            Professional Cleaning Across<br />the North West &amp; Beyond
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
            From Greater Manchester and Liverpool to Cheshire and Stoke-on-Trent — our DBS-checked, fully insured team brings the same high standard wherever you are.
          </p>
          <p className="text-white/60 text-sm mb-8">
            {TOTAL_LOCATIONS}+ towns &amp; cities covered · {TOTAL_LOCATIONS * 8} service pages
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="btn-white text-sm px-6 py-3">Get a Free Estimate</Link>
            <a href={CONTACT.phoneTel} className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors">
              <Phone size={15} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Region summary strip */}
      <div className="bg-white border-b">
        <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {regionKeys.map((key) => {
            const region = REGIONS[key]
            const count = getLocationsByRegion(key).length
            const style = REGION_STYLE[key]
            return (
              <a key={key} href={`#${key}`} className="flex items-start gap-2.5 group">
                <span className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${style.badge}`} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-600">{region.name}</p>
                  <p className="text-xs text-gray-500">{count} areas · {region.tagline}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Regions */}
      <section className="py-14 md:py-20 bg-[#f5f5f0]">
        <div className="container-wide space-y-12">
          {regionKeys.map((key) => {
            const region = REGIONS[key]
            const locations = getLocationsByRegion(key)
            const style = REGION_STYLE[key]

            // Group by borough
            const byBorough: Record<string, typeof locations> = {}
            for (const loc of locations) {
              const b = loc.borough || 'Other'
              if (!byBorough[b]) byBorough[b] = []
              byBorough[b].push(loc)
            }

            return (
              <div key={key} id={key} className={`rounded-2xl border p-6 md:p-8 ${style.colour}`}>
                <div className="flex items-start gap-3 mb-6">
                  <span className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 ${style.badge}`} aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-gray-900">{region.name}</h2>
                    <p className="text-sm text-gray-600 mt-0.5">{region.tagline}</p>
                    <p className="text-sm text-gray-500 mt-1">{region.description}</p>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Postcodes: {region.postcodes.slice(0, 12).join(', ')}{region.postcodes.length > 12 ? ` +${region.postcodes.length - 12} more` : ''}
                    </p>
                  </div>
                </div>

                {Object.entries(byBorough).map(([borough, locs]) => (
                  <div key={borough} className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{borough}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {locs.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/cleaning/end-of-tenancy-cleaning/${loc.slug}/`}
                          className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:text-brand-600 hover:shadow-sm border border-gray-100 transition-all"
                        >
                          <MapPin size={11} className="text-brand-400 flex-shrink-0" aria-hidden="true" />
                          <span className="truncate">{loc.name}</span>
                          {loc.tier === 1 && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" title="Major town" />}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </section>

      {/* Browse by service */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-tag">Browse by Service</span>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold mt-2">
              All Services, Every Area
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Every service is available in every area we cover.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/cleaning/${svc.slug}/`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-[#f5f5f0] hover:border-brand-300 hover:bg-brand-50 px-5 py-4 transition-all group"
              >
                <span className="font-medium text-gray-800 group-hover:text-brand-700 text-sm">{svc.name}</span>
                <ChevronRight size={15} className="text-gray-400 group-hover:text-brand-500 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="container-wide max-w-2xl">
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-bold mb-3">
            Don't See Your Area?
          </h2>
          <p className="text-gray-400 mb-8">
            We're expanding all the time. Give us a call or send a WhatsApp — if we can get to you, we will.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary px-6 py-3 text-sm">Send Us a Message</Link>
            <a href={CONTACT.phoneTel} className="btn-outline border-white/30 text-white hover:bg-white/10 px-6 py-3 text-sm">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
