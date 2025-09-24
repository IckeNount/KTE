import {
  Box,
  IconButton,
  ResponsiveValue,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  Section,
  SectionProps,
  SectionTitle,
  SectionTitleProps,
} from 'components/section'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import React, { useEffect, useState } from 'react'

import { Testimonial, TestimonialProps } from './testimonial'

export interface TestimonialsProps
  extends Omit<SectionProps, 'title' | 'children'>,
    Pick<SectionTitleProps, 'title' | 'description'> {
  columns?: ResponsiveValue<number>
  testimonials?: TestimonialProps[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showNavigation?: boolean
  children?: React.ReactNode
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const {
    children,
    title,
    columns = [1, null, 2],
    testimonials = [],
    autoPlay = true,
    interval = 4000,
    showDots = true,
    showNavigation = true,
    ...rest
  } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1
  const isCarousel = testimonials.length > 0

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !isCarousel) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + cardsPerView >= testimonials.length ? 0 : prevIndex + 1,
      )
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, interval, testimonials.length, cardsPerView, isCarousel])

  // Handle dot navigation
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - cardsPerView : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= testimonials.length ? 0 : prevIndex + 1,
    )
  }

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => {
    setIsPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsPlaying(autoPlay)
  }

  // Calculate visible testimonials
  const getVisibleTestimonials = (): TestimonialProps[] => {
    const visible: TestimonialProps[] = []
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  if (!isCarousel && children) {
    // Fallback to original grid layout when children are passed
    return (
      <Section {...rest}>
        <SectionTitle title={title} />
        <SimpleGrid columns={columns} spacing="8">
          {children}
        </SimpleGrid>
      </Section>
    )
  }

  if (!isCarousel) {
    // No testimonials and no children provided
    return (
      <Section {...rest}>
        <SectionTitle title={title} />
        <Box>No testimonials to display</Box>
      </Section>
    )
  }

  return (
    <Section {...rest}>
      <SectionTitle title={title} />

      <Box
        position="relative"
        overflow="hidden"
        w="full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showNavigation && testimonials.length > cardsPerView && (
          <>
            <IconButton
              aria-label="Previous testimonials"
              icon={<HiChevronLeft />}
              position="absolute"
              left="-4"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
              size="lg"
              variant="ghost"
              colorScheme="blue"
              bg="white"
              shadow="md"
              border="1px"
              borderColor="gray.200"
              _hover={{
                bg: 'blue.50',
                borderColor: 'blue.300',
                transform: 'translateY(-50%) scale(1.05)',
              }}
              onClick={goToPrevious}
            />
            <IconButton
              aria-label="Next testimonials"
              icon={<HiChevronRight />}
              position="absolute"
              right="-4"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
              size="lg"
              variant="ghost"
              colorScheme="blue"
              bg="white"
              shadow="md"
              border="1px"
              borderColor="gray.200"
              _hover={{
                bg: 'blue.50',
                borderColor: 'blue.300',
                transform: 'translateY(-50%) scale(1.05)',
              }}
              onClick={goToNext}
            />
          </>
        )}

        <Box w="full" minH="300px">
          <AnimatePresence mode="wait">
            <Box
              as={motion.div}
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={
                {
                  duration: 0.5,
                  ease: 'easeInOut',
                } as any
              }
            >
              <SimpleGrid columns={cardsPerView} spacing="8" minH="300px">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <Box
                    key={currentIndex + '-' + index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      {
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      } as any
                    }
                  >
                    <Testimonial {...testimonial} />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </AnimatePresence>
        </Box>

        {showDots && testimonials.length > cardsPerView && (
          <Box display="flex" justifyContent="center" mt="6" gap="2">
            {Array.from({
              length: Math.ceil(testimonials.length / cardsPerView),
            }).map((_, index) => (
              <Box
                key={index}
                as="button"
                w="3"
                h="3"
                borderRadius="full"
                bg={
                  Math.floor(currentIndex / cardsPerView) === index
                    ? 'blue.500'
                    : 'gray.300'
                }
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  bg:
                    Math.floor(currentIndex / cardsPerView) === index
                      ? 'blue.600'
                      : 'gray.400',
                  transform: 'scale(1.1)',
                }}
                onClick={() => handleDotClick(index * cardsPerView)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Section>
  )
}
