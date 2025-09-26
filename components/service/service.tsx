import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Tag,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

import React, { useState } from 'react'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '#components/section'

export interface ServicePlan {
  id: string
  title: React.ReactNode
  tags?: string[]
  description: React.ReactNode
  price: React.ReactNode
  features: Array<ServiceFeatureProps | null>
  isRecommended?: boolean
}

export interface ServiceProps extends Omit<SectionProps, 'children'> {
  children?: React.ReactNode
  description: React.ReactNode
  plans: Array<ServicePlan>
}

export const Service: React.FC<ServiceProps> = (props) => {
  const { children, plans, title, description, ...rest } = props

  return (
    <Section id="services" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>

        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {plans?.map((plan) => (
            <ServiceBox
              key={plan.id}
              title={plan.title}
              tags={plan.tags}
              description={plan.description}
              price={plan.price}
              sx={
                plan.isRecommended
                  ? {
                      borderColor: 'primary.500',
                      _dark: {
                        borderColor: 'primary.500',
                        bg: 'blackAlpha.300',
                      },
                    }
                  : {}
              }
            >
              <ServiceFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <ServiceFeature key={i} {...feature} />
                  ) : (
                    <br key={i} />
                  ),
                )}
              </ServiceFeatures>
            </ServiceBox>
          ))}
        </SimpleGrid>

        {children}
      </Box>
    </Section>
  )
}

const ServiceFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface ServiceFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const ServiceFeature: React.FC<ServiceFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

interface CollapsibleDescriptionProps {
  description: React.ReactNode
  maxLength?: number
}

const CollapsibleDescription: React.FC<CollapsibleDescriptionProps> = ({
  description,
  maxLength = 120,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (typeof description !== 'string') {
    return <Box color="muted">{description}</Box>
  }

  const shouldTruncate = description.length > maxLength
  const displayText =
    isExpanded || !shouldTruncate
      ? description
      : `${description.slice(0, maxLength)}...`

  return (
    <Box color="muted">
      <Text fontSize="sm" mb={shouldTruncate ? 2 : 0}>
        {displayText}
      </Text>
      {shouldTruncate && (
        <Button
          variant="link"
          size="sm"
          color="primary.500"
          p={0}
          h="auto"
          fontSize="xs"
          fontWeight="medium"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'See less' : 'See more'}
        </Button>
      )}
    </Box>
  )
}

export interface ServiceBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  tags?: string[]
  description: React.ReactNode
  price: React.ReactNode
}

const ServiceBox: React.FC<ServiceBoxProps> = (props) => {
  const { title, tags, description, price, children, ...rest } = props
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.400"
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.800',
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      {tags && (
        <Wrap mt="2" mb="2">
          {tags.map((tag) => (
            <Tag
              key={tag}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
              size="sm"
            >
              {tag}
            </Tag>
          ))}
        </Wrap>
      )}
      <CollapsibleDescription description={description} />
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
