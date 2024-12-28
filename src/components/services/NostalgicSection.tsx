import React from 'react'
import Image from 'next/image'

const machines = [
  {
    title: 'Gumball Machines',
    description: 'Classic spiral gumball machines that bring joy to any space',
    image: '/images/gumball-machine.jpg'
  },
  {
    title: 'Candy Dispensers',
    description: 'Traditional candy machines perfect for retail locations',
    image: '/images/candy-dispenser.jpg'
  },
  {
    title: 'Toy Capsule Machines',
    description: 'Exciting capsule machines filled with surprises',
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
            Perfect for creating memorable experiences and generating additional revenue 
            with minimal maintenance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold mb-2">{machine.title}</h3>
                <p className="text-gray-600">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 