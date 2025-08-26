import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Flex } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.neutral} 100%);
  color: ${theme.colors.text.primary};
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const MainHeadline = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xxl};
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, ${theme.colors.action} 0%, #ff9500 100%);
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.lg} ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: ${theme.shadows.medium};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.strong};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: 1.1rem;
  }
`;

const IconContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  opacity: 0.1;
  z-index: 0;

  img {
    width: 200px;
    height: 200px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Home: React.FC = () => {
  const handleCTAClick = () => {
    // Navigate to cases section
    const casesElement = document.getElementById('cases');
    if (casesElement) {
      casesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection>
        <Container>
          <ContentWrapper>
            <HeroContent>
              <MainHeadline
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transformando Operações Críticas em Rotinas Confiáveis
              </MainHeadline>
              
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Produtos IA-first B2B que movem empresas do experimento para o resultado mensurável, 
                com governança e adoção real pelo time.
              </Subtitle>
              
              <CTAButton
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCTAClick}
              >
                Conheça meu trabalho
              </CTAButton>
            </HeroContent>
            
            <IconContainer
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 0.1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <img src={fogoIcon} alt="Decorative forge fire" />
            </IconContainer>
          </ContentWrapper>
        </Container>
      </HeroSection>
    </>
  );
};

export default Home;
