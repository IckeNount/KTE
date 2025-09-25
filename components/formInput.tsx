/**
 * Reusable Form Components
 *
 * This file contains a comprehensive form system built with:
 * - React Hook Form: For form state management and validation
 * - Chakra UI: For consistent styling and components
 * - Yup: For schema-based validation
 * - react-hook-form-chakra: Pre-built Chakra UI form controls
 *
 * Usage:
 * - Use FormWrapper to wrap your form and provide validation schema
 * - Use individual field components for consistent styling
 * - Use FormDebugger to see form state during development
 */
import * as Yup from 'yup'
import { PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  ButtonGroup,
  Heading,
  InputLeftElement,
  Radio,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, UseFormReturn, useForm, useWatch } from 'react-hook-form'
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PinInputControl,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from 'react-hook-form-chakra'

import { ReactNode } from 'react'

// ============================
// TYPE DEFINITIONS
// ============================

/**
 * Interface for form data structure
 * Extend this interface when adding new fields to your forms
 */
interface FormData {
  firstName: string
  lastName: string
  age: number
  phoneNumber: string
  confirmationPin: string
  website: string
  willingToRelocate: boolean
  favoriteColor: string
  preferredShift: string[]
  additionalNotes: string
  previousExperience: boolean
  callbackTime: string
  excitementScale: number
  password: string
}

/**
 * Props for FormWrapper component
 */
interface FormWrapperProps {
  children: ReactNode
  onSubmit: (data: FormData) => void
  validationSchema?: Yup.ObjectSchema<any>
  defaultValues?: Partial<FormData>
  title?: string
  showDebugger?: boolean
}

/**
 * Props for individual form field components
 */
interface FormFieldProps {
  name: string
  label?: string
  helperText?: string
  placeholder?: string
  isRequired?: boolean
}

// ============================
// DEFAULT VALUES & VALIDATION
// ============================

/**
 * Default form values
 * These values will be used when the form is initialized
 */
const defaultFormValues: FormData = {
  firstName: '',
  lastName: '',
  age: 0,
  phoneNumber: '',
  confirmationPin: '',
  website: '',
  willingToRelocate: true,
  favoriteColor: '',
  preferredShift: ['afternoons'], // Default selection
  additionalNotes: '',
  previousExperience: false,
  callbackTime: '',
  excitementScale: 5, // Default middle value for slider
  password: '',
}

/**
 * Yup validation schema
 * Define validation rules for each form field
 * You can customize this schema or create new ones for different forms
 */
const defaultValidationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(18, 'Applicant must be at least 18 years old')
    .typeError('Please enter a number'),
  phoneNumber: Yup.string(), // Optional field
  confirmationPin: Yup.string(), // Optional field
  website: Yup.string(), // Optional field
  willingToRelocate: Yup.boolean().equals(
    [true],
    'Applicant must be able to relocate',
  ),
  favoriteColor: Yup.string(), // Optional field
  preferredShift: Yup.array().min(2, 'Please select at least 2 shifts'),
  additionalNotes: Yup.string().required('Additional notes are required'),
  previousExperience: Yup.boolean(), // Optional field
  callbackTime: Yup.string().required('Please select a callback time'),
  excitementScale: Yup.number(), // Optional field
  password: Yup.string(), // Add custom validation as needed
})

// ============================
// REUSABLE FORM COMPONENTS
// ============================

/**
 * FormWrapper Component
 *
 * A reusable wrapper that provides form context and handles form submission
 *
 * @param children - Form fields and other form content
 * @param onSubmit - Function to handle form submission
 * @param validationSchema - Yup validation schema (optional)
 * @param defaultValues - Default form values (optional)
 * @param title - Form title (optional)
 * @param showDebugger - Whether to show form state debugger (optional, useful for development)
 */
export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  onSubmit,
  validationSchema = defaultValidationSchema,
  defaultValues = defaultFormValues,
  title,
  showDebugger = false,
}) => {
  // Initialize React Hook Form with validation and default values
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onBlur', // Validate on blur for better UX
  })

  // Watch form values for debugging purposes
  const values = useWatch({ control: methods.control })

  return (
    <FormProvider {...methods}>
      <VStack
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        align="start"
        spacing={5}
        w="100%"
      >
        {title && <Heading marginY={5}>{title}</Heading>}

        {children}

        {/* Form Action Buttons */}
        <ButtonGroup>
          <SubmitButton>Submit</SubmitButton>
          <ResetButton>Reset</ResetButton>
        </ButtonGroup>

        {/* Debug information (only show in development) */}
        {showDebugger && <FormDebugger values={values} methods={methods} />}
      </VStack>
    </FormProvider>
  )
}

/**
 * FormDebugger Component
 *
 * Displays form state information for debugging purposes
 * Only use this during development to inspect form values, errors, and touched fields
 */
interface FormDebuggerProps {
  values: any
  methods: UseFormReturn<any>
}

export const FormDebugger: React.FC<FormDebuggerProps> = ({
  values,
  methods,
}) => (
  <Stack marginY={10} direction="column" spacing={5} w="100%">
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Form Values:
      </Text>
      <Box
        as="pre"
        bg="gray.50"
        p={4}
        borderRadius="md"
        overflow="auto"
        fontSize="sm"
      >
        {JSON.stringify(values, null, 2)}
      </Box>
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Form Errors:
      </Text>
      <Box
        as="pre"
        bg="red.50"
        p={4}
        borderRadius="md"
        overflow="auto"
        fontSize="sm"
      >
        {JSON.stringify(methods.formState.errors, null, 2)}
      </Box>
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Touched Fields:
      </Text>
      <Box
        as="pre"
        bg="blue.50"
        p={4}
        borderRadius="md"
        overflow="auto"
        fontSize="sm"
      >
        {JSON.stringify(methods.formState.touchedFields, null, 2)}
      </Box>
    </Box>
  </Stack>
)

/**
 * PersonalInfoSection Component
 *
 * A reusable section for collecting basic personal information
 * Includes first name, last name, age, phone number, and website
 */
export const PersonalInfoSection: React.FC = () => (
  <>
    {/* Name fields - responsive layout */}
    <Stack width="100%" spacing={5} direction={{ base: 'column', lg: 'row' }}>
      <InputControl
        name="firstName"
        label="First Name"
        inputProps={{ placeholder: 'Enter your first name' }}
      />
      <InputControl
        name="lastName"
        label="Last Name"
        inputProps={{ placeholder: 'Enter your last name' }}
      />
    </Stack>

    {/* Contact information fields */}
    <Stack width="100%" spacing={5} direction={{ base: 'column', lg: 'row' }}>
      <InputControl
        name="phoneNumber"
        label="Phone Number"
        leftElement={
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
        }
        inputProps={{ placeholder: 'Enter your phone number' }}
      />
      <InputControl
        name="website"
        label="Website"
        leftAddon="https://"
        rightAddon=".com"
        inputProps={{ placeholder: 'yourwebsite' }}
      />
    </Stack>

    {/* Age field */}
    <NumberInputControl
      name="age"
      label="Age"
      numberInputProps={{
        min: 18,
        max: 100,
      }}
    />
  </>
)

/**
 * PreferencesSection Component
 *
 * A reusable section for collecting user preferences
 * Includes checkboxes, switches, radio buttons, and sliders
 */
export const PreferencesSection: React.FC = () => (
  <>
    {/* Boolean preferences */}
    <Stack
      width="100%"
      spacing={5}
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
    >
      <CheckboxSingleControl name="willingToRelocate">
        Willing to relocate?
      </CheckboxSingleControl>
      <SwitchControl name="previousExperience" label="Previous Experience?" />
    </Stack>

    {/* Multi-select checkboxes for shift preferences */}
    <CheckboxContainer
      name="preferredShift"
      label="Preferred Shift"
      helperText="Please select at least 2 shifts you would be interested in"
    >
      <CheckboxControl name="preferredShift" value="mornings">
        Mornings (8am to 12pm)
      </CheckboxControl>
      <CheckboxControl name="preferredShift" value="afternoons">
        Afternoons (12pm to 4pm)
      </CheckboxControl>
      <CheckboxControl name="preferredShift" value="evenings">
        Evenings (4pm to 8pm)
      </CheckboxControl>
      <CheckboxControl name="preferredShift" value="weekends">
        Weekends (Saturday/Sunday 8am to 12pm)
      </CheckboxControl>
    </CheckboxContainer>

    {/* Radio button group for single selection */}
    <RadioGroupControl name="favoriteColor" label="Favorite Color">
      <Radio value="#ff0000">Red</Radio>
      <Radio value="#00ff00">Green</Radio>
      <Radio value="#0000ff">Blue</Radio>
    </RadioGroupControl>

    {/* Slider for rating scale */}
    <SliderControl
      name="excitementScale"
      label="Excitement Scale"
      helperText="On a scale of 1 to 10, how excited are you?"
      sliderProps={{
        max: 10,
        min: 1,
        step: 1,
        colorScheme: 'blue',
      }}
    />
  </>
)

/**
 * SecuritySection Component
 *
 * A reusable section for collecting security-related information
 * Includes password and PIN inputs
 */
export const SecuritySection: React.FC = () => (
  <>
    <InputControl
      name="password"
      inputProps={{
        type: 'password',
        placeholder: 'Enter a secure password',
      }}
      label="Password"
    />
    <PinInputControl
      name="confirmationPin"
      label="Confirmation PIN"
      pinAmount={4}
      helperText="Enter a 4-digit confirmation PIN"
    />
  </>
)

/**
 * AdditionalInfoSection Component
 *
 * A reusable section for collecting additional information
 * Includes dropdown select and textarea
 */
export const AdditionalInfoSection: React.FC = () => (
  <>
    <SelectControl
      name="callbackTime"
      label="Preferred Callback Time"
      selectProps={{ placeholder: 'Select your preferred time' }}
    >
      <option value="morning">Morning (9am - 12pm)</option>
      <option value="afternoon">Afternoon (12pm - 5pm)</option>
      <option value="evening">Evening (5pm - 8pm)</option>
    </SelectControl>

    <TextareaControl
      name="additionalNotes"
      label="Additional Notes"
      helperText="Anything else you want us to know?"
      textareaProps={{
        placeholder: 'Share any additional information...',
        rows: 4,
      }}
    />
  </>
)

// ============================
// EXAMPLE USAGE COMPONENT
// ============================

/**
 * ExampleForm Component
 *
 * This is an example of how to use the reusable form components
 * You can use this as a reference for creating your own forms
 */
export const ExampleForm: React.FC = () => {
  // Handle form submission
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted with data:', data)
    // Here you would typically send the data to your API
    // Example: submitToAPI(data)
  }

  return (
    <FormWrapper
      onSubmit={handleSubmit}
      title="Complete Application Form"
      showDebugger={process.env.NODE_ENV === 'development'} // Only show in development
    >
      <PersonalInfoSection />
      <PreferencesSection />
      <SecuritySection />
      <AdditionalInfoSection />
    </FormWrapper>
  )
}

// ============================
// EXPORTS
// ============================

// Export the main component as default for backward compatibility
export default ExampleForm

// Export individual components and utilities for reuse
export {
  defaultFormValues,
  defaultValidationSchema,
  type FormData,
  type FormWrapperProps,
  type FormFieldProps,
}
