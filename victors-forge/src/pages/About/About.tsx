import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Flex } from '../../styles/GlobalStyles';
import anaoPerfilIcon from '../../assets/anao-perfil.svg';
import marteloIcon from '../../assets/martelo.svg';
import bigornaIcon from '../../assets/bigorna.svg';
import fogoIcon from '../../assets/fogo.svg';

const AboutSection = styled(Section)`
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.xxxl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.xxl};
  }
`;

const AvatarContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.subtle};
    filter: grayscale(20%);
    transition: ${theme.transitions.normal};
  }

  &:hover img {
    filter: grayscale(0%);
    box-shadow: ${theme.shadows.medium};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

const TextContent = styled.div``;

const Title = styled(motion.h2)`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.heroSubtitle};
  }
`;

const Mission = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xxl};
  color: ${theme.colors.text.secondary};
  max-width: 600px;

  strong {
    color: ${theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

const BulletsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.backgroundPure};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.neutral};
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};

  img {
    width: 24px;
    height: 24px;
    opacity: 0.7;
  }
`;

const BulletContent = styled.div`
  h3 {
    font-size: ${theme.fluid.body};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
    letter-spacing: -0.01em;
  }

  p {
    font-size: ${theme.fluid.body};
    line-height: 1.6;
    color: ${theme.colors.text.secondary};
  }
`;

const About: React.FC = () => {
  const bullets = [
    {
      icon: marteloIcon,
      title: "Transformação Operacional",
      description: "Converto fluxos manuais e quebrados em processos automatizados e confiáveis, eliminando retrabalho e aumentando a previsibilidade."
    },
    {
      icon: bigornaIcon,
      title: "Governança & Compliance",
      description: "Implemento sistemas auditáveis com rastreabilidade completa, especialmente importante em ambientes regulados que exigem explicabilidade."
    },
    {
      icon: fogoIcon,
      title: "Adoção Real",
      description: "Foco na construção de soluções que o time realmente usa no dia a dia, com treinamento e suporte para garantir o sucesso da implementação."
    }
  ];

  return (
    <AboutSection>
      <Container>
        <ContentWrapper>
          <AvatarContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={anaoPerfilIcon} alt="Victor Dias - Profile" />
          </AvatarContainer>

          <TextContent>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Victor Dias
            </Title>

            <Mission
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong>Product Manager</strong> especializado em criar produtos digitais IA-first B2B 
              que unem visão de negócio, experiência do usuário e o poder da IA para acelerar 
              resultados mensuráveis.
            </Mission>

            <BulletsList>
              {bullets.map((bullet, index) => (
                <BulletItem
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                >
                  <IconWrapper>
                    <img src={bullet.icon} alt={bullet.title} />
                  </IconWrapper>
                  <BulletContent>
                    <h3>{bullet.title}</h3>
                    <p>{bullet.description}</p>
                  </BulletContent>
                </BulletItem>
              ))}
            </BulletsList>
          </TextContent>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
