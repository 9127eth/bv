'use client'

import React from 'react'
import { Accordion } from './Accordion'

const faqs = [
  {
    question: 'How much does it cost to get a vending machine?',
    answer: 'Our vending machines are provided at no cost to your business or organization. We offer vending services as a completely free service. We handle all maintenance and restocking.'
  },
  {
    question: 'What areas do you service in Miami?',
    answer: 'We service South Florida from Downtown Miami to Aventura, including the entire Biscayne Boulevard corridor and surrounding areas. If you are not in the Biscayne area, send us a message and we will see if we can help.'
  },
  {
    question: 'What types of vending machines do you offer?',
    answer: 'We offer AI-powered smart vending machines for fresh food and drinks, as well as traditional candy and gumball machines for nostalgic appeal.'
  },
  {
    question: 'Do you handle maintenance and restocking?',
    answer: 'Yes, we provide full-service solutions including regular maintenance, restocking, and 24/7 technical support for all our vending machines.'
  },
  {
    question: 'What payment methods do your machines accept?',
    answer: 'Our smart vending machines accept all major credit cards, mobile payments (Apple Pay, Google Pay), and contactless payments. Traditional machines accept quarters.'
  },
  {
    question: 'How do the AI smart vending machines work?',
    answer: 'Our AI-powered machines use a simple three-step process: First, tap your card or mobile device to unlock the door. Then, open the door and select the items you want. Finally, just close the door and you will only be charged for what you take. The AI system automatically tracks your selections, making the entire process seamless and contactless.'
  },
  {
    question: 'What types of locations are suitable for your vending machines?',
    answer: 'Our vending machines are perfect for high-traffic areas like office buildings, schools, gyms, apartment complexes, hotels, and medical facilities. We will help assess your location to determine the best vending solution for your space.'
  },
  {
    question: 'What products can be stocked in your smart vending machines?',
    answer: 'Our smart vending machines can stock a wide variety of items including meals, drinks, snacks, and even non-food items. Unlike traditional vending machines, our smart coolers can handle delicate items and maintain proper temperature control.'
  },
  {
    question: 'How often are the machines restocked and maintained?',
    answer: 'We monitor inventory levels in real-time through our AI system and schedule regular restocking to prevent items from running out. Maintenance is performed proactively, and we provide 24/7 technical support to address any issues immediately.'
  },
  {
    question: 'Can the machines be customized for my location?',
    answer: 'Yes! We offer branding options for our smart vending machines and can customize the product selection based on your location\'s specific needs and preferences. We also regularly analyze sales data to optimize the product mix.'
  },
  {
    question: 'What makes your smart vending machines different from traditional ones?',
    answer: 'Our smart vending machines feature AI technology, real-time inventory tracking, contactless payments, and the ability to stock a wider variety of items. They also provide valuable analytics and are highly reliable compared to traditional machines due to fewer moving parts.'
  }
]

export function ServiceFAQ() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-mobile md:text-section font-bold text-center mb-12 dark:text-white">
            Frequently Asked Questions
          </h2>
          
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
} 