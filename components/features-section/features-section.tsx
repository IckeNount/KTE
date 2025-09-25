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
          title: (
            <>
              Real Human Support
              <Br />
              Every application is handled by a real person who listens, guides,
              and responds personally.
            </>
          ),
          icon: FiBox,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Application Review
              <Br />
              We review your background carefully to match you with the right
              opportunity and path.
            </>
          ),
          icon: FiLock,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Career Planning Call
              <Br />
              Get a one-on-one call to align your goals with the right role and
              destination.
            </>
          ),
          icon: FiSearch,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              School Partner List
              <Br />
              Access verified schools and employers with strong reputations and
              reliable placement histories.
            </>
          ),
          icon: FiUserPlus,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Referral Rewards
              <Br />
              Refer friends and get travel perks, priority placement, or other
              exclusive benefits when they're hired.
            </>
          ),
          icon: FiFlag,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Local Expertise
              <Br />
              Our team lives where we work and understands the systems, culture,
              and legal process.
            </>
          ),
          icon: FiTrendingUp,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Long-Term Care
              <Br />
              After placement support with guidance, and access to our growing
              community.
            </>
          ),
          icon: FiToggleLeft,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Bridge Loans
              <Br />
              Quiet financial help is available for emergencies, handled
              privately with zero pressure or judgment.
            </>
          ),
          icon: FiTerminal,
          description: '',
          variant: 'inline',
        },
        {
          title: (
            <>
              Trusted Reputation
              <Br />
              We combine care, professionalism, and real results that speak for
              themselves.
            </>
          ),
          icon: FiCode,
          description: '',
          variant: 'inline',
        },
      ]}
    />
  )
}
