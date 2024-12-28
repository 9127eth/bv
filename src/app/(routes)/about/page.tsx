import React from 'react'
import Image from 'next/image'
import { generateMetadata } from '../../../lib/metadata'

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Family-owned vending services in Miami, serving businesses along Biscayne Boulevard with state-of-the-art solutions.'
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container-padding mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-hero-mobile md:text-hero font-bold mb-6">
              Our Story
            </h1>
            <p className="text-body-large">
              Family-owned and dedicated to Miami, delivering innovative vending solutions from Brickell to Aventura – and everywhere in between.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/family-business.jpg"
                alt="Family Business"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-section-mobile md:text-section font-bold mb-6">
                Family Values, Modern Solutions
              </h2>
              <p className="text-body-large text-gray-600 mb-4">
                Founded right here in Miami, Biscayne Vending represents the perfect blend of family business values and cutting-edge technology. We understand the unique needs of our local community because we're part of it.
              </p>
              <p className="text-body text-gray-600 mb-4">
                Our journey began with a simple mission: to provide Miami businesses with reliable, innovative vending solutions that make life easier for both business owners and their customers.
              </p>
              <p className="text-body text-gray-600">
                Today, we're proud to serve locations along Biscayne Boulevard and throughout Miami, bringing the future of vending to businesses and communities across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-padding mx-auto">
          <h2 className="text-section-mobile md:text-section font-bold text-center mb-12">
            Our Commitment to Miami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-body-large font-semibold mb-4">Local Expertise</h3>
              <p className="text-body text-gray-600">
                Deep understanding of Miami's business landscape and community needs, ensuring personalized service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-body-large font-semibold mb-4">Quick Response</h3>
              <p className="text-body text-gray-600">
                Based locally, we provide rapid support and maintenance to all our locations along Biscayne Boulevard.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-body-large font-semibold mb-4">Community First</h3>
              <p className="text-body text-gray-600">
                We're not just service providers – we're your neighbors, committed to Miami's growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
