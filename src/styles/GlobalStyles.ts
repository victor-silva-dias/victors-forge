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

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    color: ${theme.colors.text.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${theme.transitions.fast};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Utility for text colors */
  .text-accent {
    color: ${theme.colors.accent};
  }
  .text-action {
    color: ${theme.colors.action};
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
  centered?: boolean;
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
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centered ? 'center' : 'flex-start'};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${props => props.variant === 'minimal' ? `${theme.spacing.lg} 0` : `${theme.spacing.xl} 0`};
  }
`;

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
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
}>`
  display: grid;
  grid-template-columns: ${props => 
    props.columns 
      ? `repeat(${props.columns}, 1fr)` 
      : `repeat(auto-fit, minmax(${props.minColumnWidth || '280px'}, 1fr))`
  };
  gap: ${props => props.gap || theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: ${props => props.columns && props.columns > 2 ? 'repeat(2, 1fr)' : '1fr'};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
