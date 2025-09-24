import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'How We Help You Succeed Abroad',
  description:
    'Our services cover every stage of your journey, including job placement, legal documentation, relocation, and long-term support.',
  plans: [
    {
      id: 'gtp',
      title: 'Global Teaching Careers in Thailand',
      tags: [
        'teaching placement',
        'visa assistance',
        'work permits',
        'housing help',
        'teacher coaching',
        'Thailand schools',
      ],
      description:
        'We connect teachers from around the world with rewarding jobs in schools across Thailand. Beyond placement, we make sure you’re fully supported in starting your teaching career abroad with confidence.',
      price: 'Start Your Teaching Journey With Confidence',
      features: [
        {
          title: 'Guaranteed teaching job placement',
        },
        {
          title: 'Visa, work permit, and teaching license assistance',
        },
        {
          title: 'Airport pickup, housing, and relocation support',
        },
        {
          title: 'Free coaching for first-time international teachers',
        },
        {
          title: 'Ongoing mentorship & supportive teacher community',
        },
      ],
    },
    {
      id: 'iwd',
      title: 'Skilled Work Opportunities in Europe',
      tags: [
        'factory work',
        'industrial jobs',
        'Poland placement',
        'Germany placement',
        'legal documentation',
        'relocation support',
      ],
      description:
        'We help professionals and workers secure stable, certified jobs in Poland and Germany. With complete documentation and relocation assistance, we make your move to Europe smooth and stress-free.',
      price: 'Your Gateway to European Careers',
      isRecommended: true,
      features: [
        {
          title: 'Verified industrial job placements',
        },
        {
          title: 'Full visa and legal documentation support',
        },
        {
          title: 'Housing and relocation coordination',
        },
        {
          title: 'Flight and travel booking support',
        },
        {
          title: 'Post-arrival orientation for quick integration',
        },
      ],
    },
    {
      id: 'tvs',
      title: 'Travel & Visa Solutions Worldwide',
      tags: [
        'visa consultation',
        'Korea travel',
        'Dubai tours',
        'Europe travel',
        'schengen visa',
        'travel packages',
      ],
      description:
        'KTECCS also provides travel and visa services to make global mobility easier, whether you’re planning a vacation, a short-term work trip, or extended stays abroad.',
      price: 'Travel the World, Hassle-Free',
      features: [
        {
          title: 'Tourist visa processing for major destinations',
        },
        {
          title: 'Schengen visa assistance (Europe)',
        },
        {
          title: 'Korea & Dubai travel and tour packages',
        },
        {
          title: 'Complete flight and hotel booking services',
        },
      ],
    },
  ],
}
