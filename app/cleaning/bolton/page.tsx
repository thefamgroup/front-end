import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { SERVICES, LOCATIONS, CONTACT } from '@/lib/seo-data'
import { BIN_LOCATIONS } from '@/lib/bin-locations'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'

const canonical = `${CONTACT.siteUrl}/cleaning/bolton/`
const title = 'Cleaning Services Bolton | End of Tenancy, Deep, Carpet & Bin Cleaning'
const description =
  `Professional cleaning across every part of Bolton — BL1 to BL7. End of tenancy, deep cleaning, carpet cleaning and wheelie bin cleaning. DBS-checked local team. Call ${CONTACT.phone}.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: 'thefamgroup', locale: 'en_GB', type: 'website' },
}

export default function BoltonHub() {
  const areas = LOCATIONS.filter(l => l.borough === 'Bolton').sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name))
  const binSlugs = new Set(BIN_LOCATIONS.map(l => l.slug))
  const carpetSlugs = new Set(CARPET_LOCATIONS.map(l => l.slug))
  const wa = encodeURIComponent('Hi thefamgroup, I need a cleaning quote in Bolton.')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'thefamgroup — Cleaning Services Bolton',
    url: canonical,
    telephone: `+44${CONTACT.phone.replace(/\D/g, '').slice(1)}`,
    areaServed: areas.map(a => ({ '@type': 'Place', name: `${a.name}, Bolton`, address: { '@type': 'PostalAddress', postalCode: a.postcode, addressCountry: 'GB' } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-display">Cleaning Services in Bolton</h1>
          <p className="mt-4 text-lg opacity-90">
            Local, DBS-checked cleaners covering {areas.length} areas across Bolton borough, from Bolton town centre and Astley Bridge to Westhoughton, Horwich and Turton.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneTel} className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold rounded-full px-5 py-3"><Phone size={18} /> {CONTACT.phone}</a>
            <a href={`${CONTACT.whatsapp}?text=${wa}`} className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold rounded-full px-5 py-3"><MessageCircle size={18} /> WhatsApp us</a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {[1, 2, 3].map(tier => {
            const group = areas.filter(a => a.tier === tier)
            if (!group.length) return null
            return (
              <div key={tier}>
                <h2 className="text-xl font-bold font-display mb-4">
                  {tier === 1 ? 'Bolton town & inner suburbs' : tier === 2 ? 'Larger districts & towns' : 'Villages & outer areas'}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.map(a => (
                    <div key={a.slug} className="border border-gray-200 rounded-xl p-4">
                      <h3 className="font-semibold flex items-center gap-2"><MapPin size={16} /> {a.name} <span className="text-gray-500 font-normal">({a.postcode})</span></h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm">
                        {SERVICES.map(s => (
                          <Link key={s.slug} href={`/cleaning/${s.slug}/${a.slug}/`} className="text-brand-600 hover:underline">{s.name}</Link>
                        ))}
                        {carpetSlugs.has(a.slug) && (
                          <Link href={`/cleaning/carpet-cleaning/${a.slug}/`} className="text-brand-600 font-semibold hover:underline">Carpet Cleaning</Link>
                        )}
                        {binSlugs.has(`${a.slug}-bin`) && (
                          <Link href={`/cleaning/bin-cleaning/${a.slug}-bin/`} className="text-brand-600 font-semibold hover:underline">Bin Cleaning</Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
