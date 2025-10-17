import React from 'react'
import { HeroSection } from '../components/common/HeroSection'
import { generateMetadata } from '../lib/metadata'
import { FeatureGrid } from '../components/common/FeatureGrid'
import { WhyChooseUs } from '../components/common/WhyChooseUs'
import { CTASection } from '../components/common/CTASection'
import { ClassicsSection } from '../components/common/ClassicsSection'
import { HomeClawSection } from '../components/common/HomeClawSection'

export const metadata = generateMetadata({
  title: 'AI-Powered Smart Vending Machines in Miami, FL',
  description: 'Miami\'s leading AI-powered smart vending machine provider. Contactless, intelligent vending solutions for South Florida businesses from Downtown Miami to Aventura. Free installation and no maintenance required.',
  canonicalUrl: 'https://biscaynevending.com'
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <WhyChooseUs />
      <ClassicsSection />
      <HomeClawSection />
      <CTASection />
    </>
  )
} 