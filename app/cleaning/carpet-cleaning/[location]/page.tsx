import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CARPET_LOCATIONS } from '@/lib/carpet-locations'
import CarpetLocationPage from '@/components/carpet/CarpetLocationPage'
import { CONTACT } from '@/lib/seo-data'

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return CARPET_LOCATIONS.map(loc => ({ location: loc.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug } = await params
  const location = CARPET_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) return {}

  const title = `Carpet Cleaning ${location.name} | thefamgroup — From £25/Room, Hot Water Extraction`
  const description = `Professional carpet cleaning in ${location.name} (${location.postcode}) from £25/room. DBS-checked, pet-safe, 2–4hr drying. End of tenancy specialists. Free quote: ${CONTACT.phone}.`
  const canonical = `${CONTACT.siteUrl}/cleaning/carpet-cleaning/${location.slug}/`

  return {
    title,
    description,
    keywords: [
      `carpet cleaning ${location.name}`,
      `carpet cleaners ${location.name}`,
      `carpet cleaning ${location.postcode}`,
      `professional carpet cleaning ${location.name}`,
      `hot water extraction ${location.name}`,
      `steam cleaning carpets ${location.name}`,
      `end of tenancy carpet cleaning ${location.name}`,
      `pet stain removal ${location.name}`,
      `carpet cleaning ${location.borough}`,
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
  const location = CARPET_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) notFound()
  return <CarpetLocationPage location={location} />
}
