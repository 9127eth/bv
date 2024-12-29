import React from 'react'
import { generateMetadata } from '../../../lib/metadata'
import { ServiceHero } from '../../../components/services/ServiceHero'
import { SmartCoolerSection } from '../../../components/services/SmartCoolerSection'
import { NostalgicSection } from '../../../components/services/NostalgicSection'
import { ServiceCTA } from '../../../components/services/ServiceCTA'
import { ServiceFAQ } from '../../../components/services/ServiceFAQ'

export const metadata = generateMetadata({
  title: 'Our Services',
  description: 'From AI-powered smart coolers to nostalgic candy machines, discover our complete range of vending solutions. Get answers to common questions about our vending services.'
})

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <SmartCoolerSection />
      <NostalgicSection />
      <ServiceCTA />
      <ServiceFAQ />
    </>
  )
} 