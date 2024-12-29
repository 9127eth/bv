import React from 'react'
import Image from 'next/image'
import { generateMetadata } from '../../../lib/metadata'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Family-owned vending services in Miami, serving businesses along Biscayne Boulevard with state-of-the-art solutions.'
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container-padding mx-auto">
          <div className="max-w-2xl text-white pl-4 md:pl-8 lg:pl-12">
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
                src="/beach miami.png"
                alt="Miami Beach waterfront representing our local service area"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div>
              <h2 className="text-section-mobile md:text-section font-bold mb-6 dark:text-white">
                Family Values, Modern Solutions
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-300 mb-6">
                Founded right here in Miami, Biscayne Vending represents the perfect blend of family business values and cutting-edge technology. We understand the unique needs of our local community because we're part of it.
              </p>
              <p className="text-body text-gray-600 dark:text-gray-300 mb-6">
                Our journey began as a father-son venture, teaching a 4-year-old the fundamentals of business through the timeless appeal of vending machines. Our mission remains simple: providing Miami with retro charm and modern vending convenience that makes life easier for both business owners and their customers.
              </p>
              <p className="text-body text-gray-600 dark:text-gray-300">
                Today, we're proud to serve locations along Biscayne Boulevard and throughout Miami, bringing the future of vending to businesses and communities across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container-padding mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-mobile md:text-section font-bold mb-6 dark:text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-body-large text-gray-600 dark:text-gray-300 mb-8">
              Whether you're looking for cutting-edge smart vending solutions or classic machines, 
              we have the perfect option for your location. Our solutions include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-body-large font-semibold mb-2 dark:text-white">Smart Vending Machines</h3>
                <p className="text-body text-gray-600 dark:text-gray-300">
                  AI-powered, cashless vending for fresh food and drinks
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-body-large font-semibold mb-2 dark:text-white">Candy Machines</h3>
                <p className="text-body text-gray-600 dark:text-gray-300">
                  Nostalgic candy and gumball machines
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
