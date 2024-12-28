import Link from 'next/link'
import React from 'react'

export function HeroSection() {
  return (
    <section className="bg-primary py-20">
      <div className="container-padding mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Smart Cooler Vending
          </h1>
          <p className="text-xl mb-8">
            Experience the future of vending with our AI-enabled smart coolers. Tap, take, and go - no maintenance, no hassle.
          </p>
          <Link 
            href="/services" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Discover Smart Vending
          </Link>
        </div>
      </div>
    </section>
  )
} 