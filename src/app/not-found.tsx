import { generateMetadata } from '../lib/metadata'
import React from 'react';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Page Not Found',
  description: 'Sorry, the page you are looking for does not exist. Return to Biscayne Vending homepage.'
})

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="text-primary hover:underline">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
} 