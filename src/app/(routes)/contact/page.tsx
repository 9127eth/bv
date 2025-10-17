import React from 'react'
import { ContactForm } from '../../../components/contact/ContactForm'
import { generateMetadata } from '../../../lib/metadata'
import { BreadcrumbSchema } from '../../../components/common/BreadcrumbSchema'

export const metadata = generateMetadata({
  title: 'Contact Us - Get AI Vending Machines for Your Miami Business',
  description: 'Contact Biscayne Vending for AI-powered smart vending machines in Miami. Serving Downtown Miami, Biscayne Boulevard, Aventura, and all South Florida. Free consultation and installation available.',
  canonicalUrl: 'https://biscaynevending.com/contact'
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Contact Us', path: '/contact' }]} />
      <section className="bg-primary py-20">
        <div className="container-padding mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl">
              Ready to transform your space with innovative vending solutions? 
              We're here to help you get started.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-padding mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  )
} 