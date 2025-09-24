// app/components/CountriesFlag.tsx
'use client'

import { Box, Center, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'
import { RepoTag } from 'public/static/glow-planet/RepoTag'

import { ReactElement } from 'react'

import PlanetTagImg01 from '../../public/static/glow-planet/planet-tag-01.png'
import PlanetTagImg02 from '../../public/static/glow-planet/planet-tag-02.png'
import PlanetTagImg03 from '../../public/static/glow-planet/planet-tag-03.png'
import PlanetTagImg04 from '../../public/static/glow-planet/planet-tag-04.png'
import PlanetImg from '../../public/static/glow-planet/planet.png'

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

// Float animation keyframe
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

// app/components/CountriesFlag.tsx

// app/components/CountriesFlag.tsx

const features: { title: string; icon: ReactElement; description: string }[] = [
  {
    title: 'Connect',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
      </Icon>
    ),
    description:
      "Start by reaching out or applying. We'll review your profile and goals personally.",
  },
  {
    title: 'Discover',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
      </Icon>
    ),
    description:
      'We’ll have a planning call to understand your background, preferences, and career vision.',
  },
  {
    title: 'Match',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path
          d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
          opacity=".3"
        />
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </Icon>
    ),
    description:
      'We match you with a verified employer or school that fits your skills and goals.',
  },
  {
    title: 'Prepare',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
      </Icon>
    ),
    description:
      'We handle your documents, visa, flights, and housing while getting you prepped.',
  },
  {
    title: 'Arrive',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395Z" />
      </Icon>
    ),
    description:
      'We welcome you abroad and assist with arrival needs, onboarding, and orientation.',
  },
  {
    title: 'Thrive',
    icon: (
      <Icon viewBox="0 0 16 16" boxSize={4} fill="blue.500">
        <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
      </Icon>
    ),
    description:
      'Stay supported long-term with check-ins, community events, and career development resources.',
  },
]

export default function CountriesFlag() {
  return (
    <Box as="section" position="relative" bg="gray.900" zIndex={-20}>
      <Box maxW="6xl" mx="auto" px={{ base: 4, sm: 6 }}>
        <Box py={{ base: 12, md: 20 }}>
          <Box
            maxW="3xl"
            mx="auto"
            pb={{ base: 16, md: 20 }}
            textAlign="center"
          >
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.200"
            >
              What We Do
            </Heading>
          </Box>

          {/* Planet Animation */}
          <Box pb={{ base: 16, md: 20 }}>
            <Center>
              <Box
                position="relative"
                borderRadius="full"
                _before={{
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  zIndex: -10,
                  transform: 'scale(0.85)',
                  animation: 'pulse 4s cubic-bezier(.4,0,.6,1) infinite',
                  bgGradient: 'linear(to-b, blue.900, sky.700Alpha.50)',
                  filter: 'blur(48px)',
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  bg: 'radial-gradient(closest-side, var(--chakra-colors-blue-500), transparent)',
                }}
              >
                <Image
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                  style={{ borderRadius: '9999px' }}
                />

                <Box pointerEvents="none" position="relative">
                  <Image
                    src="/static/glow-planet/planet-overlay.svg"
                    alt="Planet decoration"
                    width={789}
                    height={755}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                    }}
                  />
                  {/* Floating Tags */}
                  <Box
                    position="absolute"
                    left="-7rem"
                    top="4rem"
                    zIndex={10}
                    opacity={0.8}
                    animation={`${float} 4s ease-in-out infinite`}
                  >
                    <RepoTag
                      username="user01"
                      repoName="repo01"
                      location="Earth"
                      avatarUrl="./DB.svg"
                    />
                    {/* <Image
                      src={PlanetTagImg01}
                      alt="Tag 01"
                      width={253}
                      height={56}
                    /> */}
                  </Box>
                  <Box
                    position="absolute"
                    left="14rem"
                    top="1.75rem"
                    zIndex={10}
                    opacity={0.3}
                    animation={`${float} 4s ease-in-out infinite 1s`}
                  >
                    {/* <Image
                      src={PlanetTagImg02}
                      alt="Tag 02"
                      width={241}
                      height={56}
                    /> */}
                  </Box>
                  <Box
                    position="absolute"
                    left="-5rem"
                    bottom="6rem"
                    zIndex={10}
                    opacity={0.25}
                    animation={`${float} 4s ease-in-out infinite 2s`}
                  >
                    {/* <Image
                      src={PlanetTagImg03}
                      alt="Tag 03"
                      width={243}
                      height={56}
                    /> */}
                  </Box>
                  <Box
                    position="absolute"
                    left="16rem"
                    bottom="8rem"
                    zIndex={10}
                    opacity={0.8}
                    animation={`${float} 4s ease-in-out infinite 3s`}
                  >
                    {/* <Image
                      src={PlanetTagImg04}
                      alt="Tag 04"
                      width={251}
                      height={56}
                    /> */}
                  </Box>
                </Box>
              </Box>
            </Center>
          </Box>

          {/* Features Stepper Card */}
          <Box position="relative" px={{ base: 4, md: 0 }}>
            {/* Decorative Background Squares */}
            <Box
              position="absolute"
              top="-4"
              left="8"
              w="16"
              h="16"
              bg="blue.500"
              opacity="0.1"
              transform="rotate(12deg)"
              borderRadius="md"
              zIndex={0}
            />
            <Box
              position="absolute"
              top="4"
              right="12"
              w="12"
              h="12"
              bg="green.400"
              opacity="0.08"
              transform="rotate(-15deg)"
              borderRadius="md"
              zIndex={0}
            />
            <Box
              position="absolute"
              bottom="-2"
              left="1/4"
              w="10"
              h="10"
              bg="purple.500"
              opacity="0.06"
              transform="rotate(25deg)"
              borderRadius="md"
              zIndex={0}
            />

            {/* Main Stepper Card */}
            <Box
              bg="gray.800"
              borderRadius="xl"
              boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              p={{ base: 6, md: 8 }}
              position="relative"
              zIndex={1}
            >
              {/* Desktop Horizontal Stepper */}
              <Box display={{ base: 'none', lg: 'block' }}>
                {/* Step Dots and Connecting Line */}
                <Flex
                  justify="space-between"
                  align="center"
                  mb={8}
                  position="relative"
                >
                  {/* Connecting Line */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="0"
                    right="0"
                    h="2px"
                    bg="gray.600"
                    zIndex={0}
                  />

                  {features.map((_, index) => (
                    <Box key={index} position="relative" zIndex={1}>
                      <Box
                        w="4"
                        h="4"
                        borderRadius="full"
                        bg={index === 0 ? 'green.400' : 'transparent'}
                        border="2px solid"
                        borderColor={index === 0 ? 'green.400' : 'gray.500'}
                      />
                    </Box>
                  ))}
                </Flex>

                {/* Feature Items */}
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                  {features.map((feature, index) => (
                    <Box key={index}>
                      <Flex align="center" mb={2} gap={2}>
                        {feature.icon}
                        <Text
                          fontWeight="medium"
                          color="gray.200"
                          fontSize="sm"
                        >
                          {feature.title}
                        </Text>
                      </Flex>
                      <Text fontSize="xs" color="gray.400">
                        {feature.description}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </Box>

              {/* Mobile Vertical Stepper */}
              <Box display={{ base: 'block', lg: 'none' }}>
                {features.map((feature, index) => (
                  <Box key={index} position="relative">
                    <Flex gap={4} pb={index < features.length - 1 ? 6 : 0}>
                      {/* Step Indicator */}
                      <Box position="relative" pt={1}>
                        <Box
                          w="4"
                          h="4"
                          borderRadius="full"
                          bg={index === 0 ? 'green.400' : 'transparent'}
                          border="2px solid"
                          borderColor={index === 0 ? 'green.400' : 'gray.500'}
                        />
                        {/* Vertical Connecting Line */}
                        {index < features.length - 1 && (
                          <Box
                            position="absolute"
                            top="6"
                            left="50%"
                            w="2px"
                            h="6"
                            bg="gray.600"
                            transform="translateX(-50%)"
                          />
                        )}
                      </Box>

                      {/* Feature Content */}
                      <Box flex="1">
                        <Flex align="center" mb={2} gap={2}>
                          {feature.icon}
                          <Text fontWeight="medium" color="gray.200">
                            {feature.title}
                          </Text>
                        </Flex>
                        <Text fontSize="sm" color="gray.400">
                          {feature.description}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
