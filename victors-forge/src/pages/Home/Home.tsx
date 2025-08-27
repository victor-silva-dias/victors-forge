import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Flex } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';

const HeroSection = styled(Section)`
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(74, 110, 72, 0.02) 0%, 
      rgba(47, 62, 70, 0.03) 50%,
      rgba(212, 160, 23, 0.02) 100%
    );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  max-width: 800px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
    max-width: 100%;
  }
`;

const MainHeadline = styled(motion.h1)`
  font-size: ${theme.fluid.heroTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.15;
  letter-spacing: -0.02em;
  
  span {
    color: ${theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.action});
      border-radius: ${theme.borderRadius.full};
      opacity: 0.3;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 400;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xxxl};
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fluid.button};
  font-weight: 500;
  box-shadow: ${theme.shadows.subtle};
  transition: ${theme.transitions.normal};
  border: none;
  cursor: pointer;
  letter-spacing: -0.01em;

  &:hover {
    background: ${theme.colors.neutralDark};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fluid.button};
  font-weight: 500;
  transition: ${theme.transitions.normal};
  cursor: pointer;
  letter-spacing: -0.01em;

  &:hover {
    background: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.text.primary};
    border-color: ${theme.colors.neutral};
  }
`;

const IconContainer = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 8%;
  opacity: 0.05;
  z-index: 0;

  img {
    width: 300px;
    height: 300px;
    filter: grayscale(100%);
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    right: 5%;
    img {
      width: 200px;
      height: 200px;
    }
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Transformando Operações Críticas em <span>Rotinas Confiáveis</span>
              </MainHeadline>
              
              <Subtitle
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Produtos IA-first B2B que movem empresas do experimento para o resultado mensurável, 
                com governança e adoção real pelo time.
              </Subtitle>
              
              <CTAContainer>
                <CTAButton
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCTAClick}
                >
                  Conheça meu trabalho
                </CTAButton>
                
                <SecondaryButton
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Saiba mais
                </SecondaryButton>
              </CTAContainer>
            </HeroContent>
            
            <IconContainer
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
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
