import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteMetadata } from '../../lib/metadata'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={siteMetadata.siteName}
            width={225}
            height={50}
            priority
            className="object-contain"
          />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}