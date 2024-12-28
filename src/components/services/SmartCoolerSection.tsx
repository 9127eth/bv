import React from 'react'
import Image from 'next/image'
import { Check } from 'react-feather'

const benefits = [
  'AI-powered technology for seamless transactions',
  'Real-time inventory tracking and analytics',
  'Contactless payment options',
  'Temperature monitoring and control',
  'Remote management capabilities',
  '24/7 technical support'
]

export function SmartCoolerSection() {
  return (
    <section className="py-24">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/smart-cooler-large.jpg"
              alt="AI-Powered Smart Cooler"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">AI-Powered Smart Coolers</h2>
            <p className="text-xl text-gray-600 mb-8">
              Step into the future of vending with our revolutionary smart coolers. 
              Powered by advanced AI technology, these machines offer a seamless, 
              contactless experience while providing valuable insights into your 
              vending operations.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="text-primary w-5 h-5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 