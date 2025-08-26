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
  background-color: ${theme.colors.neutral};
  color: ${theme.colors.text.primary};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.xxxl};
  align-items: center;

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
    width: 300px;
    height: 300px;
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.strong};
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
  font-size: 2.5rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Mission = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xxl};
  opacity: 0.95;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.md};
  border-left: 4px solid ${theme.colors.accent};

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};

  img {
    width: 28px;
    height: 28px;
  }
`;

const BulletContent = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
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
