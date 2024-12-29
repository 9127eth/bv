import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

interface AccordionProps {
  question: string
  answer: string
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold dark:text-white">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 px-6 py-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  )
} 