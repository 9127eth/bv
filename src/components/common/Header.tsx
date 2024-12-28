import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteMetadata } from '../../lib/metadata'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/newlogo.png"
            alt={siteMetadata.siteName}
            width={350}
            height={77}
            priority
            className="object-contain"
          />
        </Link>
        
        <div className="hidden md:flex space-x-12 mx-auto">
          <Link href="/" className="text-body text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-body text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-body text-gray-700 hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-body text-gray-700 hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="w-[350px]"></div>
      </nav>
    </header>
  )
}