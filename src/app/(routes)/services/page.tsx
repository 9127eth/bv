import React from 'react'
import { generateMetadata } from '../../../lib/metadata'
import { ServiceHero } from '../../../components/services/ServiceHero'
import { SmartCoolerSection } from '../../../components/services/SmartCoolerSection'
import { NostalgicSection } from '../../../components/services/NostalgicSection'
import { ClawMachineSection } from '../../../components/common/ClawMachineSection'
import { ServiceCTA } from '../../../components/services/ServiceCTA'
import { ServiceFAQ } from '../../../components/services/ServiceFAQ'
import { BreadcrumbSchema } from '../../../components/common/BreadcrumbSchema'

export const metadata = generateMetadata({
  title: 'Vending Services - AI Smart Machines, Candy & Claw Machines in Miami',
  description: 'Complete vending solutions in Miami: AI-powered smart coolers with contactless payment, classic candy & gumball machines, and claw machines. Serving all of South Florida with free installation and maintenance.',
  canonicalUrl: 'https://biscaynevending.com/services'
})

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Our Services', path: '/services' }]} />
      <ServiceHero />
      <SmartCoolerSection />
      <NostalgicSection />
      <ClawMachineSection />
      <ServiceCTA />
      <ServiceFAQ />
    </>
  )
} 