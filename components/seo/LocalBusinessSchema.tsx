import type { ServiceData, LocationData } from '@/lib/seo-data'
import { CONTACT, interpolate } from '@/lib/seo-data'

interface Props {
  service: ServiceData
  location: LocationData
}

export function LocalBusinessSchema({ service, location }: Props) {
  const pageUrl = `${CONTACT.siteUrl}/cleaning/${service.slug}/${location.slug}/`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. LocalBusiness — tells Google who we are and where
      {
        '@type': ['LocalBusiness', 'HouseCleaner'],
        '@id': `${CONTACT.siteUrl}/#business`,
        name: 'thefamgroup',
        url: CONTACT.siteUrl,
        telephone: '07769240184',
        email: CONTACT.email,
        description: 'Professional residential and commercial cleaning services across Manchester and Crewe. DBS-checked, fully insured. Family. Community. Care.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manchester',
          addressRegion: 'Greater Manchester',
          addressCountry: 'GB',
        },
        areaServed: [
          { '@type': 'City', name: 'Manchester' },
          { '@type': 'City', name: 'Salford' },
          { '@type': 'City', name: 'Crewe' },
          { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
          { '@type': 'AdministrativeArea', name: 'Cheshire East' },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: location.lat,
          longitude: location.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '08:00',
            closes: '17:00',
          },
        ],
        priceRange: '££',
        currenciesAccepted: 'GBP',
        paymentAccepted: 'Cash, Bank Transfer, Card',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '48',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://www.facebook.com/thefamgroup',
          'https://www.instagram.com/thefamgroup',
        ],
      },

      // 2. Service — the specific service on this page
      {
        '@type': 'Service',
        '@id': `${CONTACT.siteUrl}/cleaning/${service.slug}/#service`,
        name: `${service.name} in ${location.name}`,
        description: interpolate(service.metaDescription, location),
        provider: {
          '@id': `${CONTACT.siteUrl}/#business`,
        },
        areaServed: {
          '@type': 'PostalAddress',
          postalCode: location.postcode,
          addressLocality: location.name,
          addressCountry: 'GB',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} Prices`,
          itemListElement: service.prices.map((p, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: p.label,
            price: p.price.replace(/[^0-9.]/g, '') || '0',
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
          })),
        },
      },

      // 3. FAQPage — powers "People Also Ask" in search results
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map(faq => ({
          '@type': 'Question',
          name: interpolate(faq.q, location),
          acceptedAnswer: {
            '@type': 'Answer',
            text: interpolate(faq.a, location),
          },
        })),
      },

      // 4. BreadcrumbList — navigation trail
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: CONTACT.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cleaning Services',
            item: `${CONTACT.siteUrl}/cleaning/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.name,
            item: `${CONTACT.siteUrl}/cleaning/${service.slug}/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: location.name,
            item: pageUrl,
          },
        ],
      },

      // 5. WebPage
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: `${service.name} ${location.name} | thefamgroup`,
        description: interpolate(service.metaDescription, location),
        isPartOf: { '@id': CONTACT.siteUrl },
        about: { '@id': `${CONTACT.siteUrl}/cleaning/${service.slug}/#service` },
        inLanguage: 'en-GB',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
