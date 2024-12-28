export const siteMetadata = {
  title: 'Biscayne Vending',
  description: 'Professional vending machine services in the Biscayne area. Quality refreshments and snacks for your business.',
  siteUrl: 'https://biscaynevending.com', // Replace with your actual domain
  siteName: 'Biscayne Vending',
  twitterHandle: '@BiscayneVending', // Replace with your actual Twitter handle
  locale: 'en_US',
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
  image,
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
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteMetadata.title,
      description: description || siteMetadata.description,
      creator: siteMetadata.twitterHandle,
    },
  }
} 