import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BIN_LOCATIONS } from '@/lib/bin-locations'
import { BinLocationPage } from '@/components/bin/BinLocationPage'
import { CONTACT } from '@/lib/seo-data'

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return BIN_LOCATIONS.map(loc => ({ location: loc.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug } = await params
  const location = BIN_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) return {}

  const title = `Wheelie Bin Cleaning ${location.name} | thefamgroup — From £6.99/Bin, No Contract`
  const description = `Professional wheelie bin cleaning in ${location.name} (${location.postcode}) from £6.99/bin/month. Hot water pressure wash, biodegradable sanitiser, timed to your ${location.councilName} collection day. No contract, cancel anytime. Call 07767 759 013.`
  const canonical = `${CONTACT.siteUrl}/cleaning/bin-cleaning/${location.slug}/`

  return {
    title,
    description,
    keywords: [
      `bin cleaning ${location.name}`,
      `wheelie bin cleaning ${location.name}`,
      `wheelie bin cleaner ${location.name}`,
      `bin cleaning ${location.postcode}`,
      `wheelie bin cleaning ${location.postcode}`,
      `bin wash ${location.name}`,
      `bin sanitising ${location.name}`,
      `wheelie bin cleaning near me ${location.name}`,
      `${location.councilName.toLowerCase()} bin cleaning`,
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
  const location = BIN_LOCATIONS.find(l => l.slug === locationSlug)
  if (!location) notFound()
  return <BinLocationPage location={location} />
}
