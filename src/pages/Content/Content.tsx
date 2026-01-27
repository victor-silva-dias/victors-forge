import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Container, Section } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';

const ContentSection = styled(Section)`
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  padding: ${theme.spacing.xxxl} 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
      rgba(74, 110, 72, 0.01) 0%,
      rgba(47, 62, 70, 0.02) 50%,
      rgba(212, 160, 23, 0.01) 100%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const IconContainer = styled(motion.div)`
  margin-bottom: ${theme.spacing.xl};

  img {
    width: 80px;
    height: 80px;
    opacity: 0.6;
  }
`;

const Title = styled(motion.h2)`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.heroSubtitle};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xxxl};
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.body};
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background: ${theme.colors.backgroundPure};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  text-align: left;
  transition: ${theme.transitions.normal};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.neutral};
  }

  h3 {
    font-size: ${theme.fluid.heroSubtitle};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
    letter-spacing: -0.01em;
  }

  p {
    font-size: ${theme.fluid.body};
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.lg};
  }
`;

const LinkedInButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fluid.body};
  font-weight: 500;
  text-decoration: none;
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.shadows.subtle};

  &:hover {
    background: ${theme.colors.neutralDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const SecondaryCard = styled(motion.div)`
  background: ${theme.colors.backgroundSecondary};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  text-align: left;
  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.neutral};
  }

  h3 {
    font-size: ${theme.fluid.body};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    font-size: ${theme.fluid.body};
    color: ${theme.colors.text.secondary};
    line-height: 1.5;
    margin-bottom: ${theme.spacing.lg};
  }
`;

const InternalLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.primary};
  font-size: ${theme.fluid.body};
  font-weight: 500;
  text-decoration: none;
  transition: ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.neutralDark};
  }

  &::after {
    content: '→';
    transition: ${theme.transitions.fast};
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const ComingSoonBadge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${theme.colors.accent};
  color: ${theme.colors.text.primary};
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Content: React.FC = () => {
  return (
    <ContentSection>
      <Container>
        <ContentWrapper>
          <IconContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={fogoIcon} alt="Fogo - símbolo da forja" />
          </IconContainer>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Na forja agora
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ideias, frameworks e aprendizados em construção.
          </Subtitle>

          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Acompanhe no LinkedIn</h3>
              <p>
                Publico reflexões sobre produto, IA e negócios diretamente no LinkedIn.
                É lá que a conversa acontece — ideias em construção, aprendizados da Apolus,
                e experimentos com Product Context Engineering.
              </p>
              <LinkedInButton
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Seguir no LinkedIn
              </LinkedInButton>
            </Card>

            <SecondaryCard
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ComingSoonBadge>Em breve</ComingSoonBadge>
              <h3>Blog interno com conteúdo gerado via PCE</h3>
              <p>
                Estou construindo uma infraestrutura de blog onde o conteúdo é gerado
                usando Product Context Engineering — o próprio site como exemplo do método.
              </p>
              <InternalLink to="/cases">
                Ver como funciona o PCE
              </InternalLink>
            </SecondaryCard>
          </CardsGrid>
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default Content;
