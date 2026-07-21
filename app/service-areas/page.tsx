import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Service Areas — Cleaning Services Across the North West & Beyond',
  description: 'thefamgroup provides professional cleaning services across Manchester, Liverpool, Cheshire, Stoke-on-Trent, Carlisle, Crewe and surrounding areas. DBS-checked, insured, no contracts.',
  alternates: { canonical: '/service-areas' },
}

const REGIONS = [
  {
    name: 'Manchester & Salford',
    description: 'Our home base. We cover every corner of Greater Manchester including the city centre, Trafford, Stockport, and all surrounding boroughs.',
    colour: 'bg-brand-50 border-brand-200',
    badge: 'bg-brand-500',
    locations: [
      { name: 'Manchester City Centre', slug: 'manchester-city-centre' },
      { name: 'Salford',                slug: 'salford' },
      { name: 'Trafford',               slug: 'trafford' },
      { name: 'Stretford',              slug: 'stretford' },
      { name: 'Stockport',              slug: 'stockport' },
      { name: 'Didsbury',               slug: 'didsbury' },
      { name: 'Chorlton',               slug: 'chorlton' },
      { name: 'Withington',             slug: 'withington' },
      { name: 'Wythenshawe',            slug: 'wythenshawe' },
      { name: 'Eccles',                 slug: 'eccles' },
      { name: 'Swinton',                slug: 'swinton' },
      { name: 'Fallowfield',            slug: 'fallowfield' },
    ],
  },
  {
    name: 'Liverpool & Merseyside',
    description: 'Serving the city of Liverpool and the wider Merseyside area, including Wirral, Warrington, and all towns in between.',
    colour: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-500',
    locations: [
      { name: 'Liverpool',     slug: 'liverpool' },
      { name: 'Warrington',    slug: 'warrington' },
      { name: 'Birkenhead',    slug: 'birkenhead' },
      { name: 'St Helens',     slug: 'st-helens' },
      { name: 'Widnes',        slug: 'widnes' },
      { name: 'Runcorn',       slug: 'runcorn' },
    ],
  },
  {
    name: 'Cheshire',
    description: 'Covering the historic county of Cheshire — from Chester city to the affluent Cheshire villages and East Cheshire towns.',
    colour: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-600',
    locations: [
      { name: 'Chester',           slug: 'chester' },
      { name: 'Crewe',             slug: 'crewe' },
      { name: 'Nantwich',          slug: 'nantwich' },
      { name: 'Sandbach',          slug: 'sandbach' },
      { name: 'Knutsford',         slug: 'knutsford' },
      { name: 'Wilmslow',          slug: 'wilmslow' },
      { name: 'Alderley Edge',     slug: 'alderley-edge' },
      { name: 'Macclesfield',      slug: 'macclesfield' },
      { name: 'Congleton',         slug: 'congleton' },
      { name: 'Middlewich',        slug: 'middlewich' },
      { name: 'Ellesmere Port',    slug: 'ellesmere-port' },
      { name: 'Prestbury',         slug: 'prestbury' },
    ],
  },
  {
    name: 'Stoke-on-Trent & Staffordshire',
    description: 'Providing cleaning services across the Potteries, Newcastle-under-Lyme and the wider Staffordshire area.',
    colour: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-500',
    locations: [
      { name: 'Stoke-on-Trent',        slug: 'stoke-on-trent' },
      { name: 'Newcastle-under-Lyme',  slug: 'newcastle-under-lyme' },
      { name: 'Stafford',              slug: 'stafford' },
      { name: 'Congleton',             slug: 'congleton' },
    ],
  },
  {
    name: 'Carlisle & Cumbria',
    description: 'Extending our reach northward into Cumbria — serving Carlisle, Penrith and the surrounding Lake District gateway towns.',
    colour: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-600',
    locations: [
      { name: 'Carlisle', slug: 'carlisle' },
      { name: 'Penrith',  slug: 'penrith' },
    ],
  },
]

const SERVICES = [
  { name: 'End of Tenancy Cleaning', slug: 'end-of-tenancy-cleaning' },
  { name: 'Deep Cleaning',           slug: 'deep-cleaning' },
  { name: 'Regular Home Cleaning',   slug: 'regular-home-cleaning' },
  { name: 'Office Cleaning',         slug: 'commercial-office-cleaning' },
  { name: 'Airbnb / Short-Let',      slug: 'airbnb-short-let-cleaning' },
  { name: 'Post-Construction',       slug: 'post-construction-cleaning' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'thefamgroup Cleaning Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'thefamgroup',
    url: 'https://thefamgroup.uk',
    telephone: '+447767759013',
  },
  areaServed: [
    'Manchester', 'Liverpool', 'Warrington', 'Chester', 'Crewe', 'Nantwich',
    'Knutsford', 'Wilmslow', 'Macclesfield', 'Stoke-on-Trent',
    'Newcastle-under-Lyme', 'Stafford', 'Carlisle', 'Penrith',
  ],
}

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-500 py-16">
        <div className="container-wide text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-5 text-sm font-medium">
            <MapPin size={14} /> Areas We Cover
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,56px)] font-extrabold leading-tight mb-4">
            Professional Cleaning Across<br />the North West &amp; Beyond
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            From Manchester and Liverpool to Cheshire, Stoke-on-Trent and Carlisle — our DBS-checked, fully insured team brings the same high standard wherever you are.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="btn-white text-sm px-6 py-3">Get a Free Estimate</Link>
            <a href={CONTACT.phoneTel} className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors">
              <Phone size={15} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-14 md:py-20 bg-[#f5f5f0]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="section-tag">Service Areas</span>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold mt-2">
              Where We Work
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Click any location below to see available services and get a tailored quote for your area.
            </p>
          </div>

          <div className="space-y-10">
            {REGIONS.map((region) => (
              <div key={region.name} className={`rounded-2xl border p-6 md:p-8 ${region.colour}`}>
                <div className="flex items-start gap-3 mb-5">
                  <span className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${region.badge}`} aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-gray-900">{region.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{region.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {region.locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/cleaning/end-of-tenancy-cleaning/${loc.slug}/`}
                      className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:text-brand-600 hover:shadow-sm border border-gray-100 transition-all"
                    >
                      <MapPin size={12} className="text-brand-400 flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by service */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-tag">Browse by Service</span>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold mt-2">
              Find Your Service
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/cleaning/${svc.slug}/`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-[#f5f5f0] hover:border-brand-300 hover:bg-brand-50 px-5 py-4 transition-all group"
              >
                <span className="font-medium text-gray-800 group-hover:text-brand-700">{svc.name}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-brand-500 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="container-wide max-w-2xl">
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-bold mb-3">
            Don't See Your Area?
          </h2>
          <p className="text-gray-400 mb-8">
            We're expanding all the time. Give us a call or drop a WhatsApp message — if we can get to you, we will.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary px-6 py-3 text-sm">Send Us a Message</Link>
            <a href={CONTACT.phoneTel} className="btn-outline border-white/30 text-white hover:bg-white/10 px-6 py-3 text-sm">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
