import { Phone, MessageCircle, CheckCircle, ChevronRight, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import type { OfficeLocation } from '@/lib/office-locations'
import { OFFICE_LOCATIONS, OFFICE_PRICING, OFFICE_SERVICES, buildOfficeFAQ } from '@/lib/office-locations'
import { CONTACT } from '@/lib/seo-data'

interface Props {
  location: OfficeLocation
}

const INCLUDED = {
  'Workstations & Desk Areas': [
    'All desks wiped down and sanitised',
    'Computer screens, keyboards, and phones cleaned',
    'Chairs wiped and tidied',
    'All bins emptied and relined',
    'Filing and storage surfaces dusted',
  ],
  'Floors & Common Areas': [
    'All carpeted areas vacuumed thoroughly',
    'Hard floors swept and mopped',
    'Corridors, stairwells, and reception areas cleaned',
    'Entrance mats shaken and repositioned',
    'Glass partitions and lift interiors wiped down',
  ],
  'Kitchen & Breakout': [
    'Worktops, sink, and appliance exteriors cleaned',
    'Microwave interior, kettle, and fridge exterior wiped',
    'Tables and chairs wiped down',
    'Kitchen bins emptied and relined',
  ],
  'Toilets & Washrooms': [
    'All toilets, sinks, and urinals sanitised with disinfectant',
    'Mirrors cleaned streak-free',
    'Floors mopped with disinfectant solution',
    'Soap and paper towel dispensers checked and refilled',
    'Bins emptied and relined',
  ],
}

const BENEFITS = [
  {
    title: 'No minimum contract',
    body: 'Many office cleaning companies require 3, 6, or 12-month contracts. We have no minimum term. Start with one visit, cancel anytime. No penalty clauses.',
  },
  {
    title: 'Published transparent pricing',
    body: 'From £65 per visit. We publish our prices because we believe in transparency. No variable rates, no call-out charges, no surprise invoices.',
  },
  {
    title: 'DBS-checked — every operative, every time',
    body: 'Not just the manager — every person entering your premises is DBS-checked. Certificates available on request for facilities compliance.',
  },
  {
    title: 'Out-of-hours specialists',
    body: '6am early mornings, post-6pm evenings, and weekends available. Your team arrives to a clean office. Business operations never disrupted.',
  },
  {
    title: 'Local team — direct accountability',
    body: 'Unlike national cleaning chains, you deal directly with thefamgroup. No call centres. Fast response. Direct accountability for every visit.',
  },
  {
    title: '£5M public liability insurance',
    body: 'We carry £5 million public liability insurance. Certificate available on request — essential for building managers and facilities teams.',
  },
]

export default function OfficeLocationPage({ location }: Props) {
  const faqs = buildOfficeFAQ(location)

  const validNearby = location.nearbyAreas
    .map(name => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    }))
    .filter(({ slug }) => OFFICE_LOCATIONS.some(l => l.slug === slug))
    .slice(0, 5)

  const waMessage = encodeURIComponent(
    `Hi thefamgroup! I need office cleaning in ${location.name} (${location.postcode}). Can you give me a quote?`
  )
  const waUrl = `https://wa.me/447767759013?text=${waMessage}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.thefamgroup.uk/#business',
        name: 'thefamgroup',
        url: 'https://www.thefamgroup.uk',
        telephone: '+447767759013',
        email: 'info@thefamgroup.uk',
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manchester',
          addressRegion: 'Greater Manchester',
          addressCountry: 'GB',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '07:00', closes: '18:00' },
        ],
      },
      {
        '@type': 'Service',
        name: `Office Cleaning ${location.name}`,
        provider: { '@id': 'https://www.thefamgroup.uk/#business' },
        serviceType: 'Commercial Cleaning',
        description: `Professional office and commercial cleaning in ${location.name} (${location.postcode}). DBS-checked, £5M insured, no minimum contract, out-of-hours available.`,
        areaServed: { '@type': 'Place', name: location.name, postalCode: location.postcode, addressCountry: 'GB' },
        offers: { '@type': 'Offer', price: '65', priceCurrency: 'GBP', description: 'From £65 per visit for small offices' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thefamgroup.uk' },
          { '@type': 'ListItem', position: 2, name: 'Office & Commercial Cleaning', item: 'https://www.thefamgroup.uk/cleaning/office-commercial-cleaning' },
          { '@type': 'ListItem', position: 3, name: location.name, item: `https://www.thefamgroup.uk/cleaning/office-commercial-cleaning/${location.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-brand-200 text-sm mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/cleaning/office-commercial-cleaning/" className="hover:text-white transition-colors">Office Cleaning</Link>
            <ChevronRight size={13} />
            <span className="text-white">{location.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                <MapPin size={13} />
                {location.name} · {location.postcode}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4">
                Office Cleaning {location.name} — DBS-Checked, From £65/Visit, No Minimum Contract
              </h1>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">
                Professional office and commercial cleaning in {location.name}. Flexible contracts, transparent fixed pricing, out-of-hours from 6am or after 6pm. 7 days a week.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['DBS-Checked', '£5M Insured', 'No Min. Contract', 'Out-of-Hours', 'Fixed Pricing'].map(t => (
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
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp for a Quote
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Office Cleaning Prices — {location.name}
              </p>
              <div className="space-y-2 mb-5">
                {OFFICE_PRICING.map(p => (
                  <div key={p.size} className="flex justify-between items-baseline py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <span className="text-sm font-medium text-gray-700">{p.size}</span>
                      <p className="text-xs text-gray-400">{p.sqft}</p>
                    </div>
                    <span className="text-base font-bold text-brand-500 font-display ml-4 flex-shrink-0">
                      {p.from ? `£${p.from}+` : 'POA'}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-4">Fixed prices. No hidden extras. Contract clients receive preferential rates.</p>
              <a
                href={CONTACT.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                <Phone size={15} /> Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">About This Service</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-5">
              Professional Office Cleaners in {location.name}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              thefamgroup provides professional office and commercial cleaning across {location.name} ({location.postcode}) and the surrounding {location.borough} area. {location.localContext}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">{location.officeContext}</p>
            <p className="text-gray-600 leading-relaxed">
              Every operative is DBS-checked and we carry £5 million public liability insurance — certificates available on request. No minimum contract period. Fixed pricing with no hidden extras. We can typically start within 48–72 hours of your enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            What Our {location.name} Office Cleaning Includes
          </h2>
          <p className="text-gray-500 mb-8">Every contract clean covers the following as standard.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(INCLUDED).map(([heading, items]) => (
              <div key={heading} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">{heading}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-brand-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Optional add-ons: carpet deep cleaning, internal window cleaning, hard floor stripping and polishing, post-construction deep cleans, COSHH-compliant clinical cleaning for healthcare and dental practices.
          </p>
        </div>
      </section>

      {/* ── BUSINESS TYPES + SERVICES ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Office Cleaning for {location.name} Businesses
          </h2>
          <p className="text-gray-600 mb-8">{location.businessTypes}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICE_SERVICES.map(service => (
              <div key={service.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{service.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Office Cleaning Prices — {location.name} ({location.postcode})
          </h2>
          <p className="text-gray-500 mb-6">
            We publish our prices. Neither of the two best-known office cleaning companies in the region show their prices — we do, because transparency builds trust.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left py-3 px-5 font-semibold text-gray-700">Office Size</th>
                    <th className="text-left py-3 px-5 font-semibold text-gray-700">Approx. Area</th>
                    <th className="text-right py-3 px-5 font-semibold text-gray-700">Price from</th>
                    <th className="text-left py-3 px-5 font-semibold text-gray-700 hidden sm:table-cell">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {OFFICE_PRICING.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-5 font-medium text-gray-800">{item.size}</td>
                      <td className="py-3 px-5 text-gray-500">{item.sqft}</td>
                      <td className="py-3 px-5 text-right font-bold text-brand-500">
                        {item.from ? `£${item.from}${item.to ? `–£${item.to}` : ''}` : 'POA'}
                      </td>
                      <td className="py-3 px-5 text-gray-500 text-xs hidden sm:table-cell">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Contract clients booking weekly or daily cleaning receive preferential pricing. Call{' '}
            <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a>{' '}
            for a fixed quote based on your exact {location.postcode} requirements.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Why {location.name} Businesses Choose thefamgroup
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ title, body }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-brand-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Reviews</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            What {location.name} Businesses Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                name: 'Rachel B.',
                label: `Office Manager, ${location.name}`,
                review: `We switched to thefamgroup six months ago. Reliable, thorough, and always spotless before we open. The team is consistently professional.`,
              },
              {
                name: 'Mark H.',
                label: `Solicitor, ${location.name}`,
                review: 'As a law firm we need absolute reliability and discretion. thefamgroup delivers — early morning, every time, to a standard our clients notice.',
              },
              {
                name: 'Priya S.',
                label: `Dental Practice, ${location.name}`,
                review: 'COSHH-compliant cleaning for our clinical areas. They understand the requirements, bring the right products, and we have complete peace of mind.',
              },
            ].map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-4">"{r.review}"</p>
                <p className="text-sm font-bold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-400">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      {validNearby.length > 0 && (
        <section className="bg-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Office Cleaning Near {location.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {validNearby.map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/cleaning/office-commercial-cleaning/${slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-600 bg-white border border-brand-200 px-3 py-1.5 rounded-full hover:bg-brand-50 transition-colors"
                >
                  <MapPin size={12} />
                  Office Cleaning {name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Not listed? Call <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a> — we serve a wide area from our Manchester and Crewe bases.
            </p>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Office Cleaning {location.name} — Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-500 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-brand-500 font-bold text-xl flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-3 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-500 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Get a Free Office Cleaning Quote in {location.name}
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            DBS-checked. £5M insured. No minimum contract. Fixed pricing. Available 7 days a week across {location.name} and {location.postcode}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-colors"
            >
              <Phone size={17} /> {CONTACT.phone}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
