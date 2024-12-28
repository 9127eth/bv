import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/common/Header'
import React from 'react'
import { Footer } from '../components/common/Footer'

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

export const metadata: Metadata = {
  title: 'Biscayne Vending',
  description: 'Professional vending machine services in the Biscayne area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 