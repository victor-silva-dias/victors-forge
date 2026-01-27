import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const glitchAnim = keyframes`
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
`;

const GlitchText = styled.span`
  position: relative;
  display: inline-block;
  color: ${theme.colors.text.primary};
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.background};
  }

  &::before {
    left: 2px;
    text-shadow: -1px 0 ${theme.colors.accent};
    clip: rect(24px, 550px, 90px, 0);
    animation: ${glitchAnim} 3s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: -1px 0 ${theme.colors.action};
    clip: rect(85px, 550px, 140px, 0);
    animation: ${glitchAnim} 2s infinite linear alternate-reverse;
  }
`;

export const HeroGlitch = ({ text }: { text: string }) => {
  return (
    <GlitchText data-text={text}>
      {text}
    </GlitchText>
  );
};
