'use client'

import {
  Box,
  Flex,
  IconButton,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { FiCheck, FiCopy } from 'react-icons/fi'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { Em } from '#components/typography'

export const TrustFactors = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Teachers Abroad">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Every teacher&apos;s journey is unique. We help{' '}
            <Em>new teachers</Em> build confidence and guide{' '}
            <Em>experienced educators</Em> toward better opportunities. With
            visas, permits, and housing covered, you can feel at home while
            teaching overseas.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Skilled Workforce">
        <Text color="muted" fontSize="lg">
          Factory and industrial workers play a vital role in every economy. We
          provide safe and legal placements in Europe with full relocation
          assistance, housing support, and guidance every step of the way.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Troy"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['blue.800', 'cyan.800']}
      >
        <Text color="muted" fontSize="lg">
          "KTECCS was built on the belief that working abroad should be
          life-changing, not stressful. We take pride in helping people unlock
          opportunities and create a new chapter with confidence."
        </Text>
      </HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Aspiring Travelers">
        <Text color="muted" fontSize="lg">
          Your next adventure starts here. We simplify visas for Europe, Korea,
          and Dubai while offering customized travel and tour packages.
        </Text>
        <Wrap mt="8">
          {[
            'visa consultation',
            'family travel',
            'solo travel',
            'group tours',
            'sightseeing tours',
            'adventure travel',
            'budget travel',
            'visa application',
            'vacation package',
            'cultural exchange',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}
