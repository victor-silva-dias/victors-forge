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
    color: ${theme.colors.text.secondary};
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

  /* Scrollbar customization */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.neutral};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: ${theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.action};
  }
`;

export const Container = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const Section = styled.section<{ background?: string }>`
  padding: ${theme.spacing.xxxl} 0;
  background-color: ${props => props.background || 'transparent'};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xxl} 0;
  }
`;

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
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
      : `repeat(auto-fit, minmax(${props.minColumnWidth || '300px'}, 1fr))`
  };
  gap: ${props => props.gap || theme.spacing.lg};
`;
