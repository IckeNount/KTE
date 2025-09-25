import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  HStack,
  ResponsiveValue,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react'

import { ReactNode } from 'react'

/**
 * RESPONSIVE LAYOUT STYLE GUIDE
 * ================================
 *
 * This file provides standardized layout components and patterns for consistent
 * responsive design across all components in the components folder.
 *
 * BREAKPOINT SYSTEM (Chakra UI default):
 * - base: 0px (mobile)
 * - sm: 480px (small tablet)
 * - md: 768px (tablet)
 * - lg: 992px (desktop)
 * - xl: 1280px (large desktop)
 * - 2xl: 1536px (extra large desktop)
 *
 * CONTAINER WIDTHS:
 * - container.sm: 640px
 * - container.md: 768px
 * - container.lg: 1024px
 * - container.xl: 1280px
 * - container.2xl: 1536px
 */

// =============================================================================
// STANDARD SPACING SYSTEM
// =============================================================================

export const LAYOUT_SPACING = {
  // Component internal spacing
  xs: [2, null, 3] as ResponsiveValue<number>, // 8px mobile, 12px desktop
  sm: [3, null, 4] as ResponsiveValue<number>, // 12px mobile, 16px desktop
  md: [4, null, 6] as ResponsiveValue<number>, // 16px mobile, 24px desktop
  lg: [6, null, 8] as ResponsiveValue<number>, // 24px mobile, 32px desktop
  xl: [8, null, 12] as ResponsiveValue<number>, // 32px mobile, 48px desktop

  // Section spacing
  section: [12, null, 20] as ResponsiveValue<number>, // 48px mobile, 80px desktop
  sectionLarge: [16, null, 28] as ResponsiveValue<number>, // 64px mobile, 112px desktop

  // Container padding
  container: [4, null, 8] as ResponsiveValue<number>, // 16px mobile, 32px desktop
  containerLarge: [6, null, 12] as ResponsiveValue<number>, // 24px mobile, 48px desktop
} as const

// =============================================================================
// STANDARD CONTAINER WIDTHS
// =============================================================================

export const CONTAINER_WIDTHS = {
  content: 'container.lg', // 1024px - Standard content width
  contentWide: 'container.xl', // 1280px - Wide content sections
  contentMax: 'container.2xl', // 1536px - Maximum width sections
  narrow: 'container.md', // 768px - Narrow content (forms, text)
} as const

// =============================================================================
// RESPONSIVE GRID PATTERNS
// =============================================================================

export const GRID_PATTERNS = {
  // Feature grids
  features: [1, 2, 3] as ResponsiveValue<number>, // 1 mobile, 2 tablet, 3 desktop
  featuresLarge: [1, 2, 4] as ResponsiveValue<number>, // 1 mobile, 2 tablet, 4 desktop

  // Card grids
  cards: [1, null, 2] as ResponsiveValue<number>, // 1 mobile/tablet, 2 desktop
  cardsLarge: [1, 2, 3] as ResponsiveValue<number>, // 1 mobile, 2 tablet, 3 desktop

  // Testimonials
  testimonials: [1, 2, 3] as ResponsiveValue<number>, // 1 mobile, 2 tablet, 3 desktop

  // Content layouts
  twoColumn: [1, null, 2] as ResponsiveValue<number>, // 1 mobile/tablet, 2 desktop
  threeColumn: [1, 2, 3] as ResponsiveValue<number>, // 1 mobile, 2 tablet, 3 desktop

  // Sidebar layouts (Note: these use Grid template columns, not SimpleGrid)
  sidebar: [1, null, '1fr 300px'] as ResponsiveValue<number | string>, // Stack mobile, sidebar desktop
  sidebarReverse: [1, null, '300px 1fr'] as ResponsiveValue<number | string>, // Reverse sidebar
} as const

// =============================================================================
// BASE LAYOUT COMPONENTS
// =============================================================================

/**
 * ResponsiveContainer - Standard container for all sections
 *
 * Provides consistent max-width and padding across all screen sizes.
 * Wraps content with standardized container widths and responsive padding.
 *
 * @param width - Container width preset (content, contentWide, contentMax, narrow)
 * @param padding - Responsive padding preset from LAYOUT_SPACING
 * @param children - Content to be contained
 *
 * @example
 * ```tsx
 * <ResponsiveContainer width="contentWide" padding="containerLarge">
 *   <YourContent />
 * </ResponsiveContainer>
 * ```
 */
export interface ResponsiveContainerProps extends ContainerProps {
  width?: keyof typeof CONTAINER_WIDTHS
  padding?: keyof typeof LAYOUT_SPACING
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  width = 'content',
  padding = 'container',
  ...props
}) => {
  // Validation
  if (!CONTAINER_WIDTHS[width]) {
    console.warn(
      `ResponsiveContainer: Invalid width "${width}". Using default "content".`,
    )
    width = 'content'
  }

  if (!LAYOUT_SPACING[padding]) {
    console.warn(
      `ResponsiveContainer: Invalid padding "${padding}". Using default "container".`,
    )
    padding = 'container'
  }

  return (
    <Container
      maxW={CONTAINER_WIDTHS[width]}
      px={LAYOUT_SPACING[padding]}
      {...props}
    >
      {children}
    </Container>
  )
}

/**
 * ResponsiveSection - Standard section wrapper
 *
 * Provides consistent vertical spacing and container structure for page sections.
 * Combines responsive vertical padding with a responsive container.
 *
 * @param width - Container width preset
 * @param spacing - Vertical spacing preset (section, sectionLarge, etc.)
 * @param containerPadding - Horizontal padding preset
 * @param children - Section content
 *
 * @example
 * ```tsx
 * <ResponsiveSection spacing="sectionLarge" width="contentWide">
 *   <SectionContent />
 * </ResponsiveSection>
 * ```
 */
export interface ResponsiveSectionProps extends BoxProps {
  children: ReactNode
  width?: keyof typeof CONTAINER_WIDTHS
  spacing?: keyof typeof LAYOUT_SPACING
  containerPadding?: keyof typeof LAYOUT_SPACING
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  width = 'content',
  spacing = 'section',
  containerPadding = 'container',
  ...props
}) => {
  // Validation
  if (!LAYOUT_SPACING[spacing]) {
    console.warn(
      `ResponsiveSection: Invalid spacing "${spacing}". Using default "section".`,
    )
    spacing = 'section'
  }

  return (
    <Box py={LAYOUT_SPACING[spacing]} {...props}>
      <ResponsiveContainer width={width} padding={containerPadding}>
        {children}
      </ResponsiveContainer>
    </Box>
  )
}

// Type helper to filter out patterns with string values (for Grid vs SimpleGrid)
type NumericGridPatterns = {
  [K in keyof typeof GRID_PATTERNS]: (typeof GRID_PATTERNS)[K] extends ResponsiveValue<number>
    ? K
    : never
}[keyof typeof GRID_PATTERNS]

/**
 * ResponsiveGrid - Standardized grid component
 * Provides consistent responsive grid patterns
 */
export interface ResponsiveGridProps extends Omit<SimpleGridProps, 'columns'> {
  pattern?: NumericGridPatterns
  columns?: ResponsiveValue<number>
  spacing?: keyof typeof LAYOUT_SPACING
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  pattern,
  columns,
  spacing = 'lg',
  ...props
}) => {
  // Get the grid pattern, ensuring it's compatible with SimpleGrid (numbers only)
  const getColumns = (): ResponsiveValue<number> => {
    if (columns) return columns
    if (pattern && pattern in GRID_PATTERNS) {
      const patternValue = GRID_PATTERNS[pattern]
      // Only use the pattern if it's numeric (no string values like '1fr 300px')
      return patternValue as ResponsiveValue<number>
    }
    return [1, 2, 3] as ResponsiveValue<number>
  }

  return (
    <SimpleGrid
      columns={getColumns()}
      spacing={LAYOUT_SPACING[spacing]}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}

/**
 * ResponsiveStack - Standardized stack component
 * Provides consistent spacing and responsive direction changes
 */
export interface ResponsiveStackProps extends Omit<StackProps, 'direction'> {
  spacing?: keyof typeof LAYOUT_SPACING
  mobileStack?: boolean // Force stack on mobile even if direction is row
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

export const ResponsiveStack: React.FC<ResponsiveStackProps> = ({
  children,
  spacing = 'lg',
  direction = 'column',
  mobileStack = true,
  ...props
}) => {
  const stackDirection = mobileStack
    ? { base: 'column' as const, md: direction }
    : direction

  return (
    <Stack
      direction={stackDirection}
      spacing={LAYOUT_SPACING[spacing]}
      {...props}
    >
      {children}
    </Stack>
  )
}

/**
 * ResponsiveFlex - Standardized flex component
 * Provides consistent responsive flex patterns
 */
export interface ResponsiveFlexProps
  extends Omit<FlexProps, 'direction' | 'gap'> {
  gap?: keyof typeof LAYOUT_SPACING
  mobileStack?: boolean
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

export const ResponsiveFlex: React.FC<ResponsiveFlexProps> = ({
  children,
  gap = 'lg',
  direction = 'row',
  mobileStack = true,
  ...props
}) => {
  const flexDirection = mobileStack
    ? { base: 'column' as const, md: direction }
    : direction

  return (
    <Flex direction={flexDirection} gap={LAYOUT_SPACING[gap]} {...props}>
      {children}
    </Flex>
  )
}

/**
 * ResponsiveLayoutGrid - For complex layouts with template columns
 * Use this for sidebar layouts with string-based grid templates
 */
export interface ResponsiveLayoutGridProps
  extends Omit<GridProps, 'templateColumns'> {
  pattern?: 'sidebar' | 'sidebarReverse'
  templateColumns?: ResponsiveValue<string>
  spacing?: keyof typeof LAYOUT_SPACING
}

export const ResponsiveLayoutGrid: React.FC<ResponsiveLayoutGridProps> = ({
  children,
  pattern,
  templateColumns,
  spacing = 'lg',
  ...props
}) => {
  const getTemplateColumns = () => {
    if (templateColumns) return templateColumns
    if (pattern && (pattern === 'sidebar' || pattern === 'sidebarReverse')) {
      return GRID_PATTERNS[pattern] as ResponsiveValue<string>
    }
    return { base: '1fr', md: '1fr 1fr' } as ResponsiveValue<string>
  }

  return (
    <Grid
      templateColumns={getTemplateColumns()}
      gap={LAYOUT_SPACING[spacing]}
      {...props}
    >
      {children}
    </Grid>
  )
}

// =============================================================================
// SPECIALIZED LAYOUT PATTERNS
// =============================================================================

/**
 * HeroLayout - Standard hero section layout
 */
export interface HeroLayoutProps extends BoxProps {
  children: ReactNode
  backgroundComponent?: ReactNode
  containerWidth?: keyof typeof CONTAINER_WIDTHS
}

export const HeroLayout: React.FC<HeroLayoutProps> = ({
  children,
  backgroundComponent,
  containerWidth = 'contentWide',
  ...props
}) => (
  <Box position="relative" overflow="hidden" {...props}>
    {backgroundComponent}
    <ResponsiveContainer width={containerWidth} padding="container">
      <Box pt={{ base: 40, lg: 60 }} pb="40">
        {children}
      </Box>
    </ResponsiveContainer>
  </Box>
)

/**
 * ContentLayout - Standard content section layout
 * For features, testimonials, pricing, etc.
 */
export interface ContentLayoutProps
  extends Omit<ResponsiveSectionProps, 'title'> {
  title?: ReactNode
  description?: ReactNode
  aside?: ReactNode
  asidePosition?: 'left' | 'right'
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  title,
  description,
  aside,
  asidePosition = 'right',
  ...sectionProps
}) => (
  <ResponsiveSection {...sectionProps}>
    <ResponsiveStack spacing="xl" align="stretch">
      {/* Header */}
      {(title || description) && (
        <VStack spacing={LAYOUT_SPACING.md} align="center" textAlign="center">
          {title}
          {description}
        </VStack>
      )}

      {/* Content */}
      {aside ? (
        <ResponsiveFlex
          direction={asidePosition === 'left' ? 'row-reverse' : 'row'}
          align="flex-start"
          gap="xl"
        >
          <Box flex="1">{children}</Box>
          <Box flex="1" maxW={{ base: 'full', lg: '400px' }}>
            {aside}
          </Box>
        </ResponsiveFlex>
      ) : (
        children
      )}
    </ResponsiveStack>
  </ResponsiveSection>
)

/**
 * CardLayout - Standard card grid layout
 */
export interface CardLayoutProps extends ResponsiveSectionProps {
  gridPattern?: NumericGridPatterns
  cardSpacing?: keyof typeof LAYOUT_SPACING
}

export const CardLayout: React.FC<CardLayoutProps> = ({
  children,
  gridPattern = 'cards',
  cardSpacing = 'lg',
  ...sectionProps
}) => (
  <ResponsiveSection {...sectionProps}>
    <ResponsiveGrid pattern={gridPattern} spacing={cardSpacing}>
      {children}
    </ResponsiveGrid>
  </ResponsiveSection>
)

// =============================================================================
// UTILITY HOOKS AND HELPERS
// =============================================================================

/**
 * useResponsiveValue - Helper hook for responsive values
 * Usage: const columns = useResponsiveValue([1, 2, 3])
 */
export { useBreakpointValue as useResponsiveValue } from '@chakra-ui/react'

/**
 * Responsive utility classes for common patterns
 */
export const RESPONSIVE_UTILS = {
  // Hide/show patterns
  hideOnMobile: { base: 'none', md: 'block' },
  hideOnDesktop: { base: 'block', md: 'none' },
  showOnMobile: { base: 'block', md: 'none' },
  showOnDesktop: { base: 'none', md: 'block' },

  // Text alignment
  centerOnMobile: { base: 'center', md: 'left' },
  leftOnMobile: { base: 'left', md: 'center' },

  // Flex direction
  stackOnMobile: { base: 'column', md: 'row' },
  stackOnTablet: { base: 'column', lg: 'row' },

  // Common responsive sizes
  fullOnMobile: { base: 'full', md: 'auto' },
  autoOnMobile: { base: 'auto', md: 'full' },
} as const

// =============================================================================
// COMPONENT STYLE EXAMPLES
// =============================================================================

/**
 * USAGE EXAMPLES FOR COMPONENTS:
 *
 * 1. Hero Section:
 * ```tsx
 * <HeroLayout backgroundComponent={<BackgroundGradient />}>
 *   <ResponsiveStack align="flex-start" spacing="xl">
 *     <Heading size="2xl">{title}</Heading>
 *     <Text fontSize="xl">{description}</Text>
 *     <HStack>{buttons}</HStack>
 *   </ResponsiveStack>
 * </HeroLayout>
 * ```
 *
 * 2. Feature Section:
 * ```tsx
 * <ContentLayout
 *   title={<SectionTitle />}
 *   width="contentWide"
 *   spacing="sectionLarge"
 * >
 *   <ResponsiveGrid pattern="featuresLarge" spacing="lg">
 *     {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
 *   </ResponsiveGrid>
 * </ContentLayout>
 * ```
 *
 * 3. Two Column Layout with Sidebar:
 * ```tsx
 * <ContentLayout aside={<Sidebar />} asidePosition="left">
 *   <ResponsiveStack spacing="md" align="stretch">
 *     {content}
 *   </ResponsiveStack>
 * </ContentLayout>
 * ```
 *
 * 4. Complex Grid Layout (with template columns):
 * ```tsx
 * <ResponsiveSection>
 *   <ResponsiveLayoutGrid pattern="sidebar" spacing="lg">
 *     <Box>Main content</Box>
 *     <Box>Sidebar content</Box>
 *   </ResponsiveLayoutGrid>
 * </ResponsiveSection>
 * ```
 *
 * 4. Card Grid:
 * ```tsx
 * <CardLayout gridPattern="cardsLarge" cardSpacing="xl">
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </CardLayout>
 * ```
 */

export default {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveLayoutGrid,
  ResponsiveStack,
  ResponsiveFlex,
  HeroLayout,
  ContentLayout,
  CardLayout,
  LAYOUT_SPACING,
  CONTAINER_WIDTHS,
  GRID_PATTERNS,
  RESPONSIVE_UTILS,
}
