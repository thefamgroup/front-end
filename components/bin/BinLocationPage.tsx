import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle, ChevronRight, MapPin } from 'lucide-react'
import type { BinLocation } from '@/lib/bin-locations'
import { BIN_PRICING, buildBinFAQ } from '@/lib/bin-locations'

interface Props {
  location: BinLocation
}

export function BinLocationPage({ location }: Props) {
  const faqs = buildBinFAQ(location)

  const waMessage = encodeURIComponent(
    `Hi thefamgroup! I'd like wheelie bin cleaning in ${location.name} (${location.postcode}). Can you give me a quote?`
  )
  const waUrl = `https://wa.me/447767759013?text=${waMessage}`

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.thefamgroup.uk/#business",
        "name": "thefamgroup",
        "url": "https://www.thefamgroup.uk",
        "telephone": "+447767759013",
        "email": "info@thefamgroup.uk",
        "priceRange": "£",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manchester",
          "addressRegion": "Greater Manchester",
          "addressCountry": "GB"
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "07:00", "closes": "16:00" }
        ]
      },
      {
        "@type": "Service",
        "name": `Wheelie Bin Cleaning ${location.name}`,
        "provider": { "@id": "https://www.thefamgroup.uk/#business" },
        "serviceType": "Bin Cleaning",
        "description": `Professional wheelie bin cleaning in ${location.name} (${location.postcode}). Hot water pressure wash, biodegradable sanitiser, 4-weekly subscription from £6.99/bin. No contract, cancel anytime.`,
        "areaServed": {
          "@type": "Place",
          "name": location.name,
          "postalCode": location.postcode,
          "addressCountry": "GB"
        },
        "offers": {
          "@type": "Offer",
          "price": "6.99",
          "priceCurrency": "GBP",
          "description": "From £6.99 per bin per month on 4-weekly subscription"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thefamgroup.uk" },
          { "@type": "ListItem", "position": 2, "name": "Bin Cleaning", "item": "https://www.thefamgroup.uk/cleaning/bin-cleaning" },
          { "@type": "ListItem", "position": 3, "name": location.name, "item": `https://www.thefamgroup.uk/cleaning/bin-cleaning/${location.slug}` }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20">

          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-brand-200 text-sm mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/cleaning/bin-cleaning/" className="hover:text-white transition-colors">Bin Cleaning</Link>
            <ChevronRight size={13} />
            <span className="text-white">{location.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                <MapPin size={13} /> {location.name} · {location.postcode}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4">
                Wheelie Bin Cleaning {location.name}
                <span className="block text-brand-200 mt-1">From £6.99/bin — No Contract</span>
              </h1>

              <p className="text-brand-100 text-lg mb-6">
                Professional hot water pressure wash, biodegradable sanitiser, and deodorise —
                every four weeks on your {location.councilName} collection day. No need to be home.
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  '90°C hot water pressure wash inside and out',
                  'Biodegradable sanitiser — kills 99.9% of bacteria',
                  'Odour elimination at source',
                  'Timed to your council collection day',
                  'No contract — cancel anytime',
                  'Wastewater captured — Environment Agency compliant',
                ].map(pt => (
                  <li key={pt} className="flex items-center gap-2 text-brand-100 text-sm">
                    <CheckCircle size={15} className="text-brand-300 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+447767759013"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-6 py-3.5 rounded-full hover:bg-brand-50 transition-colors">
                  <Phone size={16} /> 07767 759 013
                </a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-full hover:bg-green-600 transition-colors">
                  <MessageCircle size={16} /> WhatsApp to Subscribe
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-1">Pricing</p>
              <h2 className="text-xl font-bold font-display mb-4">
                {location.name} Bin Cleaning Prices
              </h2>
              <div className="space-y-3 mb-5">
                {BIN_PRICING.subscription.map(p => (
                  <div key={p.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-sm">{p.label}</div>
                      <div className="text-xs text-green-600 font-semibold">{p.saving}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-600">£{p.monthlyPerBin.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">per bin/month</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                  <div className="font-semibold text-sm">One-off clean</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">£{BIN_PRICING.oneOff.perBin.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">per bin</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4">{BIN_PRICING.commercial.label}</p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="block text-center bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm">
                Subscribe Now — Cancel Anytime
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-5">
            Wheelie Bin Cleaning in {location.name} — Why It Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{location.localContext}</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {location.councilName} collects {location.collectionFrequency.toLowerCase()}.
            We time every clean to run on or after your collection day — when your bin is completely
            empty and left out at the kerbside. This gives us full access to every corner inside
            the bin for the most thorough clean possible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            {location.propertyTypes} — we understand the bin situations specific to {location.name}
            properties and have the right equipment to clean every type effectively. You don&apos;t need
            to be home, move anything, or prepare anything. We do everything kerbside and text you
            when we&apos;re done.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2 text-center">Simple Process</p>
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-10 text-center">
            How Our {location.name} Bin Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Subscribe', desc: `Call, WhatsApp, or book online. We confirm your ${location.councilName} collection day and match our schedule.` },
              { step: '2', title: 'Council collects', desc: `${location.councilName} empties your bin on your normal collection day and returns it to your property.` },
              { step: '3', title: 'We clean', desc: 'Our team arrives at the kerbside with professional equipment. 90°C pressure wash, sanitise, deodorise. No access to your home needed.' },
              { step: '4', title: 'You get a text', desc: 'SMS confirmation when your bin is clean, fresh, and back at your property. Same time next month — automatically.' },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THEFAMGROUP */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8 text-center">
            Why {location.name} Chooses thefamgroup for Bin Cleaning
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Cheapest monthly subscription', body: `From £6.99/bin/month — below wheelie-bincleaning.co.uk's £7.99 and matching the cheapest competitor in ${location.name}. Same professional standard, better value.` },
              { title: '90°C hot water — not a rinse', body: 'We use genuine hot water extraction pressure washing at 90°C — the heat kills bacteria and breaks down organic matter that a cold rinse simply cannot shift.' },
              { title: 'No contract, no tie-in', body: 'Cancel any time with no penalty. We earn your loyalty through the quality of every clean, not through lock-in clauses.' },
              { title: 'Eco-safe wastewater handling', body: 'All waste water captured and disposed of responsibly. Environment Agency compliant. Biodegradable chemicals only. No runoff into your street or garden.' },
              { title: 'Combined home and bin cleaning', body: `Unique to thefamgroup: combine bin cleaning with a domestic clean, carpet clean, or EOT clean. We're already in ${location.name} — why pay twice for travel?` },
              { title: 'Text confirmation every visit', body: 'SMS notification when your bins are done. Know your service has been completed without needing to be home or check in yourself.' },
            ].map(c => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <CheckCircle size={18} className="text-brand-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL BINS */}
      <section className="py-14 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">
            Commercial Bin Cleaning in {location.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We also provide commercial bin cleaning contracts for businesses, restaurants,
            takeaways, apartment buildings, managed properties, and landlords across {location.name}.
            Commercial bins — 240L, 360L, 660L, and 1100L wheelie bins — all cleaned to the
            same standard as domestic bins.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Commercial bin cleaning in {location.name} starts from £12 per bin per visit,
            with weekly, fortnightly, or monthly contracts available. Certificate of clean
            available on request for environmental health compliance.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {['Restaurants & takeaways', 'Apartment buildings & managed property', 'Offices & commercial premises'].map(t => (
              <div key={t} className="bg-white rounded-xl p-4 border border-brand-100 text-sm font-semibold text-gray-800">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8">
            Wheelie Bin Cleaning {location.name} — FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm">
                  {faq.q}
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      {location.nearbyAreas.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold font-display text-gray-900 mb-5">
              Bin Cleaning Near {location.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {location.nearbyAreas.map(slug => (
                <Link
                  key={slug}
                  href={`/cleaning/bin-cleaning/${slug}/`}
                  className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-600 font-semibold hover:bg-brand-50 hover:border-brand-200 transition-colors"
                >
                  Bin Cleaning {slug.replace('-bin', '').split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-3">
            Start Your {location.name} Bin Cleaning Subscription Today
          </h2>
          <p className="text-brand-100 mb-8">
            From £6.99/bin/month. No contract. No need to be home.
            Text confirmation after every clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447767759013"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-colors">
              <Phone size={18} /> 07767 759 013
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
              <MessageCircle size={18} /> WhatsApp to Subscribe
            </a>
          </div>
          <p className="text-brand-200 text-sm mt-6">
            thefamgroup · {location.name} · info@thefamgroup.uk · thefamgroup.uk
          </p>
        </div>
      </section>
    </>
  )
}
