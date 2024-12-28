import React from 'react'
import { Box, Tool, Package, CreditCard } from 'react-feather'

const features = [
  {
    title: 'AI-Powered Smart Cooler',
    description: 'Tap and open door, take items - only pay for what you take',
    icon: Box,
  },
  {
    title: 'Minimal Maintenance',
    description: 'No moving parts to replace, fewer breakdowns, and less servicing',
    icon: Tool,
  },
  {
    title: 'Wide Product Range',
    description: 'From snacks to fresh meals, we\'ve got it all',
    icon: Package,
  },
  {
    title: 'Cashless Payments',
    description: 'Accept cards, mobile payments, and more',
    icon: CreditCard,
  },
]

export function FeatureGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Features</h2>
        <div className="grid grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary stroke-current" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 