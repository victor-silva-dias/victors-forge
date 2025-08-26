export const theme = {
  colors: {
    primary: '#4A6E48',      // Verde Forja
    accent: '#D4A017',       // Dourado
    action: '#FF7A00',       // Laranja Fogo
    neutral: '#3A3A3A',      // Cinza Ferro
    background: '#FFFFFF',   // Branco
    text: {
      primary: '#FFFFFF',    // Branco para contraste
      secondary: '#3A3A3A',  // Cinza para textos em fundos claros
      accent: '#D4A017',     // Dourado para destaques
      action: '#FF7A00'      // Laranja para ações
    }
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"IBM Plex Sans", sans-serif'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '50%'
  },
  shadows: {
    soft: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.15)',
    strong: '0 8px 32px rgba(0, 0, 0, 0.2)'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
} as const;

export type Theme = typeof theme;
