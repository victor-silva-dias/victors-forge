import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glow';
  className?: string;
  onClick?: () => void;
}

const CardContainer = styled(motion.div)<{ $variant?: 'default' | 'glow' }>`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.normal};

  /* Subtle inner glow for depth */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg, 
      transparent, 
      ${theme.colors.glass.border}, 
      transparent
    );
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.$variant === 'glow' ? theme.colors.accent : 'rgba(255,255,255,0.2)'};
    box-shadow: ${props => props.$variant === 'glow' ? theme.shadows.glow : theme.shadows.medium};
  }
`;

export const GlassCard = ({ children, variant = 'default', className, onClick }: GlassCardProps) => {
  return (
    <CardContainer
      $variant={variant}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </CardContainer>
  );
};
