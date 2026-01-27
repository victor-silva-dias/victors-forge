import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const Container = styled.div<{ centered?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centered ? 'center' : 'flex-start'};
  text-align: ${props => props.centered ? 'center' : 'left'};
  margin-bottom: ${theme.spacing.xl};
`;

const Subtitle = styled(motion.span)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fluid.body};
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${theme.spacing.sm};
  display: block;
`;

const Title = styled(motion.h2)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fluid.sectionTitle};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${theme.colors.accent};
    margin-top: ${theme.spacing.sm};
  }
`;

export const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <Container centered={centered}>
      {subtitle && (
        <Subtitle
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </Subtitle>
      )}
      <Title
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </Title>
    </Container>
  );
};
