'use client'

import { Box, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import * as React from 'react'

import { BusinessCategories } from '#components/business-categories'
import { Faq } from '#components/faq'
import { FeaturesSection } from '#components/features-section'
// import { FeaturesPlanet } from '#components/feature-planet'
import { CountriesFlag } from '#components/flags'
import { Hero } from '#components/hero'
import { HighlightsSection } from '#components/highlights-section'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />

      <BusinessCategories />

      {/* <FeaturesPlanet /> */}

      <CountriesFlag />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <Pricing {...pricing} />

      <FaqSection />
    </Box>
  )
}

const TestimonialsSection = () => {
  return (
    <Testimonials
      title={testimonials.title}
      testimonials={testimonials.items}
      innerWidth="container.xl"
      autoPlay={true}
      interval={4000}
      showDots={true}
      showNavigation={true}
    />
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
