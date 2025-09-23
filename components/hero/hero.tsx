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
                <FallInPlace>
                  Global Careers
                  <Br /> Fully Supported
                </FallInPlace>
              </Text>
              <Text
                as="div"
                textStyle="subtitle"
                align="left"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                <FallInPlace delay={0.4} fontWeight="medium">
                  We <Em>connect</Em> you to jobs in
                  <Br />
                  Thailand, Europe, and Asia
                  <Br /> with <Em>full support</Em> on
                  <Br />
                  visas, placement, coaching, and relocation.
                </FallInPlace>
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
            title: 'Global Teaching Placement',
            icon: FiSmile,
            description:
              'Teaching jobs in Thailand with visa, permits, coaching, and full relocation support.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'International Workforce Deployment',
            icon: FiSliders,
            description:
              'Industrial job placements in Poland and Germany with legal, housing, and relocation assistance.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Travel & Visa Solutions',
            icon: FiGrid,
            description:
              'Visa services and travel support for Europe, Korea, Dubai, and custom tour packages.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Human-Centered Support',
            icon: FiThumbsUp,
            description:
              'Emergency financial help and lifelong mentorship focused on teacher well-being and growth.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}
