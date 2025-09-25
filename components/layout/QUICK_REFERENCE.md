# 🚀 Layout Guide Quick Reference

## Import Statement

```tsx
import {
  CONTAINER_WIDTHS,
  CardLayout,
  ContentLayout,
  GRID_PATTERNS,
  HeroLayout,
  LAYOUT_SPACING,
  RESPONSIVE_UTILS,
  ResponsiveContainer,
  ResponsiveFlex,
  ResponsiveGrid,
  ResponsiveSection,
  ResponsiveStack,
} from '#components/layout'
```

## ⚡ Quick Patterns

### Standard Section

```tsx
<ResponsiveSection width="content" spacing="section">
  <YourContent />
</ResponsiveSection>
```

### Feature Grid

```tsx
<ResponsiveGrid pattern="features" spacing="lg">
  {items.map((item) => (
    <Item key={item.id} {...item} />
  ))}
</ResponsiveGrid>
```

### Mobile-First Stack

```tsx
<ResponsiveStack direction="row" spacing="lg" mobileStack>
  <Box flex="1">Left</Box>
  <Box flex="1">Right</Box>
</ResponsiveStack>
```

### Hero Section

```tsx
<HeroLayout backgroundComponent={<Background />}>
  <ResponsiveStack align="flex-start" spacing="xl">
    <Heading>{title}</Heading>
    <Text>{description}</Text>
    <ButtonGroup>{actions}</ButtonGroup>
  </ResponsiveStack>
</HeroLayout>
```

### Content + Sidebar

```tsx
<ContentLayout
  title={<SectionTitle />}
  aside={<Sidebar />}
  asidePosition="right"
>
  <MainContent />
</ContentLayout>
```

## 📏 Spacing Values

| Size           | Mobile | Desktop | Use Case          |
| -------------- | ------ | ------- | ----------------- |
| `xs`           | 8px    | 12px    | Tight spacing     |
| `sm`           | 12px   | 16px    | Small gaps        |
| `md`           | 16px   | 24px    | Standard spacing  |
| `lg`           | 24px   | 32px    | Component spacing |
| `xl`           | 32px   | 48px    | Large spacing     |
| `section`      | 48px   | 80px    | Section gaps      |
| `sectionLarge` | 64px   | 112px   | Large sections    |

## 📐 Container Widths

| Width         | Max Width | Use Case            |
| ------------- | --------- | ------------------- |
| `narrow`      | 768px     | Forms, text content |
| `content`     | 1024px    | Standard sections   |
| `contentWide` | 1280px    | Wide sections       |
| `contentMax`  | 1536px    | Full width          |

## 🎯 Grid Patterns

| Pattern         | Columns      | Best For            |
| --------------- | ------------ | ------------------- |
| `features`      | [1, 2, 3]    | Feature lists       |
| `featuresLarge` | [1, 2, 4]    | Large feature grids |
| `cards`         | [1, null, 2] | Card layouts        |
| `cardsLarge`    | [1, 2, 3]    | Large card grids    |
| `testimonials`  | [1, 2, 3]    | Testimonials        |
| `twoColumn`     | [1, null, 2] | Two columns         |
| `threeColumn`   | [1, 2, 3]    | Three columns       |

## 🛠️ Utility Classes

```tsx
// Visibility
display={RESPONSIVE_UTILS.hideOnMobile}
display={RESPONSIVE_UTILS.showOnDesktop}

// Alignment
textAlign={RESPONSIVE_UTILS.centerOnMobile}

// Direction
flexDirection={RESPONSIVE_UTILS.stackOnMobile}

// Sizing
width={RESPONSIVE_UTILS.fullOnMobile}
```

## 📱 Breakpoints

- `base`: 0px (mobile)
- `sm`: 480px (large phone)
- `md`: 768px (tablet)
- `lg`: 992px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

## ✅ Common Use Cases

### Replace This ❌

```tsx
<Box py={[8, null, 16]} px={[4, null, 8]}>
  <Container maxW="1200px">
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {items}
    </SimpleGrid>
  </Container>
</Box>
```

### With This ✅

```tsx
<ResponsiveSection width="content" spacing="section">
  <ResponsiveGrid pattern="features" spacing="lg">
    {items}
  </ResponsiveGrid>
</ResponsiveSection>
```

## 🔧 Migration Checklist

- [ ] Replace custom containers with `ResponsiveSection`
- [ ] Use `ResponsiveGrid` with predefined patterns
- [ ] Replace hardcoded spacing with `LAYOUT_SPACING`
- [ ] Use `ResponsiveStack` for mobile-first layouts
- [ ] Apply specialized layouts (`HeroLayout`, `ContentLayout`)
- [ ] Test across all breakpoints
- [ ] Update TypeScript types if needed
