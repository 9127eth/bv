export const siteMetadata = {
  title: 'Biscayne Vending',
  description: 'Professional vending machine services in the Biscayne area. Quality refreshments and snacks for your business.',
  siteUrl: 'https://biscaynevending.com',
  siteName: 'Biscayne Vending',
  twitterHandle: '@BiscayneVending',
  locale: 'en_US',
  authors: [{
    name: 'Biscayne Vending',
    url: 'https://biscaynevending.com',
  }],
  keywords: [
    'vending machines',
    'smart vending',
    'Miami vending services',
    'Biscayne vending',
    'AI vending machines',
    'commercial vending solutions',
    'Florida vending services',
    'candy machines',
    'snack vending',
    'miami vending',
    'miami vending solutions',
    'miami',
    'business vending solutions'
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
  return {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    canonical: canonicalUrl || siteMetadata.siteUrl,
    openGraph: {
      title: title || siteMetadata.title,
      description: description || siteMetadata.description,
      url: canonicalUrl || siteMetadata.siteUrl,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteMetadata.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteMetadata.title,
      description: description || siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [image],
    },
  }
} 