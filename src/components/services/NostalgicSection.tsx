import React from 'react'
import Image from 'next/image'

const productCategories = [
  {
    title: 'Candy & Chocolate',
    items: [
      'M&Ms',
      'Skittles',
      "Reese's Pieces",
      'Snickers Bites',
      'Hershey Kisses'
    ]
  },
  {
    title: 'Gumballs & Hard Candy',
    items: [
      'Assorted Gumballs',
      'Jawbreakers',
      'Sour Balls',
      'Fruit Flavored Candy'
    ]
  },
  {
    title: 'Toys & Novelties',
    items: [
      'Temporary Tattoos',
      'Stickers',
      'Small Toys',
      'Collectible Capsules'
    ]
  }
]

const commonFeatures = [
  'All-metal construction for durability',
  'Low footprint design',
  'Accepts quarters',
  'Reliable and low maintenance',
  'No electricity required',
  'Multiple colors available'
]

export function NostalgicSection() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 dark:text-white">Nostalgic Favorites</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Add a touch of nostalgia to your location with our classic vending machines. 
              These time-tested favorites combine durability with simple operation, 
              generating steady revenue with minimal maintenance.
            </p>

            <div className="space-y-8">
              {productCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-sm">
            <div className="relative h-[400px] mb-12">
              <Image
                src="/gumballmachine1.jpg"
                alt="Classic Candy Machine"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="max-w-sm mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {commonFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
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