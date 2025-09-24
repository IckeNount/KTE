'use client'

import { Heading } from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import {
  FiBox,
  FiCode,
  FiFlag,
  FiLock,
  FiSearch,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import { Features } from '#components/features'

export const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Why People Choose Us
        </Heading>
      }
      description={
        <>
          We don&apos;t just place you. <Br />
          We support, guide, and stay with you through every step of your
          journey abroad.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Real Human Support.',
          icon: FiBox,
          description:
            'Every application is handled by a real person who listens, guides, and responds personally.',
          variant: 'inline',
        },
        {
          title: 'Application Review.',
          icon: FiLock,
          description:
            'We review your background carefully to match you with the right opportunity and path.',
          variant: 'inline',
        },
        {
          title: 'Career Planning Call.',
          icon: FiSearch,
          description:
            'Get a one-on-one call to align your goals with the right role and destination.',
          variant: 'inline',
        },
        {
          title: 'School Partner List.',
          icon: FiUserPlus,
          description:
            'Access verified schools and employers with strong reputations and reliable placement histories.',
          variant: 'inline',
        },
        {
          title: 'Referral Rewards.',
          icon: FiFlag,
          description:
            "Refer friends and get travel perks, priority placement, or other exclusive benefits when they're hired.",
          variant: 'inline',
        },
        {
          title: 'Local Expertise.',
          icon: FiTrendingUp,
          description:
            'Our team lives where we work and understands the systems, culture, and legal process.',
          variant: 'inline',
        },
        {
          title: 'Long-Term Care.',
          icon: FiToggleLeft,
          description:
            'After placement support with guidance, and access to our growing community.',
          variant: 'inline',
        },
        {
          title: 'Bridge Loans.',
          icon: FiTerminal,
          description:
            'Quiet financial help is available for emergencies, handled privately with zero pressure or judgment.',
          variant: 'inline',
        },
        {
          title: 'Trusted Reputation.',
          icon: FiCode,
          description:
            'We combine care, professionalism, and real results that speak for themselves.',
          variant: 'inline',
        },
      ]}
    />
  )
}
