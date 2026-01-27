import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Container, Section } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';
import anaoPerfilIcon from '../../assets/anao-perfil.svg';
import bigornaIcon from '../../assets/bigorna.svg';

// Hero Section
const HeroSection = styled(Section)`
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

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
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
    max-width: 100%;
  }
`;

const WelcomeText = styled(motion.span)`
  display: block;
  font-size: ${theme.fluid.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const MainHeadline = styled(motion.h1)`
  font-size: ${theme.fluid.heroTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.15;
  letter-spacing: -0.02em;

  span {
    color: ${theme.colors.primary};
  }
`;

const Subheadline = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 400;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Tagline = styled(motion.p)`
  font-size: ${theme.fluid.body};
  font-weight: 500;
  color: ${theme.colors.accent};
  font-style: italic;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing.xl};
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

// Three Doors Section
const DoorsSection = styled(Section)`
  background: ${theme.colors.backgroundSecondary};
  padding: ${theme.spacing.xxxl} 0;
  position: relative;
`;

const DoorsTitle = styled(motion.h2)`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.heroSubtitle};
  }
`;

const DoorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const DoorCard = styled(motion(Link))`
  background: ${theme.colors.backgroundPure};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: ${theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }

  .icon {
    width: 64px;
    height: 64px;
    margin-bottom: ${theme.spacing.lg};
    opacity: 0.8;
    transition: ${theme.transitions.normal};
  }

  &:hover .icon {
    opacity: 1;
    transform: scale(1.05);
  }

  h3 {
    font-size: ${theme.fluid.heroSubtitle};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
    letter-spacing: -0.01em;
  }

  p {
    font-size: ${theme.fluid.body};
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.lg};
  }

  .cta {
    font-size: ${theme.fluid.body};
    font-weight: 500;
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};

    &::after {
      content: '→';
      transition: ${theme.transitions.fast};
    }
  }

  &:hover .cta::after {
    transform: translateX(4px);
  }
`;

// Footer CTA Section
const FooterSection = styled(Section)`
  background: ${theme.colors.background};
  padding: ${theme.spacing.xxxl} 0;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,
      rgba(74, 110, 72, 0.02) 0%,
      rgba(212, 160, 23, 0.02) 100%
    );
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterTagline = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.body};
  }
`;

const FooterCTA = styled(motion.p)`
  font-size: ${theme.fluid.body};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  font-weight: 500;
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

const Home: React.FC = () => {
  const doors = [
    {
      icon: anaoPerfilIcon,
      title: "Quem sou",
      description: "Co-founder, PM e a metodologia que criei",
      cta: "Conhecer",
      to: "/sobre"
    },
    {
      icon: bigornaIcon,
      title: "O que forjo",
      description: "Apolus, PCE e outras peças",
      cta: "Explorar",
      to: "/cases"
    },
    {
      icon: fogoIcon,
      title: "O que publico",
      description: "Ideias em construção no LinkedIn",
      cta: "Acompanhar",
      to: "/conteudos"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <WelcomeText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bem-vindo à
            </WelcomeText>

            <MainHeadline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>Victor's Forge</span>
            </MainHeadline>

            <Subheadline
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Forja de produtos, negócios e metodologias com IA.
              Aqui eu misturo produto, negócio e um toque de fantasia
              para transformar exploração em entrega.
            </Subheadline>

            <Tagline
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Forja, não fogos de artifício."
            </Tagline>
          </HeroContent>

          <IconContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img src={fogoIcon} alt="Decorative forge fire" />
          </IconContainer>
        </Container>
      </HeroSection>

      {/* Three Doors Section */}
      <DoorsSection>
        <Container>
          <DoorsTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Entre, conheça e acompanhe
          </DoorsTitle>

          <DoorsGrid>
            {doors.map((door, index) => (
              <DoorCard
                key={index}
                to={door.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={door.icon} alt={door.title} className="icon" />
                <h3>{door.title}</h3>
                <p>{door.description}</p>
                <span className="cta">{door.cta}</span>
              </DoorCard>
            ))}
          </DoorsGrid>
        </Container>
      </DoorsSection>

      {/* Footer CTA Section */}
      <FooterSection>
        <Container>
          <FooterContent>
            <FooterTagline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Laboratório com porta aberta — processos, aprendizados e limites.
            </FooterTagline>

            <FooterCTA
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Se fizer sentido, seguimos a conversa.
            </FooterCTA>

            <LinkedInButton
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Conectar no LinkedIn
            </LinkedInButton>
          </FooterContent>
        </Container>
      </FooterSection>
    </>
  );
};

export default Home;
