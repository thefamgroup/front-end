import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle, MapPin } from 'lucide-react'
import { CARPET_LOCATIONS, CARPET_PRICING, CARPET_REGIONS } from '@/lib/carpet-locations'
import { CONTACT } from '@/lib/seo-data'

export const metadata: Metadata = {
  title: 'Carpet Cleaning | thefamgroup — Manchester, Crewe, Liverpool, Stoke | From £25/Room',
  description: 'Professional carpet cleaning across Greater Manchester, Crewe & Cheshire, Liverpool & Merseyside, and Stoke-on-Trent. Hot water extraction from £25/room. DBS-checked, pet-safe. Free quote.',
  alternates: { canonical: `${CONTACT.siteUrl}/cleaning/carpet-cleaning/` },
}

const hubSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.thefamgroup.uk/#business',
      name: 'thefamgroup',
      url: 'https://www.thefamgroup.uk',
      telephone: '+447767759013',
      email: 'info@thefamgroup.uk',
      description: 'Professional carpet cleaning across Greater Manchester, Crewe & Cheshire East, Liverpool & Merseyside, and Stoke-on-Trent. Hot water extraction specialists, DBS-checked.',
      areaServed: Object.values(CARPET_REGIONS).map(r => ({ '@type': 'State', name: r.name })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Carpet Cleaning Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Carpet Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End of Tenancy Carpet Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Stain and Odour Removal' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Carpet Cleaning' } },
        ],
      },
    },
  ],
}

export default function CarpetCleaningHubPage() {
  const regions = Object.entries(CARPET_REGIONS) as [string, { name: string; tagline: string }][]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-brand-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/cleaning/" className="hover:text-white transition-colors">Cleaning</Link>
            <span>›</span>
            <span className="text-white">Carpet Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4">
            Professional Carpet Cleaning — Manchester, Crewe, Liverpool & Stoke
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed mb-6 max-w-2xl">
            thefamgroup provides hot water extraction carpet cleaning across 4 regions and{' '}
            {CARPET_LOCATIONS.length} locations. DBS-checked operatives, pet-safe products,
            end of tenancy specialists. Fixed prices — from £25 per room.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {['From £25/Room', '£65 for 2 Rooms', 'DBS-Checked', 'Pet-Safe', 'Certificate Provided', '7 Days a Week'].map(t => (
              <span key={t} className="flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <CheckCircle size={11} /> {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-6 py-3.5 rounded-full text-sm hover:bg-brand-50 transition-colors"
            >
              <Phone size={16} /> Call {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp a Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Carpet Cleaning Prices
          </h2>
          <p className="text-gray-500 mb-8">
            Fixed prices — no call required for standard cleans. What you see is what you pay. No hidden extras.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden max-w-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-3 px-5 font-semibold text-gray-700">Room / Area</th>
                  <th className="text-right py-3 px-5 font-semibold text-gray-700">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {CARPET_PRICING.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-5 text-gray-600">{item.room}</td>
                    <td className="py-3 px-5 text-right font-bold text-brand-500">£{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS BY REGION ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Service Areas</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Carpet Cleaning — Areas We Cover
          </h2>
          <p className="text-gray-500 mb-10">
            We cover {CARPET_LOCATIONS.length} locations across 4 regions. Find your nearest area below.
          </p>

          <div className="space-y-10">
            {regions.map(([regionKey, regionData]) => {
              const regionLocations = CARPET_LOCATIONS.filter(l => l.region === regionKey)
              const sorted = [...regionLocations].sort((a, b) => a.tier - b.tier)

              return (
                <div key={regionKey}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-brand-500" />
                    {regionData.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{regionData.tagline}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sorted.map(loc => (
                      <Link
                        key={loc.slug}
                        href={`/cleaning/carpet-cleaning/${loc.slug}/`}
                        className="p-4 rounded-xl border border-gray-100 bg-white hover:border-brand-300 hover:bg-brand-50 transition-all group"
                      >
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-brand-500 transition-colors">
                          {loc.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">{loc.postcode}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Why Choose thefamgroup for Carpet Cleaning
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Hot water extraction — the gold standard',
                body: 'We use professional hot water extraction at pressures and temperatures supermarket hire machines cannot match. Deep cleaning removes embedded dirt, allergens, and stains that ordinary cleaning misses. Drying time of just 2–4 hours.',
              },
              {
                title: 'Transparent published pricing',
                body: 'From £25 per room. £65 for two rooms any size. £120 for a whole house clean. We publish our prices because we believe in transparency — no surprise quotes, no hidden extras.',
              },
              {
                title: 'End of tenancy specialists',
                body: 'We clean carpets to letting agent approved standard and provide a certificate of clean on every EOT job. Our deposit-back guarantee means we return and re-clean any disputed area free of charge.',
              },
              {
                title: 'DBS-checked, £5M insured',
                body: 'Every operative is DBS-checked. We carry £5 million public liability insurance. Certificates available on request — essential for landlords and property managers.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-500 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Book Professional Carpet Cleaning Today
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            From £25 per room. Fixed prices. 7 days a week. Serving Manchester, Crewe, Liverpool, and Stoke.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-colors"
            >
              <Phone size={17} /> {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={17} /> WhatsApp a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
