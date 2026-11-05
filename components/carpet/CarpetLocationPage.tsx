import { Phone, MessageCircle, CheckCircle, ChevronRight, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import type { CarpetLocation } from '@/lib/carpet-locations'
import { CARPET_LOCATIONS, CARPET_PRICING, CARPET_SERVICES, buildFAQ } from '@/lib/carpet-locations'
import { CONTACT } from '@/lib/seo-data'

interface Props {
  location: CarpetLocation
}

const BENEFITS = [
  {
    title: 'Published prices — no surprises',
    body: 'From £25 per room, £65 for two rooms. We publish our prices because we believe in transparency. No hidden extras. No call-out charge.',
  },
  {
    title: 'Hot water extraction — the gold standard',
    body: 'Professional equipment at pressures and temperatures supermarket hire machines cannot match. Deep cleaning removes what years of vacuuming leaves behind.',
  },
  {
    title: 'DBS-checked — you invite us into your home',
    body: 'Every operative holds a valid DBS check. We know you are trusting us with your home, and we take that seriously. Certificates available on request.',
  },
  {
    title: 'Fast drying — back to normal in hours',
    body: 'Our high-extraction process removes maximum moisture. Drying time of 2–4 hours — compared to 8–24 hours with lower-powered equipment.',
  },
  {
    title: 'Pet-safe, child-safe products',
    body: 'All cleaning solutions are pet-safe and child-safe. Once dry, your carpets are completely safe for children and pets to play on.',
  },
  {
    title: 'End of tenancy specialists',
    body: 'Certificate of clean provided on every EOT carpet clean. Deposit-back guarantee — if the clean is not accepted, we return and re-clean free.',
  },
]

export default function CarpetLocationPage({ location }: Props) {
  const faqs = buildFAQ(location)

  const validNearby = location.nearbyAreas
    .map(name => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    }))
    .filter(({ slug }) => CARPET_LOCATIONS.some(l => l.slug === slug))
    .slice(0, 5)

  const waMessage = encodeURIComponent(
    `Hi thefamgroup! I need carpet cleaning in ${location.name} (${location.postcode}). Can you give me a quote?`
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
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '08:00', closes: '17:00' },
        ],
      },
      {
        '@type': 'Service',
        name: `Carpet Cleaning ${location.name}`,
        provider: { '@id': 'https://www.thefamgroup.uk/#business' },
        serviceType: 'Carpet Cleaning',
        description: `Professional hot water extraction carpet cleaning in ${location.name} (${location.postcode}). DBS-checked, £5M insured, pet-safe, end of tenancy specialists.`,
        areaServed: { '@type': 'Place', name: location.name, postalCode: location.postcode, addressCountry: 'GB' },
        offers: { '@type': 'Offer', price: '25', priceCurrency: 'GBP', description: 'From £25 per room, £65 for 2 rooms any size' },
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
          { '@type': 'ListItem', position: 2, name: 'Carpet Cleaning', item: 'https://www.thefamgroup.uk/cleaning/carpet-cleaning' },
          { '@type': 'ListItem', position: 3, name: location.name, item: `https://www.thefamgroup.uk/cleaning/carpet-cleaning/${location.slug}` },
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
            <Link href="/cleaning/carpet-cleaning/" className="hover:text-white transition-colors">Carpet Cleaning</Link>
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
                Carpet Cleaning {location.name} — From £25/Room, Hot Water Extraction
              </h1>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">
                Professional carpet cleaning in {location.name}. DBS-checked operatives, pet-safe products, end of tenancy specialists. Fixed prices — no hidden extras.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['DBS-Checked', '£5M Insured', 'From £25/Room', '2–4 Hr Drying', '7 Days a Week'].map(t => (
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
                Carpet Cleaning Prices — {location.name}
              </p>
              <div className="space-y-1 mb-5">
                {CARPET_PRICING.slice(0, 7).map(p => (
                  <div key={p.room} className="flex justify-between items-baseline py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{p.room}</span>
                    <span className="text-base font-bold text-brand-500 font-display">£{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-4">Fixed prices. No call-out charge. No hidden extras.</p>
              <a
                href={CONTACT.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                <Phone size={15} /> Get an Exact Quote
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
              Professional Carpet Cleaners in {location.name}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              thefamgroup provides professional carpet cleaning across {location.name} ({location.postcode}) and the surrounding {location.borough} area, 7 days a week. {location.localContext}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use hot water extraction — the most effective carpet cleaning method available. Our professional equipment operates at significantly higher temperature and extraction power than supermarket hire machines, removing deeply embedded dirt, allergens, pet dander, and stains from deep within the pile. {location.carpetContext}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every operative is DBS-checked and we carry £5 million public liability insurance. We bring all equipment and pet-safe, child-safe cleaning products. You receive a fixed price before we start — what we quote is what you pay.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL ISSUES ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Common Carpet Issues in {location.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">{location.stainContext}</p>

          <h3 className="text-lg font-bold text-gray-900 mb-4">Our Specialist Treatments</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['Red wine & alcohol stains', 'Specialist pre-treatment breaks down tannins before hot water extraction removes them completely.'],
              ['Pet urine & odour', 'Enzyme-based treatment eliminates odour at the source — not just surface-level masking.'],
              ['Pet hair removal', 'Powerful extraction removes embedded pet hair from deep in the pile that vacuuming misses.'],
              ['Coffee & tea stains', 'Effective even on older, set-in stains with appropriate pre-treatment application.'],
              ['Mud & outdoor grime', 'Hot water extraction lifts ground-in mud from all carpet depths in a single visit.'],
              ['Allergen reduction', 'Removes dust mites, pet dander, and other allergens trapped in carpet fibres.'],
            ].map(([title, body]) => (
              <div key={title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-gray-800">{title}</span>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
            Carpet Cleaning Services in {location.name}
          </h2>
          <p className="text-gray-500 mb-8">Property types we clean in {location.name}: {location.propertyTypes}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CARPET_SERVICES.map(service => (
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
            Carpet Cleaning Prices — {location.name} ({location.postcode})
          </h2>
          <p className="text-gray-500 mb-6">
            We publish our prices — no quotes needed for standard room cleans. What you see below is what you pay. No VAT surprises, no call-out charges.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left py-3 px-5 font-semibold text-gray-700">Room / Area</th>
                    <th className="text-right py-3 px-5 font-semibold text-gray-700">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {CARPET_PRICING.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-5 text-gray-600">{item.room}</td>
                      <td className="py-3 px-5 text-right font-bold text-brand-500">£{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            All prices include pre-inspection, pre-treatment spray, hot water extraction, and spot stain treatment. Pet stain enzyme treatment and specialist stain removal available as add-ons. Call{' '}
            <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a>{' '}
            for a bespoke quote on larger properties or commercial carpets.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Why {location.name} Chooses thefamgroup for Carpet Cleaning
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

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            How Our Carpet Cleaning Works in {location.name}
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              ['1. Book', `Call ${CONTACT.phone} or WhatsApp. Tell us your ${location.postcode} postcode and number of rooms. We give you a fixed price on the call.`],
              ['2. We assess', 'Our operative inspects each carpet — identifying fibre type, soiling level, and stains needing specialist pre-treatment.'],
              ['3. Pre-treatment', 'Professional pre-treatment spray breaks down soiling and primes stained areas before main cleaning begins.'],
              ['4. Extraction', 'Hot water and cleaning solution injected deep into the pile at high pressure, then immediately extracted with all dissolved dirt.'],
              ['5. Final check', 'We walk through the cleaned carpets with you. EOT cleans receive a certificate of clean before we leave.'],
            ].map(([step, body]) => (
              <li key={step} className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="font-bold text-brand-500 mb-2 text-sm">{step}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-brand-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Reviews</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            What Our {location.name} Clients Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                name: 'David K.',
                label: `Homeowner, ${location.name}`,
                review: `Absolutely brilliant. The carpets hadn't been professionally cleaned in years — thefamgroup restored them completely. I couldn't believe the difference. Highly recommend.`,
              },
              {
                name: 'Sarah M.',
                label: `Landlord, ${location.name}`,
                review: 'I use thefamgroup for all my end of tenancy carpet cleans. Fast, reliable, and tenants get their deposit back. Exactly what a busy landlord needs.',
              },
              {
                name: 'James T.',
                label: `Family home, ${location.name}`,
                review: 'Dog, two kids, and carpets that showed every sign of it. One visit from thefamgroup and they looked new. Pet stain treatment worked perfectly. Worth every penny.',
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
              Carpet Cleaning Near {location.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {validNearby.map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/cleaning/carpet-cleaning/${slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-600 bg-white border border-brand-200 px-3 py-1.5 rounded-full hover:bg-brand-50 transition-colors"
                >
                  <MapPin size={12} />
                  Carpet Cleaning {name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Not listed? Call <a href={CONTACT.phoneTel} className="text-brand-500 hover:underline">{CONTACT.phone}</a> to confirm we cover your area.
            </p>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Carpet Cleaning {location.name} — Frequently Asked Questions
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
            Book Carpet Cleaning in {location.name} Today
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            From £25 per room. Fixed prices. DBS-checked. Pet-safe products. Available 7 days a week across {location.name} and {location.postcode}.
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
