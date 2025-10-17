import React from 'react'
import { siteMetadata } from '../../lib/metadata'

export function JsonLd() {
  // Main LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteMetadata.siteUrl}/#organization`,
    name: 'Biscayne Vending',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/logo.png`,
    image: `${siteMetadata.siteUrl}/og-image.png`,
    areaServed: [
      {
        '@type': 'City',
        name: 'Miami',
        '@id': 'https://en.wikipedia.org/wiki/Miami'
      },
      {
        '@type': 'City',
        name: 'Miami Beach',
        '@id': 'https://en.wikipedia.org/wiki/Miami_Beach,_Florida'
      },
      {
        '@type': 'City',
        name: 'Aventura',
        '@id': 'https://en.wikipedia.org/wiki/Aventura,_Florida'
      },
      {
        '@type': 'Neighborhood',
        name: 'Brickell',
        containedIn: 'Miami, FL'
      },
      {
        '@type': 'Neighborhood',
        name: 'Downtown Miami',
        containedIn: 'Miami, FL'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
      areaServed: 'South Florida'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.8103,
      longitude: -80.1751
    },
    priceRange: '$$',
    telephone: '(786) 273-7007',
    email: 'hello@biscaynevending.com',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://facebook.com/biscaynevending',
      'https://instagram.com/biscaynevending'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Smart Vending Machines',
          description: 'Contactless, intelligent vending solutions with real-time inventory tracking and automatic checkout'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Cooler Vending',
          description: 'Modern vending machines for fresh food, drinks, and items traditional machines can\'t handle'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Candy and Gumball Machines',
          description: 'Classic nostalgic vending machines for candy, gumballs, and toys'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Claw Machines',
          description: 'Entertainment claw machines for businesses and high-traffic locations'
        }
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vending Machine Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'AI Smart Vending',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'AI-Powered Smart Vending Machine',
                description: 'Advanced vending with contactless payment, real-time tracking, and automatic checkout'
              }
            }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Traditional Vending',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Candy Vending Machines',
                description: 'Classic bulk candy and gumball machines'
              }
            }
          ]
        }
      ]
    }
  }

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteMetadata.siteUrl}/#organization`,
    name: 'Biscayne Vending',
    url: siteMetadata.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}/logo.png`,
      width: 250,
      height: 60
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(786) 273-7007',
      contactType: 'Customer Service',
      email: 'hello@biscaynevending.com',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish']
    },
    sameAs: [
      'https://facebook.com/biscaynevending',
      'https://instagram.com/biscaynevending'
    ]
  }

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMetadata.siteUrl}/#website`,
    url: siteMetadata.siteUrl,
    name: 'Biscayne Vending',
    description: siteMetadata.description,
    publisher: {
      '@id': `${siteMetadata.siteUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteMetadata.siteUrl}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // Combine all schemas
  const schemaArray = [localBusinessSchema, organizationSchema, websiteSchema]

  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
} 