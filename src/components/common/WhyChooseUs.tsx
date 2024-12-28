import React from 'react'
import { Shield, DollarSign, Tool, Users } from 'react-feather'

const reasons = [
  {
    title: 'Free Service',
    description: 'No upfront costs or rental fees - we provide and maintain the machines at zero cost to you.',
    icon: DollarSign,
  },
  {
    title: 'Low Maintenance Focus',
    description: 'Our smart vending solutions are designed for minimal maintenance and maximum reliability.',
    icon: Tool,
  },
  {
    title: 'Family Owned & Operated',
    description: 'As a family business, we provide personalized attention and care to ensure your complete satisfaction.',
    icon: Users,
  },
  {
    title: 'Licensed & Insured',
    description: 'We maintain all necessary licenses and comprehensive insurance coverage for your peace of mind.',
    icon: Shield,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-padding mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">Why choose us?</h2>
        <div className="bg-gray-100 rounded-3xl p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm h-fit">
                  <reason.icon className="w-6 h-6 text-primary stroke-current" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-lg">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 