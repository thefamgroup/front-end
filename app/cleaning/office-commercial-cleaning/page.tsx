import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle, MapPin } from 'lucide-react'
import { OFFICE_LOCATIONS, OFFICE_PRICING, OFFICE_REGIONS } from '@/lib/office-locations'
import { CONTACT } from '@/lib/seo-data'

export const metadata: Metadata = {
  title: 'Office Cleaning | thefamgroup — Manchester, Crewe, Liverpool, Stoke | From £65/Visit',
  description: 'Professional office and commercial cleaning across Greater Manchester, Crewe & Cheshire, Liverpool & Merseyside, and Stoke-on-Trent. DBS-checked, no minimum contract, out-of-hours available. Free quote.',
  alternates: { canonical: `${CONTACT.siteUrl}/cleaning/office-commercial-cleaning/` },
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
      description: 'Professional office and commercial cleaning across Greater Manchester, Crewe & Cheshire East, Liverpool & Merseyside, and Stoke-on-Trent. DBS-checked, £5M insured, no minimum contract.',
      areaServed: Object.values(OFFICE_REGIONS).map(r => ({ '@type': 'State', name: r.name })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Office Cleaning Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regular Office Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Out-of-Hours Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Office Clean' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contract Cleaning' } },
        ],
      },
    },
  ],
}

export default function OfficeCleaningHubPage() {
  const regions = Object.entries(OFFICE_REGIONS) as [string, { name: string; tagline: string }][]

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
            <span className="text-white">Office & Commercial Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4">
            Professional Office & Commercial Cleaning — Manchester, Crewe, Liverpool & Stoke
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed mb-6 max-w-2xl">
            thefamgroup provides DBS-checked office cleaning across 4 regions and{' '}
            {OFFICE_LOCATIONS.length} locations. No minimum contract. Out-of-hours and
            weekend cleaning available. Fixed prices — from £65 per visit.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {['From £65/Visit', 'No Minimum Contract', 'DBS-Checked', '£5M Insured', 'Out-of-Hours', 'Certificate Provided'].map(t => (
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

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">What We Clean</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Standard Office Clean — What's Included
          </h2>
          <p className="text-gray-500 mb-10">
            Every regular visit covers the full office — desks, floors, kitchen, washrooms, and common areas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Workstations & Desks',
                items: ['Dust & wipe all surfaces', 'Keyboard & screen clean', 'Declutter & reorganise', 'Empty desk bins'],
              },
              {
                title: 'Floors & Common Areas',
                items: ['Vacuum carpets & rugs', 'Mop hard floors', 'Reception & entrance', 'Meeting rooms set up'],
              },
              {
                title: 'Kitchen & Breakout',
                items: ['Wipe surfaces & splashbacks', 'Clean microwave inside', 'Load/unload dishwasher', 'Empty food bins'],
              },
              {
                title: 'Toilets & Washrooms',
                items: ['Sanitise WC, sink, taps', 'Clean mirrors & tiles', 'Restock paper & soap', 'Remove waste bins'],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircle size={12} className="text-brand-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Office Cleaning Prices
          </h2>
          <p className="text-gray-500 mb-8">
            Fixed prices — no hidden extras, no lock-in contract. Monthly invoicing available.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden max-w-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-3 px-5 font-semibold text-gray-700">Office Size / Service</th>
                  <th className="text-right py-3 px-5 font-semibold text-gray-700">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {OFFICE_PRICING.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-5 text-gray-600">{item.size}</td>
                    <td className="py-3 px-5 text-right font-bold text-brand-500">
                      {item.from === null ? 'Bespoke quote' : item.to ? `£${item.from}–£${item.to}` : `From £${item.from}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS BY REGION ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Service Areas</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Office Cleaning — Areas We Cover
          </h2>
          <p className="text-gray-500 mb-10">
            We cover {OFFICE_LOCATIONS.length} locations across 4 regions. Find your nearest area below.
          </p>

          <div className="space-y-10">
            {regions.map(([regionKey, regionData]) => {
              const regionLocations = OFFICE_LOCATIONS.filter(l => l.region === regionKey)
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
                        href={`/cleaning/office-commercial-cleaning/${loc.slug}/`}
                        className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-brand-300 hover:bg-brand-50 transition-all group"
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
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Why Choose thefamgroup for Office Cleaning
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'No minimum contract',
                body: "Try us with a one-off deep clean before committing to a regular contract. We believe our work speaks for itself. Monthly rolling contracts available once you're ready to commit.",
              },
              {
                title: 'Transparent published pricing',
                body: 'From £65 for a small office. We publish our prices because we believe in transparency. Our rates are fixed per visit — no surprise invoices, no hidden extras.',
              },
              {
                title: 'Out-of-hours and weekend cleaning',
                body: 'We clean before your team arrives and after they leave. Early morning, late evening, Saturday, Sunday — we work around your business, not the other way around.',
              },
              {
                title: 'DBS-checked, £5M insured, certificated',
                body: 'Every operative is DBS-checked and identity-verified. We carry £5 million public liability insurance. Certificates provided — required by most corporate clients and facility managers.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100">
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
            Get a Quote for Office Cleaning Today
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            From £65 per visit. No minimum contract. 7 days a week. Serving Manchester, Crewe, Liverpool, and Stoke.
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
