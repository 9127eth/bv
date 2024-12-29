'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'react-feather'

const contactInfo = {
  email: 'hello@biscaynevending.com',
  phone: '(786) 273-7007',
  serviceArea: 'Serving South Florida from Downtown Miami to Aventura, including Biscayne Boulevard corridor and surrounding areas.',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114970.25657220446!2d-80.18426344349376!3d25.83732674679286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10.1!5e0!3m2!1sen!2sus!4v1709765812590!5m2!1sen!2sus'
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    
    try {
      const response = await fetch('https://formspree.io/f/movvdner', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label 
              htmlFor="business" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Business Name
            </label>
            <input
              type="text"
              name="business"
              id="business"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Your business name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:bg-green-600 disabled:cursor-not-allowed"
          >
            {isSubmitted ? 'Sent!' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5" />
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary w-5 h-5" />
              <a href={`tel:${contactInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Service Area</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-300">
                {contactInfo.serviceArea}
              </p>
            </div>
            <div className="w-full h-[300px] rounded-lg overflow-hidden mt-4">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Service Area Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 