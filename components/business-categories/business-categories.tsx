'use client'

import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'

// Custom animations using Chakra's keyframes
const breath = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const lineMove = keyframes`
  0% { left: -100%; }
  50% { left: 50%; }
  100% { left: 100%; }
`

export default function BusinessCategories() {
  const bgColor = useColorModeValue('white', 'gray.900')
  const svgFill = useColorModeValue('#3182CE', '#63B3ED')

  return (
    <Box as="section" bg={bgColor}>
      <Container maxW="6xl" px={{ base: 4, sm: 6 }}>
        <Box pb={{ base: 12, md: 20 }}>
          {/* Main container */}
          <Box
            position="relative"
            display="flex"
            h="324px"
            alignItems="center"
            justifyContent="center"
          >
            {/* Small blue dots pattern */}
            <Box position="absolute" zIndex={-1}>
              <svg
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={1} cy={8} r={1} fill={svgFill} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fill={svgFill} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} fill={svgFill} />
                <circle
                  cx={1}
                  cy={26}
                  r={1}
                  fill={svgFill}
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={33}
                  r={1}
                  fill={svgFill}
                  fillOpacity="0.24"
                />
                <circle cx={8} cy={8} r={1} fill={svgFill} />
                <circle cx={8} cy={15} r={1} fill={svgFill} />
                <circle
                  cx={8}
                  cy={26}
                  r={1}
                  fill={svgFill}
                  fillOpacity="0.24"
                />
                <circle
                  cx={15}
                  cy={15}
                  r={1}
                  fill={svgFill}
                  fillOpacity="0.64"
                />
                <circle
                  cx={15}
                  cy={26}
                  r={1}
                  fill={svgFill}
                  fillOpacity="0.16"
                />
                <circle cx={8} cy={33} r={1} fill={svgFill} />
                <circle cx={1} cy={40} r={1} fill={svgFill} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fill={svgFill}
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fill={svgFill}
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                  fill={svgFill}
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fill={svgFill}
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fill={svgFill}
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                  fill={svgFill}
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                  fill={svgFill}
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fill={svgFill}
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fill={svgFill}
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fill={svgFill}
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                  fill={svgFill}
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                  fill={svgFill}
                />
              </svg>
            </Box>

            {/* Blue glow background */}
            <Box position="absolute" zIndex={-1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    fill={svgFill}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </Box>

            {/* Grid lines */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="1px"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="1px"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />
            <Box
              position="absolute"
              top="50%"
              left="200px"
              right="200px"
              h="1px"
              bgGradient="linear(to-r, transparent, blue.500, transparent)"
              opacity={0.6}
              zIndex={-1}
              mixBlendMode="multiply"
            />

            {/* Animated horizontal lines */}
            <Box
              position="absolute"
              top="50%"
              left={0}
              right={0}
              h="1px"
              transform="translateY(-82px)"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                w: '24px',
                bgGradient: 'linear(to-r, transparent, blue.500, transparent)',
                animation: `${lineMove} 10s ease-in-out infinite`,
              }}
            />
            <Box
              position="absolute"
              top="50%"
              left={0}
              right={0}
              h="1px"
              transform="translateY(82px)"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                w: '24px',
                bgGradient: 'linear(to-r, transparent, blue.500, transparent)',
                animation: `${lineMove} 10s ease-in-out infinite 5s`,
              }}
            />

            {/* Diagonal lines */}
            <Box
              position="absolute"
              left="300px"
              right="300px"
              top="50%"
              h="1px"
              transform="rotate(20deg)"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />
            <Box
              position="absolute"
              left="300px"
              right="300px"
              top="50%"
              h="1px"
              transform="rotate(-20deg)"
              bgGradient="linear(to-r, transparent, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />

            {/* Vertical lines */}
            <Box
              position="absolute"
              top={0}
              bottom={0}
              left="50%"
              w="1px"
              transform="translateX(-216px)"
              bgGradient="linear(to-b, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />
            <Box
              position="absolute"
              top={0}
              bottom={0}
              left="50%"
              w="1px"
              transform="translateX(216px)"
              bgGradient="linear(to-t, gray.200, transparent)"
              zIndex={-1}
              mixBlendMode="multiply"
            />

            {/* Central logo with spinning border */}
            <Box
              position="absolute"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                right: '-12px',
                bottom: '-12px',
                borderRadius: 'full',
                border: '1px solid transparent',
                bgGradient: 'conic(from 180deg, transparent, blue.500)',
                animation: `${spin} 3s linear infinite`,
                mask: 'linear-gradient(white 0 0) padding-box, linear-gradient(white 0 0)',
                maskComposite: 'exclude',
              }}
            >
              <Box animation={`${breath} 8s ease-in-out infinite`}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="96px"
                  h="96px"
                  borderRadius="full"
                  bg="white"
                  boxShadow="lg"
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: '8.334%',
                    left: '8.334%',
                    right: '8.334%',
                    bottom: '8.334%',
                    borderRadius: 'inherit',
                    border: '1px solid',
                    borderColor: 'blackAlpha.50',
                    bg: 'gray.200',
                    opacity: 0.6,
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                  }}
                >
                  <Image
                    src="/static/glow-planet/TH.svg"
                    width={32}
                    height={32}
                    alt="Logo 01"
                    style={{ position: 'relative', zIndex: 1 }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Surrounding logos container */}
            <Box position="relative" display="flex" flexDirection="column">
              <Box
                as="article"
                display="flex"
                h="full"
                w="full"
                alignItems="center"
                justifyContent="center"
                _focusVisible={{
                  outline: 'none',
                  ring: 3,
                  ringColor: 'blue.300',
                }}
              >
                {/* Left logo */}
                <Box position="absolute" transform="translateX(-136px)">
                  <Box animation={`${breath} 7s ease-in-out 3s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="64px"
                      h="64px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/PH.svg"
                        width={23}
                        height={22}
                        alt="Logo 02"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Right logo */}
                <Box position="absolute" transform="translateX(136px)">
                  <Box animation={`${breath} 7s ease-in-out 3.5s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="64px"
                      h="64px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/KR.svg"
                        width={22}
                        height={22}
                        alt="Logo 03"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Top left logo */}
                <Box position="absolute" transform="translate(-216px, -82px)">
                  <Box animation={`${breath} 6s ease-in-out 3.5s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/GM.svg"
                        width={24}
                        height={22}
                        alt="Logo 04"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Top right logo */}
                <Box position="absolute" transform="translate(216px, -82px)">
                  <Box animation={`${breath} 6s ease-in-out 1.5s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/DB.svg"
                        width={25}
                        height={25}
                        alt="Logo 05"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Bottom right logo */}
                <Box position="absolute" transform="translate(216px, 82px)">
                  <Box animation={`${breath} 6s ease-in-out 2s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/logo-06.svg"
                        width={20}
                        height={18}
                        alt="Logo 06"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Bottom left logo */}
                <Box position="absolute" transform="translate(-216px, 82px)">
                  <Box animation={`${breath} 6s ease-in-out 2.5s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="white"
                      boxShadow="lg"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '8.334%',
                        left: '8.334%',
                        right: '8.334%',
                        bottom: '8.334%',
                        borderRadius: 'inherit',
                        border: '1px solid',
                        borderColor: 'blackAlpha.50',
                        bg: 'gray.200',
                        opacity: 0.6,
                        maskImage:
                          'linear-gradient(to bottom, black, transparent)',
                      }}
                    >
                      <Image
                        src="/static/glow-planet/PO.svg"
                        width={25}
                        height={25}
                        alt="Logo 07"
                        style={{ position: 'relative', zIndex: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Far left logo */}
                <Box
                  position="absolute"
                  transform="translateX(-292px)"
                  opacity={0.4}
                >
                  <Box animation={`${breath} 6s ease-in-out 2s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="48px"
                      h="48px"
                      borderRadius="full"
                      border="1px solid"
                      borderColor="gray.200"
                      opacity={0.6}
                      bg="white"
                      boxShadow="lg"
                    >
                      <Image
                        src="/static/glow-planet/logo-08.svg"
                        width={20}
                        height={20}
                        alt="Logo 08"
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Far right logo */}
                <Box
                  position="absolute"
                  transform="translateX(292px)"
                  opacity={0.4}
                >
                  <Box animation={`${breath} 6s ease-in-out 4s infinite`}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="48px"
                      h="48px"
                      borderRadius="full"
                      border="1px solid"
                      borderColor="gray.200"
                      opacity={0.6}
                      bg="white"
                      boxShadow="lg"
                    >
                      <Image
                        src="/static/glow-planet/logo-09.svg"
                        width={21}
                        height={13}
                        alt="Logo 09"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
