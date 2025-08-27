import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar customization - Minimalist approach */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.neutral};
    border-radius: ${theme.borderRadius.full};
    transition: ${theme.transitions.fast};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.neutralDark};
  }

  /* Enhanced focus styles for accessibility */
  *:focus {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Smooth transitions for interactive elements */
  button, a, input, textarea, select {
    transition: ${theme.transitions.normal};
  }
`;

export const Container = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.ultrawide}) {
    max-width: ${props => props.maxWidth || '1400px'};
    padding: 0 ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const Section = styled.section<{ 
  background?: string; 
  variant?: 'default' | 'minimal' | 'spacious';
}>`
  padding: ${props => {
    switch (props.variant) {
      case 'minimal':
        return `${theme.spacing.xl} 0`;
      case 'spacious':
        return `${theme.spacing.xxxl} 0`;
      default:
        return `${theme.spacing.xxl} 0`;
    }
  }};
  background-color: ${props => props.background || 'transparent'};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${props => {
      switch (props.variant) {
        case 'minimal':
          return `${theme.spacing.lg} 0`;
        case 'spacious':
          return `${theme.spacing.xxl} 0`;
        default:
          return `${theme.spacing.xl} 0`;
      }
    }};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${props => {
      switch (props.variant) {
        case 'minimal':
          return `${theme.spacing.md} 0`;
        case 'spacious':
          return `${theme.spacing.xl} 0`;
        default:
          return `${theme.spacing.lg} 0`;
      }
    }};
  }
`;

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  gap?: string;
  wrap?: boolean;
  fullHeight?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || theme.spacing.md};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  ${props => props.fullHeight && 'min-height: 100vh;'}
`;

export const Grid = styled.div<{
  columns?: number;
  gap?: string;
  minColumnWidth?: string;
  autoRows?: string;
}>`
  display: grid;
  grid-template-columns: ${props => 
    props.columns 
      ? `repeat(${props.columns}, 1fr)` 
      : `repeat(auto-fit, minmax(${props.minColumnWidth || '280px'}, 1fr))`
  };
  ${props => props.autoRows && `grid-auto-rows: ${props.autoRows};`}
  gap: ${props => props.gap || theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: ${props => 
      props.columns && props.columns > 2
        ? 'repeat(2, 1fr)'
        : props.columns 
        ? `repeat(${props.columns}, 1fr)` 
        : `repeat(auto-fit, minmax(${props.minColumnWidth || '250px'}, 1fr))`
    };
    gap: ${props => props.gap || theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${props => props.gap || theme.spacing.sm};
  }
`;

/* Card Component for minimalist design */
export const Card = styled.div<{
  variant?: 'default' | 'elevated' | 'minimal';
  padding?: string;
}>`
  background: ${theme.colors.backgroundPure};
  border-radius: ${theme.borderRadius.md};
  padding: ${props => props.padding || theme.spacing.lg};
  transition: ${theme.transitions.normal};
  border: 1px solid ${theme.colors.border};
  
  ${props => {
    switch (props.variant) {
      case 'elevated':
        return `
          box-shadow: ${theme.shadows.medium};
          &:hover {
            box-shadow: ${theme.shadows.strong};
            transform: translateY(-2px);
          }
        `;
      case 'minimal':
        return `
          border: none;
          background: transparent;
        `;
      default:
        return `
          box-shadow: ${theme.shadows.subtle};
          &:hover {
            box-shadow: ${theme.shadows.medium};
          }
        `;
    }
  }}
`;

/* Button Base for consistent styling */
export const ButtonBase = styled.button<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.normal};
  text-decoration: none;
  cursor: pointer;
  border: none;
  
  ${props => {
    switch (props.size) {
      case 'sm':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.fluid.body};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fluid.button};
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.fluid.body};
        `;
    }
  }}
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.text.light};
          &:hover:not(:disabled) {
            background: ${theme.colors.neutralDark};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.medium};
          }
        `;
      case 'secondary':
        return `
          background: ${theme.colors.accent};
          color: ${theme.colors.text.light};
          &:hover:not(:disabled) {
            background: ${theme.colors.action};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.medium};
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background: ${theme.colors.backgroundSecondary};
            border-color: ${theme.colors.neutral};
          }
        `;
      case 'minimal':
        return `
          background: transparent;
          color: ${theme.colors.text.secondary};
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          &:hover:not(:disabled) {
            color: ${theme.colors.text.primary};
          }
        `;
      default:
        return `
          background: ${theme.colors.backgroundPure};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background: ${theme.colors.backgroundSecondary};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.subtle};
          }
        `;
    }
  }}
  
  ${props => props.fullWidth && 'width: 100%;'}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;
