import { Phone, MessageCircle, CheckCircle, ChevronRight, MapPin, Star } from 'lucide-react'
import type { ServiceData, LocationData } from '@/lib/seo-data'
import { interpolate, CONTACT, LOCATIONS } from '@/lib/seo-data'
import { LocalBusinessSchema } from './LocalBusinessSchema'
import Link from 'next/link'

interface Props {
  service: ServiceData
  location: LocationData
}

export function LocalServicePage({ service, location }: Props) {
  const h1 = interpolate(service.h1Template, location)
  const intro = interpolate(service.intro, location)

  // Nearby areas for internal linking
  const nearbyPages = location.nearbyAreas
    .map(slug => LOCATIONS.find(l => l.slug === slug))
    .filter(Boolean)
    .slice(0, 4)

  const waMessage = encodeURIComponent(
    `Hi thefamgroup! I need ${service.shortName} in ${location.name} (${location.postcode}). Can you give me a quote?`
  )
  const waUrl = `https://wa.me/447769240184?text=${waMessage}`

  return (
    <>
      {/* ── JSON-LD Schema ── */}
      <LocalBusinessSchema service={service} location={location} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-brand-200 text-sm mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/cleaning/" className="hover:text-white transition-colors">Cleaning Services</Link>
            <ChevronRight size={13} />
            <Link href={`/cleaning/${service.slug}/`} className="hover:text-white transition-colors">{service.name}</Link>
            <ChevronRight size={13} />
            <span className="text-white">{location.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Location pill */}
              <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                <MapPin size={13} />
                {location.name} · {location.postcode}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4">
                {h1}
              </h1>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">{service.tagline}</p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['DBS-Checked Team', '£5M Insured', 'Family. Community. Care.'].map(t => (
                  <span key={t} className="flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <CheckCircle size={11} /> {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-6 py-3.5 rounded-full text-sm hover:bg-brand-50 transition-colors"
                  aria-label={`Call thefamgroup: ${CONTACT.phone}`}
                >
                  <Phone size={16} /> Call {CONTACT.phone}
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp thefamgroup"
                >
                  <MessageCircle size={16} /> WhatsApp for a Quote
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {service.name} — Prices in {location.name}
              </p>
              <div className="space-y-2 mb-5">
                {service.prices.map(p => (
                  <div key={p.label} className="flex justify-between items-baseline py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{p.label}</span>
                    <span className="text-lg font-bold text-brand-500 font-display">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-4">
                Prices are guide rates. Final price confirmed before booking. No hidden extras.
              </p>
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
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
              About This Service
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{intro}</p>
            <p className="text-gray-600 leading-relaxed">{location.localContext}</p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-2">
            What's Included in Your {service.shortName}
          </h2>
          <p className="text-gray-500 mb-8">Every job comes with all of the following as standard.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {service.included.map(item => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Optional Add-Ons</h3>
          <div className="flex flex-wrap gap-2">
            {service.addons.map(a => (
              <span key={a} className="text-sm bg-brand-50 text-brand-600 font-semibold px-3 py-1.5 rounded-full border border-brand-100">
                + {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THEFAMGROUP ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Why Choose thefamgroup in {location.name}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '🛡',
                title: 'DBS-Checked & Insured',
                body: `Every cleaner serving ${location.name} is DBS-checked, reference-verified, and covered by our £5M public liability insurance.`,
              },
              {
                icon: '⭐',
                title: 'Satisfaction Guaranteed',
                body: 'Not happy? We return and put it right — free of charge. We don\'t cut corners and we don\'t accept jobs that don\'t meet our standard.',
              },
              {
                icon: '📅',
                title: 'Flexible Scheduling',
                body: `We work 7 days a week across ${location.name} and ${location.postcode}. Early mornings, evenings, and weekend slots available.`,
              },
              {
                icon: '💷',
                title: 'Transparent Pricing',
                body: 'No hidden fees, no surprise charges. Your price is confirmed before we start. Pay after the job — never upfront.',
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly Option',
                body: '100% biodegradable, non-toxic products available at no extra charge. Safe for children, pets, and the environment.',
              },
              {
                icon: '💬',
                title: 'Fast Response',
                body: 'WhatsApp, call, or email. We respond within 2 hours during business hours. Same-day quotes available on request.',
              },
            ].map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
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
            What Our Clients Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                name: 'Sarah R.',
                location: `${location.name} resident`,
                review: `Absolutely brilliant service. Used thefamgroup for our end of tenancy clean and got the full deposit back. Thorough, professional, and great value.`,
                rating: 5,
              },
              {
                name: 'James A.',
                location: `Letting agent, ${location.name}`,
                review: 'We now use thefamgroup for all our managed properties. Reliable, consistent, and always to a high standard. Highly recommend for landlords.',
                rating: 5,
              },
              {
                name: 'Priya O.',
                location: `Homeowner, ${location.name}`,
                review: 'I was impressed by how careful they were — eco-friendly products, same cleaner every week, and the house has never looked better. Wonderful team.',
                rating: 5,
              },
            ].map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-4">"{r.review}"</p>
                <div>
                  <p className="text-sm font-bold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-10">
            Common Questions About {service.shortName} in {location.name}
          </h2>
          <div className="divide-y divide-gray-100">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group py-5" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-500 transition-colors">
                  {interpolate(faq.q, location)}
                  <span className="ml-4 text-brand-500 font-bold text-xl flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-3 pr-8">
                  {interpolate(faq.a, location)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-brand-500 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Ready to Book Your {service.shortName} in {location.name}?
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Call us, send a WhatsApp message, or email — we'll get back to you within 2 hours with a confirmed quote.
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

      {/* ── NEARBY AREAS (internal links) ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {service.shortName} Near {location.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {nearbyPages.map(nearby => nearby && (
              <Link
                key={nearby.slug}
                href={`/cleaning/${service.slug}/${nearby.slug}/`}
                className="inline-flex items-center gap-1.5 text-sm text-brand-600 bg-white border border-brand-200 px-3 py-1.5 rounded-full hover:bg-brand-50 transition-colors"
              >
                <MapPin size={12} />
                {service.shortName} in {nearby.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            We cover all of Manchester and Crewe including postcodes: M1–M50, CW1–CW12, SK, WA, OL, BL and surrounding areas.
          </p>
        </div>
      </section>
    </>
  )
}
