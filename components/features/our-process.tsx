/**
 * Our Process Component
 * =====================
 *
 * This component displays KTECCS agency's procedures and processes for helping
 * clients with teaching, working, and traveling abroad. It shows the step-by-step
 * approach and methodology that makes the agency unique.
 *
 * Key features:
 * - Displays agency processes in a clear, organized manner
 * - Uses responsive layout for optimal viewing on all devices
 * - Supports icons and descriptions for each process step
 * - Flexible grid patterns and spacing options
 * - Animation support for engaging user experience
 *
 * @see LAYOUT_STYLE_GUIDE.md - Complete documentation
 */
import {
  Box,
  Circle,
  Heading,
  Icon,
  ResponsiveValue,
  SystemProps,
  Text,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { SectionTitle, SectionTitleProps } from 'components/section'

import * as React from 'react'

import {
  ContentLayout,
  GRID_PATTERNS,
  LAYOUT_SPACING,
  ResponsiveGrid,
  ResponsiveStack,
} from '#components/layout'

// Type for grid patterns that work with SimpleGrid (numeric only)
type ProcessGridPatterns = Exclude<
  keyof typeof GRID_PATTERNS,
  'sidebar' | 'sidebarReverse'
>

// Default revealer component if no custom reveal animation is provided
const Revealer: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
}) => {
  return <>{children}</>
}

export interface OurProcessProps
  extends Omit<SectionTitleProps, 'title' | 'variant' | 'width'>,
    ThemingProps<'OurProcess'> {
  title?: React.ReactNode
  description?: React.ReactNode
  processes: Array<ProcessStepProps>
  columns?: ResponsiveValue<number>
  spacing?: keyof typeof LAYOUT_SPACING
  aside?: React.ReactNode
  asidePosition?: 'left' | 'right'
  reveal?: React.FC<{ children: React.ReactNode; delay?: number }>
  iconSize?: SystemProps['boxSize']
  // Layout guide props
  gridPattern?: ProcessGridPatterns
  sectionSpacing?: keyof typeof LAYOUT_SPACING
  containerWidth?: 'content' | 'contentWide' | 'contentMax' | 'narrow'
}

export interface ProcessStepProps {
  id?: string | number
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number
}

/**
 * Process Step Component - Individual process step item
 *
 * Displays a single process step with icon, title, and description.
 * Uses ResponsiveStack for consistent mobile-first responsive behavior.
 *
 * @param props - Process step properties
 * @returns Process step component or null if no title provided
 */
export const ProcessStep: React.FC<ProcessStepProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
  } = props

  const styles = useMultiStyleConfig('ProcessStep', { variant }) || {}

  // Determine icon position: use iconPosition prop, fallback to ip prop, default to 'top'
  const position = iconPosition || ip || 'top'
  const direction = position === 'left' ? 'row' : 'column'

  // Don't render if no title is provided
  if (!title) {
    console.warn('ProcessStep component: No title provided')
    return null
  }

  return (
    <ResponsiveStack
      sx={styles.container}
      direction={direction}
      spacing="sm"
      mobileStack={direction === 'row'}
      align={direction === 'row' ? 'flex-start' : 'center'}
    >
      {icon && (
        <Circle sx={styles.icon} flexShrink={0}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box flex={direction === 'row' ? 1 : 'none'}>
        <Heading sx={styles.title}>{title}</Heading>
        {description && <Text sx={styles.description}>{description}</Text>}
      </Box>
    </ResponsiveStack>
  )
}

/**
 * Our Process Component - Displays KTECCS Agency Procedures
 *
 * A flexible, responsive component for displaying the agency's step-by-step process
 * for helping clients with international opportunities. Shows the methodology and
 * approach that sets KTECCS apart.
 *
 * @example
 * ```tsx
 * <OurProcess
 *   title="How We Help You Succeed"
 *   description="Our proven process for international placements"
 *   processes={[
 *     {
 *       id: 'step-1',
 *       title: 'Initial Consultation',
 *       description: 'We start with understanding your goals and background',
 *       icon: FiUser,
 *       iconPosition: 'left'
 *     },
 *     // ... more steps
 *   ]}
 *   gridPattern="features"
 *   containerWidth="contentWide"
 * />
 * ```
 */
export const OurProcess: React.FC<OurProcessProps> = (props) => {
  const {
    title,
    description,
    processes,
    columns,
    spacing = 'lg',
    iconSize = 8,
    aside,
    asidePosition = 'right',
    reveal: Wrap = Revealer,
    // Layout guide props
    gridPattern = 'features',
    sectionSpacing = 'section',
    containerWidth = 'content',
    ...rest
  } = props

  // Validation
  if (!processes || !Array.isArray(processes) || processes.length === 0) {
    console.warn(
      'OurProcess component: No processes provided or processes is empty',
    )
    return null
  }

  const align = !!aside ? 'left' : 'center'
  const ip = align === 'left' ? 'left' : 'top'

  return (
    <ContentLayout
      title={
        (title || description) && (
          <Wrap>
            <SectionTitle
              title={title}
              description={description}
              align={align}
            />
          </Wrap>
        )
      }
      aside={aside}
      asidePosition={asidePosition}
      width={containerWidth}
      spacing={sectionSpacing}
      {...rest}
    >
      <ResponsiveGrid pattern={gridPattern} columns={columns} spacing={spacing}>
        {processes.map((process, index) => {
          // Use process.id if it exists and is truthy, otherwise fallback to index
          const key =
            process.id != null && process.id !== ''
              ? String(process.id)
              : `process-${index}`

          return (
            <Wrap key={key} delay={process.delay}>
              <ProcessStep iconSize={iconSize} {...process} ip={ip} />
            </Wrap>
          )
        })}
      </ResponsiveGrid>
    </ContentLayout>
  )
}

/**
 * USAGE EXAMPLES FOR KTECCS AGENCY:
 *
 * // Basic process overview
 * <OurProcess
 *   title="How We Work"
 *   description="Our step-by-step approach to your success"
 *   processes={agencyProcessSteps}
 * />
 *
 * // Detailed process with large grid
 * <OurProcess
 *   title="Your Journey With Us"
 *   processes={detailedProcessSteps}
 *   gridPattern="featuresLarge"
 *   containerWidth="contentWide"
 *   sectionSpacing="sectionLarge"
 * />
 *
 * // Process with sidebar information
 * <OurProcess
 *   title="Our Methodology"
 *   processes={methodologySteps}
 *   aside={<ProcessSidebar />}
 *   asidePosition="left"
 *   spacing="xl"
 * />
 */
