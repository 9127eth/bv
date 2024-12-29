import React from 'react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container-padding mx-auto text-center">
        <h2 className="text-section-mobile md:text-section font-bold mb-6">
          Ready to Revolutionize Your Vending Experience?
        </h2>
        <p className="text-body-large mb-8 max-w-2xl mx-auto">
          From AI-powered smart vending to nostalgic candy machines, we have the perfect solution for your location.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
} 