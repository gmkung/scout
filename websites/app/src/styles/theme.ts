export const theme = {
  colors: {
    // Background colors
    background: {
      primary: '#0a0a0f',
      secondary: '#1a1625',
      tertiary: '#1e1b2e',
      elevated: '#2d2745',
      surface: 'rgba(30, 27, 46, 0.8)',
      overlay: 'rgba(0, 0, 0, 0.85)',
    },
    
    // Purple accent colors (primary brand)
    purple: {
      50: '#f3f4f6',
      100: '#e4e5f1',
      200: '#cacde8',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#6366f1',
      700: '#7c3aed',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    
    // Text colors
    text: {
      primary: '#e8e9f0',
      secondary: '#b8bcc8',
      muted: '#6b7280',
      inverse: '#ffffff',
      accent: '#8b5cf6',
    },
    
    // UI state colors
    state: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    
    // Border colors
    border: {
      primary: 'rgba(139, 92, 246, 0.3)',
      secondary: 'rgba(139, 92, 246, 0.2)',
      muted: 'rgba(107, 114, 128, 0.2)',
    },
    
    // Gradient definitions
    gradients: {
      primary: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      secondary: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      background: 'linear-gradient(135deg, #1a1625 0%, #1e1b2e 100%)',
      text: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
    },
  },
  
  // Typography system
  typography: {
    fontFamily: {
      primary: '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
      display: '"Orbitron", "Inter", sans-serif',
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  
  // Spacing system (using 4px base unit)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },
  
  // Shadow system
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    
    // Colored shadows for interactive elements
    purple: {
      sm: '0 2px 8px rgba(139, 92, 246, 0.2)',
      md: '0 4px 12px rgba(139, 92, 246, 0.3)',
      lg: '0 8px 24px rgba(139, 92, 246, 0.4)',
      xl: '0 16px 32px rgba(139, 92, 246, 0.5)',
    },
  },
  
  // Border radius system
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Animation durations
  animation: {
    fast: '0.15s',
    base: '0.2s',
    slow: '0.3s',
    slower: '0.5s',
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
}