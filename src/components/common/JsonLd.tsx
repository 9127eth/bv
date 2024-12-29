import React from 'react'
import { siteMetadata } from '../../lib/metadata'

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteMetadata.siteName,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.8103,
        longitude: -80.1751
      },
      geoRadius: '30000'
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US'
    },
    priceRange: '$$',
    telephone: '(786) 273-7007',
    email: 'hello@biscaynevending.com',
    serviceArea: 'South Florida from Downtown Miami to Aventura',
    sameAs: [
      'https://facebook.com/biscaynevending',
      'https://instagram.com/biscaynevending'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 