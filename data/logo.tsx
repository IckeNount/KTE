'use client'

import {
  HStack,
  HTMLChakraProps,
  Text,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { League_Spartan } from 'next/font/google'

const spartanLeague = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#000671', '#fff') // Light = red, Dark = white

  return (
    <HStack spacing={3} align="center">
      <chakra.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
        boxSize="40px"
        {...props}
      >
        <g transform="matrix(3.03046,0,0,3.03046,-1124,-699.42)">
          <g id="Layer1">
            <g>
              <g transform="matrix(0.322301,0.322301,-0.322301,0.322301,434.96,152.637)">
                <rect
                  x="390.894"
                  y="334.277"
                  width="219.393"
                  height="219.393"
                  fill={color}
                />
              </g>
              <g transform="matrix(0.322301,0.322301,-0.322301,0.322301,512.742,74.855)">
                <rect
                  x="390.894"
                  y="334.277"
                  width="219.393"
                  height="219.393"
                  fill={color}
                />
              </g>
              <g transform="matrix(0.322301,0.322301,-0.322301,0.322301,590.523,152.637)">
                <rect
                  x="390.894"
                  y="334.277"
                  width="219.393"
                  height="219.393"
                  fill={color}
                />
              </g>
              <g transform="matrix(0.322301,0.322301,-0.322301,0.322301,667.744,74.855)">
                <rect
                  x="390.894"
                  y="334.277"
                  width="219.393"
                  height="219.393"
                  fill={color}
                />
              </g>
              <g transform="matrix(0.322301,0.322301,-0.322301,0.322301,745.525,-2.92676)">
                <rect
                  x="390.894"
                  y="334.277"
                  width="219.393"
                  height="219.393"
                  fill={color}
                />
              </g>
            </g>
          </g>
        </g>
      </chakra.svg>

      <Text
        fontSize="xl"
        fontWeight="bold"
        className={spartanLeague.className}
        lineHeight="1"
        letterSpacing="-0.01em"
      >
        KTECCS
      </Text>
    </HStack>
  )
}
