import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  SERVICES, LOCATIONS, getService, getLocation,
  getAllPageParams, interpolate, CONTACT,
} from '@/lib/seo-data'
import { LocalServicePage } from '@/components/seo/LocalServicePage'

interface PageProps {
  params: Promise<{ service: string; location: string }>
}

export async function generateStaticParams() {
  return getAllPageParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, location: locationSlug } = await params
  const service = getService(serviceSlug)
  const location = getLocation(locationSlug)
  if (!service || !location) return { title: 'Not Found' }

  const title = `${service.name} in ${location.name}`
  const description = interpolate(service.metaDescription, location)
  const canonical = `${CONTACT.siteUrl}/cleaning/${serviceSlug}/${locationSlug}/`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | thefamgroup`,
      description,
      url: canonical,
      siteName: 'thefamgroup',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: { card: 'summary', title: `${title} | thefamgroup`, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1 },
    },
    other: {
      'geo.region': location.region === 'manchester' ? 'GB-MAN' : 'GB-CHE',
      'geo.placename': location.name,
    },
  }
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { service: serviceSlug, location: locationSlug } = await params
  const service = getService(serviceSlug)
  const location = getLocation(locationSlug)
  if (!service || !location) notFound()
  return <LocalServicePage service={service} location={location} />
}
