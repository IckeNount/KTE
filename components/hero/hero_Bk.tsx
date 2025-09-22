// import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'
// interface HeroProps extends Omit<FlexProps, 'title'> {
//   title: string | React.ReactNode
//   description?: string | React.ReactNode
// }
// export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
//   return (
//     <Flex py="20" alignItems="center" {...rest}>
//       <Container>
//         <VStack spacing={[4, null, 8]} alignItems="flex-start">
//           <Text as="h1" textStyle="h1" textAlign="left">
//             {title}
//           </Text>
//           <Text
//             as="div"
//             textStyle="subtitle"
//             align="left"
//             color="gray.500"
//             _dark={{ color: 'gray.400' }}
//           >
//             {description}
//           </Text>
//         </VStack>
//         {children}
//       </Container>
//     </Flex>
//   )
// }
import {
  Box,
  BoxProps,
  ButtonGroup,
  Container,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
// import Image from 'next/image'
import {
  FiArrowRight,
  FiGrid,
  FiSliders,
  FiSmile,
  FiThumbsUp,
} from 'react-icons/fi'

import { ButtonLink } from '../button-link'
import { Features } from '../features'
import { BackgroundGradient } from '../gradients/background-gradient'
import { ChakraLogo, NextjsLogo } from '../logos'
import { FallInPlace } from '../motion/fall-in-place'
import { Br, Em } from '../typography'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  showFeatures?: boolean
}

export const Hero = ({
  title,
  description,
  children,
  showFeatures = false,
  ...rest
}: HeroProps) => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Flex py="20" alignItems="center" {...rest}>
            <VStack spacing={[4, null, 8]} alignItems="flex-start">
              <Text as="h1" textStyle="h1" textAlign="left">
                {title}
              </Text>
              <Text
                as="div"
                textStyle="subtitle"
                align="left"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                {description}
              </Text>
              {children}
            </VStack>
          </Flex>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                {/* <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                /> */}
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {showFeatures && (
        <Features
          id="benefits"
          columns={[1, 2, 4]}
          iconSize={4}
          innerWidth="container.xl"
          pt="20"
          features={[
            {
              title: 'Accessible',
              icon: FiSmile,
              description: 'All components strictly follow WAI-ARIA standards.',
              iconPosition: 'left',
              delay: 0.6,
            },
            {
              title: 'Themable',
              icon: FiSliders,
              description:
                'Fully customize all components to your brand with theme support and style props.',
              iconPosition: 'left',
              delay: 0.8,
            },
            {
              title: 'Composable',
              icon: FiGrid,
              description:
                'Compose components to fit your needs and mix them together to create new ones.',
              iconPosition: 'left',
              delay: 1,
            },
            {
              title: 'Productive',
              icon: FiThumbsUp,
              description:
                'Designed to reduce boilerplate and fully typed, build your product at speed.',
              iconPosition: 'left',
              delay: 1.1,
            },
          ]}
          reveal={FallInPlace}
        />
      )}
    </Box>
  )
}

// Export a pre-configured Hero for the home page
export const HeroSection: React.FC = () => {
  return (
    <Hero
      id="home"
      justifyContent="flex-start"
      px="0"
      showFeatures={true}
      title={
        <FallInPlace>
          Build beautiful
          <Br /> software faster
        </FallInPlace>
      }
      description={
        <FallInPlace delay={0.4} fontWeight="medium">
          Saas UI is a <Em>React component library</Em>
          <Br /> that doesn&apos;t get in your way and helps you <Br /> build
          intuitive SaaS products with speed.
        </FallInPlace>
      }
    >
      <FallInPlace delay={0.8}>
        <HStack pt="4" pb="12" spacing="8">
          <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
        </HStack>

        <ButtonGroup spacing={4} alignItems="center">
          <ButtonLink colorScheme="primary" size="lg" href="/signup">
            Sign Up
          </ButtonLink>
          <ButtonLink
            size="lg"
            href="https://demo.saas-ui.dev"
            variant="outline"
            rightIcon={
              <Icon
                as={FiArrowRight}
                sx={{
                  transitionProperty: 'common',
                  transitionDuration: 'normal',
                  '.chakra-button:hover &': {
                    transform: 'translate(5px)',
                  },
                }}
              />
            }
          >
            View demo
          </ButtonLink>
        </ButtonGroup>
      </FallInPlace>
    </Hero>
  )
}
