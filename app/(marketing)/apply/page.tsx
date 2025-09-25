'use client'

import * as Yup from 'yup'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'

import { useState } from 'react'

import {
  AdditionalInfoSection,
  type FormData,
  FormWrapper,
  PersonalInfoSection,
  PreferencesSection,
} from '#components/formInput'

// Custom validation schema for the application form
const applicationValidationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(18, 'Applicant must be at least 18 years old')
    .typeError('Please enter a valid number'),
  phoneNumber: Yup.string().required('Phone number is required'),
  website: Yup.string().url('Please enter a valid URL'),
  willingToRelocate: Yup.boolean().equals(
    [true],
    'Must be willing to relocate for international opportunities',
  ),
  favoriteColor: Yup.string().required('Please select a preferred color'),
  preferredShift: Yup.array().min(
    1,
    'Please select at least 1 shift preference',
  ),
  additionalNotes: Yup.string()
    .required('Please tell us about your motivation and goals')
    .min(50, 'Please provide at least 50 characters about yourself'),
  callbackTime: Yup.string().required(
    'Please select your preferred callback time',
  ),
  excitementScale: Yup.number().min(1).max(10),
})

// Default values for the application form
const applicationDefaultValues: Partial<FormData> = {
  firstName: '',
  lastName: '',
  age: undefined,
  phoneNumber: '',
  website: '',
  willingToRelocate: true,
  favoriteColor: '',
  preferredShift: [],
  additionalNotes: '',
  previousExperience: false,
  callbackTime: '',
  excitementScale: 7,
  confirmationPin: '',
  password: '',
}

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const toast = useToast()

  // Handle form submission
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Send data to dummy endpoint (you can replace this with your actual API)
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: 'landing_page_apply_now',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: 'Application Submitted!',
          description:
            'Thank you for your interest. We will contact you within 24-48 hours.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast({
        title: 'Submission Error',
        description:
          'There was an error submitting your application. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8} align="center" textAlign="center">
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            borderRadius="lg"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application Submitted Successfully!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thank you for your interest in working abroad with KTECCS. Our
              team will review your application and contact you within 24-48
              hours to discuss the next steps in your global career journey.
            </AlertDescription>
          </Alert>

          <Box>
            <Text color="gray.600" _dark={{ color: 'gray.400' }}>
              We've sent a confirmation email with your application details. In
              the meantime, feel free to explore our services and learn more
              about the opportunities available in your field.
            </Text>
          </Box>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.lg" py={20}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Start Your Global Career Journey
          </Heading>
          <Text
            fontSize="xl"
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            maxW="2xl"
            mx="auto"
          >
            Complete this application to begin your journey with KTECCS. We'll
            match you with international opportunities that align with your
            skills, experience, and career goals.
          </Text>
        </Box>

        {/* Application Form */}
        <Box
          bg="white"
          _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          boxShadow="xl"
          border="1px"
          borderColor="gray.200"
        >
          <FormWrapper
            onSubmit={handleSubmit}
            validationSchema={applicationValidationSchema}
            defaultValues={applicationDefaultValues}
            title="Application Form"
          >
            {/* Personal Information */}
            <Box>
              <Heading
                size="md"
                mb={4}
                color="gray.700"
                _dark={{ color: 'gray.300' }}
              >
                Personal Information
              </Heading>
              <PersonalInfoSection />
            </Box>

            {/* Preferences & Availability */}
            <Box>
              <Heading
                size="md"
                mb={4}
                color="gray.700"
                _dark={{ color: 'gray.300' }}
              >
                Preferences & Availability
              </Heading>
              <PreferencesSection />
            </Box>

            {/* Additional Information */}
            <Box>
              <Heading
                size="md"
                mb={4}
                color="gray.700"
                _dark={{ color: 'gray.300' }}
              >
                Tell Us About Yourself
              </Heading>
              <AdditionalInfoSection />
            </Box>

            {/* Submission Notice */}
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle>Privacy Notice</AlertTitle>
                <AlertDescription>
                  Your information will be kept confidential and used only for
                  matching you with suitable international opportunities. We
                  follow strict data protection guidelines.
                </AlertDescription>
              </Box>
            </Alert>
          </FormWrapper>
        </Box>
      </VStack>
    </Container>
  )
}
