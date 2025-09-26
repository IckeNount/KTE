'use client'

import { Box, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import * as React from 'react'

import { TrustFactors } from '#components/TrustFactors'
import { Faq } from '#components/faq'
import { OurProcess } from '#components/features'
// import { FeaturesPlanet } from '#components/feature-planet'
import { Flags } from '#components/flags'
import { Hero } from '#components/hero'
import { Service } from '#components/service'
import { Testimonial, Testimonials } from '#components/testimonials'
import { agencyProcessSteps, processConfig } from '#data/agency-process'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />

      <Flags />

      <TrustFactors />

      <OurProcessSection />

      <TestimonialsSection />

      <Service {...pricing} />

      <FaqSection />
    </Box>
  )
}

const OurProcessSection = () => {
  return (
    <OurProcess
      id="services"
      title={processConfig.title}
      description={processConfig.description}
      processes={agencyProcessSteps}
      gridPattern="features"
      containerWidth="contentWide"
      spacing="lg"
      columns={{ base: 1, md: 2, lg: 4 }}
    />
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
