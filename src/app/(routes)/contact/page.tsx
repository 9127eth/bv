import React from 'react'
import { ContactForm } from '../../../components/contact/ContactForm'
import { generateMetadata } from '../../../lib/metadata'

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Biscayne Vending for all your vending machine needs in Miami.'
})

export default function ContactPage() {
  return (
    <>
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