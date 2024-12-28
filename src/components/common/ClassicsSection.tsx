import React from 'react'
import Image from 'next/image'

const classicProducts = [
  {
    title: 'Gumball Machines',
    description: 'Classic gumball machines that bring joy and nostalgia to any space',
    image: '/images/gumball-machine.jpg',
  },
  {
    title: 'Candy Dispensers',
    description: 'Variety of durable and nostalgic machines for all your favorite candies',
    image: '/images/candy-dispenser.jpg',
  },
  {
    title: 'Toy Capsule Machines',
    description: 'Fun and exciting capsules for endless surprises',
    image: '/images/capsule-machine.jpg',
  },
]

export function ClassicsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">We Love Classics Too!</h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Experience the timeless charm of traditional vending. Perfect for businesses looking to add a touch of nostalgia and endless fun.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classicProducts.map((product) => (
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