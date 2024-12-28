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
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Based in Miami, we understand the unique needs of local businesses 
                    and provide personalized solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our team is always available to ensure your vending machines 
                    run smoothly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Free Installation</h3>
                  <p className="text-gray-600">
                    We handle all aspects of installation and maintenance at no 
                    cost to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 