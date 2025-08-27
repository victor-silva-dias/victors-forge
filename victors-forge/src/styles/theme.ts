export const theme = {
  colors: {
    primary: '#4A6E48',      // Verde Forja - usado com parcimônia
    accent: '#D4A017',       // Dourado - detalhes refinados
    action: '#FF7A00',       // Laranja Fogo - chamadas de ação
    neutral: '#2F3E46',      // Cinza escuro sofisticado
    neutralLight: '#8B9A9B', // Cinza médio para textos secundários
    neutralDark: '#1A252F',  // Cinza muito escuro para contraste máximo
    background: '#FAFCFA',   // Quase branco com sutileza do verde
    backgroundSecondary: '#F5F7F5', // Segundo plano sutil
    backgroundDark: '#2F3E46', // Fundo escuro para seções de contraste
    backgroundPure: '#FFFFFF', // Branco absoluto quando necessário
    border: '#E8ECE8',       // Bordas sutis
    text: {
      primary: '#2F3E46',    // Texto principal - alto contraste
      secondary: '#8B9A9B',  // Texto secundário - tom médio
      tertiary: '#B5C1B6',   // Texto terciário - tom claro
      light: '#FFFFFF',      // Texto em fundos escuros
      accent: '#D4A017',     // Dourado para destaques pontuais
      action: '#FF7A00',     // Laranja para ações importantes
      success: '#4A6E48'     // Verde para estados de sucesso
    }
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"IBM Plex Sans", sans-serif'
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '2.5rem',    // 40px - reduzido para minimalismo
    xxxl: '3rem'      // 48px - reduzido para maior limpeza visual
  },
  fluid: {
    // Tipografia fluida mais refinada
    heroTitle: 'clamp(2rem, 4vw, 3.5rem)',
    heroSubtitle: 'clamp(1.1rem, 2vw, 1.4rem)',
    sectionTitle: 'clamp(1.5rem, 3vw, 2.5rem)',
    button: 'clamp(0.9rem, 1.2vw, 1.1rem)',
    body: 'clamp(0.9rem, 1vw, 1rem)'
  },
  borderRadius: {
    sm: '3px',
    md: '6px',
    lg: '12px',
    xl: '16px',
    full: '50%'
  },
  shadows: {
    // Sombras muito sutis para elegância
    subtle: '0 1px 2px rgba(47, 62, 70, 0.04)',
    soft: '0 1px 4px rgba(47, 62, 70, 0.08)',
    medium: '0 2px 8px rgba(47, 62, 70, 0.10)',
    strong: '0 4px 16px rgba(47, 62, 70, 0.12)',
    // Sombra especial para elevação importante
    elevated: '0 8px 24px rgba(47, 62, 70, 0.15)'
  },
  transitions: {
    // Transições suaves para interações
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
    ultrawide: '1440px'
  }
} as const;

export type Theme = typeof theme;
