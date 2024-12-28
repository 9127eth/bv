import React from 'react'
import Image from 'next/image'
import { Check } from 'react-feather'

const commonFeatures = [
  'All-metal construction for durability',
  'Low footprint design',
  'Quarter operated (25¢)',
  'Easy maintenance and refills',
  'Secure locking mechanism',
  'No electricity required',
]

const machines = [
  {
    title: 'Candy Machines',
    description: 'Classic bulk candy dispensers perfect for M&Ms, Skittles, Reese\'s Pieces, and other favorite candies',
    image: '/images/candy-dispenser.jpg',
  },
  {
    title: 'Gumball Machines',
    description: 'Traditional spiral gumball machines for gumballs, jawbreakers, and round candy',
    image: '/images/gumball-machine.jpg'
  },
  {
    title: 'Toy Capsule Machines',
    description: 'Exciting capsule machines for toys, stickers, temporary tattoos, and small collectibles',
    image: '/images/capsule-machine.jpg'
  }
]

export function NostalgicSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Nostalgic Favorites</h2>
          <p className="text-xl text-gray-600">
            Add a touch of nostalgia to your location with our classic vending machines. 
            These time-tested favorites combine durability with simple operation, 
            generating steady revenue with minimal maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {machines.map((machine) => (
            <div key={machine.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{machine.title}</h3>
                <p className="text-gray-600">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Machine Features</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 