import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { getService, LOCATIONS, CONTACT, SERVICES } from '@/lib/seo-data'

interface Props {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return SERVICES.map(s => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Not Found' }
  return {
    title: `${service.name} — Manchester & Crewe`,
    description: `Professional ${service.name.toLowerCase()} across Manchester and Crewe. ${service.tagline} DBS-checked team. Call 07767 759 013.`,
    alternates: { canonical: `${CONTACT.siteUrl}/cleaning/${slug}/` },
  }
}

export default async function ServiceIndexPage({ params }: Props) {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const manchester = LOCATIONS.filter(l => l.region === 'manchester').sort((a, b) => a.tier - b.tier)
  const crewe = LOCATIONS.filter(l => l.region === 'crewe').sort((a, b) => a.tier - b.tier)

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <nav className="text-sm text-gray-400 mb-6 flex gap-1.5 items-center flex-wrap">
        <Link href="/" className="hover:text-brand-500">Home</Link>
        <span>›</span>
        <Link href="/cleaning/" className="hover:text-brand-500">Cleaning Services</Link>
        <span>›</span>
        <span className="text-gray-700">{service.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-3">
        {service.name} — All Areas
      </h1>
      <p className="text-gray-500 text-lg mb-10 max-w-2xl">{service.tagline} Select your area below for local pricing and availability.</p>

      {/* Manchester */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <MapPin size={18} className="text-brand-500" /> Manchester Areas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {manchester.map(loc => (
            <Link
              key={loc.slug}
              href={`/cleaning/${slug}/${loc.slug}/`}
              className="p-4 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all group"
            >
              <div className="font-semibold text-sm text-gray-900 group-hover:text-brand-500 transition-colors">{loc.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{loc.postcode}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Crewe */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <MapPin size={18} className="text-brand-500" /> Crewe &amp; Cheshire Areas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {crewe.map(loc => (
            <Link
              key={loc.slug}
              href={`/cleaning/${slug}/${loc.slug}/`}
              className="p-4 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all group"
            >
              <div className="font-semibold text-sm text-gray-900 group-hover:text-brand-500 transition-colors">{loc.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{loc.postcode}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-gray-900">Not sure which area? Just call us.</p>
          <p className="text-sm text-gray-500">We cover all Manchester and Crewe postcodes. We'll confirm your area instantly.</p>
        </div>
        <a href={CONTACT.phoneTel} className="flex items-center gap-2 bg-brand-500 text-white font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-brand-600 transition-colors text-sm">
          <Phone size={14} /> {CONTACT.phone}
        </a>
      </div>
    </div>
  )
}
