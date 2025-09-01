# Design System

## Brand Identity

### Mission
Crafting digital products that turn user experiences into epic stories.

### Values
- **Storytelling**: Every project is a narrative
- **Craftsmanship**: Attention to detail in every pixel
- **Innovation**: Pushing creative boundaries
- **Elegance**: Sophisticated simplicity

## Visual Language

### Design Principles

1. **Editorial Excellence**
   - Magazine-inspired layouts
   - Strong typographic hierarchy
   - Asymmetric compositions
   - White space as a design element

2. **Motion with Purpose**
   - Enhance storytelling, not distract
   - Smooth, natural transitions
   - Performance-conscious animations
   - Micro-interactions for delight

3. **Responsive by Design**
   - Mobile-first approach
   - Fluid typography and spacing
   - Adaptive layouts
   - Touch-friendly interactions

## Color System

### Base Palette
```css
:root {
  /* Primary */
  --color-primary: #544449;      /* Rich Black */
  
  /* Secondary */
  --color-secondary: #EEECED;    /* Warm White */
  
  /* Accent */
  --color-accent: #FFFF00;        /* Vibrant Yellow */
  
  /* Neutral */
  --color-gray-100: #EEECED;
  --color-gray-200: #DDDADB;
  --color-gray-300: #BBB4B6;
  --color-gray-400: #988F92;
  --color-gray-500: #76696D;
  --color-gray-600: #544449;
  --color-gray-900: #000000;
}
```

### Story-Specific Palettes
Each story can have its own accent color to create unique visual identities while maintaining brand consistency.

## Typography

### Font Stack
```css
:root {
  /* Display Font - Headlines */
  --font-display: 'Playfair Display', 'Georgia', serif;
  
  /* Body Font - Reading */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Mono Font - Details */
  --font-mono: 'JetBrains Mono', 'Courier', monospace;
}
```

### Type Scale
```css
/* Fluid Typography with clamp() */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3rem);
  --text-5xl: clamp(3rem, 2.2rem + 4vw, 4rem);
  --text-6xl: clamp(3.75rem, 2.5rem + 6.25vw, 5rem);
}
```

### Typography Styles

#### Headlines
- Font: Display font
- Weight: 400-700
- Letter-spacing: -0.02em
- Line-height: 1.1-1.2

#### Body Text
- Font: Body font
- Weight: 400-500
- Letter-spacing: 0
- Line-height: 1.6-1.8

#### Captions & Details
- Font: Body/Mono font
- Weight: 400-600
- Letter-spacing: 0.01em
- Line-height: 1.4-1.5

## Spacing System

### Base Unit
8px grid system for consistent spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

## Grid System

### Desktop Grid
- 12 columns
- 32px gutters
- Max-width: 1440px
- Margins: 64px

### Tablet Grid
- 8 columns
- 24px gutters
- Margins: 32px

### Mobile Grid
- 4 columns
- 16px gutters
- Margins: 16px

## Component Library

### Navigation
```
┌─────────────────────────────────┐
│  Logo    Home About Contact     │  Desktop
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  Logo                      ☰    │  Mobile
└─────────────────────────────────┘
```

### Story Card
```
┌─────────────────────────────┐
│                             │
│         [Image]             │
│                             │
├─────────────────────────────┤
│ Category                    │
│ Story Title                 │
│ Brief description...        │
│ Read Story →               │
└─────────────────────────────┘
```

### Story Hero
```
┌──────────────────────────────────────┐
│                                      │
│           [Full-width Image]         │
│                                      │
│     Story Title                      │
│     Tagline or description           │
│                                      │
└──────────────────────────────────────┘
```

## Animation System

### Timing Functions
```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Scale
```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

### Common Animations

#### Page Transitions
```javascript
const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
}
```

#### Hover Effects
```javascript
const hoverAnimation = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" }
}
```

#### Scroll Reveal
```javascript
const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
}
```

## Imagery Guidelines

### Photography Style
- High contrast, editorial quality
- Natural lighting preferred
- Consistent color grading
- Story-relevant content

### Image Treatment
- Aspect ratios: 16:9, 4:3, 1:1, 3:2
- Subtle overlays for text readability
- Lazy loading with blur-up effect
- WebP format with fallbacks

## Iconography

### Style Guidelines
- Line weight: 2px
- Size: 24px base
- Consistent corner radius: 2px
- Minimal, geometric designs

### Common Icons
- Menu: ☰
- Close: ✕
- Arrow: →
- External link: ↗
- Play: ▶
- Pause: ❚❚

## Accessibility

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Breakpoints

```css
:root {
  --screen-sm: 640px;   /* Mobile landscape */
  --screen-md: 768px;   /* Tablet portrait */
  --screen-lg: 1024px;  /* Tablet landscape */
  --screen-xl: 1280px;  /* Desktop */
  --screen-2xl: 1536px; /* Large desktop */
}
```

## Dark Mode Support

### Color Adjustments
```css
[data-theme="dark"] {
  --color-primary: #F5F5F0;
  --color-secondary: #0A0A0A;
  --color-background: #0A0A0A;
  --color-text: #F5F5F0;
  /* Additional dark mode colors */
}
```

## Component States

### Interactive States
1. **Default**: Base appearance
2. **Hover**: Subtle elevation/color change
3. **Active**: Pressed state
4. **Focus**: Keyboard navigation
5. **Disabled**: Reduced opacity (0.5)
6. **Loading**: Skeleton screens/spinners

## Best Practices

### Do's
- Use consistent spacing from the scale
- Maintain visual hierarchy
- Test on real devices
- Optimize images before use
- Use semantic HTML
- Follow accessibility guidelines

### Don'ts
- Mix spacing values outside the scale
- Use too many font variations
- Forget touch targets (min 44x44px)
- Overuse animations
- Ignore performance metrics
- Skip accessibility testing