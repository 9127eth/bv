import React from 'react'
import Image from 'next/image'

const vendingCategories = [
  'Candy & Chocolate',
  'Gumballs & Hard Candy',
  'Toys & Novelties'
]

export function ClassicsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div className="relative w-2/4 mx-auto aspect-[3/4]">
            <Image
              src="/gumballmachine1.jpg"
              alt="Classic Vending Machine"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
          <div>
            <h2 className="text-section-mobile md:text-section font-bold mb-6 dark:text-black">
              We Love Classics Too!
            </h2>
            <p className="text-body-large text-gray-600 mb-6">
              Experience the timeless charm of traditional vending. Our classic machines 
              bring joy and nostalgia to any space while providing reliable service 
              and steady revenue.
            </p>
            <p className="text-body text-gray-600 mb-8">
              Perfect for retail stores, family restaurants, entertainment venues, 
              and anywhere looking to add a touch of fun and nostalgia.
            </p>
            <p className="text-body-large font-semibold mb-3 dark:text-black">
              Available Product Categories:
            </p>
            <div className="space-y-2">
              {vendingCategories.map((category) => (
                <div key={category} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-body text-gray-600">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 