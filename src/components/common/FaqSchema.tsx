import React from 'react'

export function FaqSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to get a vending machine?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our vending machines are provided at no upfront cost to qualified locations. We handle all maintenance and restocking.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas do you service in Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We service South Florida from Downtown Miami to Aventura, including the entire Biscayne Boulevard corridor and surrounding areas.'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
} 