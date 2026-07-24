import type { Metadata } from 'next'
import Link from 'next/link'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES, CONTACT } from '@/lib/data'
import { Phone } from 'lucide-react'
import { SERVICE_ILLUSTRATIONS } from '@/components/icons/ServiceIllustrations'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Home cleaning, deep clean, end of tenancy, office cleaning and more in Manchester and Crewe. DBS-checked, fully insured, no contracts. Book online or get an instant quote.',
}

function ServiceCard({ service }: { service: typeof RESIDENTIAL_SERVICES[0] }) {
  const Illustration = SERVICE_ILLUSTRATIONS[service.id]
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all group">
      <div className="h-40 bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
        {Illustration
          ? <Illustration className="w-28 h-28" />
          : <span className="text-6xl">{service.emoji}</span>
        }
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
        <Link href="/quote" className="text-sm font-semibold text-brand-500 hover:underline inline-flex items-center gap-1">
          Book Now →
        </Link>
      </div>
    </div>
  )
}

const PACKAGES = [
  {
    tag: 'Basic Package', name: 'Fresh Start', desc: 'Light maintenance, small apartments, regular upkeep',
    price: '£60', note: 'Per visit · up to 2 bed / 1 bath', featured: false,
    features: ['Dusting all surfaces', 'Vacuuming & mopping floors', 'Kitchen wipe-down', 'Bathroom cleaning', 'Rubbish removal'],
  },
  {
    tag: 'Standard Package', name: 'Comfort Clean', desc: 'Families, regular home care, busy professionals',
    price: '£95', note: 'Per visit · up to 2 bed / 1 bath', featured: true,
    features: ['Everything in Basic', 'Make beds / change linens', 'Inside microwave', 'Baseboard wipe-down', 'Light fixture dusting'],
  },
  {
    tag: 'Premium Package', name: 'Deep Refresh', desc: 'Seasonal deep clean, first-time clients, post-event',
    price: '£160', note: 'Per visit · up to 2 bed / 1 bath', featured: false,
    features: ['Everything in Standard', 'Inside oven & fridge', 'Inside all cupboards', 'Interior windows (up to 10)', 'Door frames & light switches'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f0] py-16">
        <div className="container-wide">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-4">
            What Can We Clean For You?
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mb-6">
            From routine home cleanings to deep office cleans and move-in/move-out services — we tailor every job to your needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">Book Online</Link>
            <a href={CONTACT.phoneTel} className="btn-outline"><Phone size={15} /> {CONTACT.phone}</a>
          </div>
          <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
            {['DBS-checked cleaners', '£5M insurance coverage', 'No contracts or commitments'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-brand-500 font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Residential */}
      <section className="py-16">
        <div className="container-wide">
          <span className="section-tag">Residential</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Home Cleaning Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESIDENTIAL_SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="container-wide">
          <span className="section-tag">Commercial</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Business Cleaning Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMERCIAL_SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container-wide">
          <span className="section-tag">Packages</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">Choose a Package</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl p-7 border-2 relative ${pkg.featured ? 'border-brand-500 bg-brand-50' : 'border-gray-100 bg-white shadow-card'}`}>
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-500 mb-2">{pkg.tag}</p>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-5">{pkg.desc}</p>
                <div className="mb-5">
                  <span className="text-xs text-gray-400">From </span>
                  <span className="font-display text-4xl font-extrabold text-brand-500">{pkg.price}</span>
                  <div className="text-xs text-gray-400 mt-1">{pkg.note}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-brand-500 font-bold text-xs">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/quote" className={pkg.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>
                  Choose This
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-16 text-center">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready for a Sparkling Clean?</h2>
          <p className="text-brand-100 mb-6">Get your personalised quote in under 2 minutes.</p>
          <Link href="/quote" className="btn-white text-base px-8 py-4">Get a Free Quote →</Link>
        </div>
      </section>
    </>
  )
}
