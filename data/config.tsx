import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'kteccs - career coaching services',
    description: 'lunch your career with kteccs',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: 'Services',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Apply',
        href: '/apply',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="mailto:your-email@example.com">Eren</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:your-email@example.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/your-twitter',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/your-github',
        label: <FaGithub size="14" />,
      },
    ],
  },
}

export default siteConfig
