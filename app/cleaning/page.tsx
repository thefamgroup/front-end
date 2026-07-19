import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { SERVICES, LOCATIONS, CONTACT } from '@/lib/seo-data'

export const metadata: Metadata = {
  title: 'Cleaning Services — Manchester & Crewe',
  description: 'Professional cleaning services across Manchester and Crewe. End of tenancy, deep clean, carpet cleaning, commercial cleaning and more. DBS-checked, fully insured. Call 07767 759 013.',
  alternates: { canonical: `${CONTACT.siteUrl}/cleaning/` },
}

export default function CleaningHubPage() {
  const manchesterLocations = LOCATIONS.filter(l => l.region === 'manchester').slice(0, 8)
  const creweLocations = LOCATIONS.filter(l => l.region === 'crewe').slice(0, 8)

  return (
    <>
      <section className="bg-[#f5f5f0] py-14 text-center">
        <div className="container-wide">
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-gray-900 mb-3">
            Cleaning Services
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Professional residential and commercial cleaning across Manchester and Crewe. Select a service below to see local pricing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/cleaning/${service.slug}/`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:border-brand-300 hover:shadow-md transition-all"
              >
                <h2 className="font-display font-bold text-gray-900 mb-2 group-hover:text-brand-500 transition-colors">
                  {service.name}
                </h2>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{service.tagline}</p>
                <span className="inline-flex items-center gap-1 text-brand-500 text-sm font-semibold">
                  View areas <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-brand-500" /> Manchester Areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {manchesterLocations.map(loc => (
                  <Link
                    key={loc.slug}
                    href={`/cleaning/end-of-tenancy-cleaning/${loc.slug}/`}
                    className="text-sm text-brand-600 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
                <Link href="/cleaning/end-of-tenancy-cleaning/" className="text-sm text-gray-400 px-3 py-1.5 hover:text-brand-500 transition-colors">
                  + more areas →
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-brand-500" /> Crewe & Cheshire Areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {creweLocations.map(loc => (
                  <Link
                    key={loc.slug}
                    href={`/cleaning/end-of-tenancy-cleaning/${loc.slug}/`}
                    className="text-sm text-brand-600 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
                <Link href="/cleaning/end-of-tenancy-cleaning/" className="text-sm text-gray-400 px-3 py-1.5 hover:text-brand-500 transition-colors">
                  + more areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
