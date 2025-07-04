# Palantir Gotham Theme Guide

## Overview

This document outlines the comprehensive transformation of the Library of Justice theme to match Palantir Gotham's sophisticated, modern aesthetic. The new theme maintains purple as the primary hue while incorporating dark backgrounds, high contrast elements, and enterprise-grade styling.

## Design Principles

### 1. Dark-First Approach
- **Primary Background**: Deep space black (`#0a0a0f`)
- **Secondary Backgrounds**: Layered dark purples (`#1a1625`, `#1e1b2e`)
- **Surface Elements**: Semi-transparent dark surfaces for depth

### 2. Purple Accent System
- **Primary Purple**: `#8b5cf6` (violet-500)
- **Secondary Purple**: `#6366f1` (indigo-500)
- **Tertiary Purple**: `#a78bfa` (violet-400)
- **Gradient Accents**: Multi-stop gradients for interactive elements

### 3. Typography Hierarchy
- **Primary Font**: Inter (modern, highly readable)
- **Monospace Font**: JetBrains Mono (for code elements)
- **Display Font**: Orbitron (for special headings)

### 4. High Contrast Text
- **Primary Text**: `#e8e9f0` (near white)
- **Secondary Text**: `#b8bcc8` (muted gray)
- **Accent Text**: `#8b5cf6` (purple)

## Color Palette

### Background Colors
```css
--bg-primary: #0a0a0f;        /* Deep space black */
--bg-secondary: #1a1625;      /* Dark purple */
--bg-tertiary: #1e1b2e;       /* Medium purple */
--bg-elevated: #2d2745;       /* Elevated surfaces */
--bg-surface: rgba(30, 27, 46, 0.8);  /* Semi-transparent */
--bg-overlay: rgba(0, 0, 0, 0.85);    /* Modal overlays */
```

### Purple Scale
```css
--purple-50: #f3f4f6;
--purple-100: #e4e5f1;
--purple-200: #cacde8;
--purple-300: #c4b5fd;
--purple-400: #a78bfa;
--purple-500: #8b5cf6;  /* Primary brand */
--purple-600: #6366f1;
--purple-700: #7c3aed;
--purple-800: #5b21b6;
--purple-900: #4c1d95;
```

### Text Colors
```css
--text-primary: #e8e9f0;
--text-secondary: #b8bcc8;
--text-muted: #6b7280;
--text-inverse: #ffffff;
--text-accent: #8b5cf6;
```

## Component Styling

### Buttons
Three main button variants have been implemented:

#### Primary Button
- **Background**: Linear gradient (`#8b5cf6` to `#6366f1`)
- **Text**: White
- **Hover**: Elevated with enhanced shadow
- **Shadow**: Purple-tinted (`rgba(139, 92, 246, 0.3)`)

#### Secondary Button
- **Background**: Semi-transparent dark (`rgba(30, 27, 46, 0.8)`)
- **Border**: Purple accent (`rgba(139, 92, 246, 0.3)`)
- **Text**: Light purple (`#c4b5fd`)

#### Outline Button
- **Background**: Transparent
- **Border**: Solid purple (`#8b5cf6`)
- **Text**: Purple, transitions to white on hover

### Interactive Elements
- **Hover States**: Subtle elevation and enhanced shadows
- **Focus States**: Purple-tinted focus rings
- **Transitions**: Smooth 0.2s ease transitions
- **Active States**: Reduced elevation for tactile feedback

## Layout Enhancements

### Shadows and Depth
- **Small**: `0 2px 8px rgba(139, 92, 246, 0.2)`
- **Medium**: `0 4px 12px rgba(139, 92, 246, 0.3)`
- **Large**: `0 8px 24px rgba(139, 92, 246, 0.4)`
- **Extra Large**: `0 16px 32px rgba(139, 92, 246, 0.5)`

### Border Radius
- **Small**: 8px (buttons, inputs)
- **Medium**: 12px (cards, modals)
- **Large**: 16px (major containers)

### Spacing System
- Based on 4px grid system
- Responsive scaling using CSS functions
- Consistent vertical rhythm

## Typography

### Font Stack
```css
font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Weights
- **Light**: 300 (rarely used)
- **Normal**: 400 (body text)
- **Medium**: 500 (labels)
- **Semi-bold**: 600 (headings)
- **Bold**: 700 (emphasis)

### Scale
- **xs**: 12px
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 30px
- **4xl**: 36px
- **5xl**: 48px
- **6xl**: 60px

## Responsive Design

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Responsive Utilities
- Fluid typography scaling
- Flexible spacing system
- Adaptive component sizing

## Animation and Transitions

### Duration Scale
- **Fast**: 0.15s (micro-interactions)
- **Base**: 0.2s (standard transitions)
- **Slow**: 0.3s (complex animations)
- **Slower**: 0.5s (page transitions)

### Easing
- **Standard**: `ease` (default)
- **Smooth**: `ease-in-out` (refined transitions)
- **Snappy**: `ease-out` (button interactions)

## Implementation Files

### Global Styles
- `websites/homepage/src/styles/global-style.ts`
- `websites/app/src/styles/global-style.ts`

### Theme Tokens
- `websites/homepage/src/styles/theme.ts`
- `websites/app/src/styles/theme.ts`

### Component Styles
- `websites/homepage/src/components/Button.tsx`
- `websites/app/src/components/Button.tsx`

### HTML Updates
- `websites/homepage/src/index.html`
- `websites/app/src/index.html`

## Usage Guidelines

### Do's
- Use the defined color palette consistently
- Implement proper contrast ratios for accessibility
- Follow the spacing system for consistent layouts
- Use appropriate shadow levels for depth hierarchy
- Implement smooth transitions for interactive elements

### Don'ts
- Avoid pure black or white unless specifically needed
- Don't use colors outside the defined palette
- Avoid jarring animations or transitions
- Don't break the established typography hierarchy
- Avoid low-contrast color combinations

## Accessibility Considerations

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have sufficient contrast
- Focus indicators are clearly visible

### Motion
- Smooth transitions enhance usability
- No flashing or jarring animations
- Respects user preferences for reduced motion

## Future Enhancements

### Planned Additions
- Dark mode toggle (currently dark-first)
- Extended component library
- Animation library integration
- Theme customization system

### Considerations
- Performance optimization
- Bundle size management
- Cross-browser compatibility
- Mobile-first responsive design

## Development Notes

### Performance
- CSS-in-JS optimizations
- Reduced bundle size through tree-shaking
- Efficient re-renders with styled-components

### Maintenance
- Centralized theme tokens
- Consistent naming conventions
- Comprehensive documentation
- Version control for theme updates

## Conclusion

The Palantir Gotham theme transformation elevates the Library of Justice platform with a sophisticated, modern aesthetic that maintains functionality while enhancing visual appeal. The dark-first approach with purple accents creates a professional, enterprise-grade interface suitable for data-intensive applications.

The comprehensive design system ensures consistency across all components while providing flexibility for future enhancements. The careful balance of aesthetics and functionality creates an optimal user experience for legal professionals and data analysts.