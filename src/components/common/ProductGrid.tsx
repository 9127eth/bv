import React from 'react'
import Image from 'next/image'

const products = [
  {
    title: 'AI-Enabled Smart Vending Machines',
    description: 'Our flagship smart vending machines equipped with advanced sensors and AI technology',
    image: '/images/smart-cooler.jpg',
  },
  {
    title: 'Traditional Vending Machines',
    description: 'Classic vending solutions for snacks and beverages',
    image: '/images/traditional-vending.jpg',
  },
  {
    title: 'Candy and Gumball Machines',
    description: 'Perfect for retail locations',
    image: '/images/candy-machine.jpg',
  },
]

export function ProductGrid() {
  return (
    <section className="py-24">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Product Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 