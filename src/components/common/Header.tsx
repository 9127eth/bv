'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'react-feather'
import { siteMetadata } from '../../lib/metadata'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if dark mode is enabled
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeMediaQuery.matches)

    // Listen for changes in system dark mode preference
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    darkModeMediaQuery.addEventListener('change', listener)

    return () => darkModeMediaQuery.removeEventListener('change', listener)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm relative">
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={isDarkMode ? "/whitelogo.png" : "/newlogo.png"}
            alt={siteMetadata.siteName}
            width={350}
            height={77}
            priority
            className="w-[280px] md:w-[350px] object-contain"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 mx-auto">
          <Link href="/" className="text-body text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-body text-gray-700 hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-body text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-body text-gray-700 hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link 
                href="/" 
                className="text-body text-gray-700 hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-body text-gray-700 hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-body text-gray-700 hover:text-primary py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-body text-gray-700 hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        
        <div className="w-[350px] hidden md:block"></div>
      </nav>
    </header>
  )
}