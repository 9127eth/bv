import React from 'react'
import { HeroSection } from '../components/common/HeroSection'
import { generateMetadata } from '../lib/metadata'
import { FeatureGrid } from '../components/common/FeatureGrid'
import { WhyChooseUs } from '../components/common/WhyChooseUs'
import { CTASection } from '../components/common/CTASection'
import { ClassicsSection } from '../components/common/ClassicsSection'

export const metadata = generateMetadata({
  title: 'Home',
  description: 'Welcome to Biscayne Vending - Your Premier Vending Machine Service Provider'
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <WhyChooseUs />
      <ClassicsSection />
      <CTASection />
    </>
  )
} 