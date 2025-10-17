export const siteMetadata = {
  title: 'Biscayne Vending - AI-Powered Smart Vending Machines in Miami',
  description: 'Leading AI-powered smart vending machine provider in Miami, FL. Serving Biscayne Boulevard, Downtown Miami to Aventura with contactless, intelligent vending solutions. Free installation, no maintenance.',
  siteUrl: 'https://biscaynevending.com',
  siteName: 'Biscayne Vending',
  twitterHandle: '@BiscayneVending',
  locale: 'en_US',
  authors: [{
    name: 'Biscayne Vending',
    url: 'https://biscaynevending.com',
  }],
  keywords: [
    'AI vending machines Miami',
    'smart vending machines Miami',
    'AI-powered vending machines',
    'intelligent vending solutions',
    'contactless vending machines Miami',
    'Miami vending machine services',
    'Biscayne Boulevard vending',
    'South Florida vending machines',
    'smart cooler vending Miami',
    'automated vending machines',
    'cashless vending machines',
    'Miami Beach vending',
    'Downtown Miami vending',
    'Aventura vending machines',
    'Brickell vending services',
    'Florida AI vending',
    'touchless vending machines',
    'modern vending solutions Miami',
    'commercial vending Miami',
    'office vending machines Miami',
    'candy machines Miami',
    'gumball machines Miami',
    'claw machines Miami',
    'vending machine installation Miami',
    'free vending machine placement'
  ],
  creator: 'Biscayne Vending',
  themeColor: '#0057ff',
  alternates: {
    canonical: 'https://biscaynevending.com',
  }
}

export type MetadataProps = {
  title?: string
  description?: string
  canonicalUrl?: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  canonicalUrl,
  image = '/og-image.png', // Set default OG image
}: MetadataProps = {}) {
  const fullTitle = title || siteMetadata.title
  const fullDescription = description || siteMetadata.description
  const fullCanonical = canonicalUrl || siteMetadata.siteUrl
  
  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullCanonical,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: siteMetadata.twitterHandle,
      images: [image],
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  }
} 