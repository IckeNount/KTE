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
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Flex
            id="home"
            justifyContent="flex-start"
            py="20"
            alignItems="center"
            width="100%"
            px={{ base: 4, md: 0 }}
          >
            <VStack
              spacing={[4, null, 8]}
              alignItems="flex-start"
              width="100%"
              pr={{ base: 0, md: 0, lg: '20%' }}
              pb={{ base: '280px', md: '0' }}
            >
              <Text as="h1" textStyle="h1" textAlign="left">
                <FallInPlace
                  delay={0.4}
                  fontWeight="light"
                  fontSize={{ base: '4px', md: '8px', lg: '12px' }}
                  letterSpacing={{ base: 'wide', md: 'wider' }}
                  textTransform="uppercase" // Optional
                  lineHeight="shorter"
                >
                  Teaching, Working, and Traveling Abroad Made Simple.
                </FallInPlace>

                <FallInPlace>
                  Launch Your
                  <Br /> Global Career
                </FallInPlace>
              </Text>
              <Text
                as="div"
                textStyle="subtitle"
                align="left"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                KTECCS provides complete support for working abroad,
                <Br /> from <Em>job placement and legal documentation</Em>
                <Br /> to housing and personal guidance.
              </Text>

              <FallInPlace delay={0.8}>
                <HStack pt="2" pb="8" spacing="8">
                  <SvgIcon name="handshake" width="28px" height="28px" />
                  <SvgIcon name="flight" width="28px" height="28px" />
                  <SvgIcon name="navigation" width="28px" height="28px" />
                  <SvgIcon name="education" width="28px" height="28px" />
                </HStack>

                <ButtonGroup spacing={4} alignItems="center">
                  <ButtonLink colorScheme="primary" size="lg" href="/signup">
                    Our Services
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
                    Apply Now
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </VStack>
          </Flex>

          <>
            {/* Mobile: Lottie in flow */}
            <Box
              display={{ base: 'block', md: 'none' }}
              pt="12"
              px="4"
              width="100%"
              textAlign="center"
            >
              <Box
                mx="auto"
                width={{ base: '260px', sm: '300px' }}
                height={{ base: '260px', sm: '300px' }}
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

            {/* Desktop: Lottie absolutely positioned */}
            <Box
              display={{ base: 'none', md: 'block' }}
              position="absolute"
              right={200}
              top="50%"
              transform="translateY(-55%)"
              zIndex={0}
              width="auto"
              maxW="none"
              overflow="visible"
              pointerEvents="none"
            >
              <FallInPlace delay={1}>
                <Box
                  width={{ md: '70vw', lg: '60vw', xl: '55vw', '2xl': '50vw' }}
                  height="auto"
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
          </>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
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
  )
}
