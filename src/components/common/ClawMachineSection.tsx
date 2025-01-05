import React from 'react'
import Image from 'next/image'

const colorOptions = [
  'Ocean Explorer',
  'Space/Galaxy',
  'Rubber Duck',
  'Planets',
  'Custom Colors Available'
]

const prizeCategories = [
  'Plush Toys',
  'Licensed Characters',
  'Sports Merchandise',
  'Custom Branded Items',
  'Seasonal Prizes'
]

const idealLocations = [
  'Restaurants & Bars',
  'Family Entertainment Centers',
  'Hotel Lobbies',
  'Movie Theaters',
  'Retail Stores'
]

export function ClawMachineSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-sm">
            <div className="relative h-[400px] mb-12">
              <Image
                src="/mini extreme claw.jpg"
                alt="Mini Extreme Claw Machine"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Color/Theme Options</h3>
                <div className="space-y-3">
                  {colorOptions.map((color) => (
                    <div key={color} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Prize Options</h3>
                <div className="space-y-3">
                  {prizeCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-section-mobile md:text-section font-bold mb-6 dark:text-white">
              Mini Claw Machines
            </h2>
            <p className="text-body-large text-gray-600 dark:text-gray-300 mb-8">
              Add excitement and entertainment to your venue with our compact claw machines. 
              Perfect for restaurants, bars, and any location where people gather. 
              These machines provide fun and entertainment while your customers are waiting.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Perfect For</h3>
              <div className="grid grid-cols-2 gap-3">
                {idealLocations.map((location) => (
                  <div key={location} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 