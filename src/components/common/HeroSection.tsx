import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-primary py-12">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white pl-4 md:pl-8 lg:pl-12">
            <h1 className="text-hero-mobile md:text-hero font-bold mb-6">
              AI-Powered Smart Vending Machines
            </h1>
            <p className="text-body-large mb-4">
              Experience the future of vending with our AI-enabled smart vending machines. Tap, take, and go - no maintenance, no hassle.
            </p>
            <p className="text-body text-white/90 mb-8">
              Serving South Florida from Downtown Miami to Aventura, including Biscayne Boulevard corridor and surrounding areas.
            </p>
            <Link 
              href="/services" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Discover Smart Vending
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/smartvend1.png"
              alt="AI-Powered Smart vending machine"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 