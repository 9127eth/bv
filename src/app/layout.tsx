import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/common/Header'
import React from 'react'
import { Footer } from '../components/common/Footer'
import { JsonLd } from '../components/common/JsonLd'
import { siteMetadata } from '../lib/metadata'

const montserrat = Montserrat({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const viewport = {
  themeColor: '#0057ff',
}

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | Biscayne Vending`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  alternates: siteMetadata.alternates,
  manifest: '/manifest.json',
  category: 'business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Biscayne Vending - AI-Powered Smart Vending Machines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    images: [`${siteMetadata.siteUrl}/og-image.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 