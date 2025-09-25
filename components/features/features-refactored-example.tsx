/**
 * Features Component - Refactored Example
 * =====================================
 *
 * This file demonstrates how to refactor existing components to use the new
 * responsive layout style guide. It serves as:
 *
 * 1. **Reference Implementation** - Shows proper usage of layout components
 * 2. **Migration Example** - Demonstrates before/after refactoring patterns
 * 3. **Best Practices Guide** - Illustrates TypeScript, validation, and performance optimizations
 * 4. **Feature Display Component** - Renders feature lists with flexible layouts
 *
 * Key improvements over the original:
 * - Uses ContentLayout for consistent section structure
 * - Leverages ResponsiveGrid with predefined patterns
 * - Implements standardized spacing system
 * - Adds proper TypeScript validation
 * - Includes error handling and performance optimizations
 *
 * @see components/features/features.tsx - Original implementation
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
type FeatureGridPatterns = Exclude<
  keyof typeof GRID_PATTERNS,
  'sidebar' | 'sidebarReverse'
>

// Default revealer component if no custom reveal animation is provided
const Revealer: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
}) => {
  return <>{children}</>
}

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant' | 'width'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: keyof typeof LAYOUT_SPACING
  aside?: React.ReactNode
  asidePosition?: 'left' | 'right'
  reveal?: React.FC<{ children: React.ReactNode; delay?: number }>
  iconSize?: SystemProps['boxSize']
  // Layout guide props
  gridPattern?: FeatureGridPatterns
  sectionSpacing?: keyof typeof LAYOUT_SPACING
  containerWidth?: 'content' | 'contentWide' | 'contentMax' | 'narrow'
}

export interface FeatureProps {
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
 * Feature Component - Individual feature item
 *
 * Displays a single feature with icon, title, and description.
 * Uses ResponsiveStack for consistent mobile-first responsive behavior.
 *
 * @param props - Feature properties
 * @returns Feature component or null if no title provided
 */
export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
  } = props

  const styles = useMultiStyleConfig('Feature', { variant }) || {}

  // Determine icon position: use iconPosition prop, fallback to ip prop, default to 'top'
  const position = iconPosition || ip || 'top'
  const direction = position === 'left' ? 'row' : 'column'

  // Don't render if no title is provided
  if (!title) {
    console.warn('Feature component: No title provided')
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
 * Features Component - Refactored to use Layout Style Guide
 *
 * A flexible, responsive component for displaying feature lists with icons, titles, and descriptions.
 * This component demonstrates the proper usage of the new layout system for consistent responsive behavior.
 *
 * @features
 * - Consistent responsive behavior using ResponsiveGrid and ContentLayout
 * - Standardized spacing system with predefined values
 * - Flexible grid patterns (features, featuresLarge, etc.)
 * - Optional sidebar/aside support with left/right positioning
 * - Icon positioning options (left or top)
 * - Animation support via reveal prop
 * - Full TypeScript support with proper validation
 *
 * @example
 * ```tsx
 * <Features
 *   title="Our Features"
 *   description="What makes us different"
 *   features={[
 *     {
 *       id: 'feature-1',
 *       title: 'Fast',
 *       description: 'Lightning fast performance',
 *       icon: FiZap,
 *       iconPosition: 'left'
 *     }
 *   ]}
 *   gridPattern="featuresLarge"
 *   containerWidth="contentWide"
 * />
 * ```
 */
export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
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
  if (!features || !Array.isArray(features) || features.length === 0) {
    console.warn(
      'Features component: No features provided or features is empty',
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
        {features.map((feature, index) => {
          // Use feature.id if it exists and is truthy, otherwise fallback to index
          const key =
            feature.id != null && feature.id !== ''
              ? String(feature.id)
              : `feature-${index}`

          return (
            <Wrap key={key} delay={feature.delay}>
              <Feature iconSize={iconSize} {...feature} ip={ip} />
            </Wrap>
          )
        })}
      </ResponsiveGrid>
    </ContentLayout>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * // Basic usage (uses 'features' grid pattern)
 * <Features
 *   title="Our Features"
 *   description="Explore what makes us different"
 *   features={featureList}
 * />
 *
 * // Large feature grid
 * <Features
 *   title="Key Benefits"
 *   features={featureList}
 *   gridPattern="featuresLarge"
 *   containerWidth="contentWide"
 *   sectionSpacing="sectionLarge"
 * />
 *
 * // With sidebar
 * <Features
 *   title="Features"
 *   features={featureList}
 *   aside={<FeatureSidebar />}
 *   asidePosition="left"
 *   spacing="xl"
 * />
 *
 * // Custom columns (overrides pattern)
 * <Features
 *   title="Testimonials as Features"
 *   features={testimonialFeatures}
 *   columns={[1, 2, 4]}
 *   spacing="xl"
 * />
 */
