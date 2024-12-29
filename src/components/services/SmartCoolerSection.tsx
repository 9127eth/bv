import React from 'react'
import Image from 'next/image'
import { Check, CreditCard, LogIn, LogOut } from 'react-feather'

const steps = [
  {
    title: 'Tap to Access',
    description: 'Simply tap your card or mobile device to unlock the door',
    icon: CreditCard,
  },
  {
    title: 'Select Items',
    description: 'Open door and take the items you want',
    icon: LogIn,
  },
  {
    title: 'Auto-Checkout',
    description: 'Close door and only pay for what you take',
    icon: LogOut,
  },
]

const benefits = [
  'Low maintenance compared to traditional vending machines',
  'Stock fresh meals, drinks, and items traditional machines can\'t handle',
  'A more modern user experience compared to traditional vending machines',
  'Real-time inventory tracking to minimize out-of-stock items',
  'Contactless payments for seamless transactions',
  'Compact footprint maximizes space efficiency',
]

export function SmartCoolerSection() {
  return (
    <section className="py-24">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[600px]">
            <Image
              src="/smartvend3.png"
              alt="24H Smart Vending Machine"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h2 className="text-section-mobile md:text-section font-bold mb-6 dark:text-white">AI-Powered Smart Vending Machines</h2>
            <p className="text-body-large text-gray-600 dark:text-gray-300 mb-12">
              Step into the future of vending with our revolutionary smart vending machines. 
              Powered by advanced AI technology, these machines offer a seamless, 
              contactless experience while providing valuable insights into your 
              vending operations. Branding options available.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8">
              <h3 className="text-subsection-mobile md:text-subsection font-semibold mb-8 text-center dark:text-white">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={step.title} className="text-center relative">
                    <div className="bg-white dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-body-large font-semibold mb-2 dark:text-white">{step.title}</h4>
                    <p className="text-body text-gray-600 dark:text-gray-300">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <span className="text-primary">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-subsection-mobile md:text-subsection font-semibold mb-8 text-center dark:text-white">
            Smart Vending Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started with Smart Vednding
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 