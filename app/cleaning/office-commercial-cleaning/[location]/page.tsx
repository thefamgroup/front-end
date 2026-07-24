import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { OFFICE_LOCATIONS } from '@/lib/office-locations'
import OfficeLocationPage from '@/components/office/OfficeLocationPage'
import { CONTACT } from '@/lib/seo-data'

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return OFFICE_LOCATIONS.map(loc => ({ location: loc.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug } = await params
  const location = OFFICE_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) return {}

  const title = `Office Cleaning ${location.name} | thefamgroup — DBS-Checked, From £65/Visit`
  const description = `Professional office cleaning in ${location.name} (${location.postcode}) from £65/visit. DBS-checked, £5M insured, no minimum contract, out-of-hours available. Free quote: ${CONTACT.phone}.`
  const canonical = `${CONTACT.siteUrl}/cleaning/office-commercial-cleaning/${location.slug}/`

  return {
    title,
    description,
    keywords: [
      `office cleaning ${location.name}`,
      `commercial cleaning ${location.name}`,
      `office cleaners ${location.name}`,
      `office cleaning ${location.postcode}`,
      `office cleaning company ${location.name}`,
      `contract cleaning ${location.name}`,
      `out of hours office cleaning ${location.name}`,
      `commercial cleaners ${location.name}`,
      `office cleaning ${location.borough}`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'thefamgroup',
      locale: 'en_GB',
      type: 'website',
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1 } },
  }
}

export default async function Page({ params }: PageProps) {
  const { location: locationSlug } = await params
  const location = OFFICE_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) notFound()
  return <OfficeLocationPage location={location} />
}
