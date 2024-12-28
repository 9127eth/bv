import React from 'react'
import Link from 'next/link'

export function ServiceCTA() {
  return (
    <section className="bg-primary py-20">
      <div className="container-padding mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you're interested in our smart coolers or classic machines, 
          we're here to help you choose the perfect solution.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  )
} 