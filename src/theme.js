/**
 * THEME CONFIGURATION FILE
 * Change colors and fonts here to update the entire website
 */

const theme = {
  // Primary Colors - Official La Cabana Brand Colors
  colors: {
    primary: '#47706c',        // grün (Green) - PANTONE 2463 C
    secondary: '#eb5d40',      // rot (Red) - PANTONE 2027 C  
    gold: '#cda65a',           // gold (Gold) - PANTONE 871 C
    background: '#FFFFFF',     // White background
    darkBackground: '#3a5a56', // Darker green for footer/dark sections
    text: '#333333',           // Main text color
    textLight: '#666666',      // Light text
    textWhite: '#FFFFFF',      // White text
    accent: '#cda65a',         // Gold accent color
    border: '#E5E5E5',         // Border color
    hover: '#3a5a56',          // Hover state color (darker green)
    overlay: 'rgba(0, 0, 0, 0.5)', // Overlay for images
  },

  // Typography
  fonts: {
    primary: "'Playfair Display', Georgia, serif",  // Headings
    secondary: "'Lato', 'Helvetica Neue', Arial, sans-serif", // Body text
    accent: "'Montserrat', sans-serif", // Special text
  },

  // Font Sizes
  fontSizes: {
    xsmall: '0.75rem',    // 12px
    small: '0.875rem',    // 14px
    base: '1rem',         // 16px
    medium: '1.125rem',   // 18px
    large: '1.5rem',      // 24px
    xlarge: '2rem',       // 32px
    xxlarge: '3rem',      // 48px
    huge: '4rem',         // 64px
  },

  // Spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
    xxxl: '4rem',    // 64px
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  // Transitions
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },

  // Shadows
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

export default theme;

