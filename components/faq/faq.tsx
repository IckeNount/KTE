import {
  Box,
  Collapse,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi'
import { useState } from 'react'

interface FaqCategory {
  title: string
  icon?: string
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  categories: FaqCategory[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently asked questions',
    description,
    categories = [],
  } = props

  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (categoryTitle: string) => {
    if (openCategory === categoryTitle) {
      setOpenCategory(null)
      setOpenQuestion(null)
    } else {
      setOpenCategory(categoryTitle)
      setOpenQuestion(null)
    }
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <VStack spacing={4} maxW="4xl" mx="auto">
        {categories.map((category, categoryIndex) => (
          <Box
            key={categoryIndex}
            w="full"
            bg="white"
            _dark={{ bg: 'gray.800', borderColor: 'gray.600' }}
            borderRadius="lg"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
          >
            {/* Category Header */}
            <Box
              as="button"
              w="full"
              p={6}
              textAlign="left"
              bg="gray.50"
              _dark={{ bg: 'gray.700' }}
              _hover={{ bg: 'gray.100', _dark: { bg: 'gray.600' } }}
              transition="all 0.2s"
              onClick={() => toggleCategory(category.title)}
            >
              <HStack justify="space-between" align="center">
                <Heading
                  size="md"
                  color="gray.800"
                  _dark={{ color: 'gray.100' }}
                >
                  {category.title}
                </Heading>
                <Icon
                  as={ChevronDownIcon}
                  boxSize={5}
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  transform={
                    openCategory === category.title
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)'
                  }
                  transition="transform 0.2s"
                />
              </HStack>
            </Box>

            {/* Category Content */}
            <Collapse in={openCategory === category.title} animateOpacity>
              <VStack spacing={0} align="stretch">
                {category.items.map((item, itemIndex) => {
                  const questionId = `${categoryIndex}-${itemIndex}`
                  return (
                    <Box
                      key={itemIndex}
                      borderTop="1px solid"
                      borderColor="gray.100"
                      _dark={{ borderColor: 'gray.600' }}
                    >
                      {/* Question Header */}
                      <Box
                        as="button"
                        w="full"
                        p={4}
                        pl={6}
                        textAlign="left"
                        _hover={{ bg: 'gray.50', _dark: { bg: 'gray.750' } }}
                        transition="all 0.2s"
                        onClick={() => toggleQuestion(questionId)}
                      >
                        <HStack justify="space-between" align="center">
                          <Text
                            fontWeight="medium"
                            color="gray.700"
                            _dark={{ color: 'gray.200' }}
                          >
                            {item.q}
                          </Text>
                          <Icon
                            as={ChevronDownIcon}
                            boxSize={4}
                            color="gray.500"
                            _dark={{ color: 'gray.400' }}
                            transform={
                              openQuestion === questionId
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)'
                            }
                            transition="transform 0.2s"
                            flexShrink={0}
                            ml={2}
                          />
                        </HStack>
                      </Box>

                      {/* Answer Content */}
                      <Collapse in={openQuestion === questionId} animateOpacity>
                        <Box px={6} pb={4} pt={2}>
                          <Text
                            color="gray.600"
                            _dark={{ color: 'gray.300' }}
                            lineHeight="relaxed"
                          >
                            {item.a}
                          </Text>
                        </Box>
                      </Collapse>
                    </Box>
                  )
                })}
              </VStack>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Section>
  )
}

// Legacy interface for backward compatibility
export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}
