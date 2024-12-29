import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, AtSign } from 'react-feather'
import { siteMetadata } from '../../lib/metadata'

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { 
    name: 'Facebook',
    href: 'https://facebook.com/biscaynevending',
    icon: Facebook,
  },
  { 
    name: 'Instagram',
    href: 'https://instagram.com/biscaynevending',
    icon: Instagram,
  },
  { 
    name: 'Threads',
    href: 'https://threads.net/biscaynevending',
    icon: AtSign,
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 pl-4">{siteMetadata.siteName}</h3>
            <p className="text-gray-400 mb-4 pl-4">
                Providing Miami with Retro Charm and Modern Vending Convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pl-4">Quick Links</h3>
            <ul className="space-y-2 pl-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pl-4">Follow Us</h3>
            <div className="flex space-x-4 pl-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {siteMetadata.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 