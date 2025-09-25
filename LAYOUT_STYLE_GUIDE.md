# Responsive Layout Style Guide

## Overview

This style guide provides a comprehensive set of reusable components and patterns for building responsive layouts consistently across all components in the project. It standardizes spacing, container widths, grid patterns, and responsive behaviors.

## 🎯 Key Principles

1. **Mobile-First Design**: All components are designed mobile-first with progressive enhancement
2. **Consistent Spacing**: Standardized spacing system for visual harmony
3. **Flexible Grid System**: Pre-defined responsive grid patterns for common layouts
4. **Performance Optimized**: Minimal CSS-in-JS overhead with Chakra UI's optimization
5. **TypeScript Ready**: Full TypeScript support with proper type definitions

## 📱 Breakpoint System

We use Chakra UI's default breakpoint system:

- `base`: 0px (mobile phones)
- `sm`: 480px (large phones / small tablets)
- `md`: 768px (tablets)
- `lg`: 992px (small desktops)
- `xl`: 1280px (large desktops)
- `2xl`: 1536px (extra large desktops)

## 📏 Spacing System

### Component Spacing

```tsx
LAYOUT_SPACING = {
  xs: [2, null, 3], // 8px → 12px
  sm: [3, null, 4], // 12px → 16px
  md: [4, null, 6], // 16px → 24px
  lg: [6, null, 8], // 24px → 32px
  xl: [8, null, 12], // 32px → 48px
}
```

### Section Spacing

```tsx
section: [12, null, 20],        // 48px → 80px
sectionLarge: [16, null, 28],   // 64px → 112px
```

## 📐 Container Widths

```tsx
CONTAINER_WIDTHS = {
  content: 'container.lg', // 1024px - Standard content
  contentWide: 'container.xl', // 1280px - Wide sections
  contentMax: 'container.2xl', // 1536px - Maximum width
  narrow: 'container.md', // 768px - Forms, text content
}
```

## 🏗️ Core Components

### ResponsiveSection

The foundation component for all page sections.

```tsx
import { ResponsiveSection } from '#components/layout'

// Basic usage
<ResponsiveSection>
  <YourContent />
</ResponsiveSection>

// With custom spacing and width
<ResponsiveSection
  width="contentWide"
  spacing="sectionLarge"
  containerPadding="containerLarge"
>
  <YourContent />
</ResponsiveSection>
```

### ResponsiveGrid

Standardized responsive grid component.

```tsx
import { ResponsiveGrid } from '#components/layout'

// Using predefined patterns
<ResponsiveGrid pattern="featuresLarge" spacing="lg">
  {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
</ResponsiveGrid>

// Custom columns
<ResponsiveGrid columns={[1, 2, 4]} spacing="xl">
  {items.map(item => <ItemCard key={item.id} {...item} />)}
</ResponsiveGrid>
```

### ResponsiveStack

Responsive stack component with mobile-first stacking.

```tsx
import { ResponsiveStack } from '#components/layout'

// Stacks vertically on mobile, horizontally on desktop
;<ResponsiveStack direction="row" spacing="lg" mobileStack>
  <Box flex="1">Content 1</Box>
  <Box flex="1">Content 2</Box>
</ResponsiveStack>
```

## 🎨 Specialized Layouts

### HeroLayout

For hero sections with background elements.

```tsx
import { BackgroundGradient } from '#components/gradients'
import { HeroLayout } from '#components/layout'

;<HeroLayout
  backgroundComponent={<BackgroundGradient />}
  containerWidth="contentWide"
>
  <ResponsiveStack align="flex-start" spacing="xl">
    <Heading size="2xl">{title}</Heading>
    <Text fontSize="xl">{description}</Text>
    <ButtonGroup>{buttons}</ButtonGroup>
  </ResponsiveStack>
</HeroLayout>
```

### ContentLayout

For standard content sections with optional sidebar.

```tsx
import { ContentLayout } from '#components/layout'

// With sidebar
<ContentLayout
  title={<SectionTitle title="Features" />}
  aside={<FeatureSidebar />}
  asidePosition="right"
  width="contentWide"
>
  <FeatureGrid />
</ContentLayout>

// Without sidebar
<ContentLayout title={<SectionTitle />}>
  <FeatureGrid />
</ContentLayout>
```

### CardLayout

For card-based layouts with responsive grids.

```tsx
import { CardLayout } from '#components/layout'

;<CardLayout gridPattern="cardsLarge" cardSpacing="xl" spacing="sectionLarge">
  {testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} {...testimonial} />
  ))}
</CardLayout>
```

## 📋 Grid Patterns

Pre-defined responsive grid patterns for common use cases:

```tsx
GRID_PATTERNS = {
  features: [1, 2, 3], // Feature lists
  featuresLarge: [1, 2, 4], // Large feature grids
  cards: [1, null, 2], // Simple card layouts
  cardsLarge: [1, 2, 3], // Large card grids
  testimonials: [1, 2, 3], // Testimonial grids
  twoColumn: [1, null, 2], // Two column layouts
  threeColumn: [1, 2, 3], // Three column layouts
  sidebar: [1, null, '1fr 300px'], // Main + sidebar
}
```

## 🛠️ Utility Patterns

Common responsive patterns for quick use:

```tsx
import { RESPONSIVE_UTILS } from '#components/layout'

// Visibility
display={RESPONSIVE_UTILS.hideOnMobile}
display={RESPONSIVE_UTILS.showOnDesktop}

// Text alignment
textAlign={RESPONSIVE_UTILS.centerOnMobile}

// Flex direction
flexDirection={RESPONSIVE_UTILS.stackOnMobile}

// Sizes
width={RESPONSIVE_UTILS.fullOnMobile}
```

## 📝 Migration Examples

### Before (Inconsistent)

```tsx
// Old inconsistent approach
export const Features = ({ features }) => (
  <Box py={[8, null, 16]} px={[4, null, 8]}>
    <Container maxW="1200px">
      <SimpleGrid columns={[1, 2, 3]} spacing={[4, null, 8]}>
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)
```

### After (Using Style Guide)

```tsx
// New consistent approach
import { ContentLayout, ResponsiveGrid } from '#components/layout'

export const Features = ({ features, title, description }) => (
  <ContentLayout
    title={title && <SectionTitle title={title} description={description} />}
    width="content"
    spacing="section"
  >
    <ResponsiveGrid pattern="features" spacing="lg">
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </ResponsiveGrid>
  </ContentLayout>
)
```

## ✅ Best Practices

### Do's ✅

- Use the predefined layout components for consistency
- Choose appropriate container widths for your content type
- Use the standardized spacing system
- Test layouts across all breakpoints
- Leverage grid patterns for common layouts

### Don'ts ❌

- Don't create custom spacing values without adding them to the system
- Don't hardcode pixel values for responsive breakpoints
- Don't ignore mobile-first design principles
- Don't create one-off container widths
- Don't bypass the layout system for "quick fixes"

## 🚀 Component Integration

### Updating Existing Components

1. **Replace custom containers** with `ResponsiveSection` or `ResponsiveContainer`
2. **Replace custom grids** with `ResponsiveGrid` and predefined patterns
3. **Replace custom spacing** with values from `LAYOUT_SPACING`
4. **Use specialized layouts** like `HeroLayout` and `ContentLayout` where appropriate

### Example Component Refactor

```tsx
// Before
export const TestimonialSection = ({ testimonials }) => (
  <Box py={[12, null, 20]} px={[4, null, 8]}>
    <Container maxW="1280px">
      <VStack spacing={[8, null, 12]}>
        <SectionTitle />
        <SimpleGrid columns={[1, 2, 3]} spacing={[6, null, 8]}>
          {testimonials.map(t => <Testimonial key={t.id} {...t} />)}
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
)

// After
export const TestimonialSection = ({ testimonials, title, description }) => (
  <ContentLayout
    title={<SectionTitle title={title} description={description} />}
    width="contentWide"
    spacing="section"
  >
    <ResponsiveGrid pattern="testimonials" spacing="lg">
      {testimonials.map(t => <Testimonial key={t.id} {...t} />)}
    </ResponsiveGrid>
  </ContentLayout>
)
```

## 🎯 Performance Benefits

1. **Reduced Bundle Size**: Consistent use of Chakra UI's responsive props
2. **Better Caching**: Standardized CSS-in-JS reduces unique style combinations
3. **Improved Performance**: Less runtime CSS generation
4. **Enhanced DX**: Better TypeScript support and autocompletion

## 🔧 Customization

To extend the layout system, add new patterns to the respective constants:

```tsx
// Add new grid pattern
export const GRID_PATTERNS = {
  ...GRID_PATTERNS,
  customPattern: [1, 3, 6], // Your custom pattern
}

// Add new spacing value
export const LAYOUT_SPACING = {
  ...LAYOUT_SPACING,
  customSpacing: [10, null, 16], // Your custom spacing
}
```

## 📚 Related Documentation

- [Chakra UI Responsive Styles](https://chakra-ui.com/docs/styled-system/responsive-styles)
- [Container Component](https://chakra-ui.com/docs/components/container)
- [Grid Components](https://chakra-ui.com/docs/components/simple-grid)
- [Stack Components](https://chakra-ui.com/docs/components/stack)
