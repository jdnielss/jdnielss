import { EMAIL, SOCIAL_LINKS } from '@/lib/data'

const SITE_URL = 'https://jdnielss.vercel.app/'

export function JsonLd() {
  const place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Jakarta',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juan Daniel',
    email: EMAIL,
    jobTitle: 'Co-Founder And CISO',
    url: SITE_URL,
    sameAs: SOCIAL_LINKS.map((l) => l.link),
    homeLocation: place,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'Personal Website',
    inLanguage: ['id', 'en'],
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Denova Mind',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    areaServed: ['Indonesia', 'Jakarta'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: EMAIL,
        contactType: 'customer support',
        availableLanguage: ['id', 'en'],
      },
    ],
  }

  const json = JSON.stringify([person, website, organization])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
