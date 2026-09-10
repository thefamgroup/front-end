import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { BIN_LOCATIONS, BIN_PRICING, BIN_REGIONS } from '@/lib/bin-locations'
import { CONTACT } from '@/lib/seo-data'

export const metadata: Metadata = {
  title: 'Wheelie Bin Cleaning Manchester | thefamgroup — From £6.99/Bin, No Contract',
  description: 'Professional wheelie bin cleaning across Greater Manchester, Crewe & Cheshire, Liverpool & Stoke. From £6.99/bin/month — hot water pressure wash, biodegradable sanitiser, timed to your council collection day. No contract. Call 07767 759 013.',
  alternates: { canonical: `${CONTACT.siteUrl}/cleaning/bin-cleaning/` },
  keywords: [
    'bin cleaning Manchester', 'wheelie bin cleaning Manchester', 'bin wash Manchester',
    'wheelie bin cleaner Manchester', 'wheelie bin cleaning near me Manchester',
    'bin cleaning service Manchester', 'bin cleaning Greater Manchester',
    'bin cleaning Didsbury', 'bin cleaning Chorlton', 'bin cleaning Salford',
  ],
}

const hubSchema = {
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
      "description": "Professional wheelie bin cleaning across Greater Manchester, Crewe & Cheshire East, Liverpool & Merseyside, and Stoke-on-Trent. Hot water pressure wash, biodegradable sanitiser, from £6.99/bin/month. No contract.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does bin cleaning cost in Manchester?", "acceptedAnswer": { "@type": "Answer", "text": "thefamgroup wheelie bin cleaning in Manchester starts from £6.99 per bin per month on a four-weekly subscription. Two bins cost £6.49 each per month. One-off cleans are £10 per bin. No contract, cancel anytime." } },
        { "@type": "Question", "name": "Which areas do you cover for bin cleaning near Manchester?", "acceptedAnswer": { "@type": "Answer", "text": "We cover all Greater Manchester boroughs including Didsbury, Chorlton, Salford, Ancoats, Northern Quarter, Altrincham, Sale, Stockport, Heaton Moor, Prestwich, Bury, Bolton, Wigan, Oldham, and Rochdale. We also cover Crewe, Cheshire East, Liverpool, and Stoke-on-Trent." } },
        { "@type": "Question", "name": "Do I need to be home for wheelie bin cleaning?", "acceptedAnswer": { "@type": "Answer", "text": "No. We clean your bins kerbside after your council empties them on collection day. You receive an SMS text confirmation when done. No access to your home is needed." } },
      ]
    }
  ]
}

export default function BinCleaningHubPage() {
  const allMcrLocs = BIN_LOCATIONS.filter(l => l.region === 'manchester')
  const regions = Object.entries(BIN_REGIONS) as [string, typeof BIN_REGIONS[keyof typeof BIN_REGIONS]][]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5 text-sm font-semibold mb-6">
            Manchester · Crewe · Liverpool · Stoke
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5 leading-tight">
            Wheelie Bin Cleaning Manchester
            <span className="block text-brand-200 text-3xl mt-2">From £6.99/Bin — No Contract, Cancel Anytime</span>
          </h1>
          <p className="text-brand-100 text-xl max-w-2xl mx-auto mb-8">
            Professional hot water pressure wash, biodegradable sanitiser, and deodorise —
            every four weeks on your council collection day. You don&apos;t need to be home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a href="tel:+447767759013" className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-colors">
              <Phone size={18} /> 07767 759 013
            </a>
            <a href="https://wa.me/447767759013" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
              <MessageCircle size={18} /> WhatsApp to Subscribe
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-200 text-sm font-semibold">
            {['90°C Hot Water Pressure Wash', 'Biodegradable Sanitiser', 'No Contract', 'SMS Confirmation', 'Wastewater Captured', 'Environment Agency Compliant'].map(t => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle size={13} className="text-brand-300" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2 text-center">Transparent Pricing</p>
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-3 text-center">
            Wheelie Bin Cleaning Prices — Manchester
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Fixed monthly subscription — no hidden extras. Cheaper than most Manchester bin cleaning competitors with a more thorough clean.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {BIN_PRICING.subscription.map((p, i) => (
              <div key={p.label} className={`rounded-2xl p-6 border-2 text-center relative ${i === 1 ? 'border-brand-500 bg-brand-50' : 'border-gray-200 bg-white'}`}>
                {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">{p.saving}</div>}
                <div className="text-sm font-semibold text-gray-600 mb-2">{p.label}</div>
                <div className="text-4xl font-bold text-brand-600 mb-1">£{p.monthlyPerBin.toFixed(2)}</div>
                <div className="text-sm text-gray-500 mb-4">per bin per month</div>
                <div className="text-xs text-green-600 font-semibold">{i !== 1 ? p.saving : 'Most popular'}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div>
                <div className="font-semibold text-sm">One-off clean</div>
                <div className="text-xs text-gray-500">Any bin, any size, no commitment</div>
              </div>
              <div className="text-2xl font-bold text-gray-800">£{BIN_PRICING.oneOff.perBin.toFixed(2)}/bin</div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div>
                <div className="font-semibold text-sm">Commercial bins</div>
                <div className="text-xs text-gray-500">Restaurants, businesses, apartment blocks</div>
              </div>
              <div className="text-2xl font-bold text-gray-800">From £12</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8 text-center">
            Why Manchester Chooses thefamgroup for Bin Cleaning
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Cheaper than the leading competitor', body: "wheelie-bincleaning.co.uk charges £7.99/bin. We charge £6.99 — the same professional standard for £1 less per bin every month. Over 12 months that's £12 saved per bin." },
              { title: '90°C hot water — genuine deep clean', body: 'Not a cold rinse. Our hot water pressure washing at 90°C breaks down organic matter, kills bacteria on contact, and eliminates odours at source — not just masks them.' },
              { title: 'Only bin cleaner that also cleans your home', body: 'thefamgroup offers domestic cleaning, carpet cleaning, EOT and office cleaning. Combine services and we\'re already at your address — convenient and cost-effective.' },
              { title: 'No contract, no tie-in', body: 'Cancel any time with zero penalty. We earn loyalty through quality service, not lock-in clauses. Most clients stay for years because the service genuinely works.' },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <CheckCircle size={20} className="text-brand-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-3 text-center">
            Bin Cleaning — Manchester Areas We Cover
          </h2>
          <p className="text-gray-500 text-center mb-10">
            {allMcrLocs.length} Manchester locations covered — find your area below
          </p>

          {regions.map(([regionKey, regionData]) => {
            const regionLocs = BIN_LOCATIONS.filter(l => l.region === regionKey)
            if (regionLocs.length === 0) return null
            return (
              <div key={regionKey} className="mb-10">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  {regionData.name}
                  <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">{regionData.tagline}</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {regionLocs.map(loc => (
                    <Link
                      key={loc.slug}
                      href={`/cleaning/bin-cleaning/${loc.slug}/`}
                      className={`rounded-xl p-3.5 border text-sm font-semibold transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 ${loc.tier === 1 ? 'border-brand-200 bg-brand-50 text-brand-700' : 'border-gray-200 bg-white text-gray-700'}`}
                    >
                      <div>{loc.name}</div>
                      <div className="text-xs font-normal text-gray-400 mt-0.5">{loc.postcode}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8">
            Wheelie Bin Cleaning Manchester — FAQ
          </h2>
          {[
            { q: 'How much does wheelie bin cleaning cost in Manchester?', a: 'thefamgroup bin cleaning in Manchester starts from £6.99 per bin per month on a four-weekly subscription. Two bins cost £6.49 each. One-off cleans are £10 per bin. No hidden extras, no contract.' },
            { q: 'Which Manchester areas do you cover?', a: 'All Greater Manchester — Didsbury, Chorlton, Salford, Ancoats, Northern Quarter, Deansgate, Altrincham, Sale, Stockport, Heaton Moor, Prestwich, Bury, Bolton, Wigan, Oldham, Rochdale, and more. Plus Crewe, Liverpool, and Stoke.' },
            { q: 'When do you clean bins in Manchester?', a: "We clean immediately after Manchester City Council or your local council empties your bins on collection day. This ensures bins are completely empty for the most thorough clean. Most South Manchester collections are on Monday to Thursday." },
            { q: 'Do I need to be home?', a: 'No. We clean kerbside without any access to your home. You receive an SMS text when the clean is complete.' },
            { q: "Is bin cleaning worth it in Manchester?", a: "Yes — particularly with Manchester's weekly general waste collections and summer temperatures. Within weeks of skipping a clean, bins develop bacteria, maggots, and persistent odours that are very difficult to eliminate yourself. Regular professional cleaning prevents this entirely for £6.99/month." },
          ].map((faq, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-3" open={i === 0}>
              <summary className="p-5 cursor-pointer font-semibold text-gray-900 text-sm">{faq.q}</summary>
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-3">Start Your Bin Cleaning Subscription</h2>
          <p className="text-brand-100 mb-8">From £6.99/bin/month. No contract. No need to be home. SMS after every clean.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447767759013" className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50">
              <Phone size={18} /> 07767 759 013
            </a>
            <a href="https://wa.me/447767759013" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600">
              <MessageCircle size={18} /> WhatsApp to Subscribe
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
