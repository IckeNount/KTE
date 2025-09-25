import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  FiArrowRight,
  FiGrid,
  FiSliders,
  FiSmile,
  FiThumbsUp,
} from 'react-icons/fi'

import globeAnimation from '../../public/static/lottie/Globe.json'
import { ButtonLink } from '../button-link'
import { Features } from '../features'
import { BackgroundGradient } from '../gradients/background-gradient'
import { SvgIcon } from '../icons'
import { LottiePlayer } from '../lottie/lottie-player'
import { FallInPlace } from '../motion/fall-in-place'
import { Br, Em } from '../typography'

export const Hero: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" minH="100vh">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container
        maxW="container.2xl"
        pt={{ base: 20, md: 32, lg: 40 }}
        pb={{ base: 20, md: 32 }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          spacing={{ base: 8, md: 12, lg: 16 }}
          minH={{ base: 'auto', lg: '80vh' }}
        >
          <Flex
            id="home"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
            flex={1}
          >
            <VStack
              spacing={{ base: 6, md: 8, lg: 10 }}
              alignItems="flex-start"
              width="100%"
              maxW={{ base: '100%', lg: '90%', xl: '80%' }}
            >
              <Text as="h1" textStyle="h1" textAlign="left">
                <FallInPlace
                  delay={0.4}
                  fontWeight="light"
                  fontSize={{ base: '8px', md: '12px', lg: '16px' }}
                  letterSpacing={{ base: 'wide', md: 'wider' }}
                  textTransform="uppercase"
                  lineHeight="shorter"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  mb={{ base: 2, md: 4 }}
                >
                  Teaching, Working, and Traveling Abroad Made Simple.
                </FallInPlace>

                <FallInPlace>
                  <Text
                    fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '7xl' }}
                    fontWeight="bold"
                    lineHeight="shorter"
                    color="gray.900"
                    _dark={{ color: 'white' }}
                  >
                    Launch Your
                    <Br /> Global Career
                  </Text>
                </FallInPlace>
              </Text>
              <Text
                as="div"
                textStyle="subtitle"
                align="left"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                lineHeight="relaxed"
                maxW={{ base: '100%', md: '90%', lg: '85%' }}
              >
                KTECCS provides complete support for working abroad,
                <Br /> from <Em>job placement and legal documentation</Em>
                <Br /> to housing and personal guidance.
              </Text>

              <FallInPlace delay={0.8}>
                <HStack
                  pt={{ base: 4, md: 6 }}
                  pb={{ base: 6, md: 8, lg: 10 }}
                  spacing={{ base: 6, md: 8, lg: 10 }}
                  justify={{ base: 'center', md: 'flex-start' }}
                  w="full"
                >
                  <SvgIcon
                    name="handshake"
                    width={{ base: '24px', md: '28px', lg: '32px' }}
                    height={{ base: '24px', md: '28px', lg: '32px' }}
                  />
                  <SvgIcon
                    name="flight"
                    width={{ base: '24px', md: '28px', lg: '32px' }}
                    height={{ base: '24px', md: '28px', lg: '32px' }}
                  />
                  <SvgIcon
                    name="navigation"
                    width={{ base: '24px', md: '28px', lg: '32px' }}
                    height={{ base: '24px', md: '28px', lg: '32px' }}
                  />
                  <SvgIcon
                    name="education"
                    width={{ base: '24px', md: '28px', lg: '32px' }}
                    height={{ base: '24px', md: '28px', lg: '32px' }}
                  />
                </HStack>

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={{ base: 3, md: 4, lg: 6 }}
                  align="center"
                  w={{ base: 'full', sm: 'auto' }}
                >
                  <ButtonLink
                    colorScheme="primary"
                    size={{ base: 'md', md: 'lg' }}
                    href="/signup"
                    w={{ base: 'full', sm: 'auto' }}
                    minW={{ base: '200px', sm: 'auto' }}
                  >
                    Our Services
                  </ButtonLink>
                  <ButtonLink
                    size={{ base: 'md', md: 'lg' }}
                    href="/apply"
                    variant="outline"
                    w={{ base: 'full', sm: 'auto' }}
                    minW={{ base: '200px', sm: 'auto' }}
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
                    Apply Now
                  </ButtonLink>
                </Stack>
              </FallInPlace>
            </VStack>
          </Flex>

          <Box flex={1} position="relative">
            {/* Mobile and Tablet: Lottie in flow */}
            <Box
              display={{ base: 'block', lg: 'none' }}
              width="100%"
              textAlign="center"
              mt={{ base: 8, md: 0 }}
            >
              <Box
                mx="auto"
                width={{ base: '280px', sm: '350px', md: '400px' }}
                height={{ base: '280px', sm: '350px', md: '400px' }}
                maxW="90vw"
              >
                <LottiePlayer
                  animationData={globeAnimation}
                  autoplay
                  loop
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>

            {/* Desktop: Lottie positioned relative to its container */}
            <Box
              display={{ base: 'none', lg: 'flex' }}
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              minH="500px"
            >
              <FallInPlace delay={1}>
                <Box
                  width={{ lg: '500px', xl: '600px', '2xl': '700px' }}
                  height={{ lg: '500px', xl: '600px', '2xl': '700px' }}
                  maxW="90%"
                  maxH="90%"
                  zIndex={1}
                  overflow="hidden"
                  position="relative"
                  right={{ lg: '-25%', xl: '-25%', '2xl': '-25%' }}
                  transform="translateX(25%)"
                >
                  <LottiePlayer
                    animationData={globeAnimation}
                    autoplay
                    loop
                    width="100%"
                    height="100%"
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Box>
        </Stack>
      </Container>

      <Box pt={{ base: 16, md: 20, lg: 24 }}>
        <Features
          id="benefits"
          columns={{ base: 1, md: 2, lg: 4 }}
          iconSize={4}
          innerWidth="container.2xl"
          features={[
            {
              title: 'Professional & Clear',
              icon: FiSmile,
              description:
                'Explore our core services designed to support your journey abroad from job placement to personal well-being.',
              iconPosition: 'left',
              delay: 0.6,
            },
            {
              title: 'Friendly & Inviting',
              icon: FiSliders,
              description:
                'We offer more than jobs. We provide complete support for living, working, and growing overseas.',
              iconPosition: 'left',
              delay: 0.8,
            },
            {
              title: 'Global & Confident',
              icon: FiGrid,
              description:
                'Our four core services are built to help you thrive wherever your journey takes you.',
              iconPosition: 'left',
              delay: 1,
            },
            {
              title: 'Caring & Human-Centered',
              icon: FiThumbsUp,
              description:
                'We focus on people, not just placements. Here is how we support every step of your international path.',
              iconPosition: 'left',
              delay: 1.1,
            },
          ]}
          reveal={FallInPlace}
        />
      </Box>
    </Box>
  )
}
