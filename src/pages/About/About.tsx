import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section } from '../../styles/GlobalStyles';
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.xxxl};
  align-items: start;
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
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 120px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.subtle};
    filter: grayscale(20%);
    transition: ${theme.transitions.normal};
    margin-bottom: ${theme.spacing.lg};
  }

  &:hover img {
    filter: grayscale(0%);
    box-shadow: ${theme.shadows.medium};
  }
`;

const Name = styled.h2`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  letter-spacing: -0.02em;
`;

const Role = styled.p`
  font-size: ${theme.fluid.body};
  color: ${theme.colors.primary};
  font-weight: 500;
  text-align: center;
  max-width: 200px;
  line-height: 1.4;
`;

const TextContent = styled.div``;

const SectionTitle = styled(motion.h3)`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: ${theme.colors.accent};
    border-radius: ${theme.borderRadius.full};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Mission = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: ${theme.spacing.xxxl};
  color: ${theme.colors.text.secondary};
  max-width: 600px;

  strong {
    color: ${theme.colors.text.primary};
    font-weight: 600;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const CompetenciesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.xxxl} 0;
`;

const CompetencyItem = styled(motion.li)`
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};

  img {
    width: 28px;
    height: 28px;
    opacity: 0.7;
  }
`;

const CompetencyContent = styled.div`
  h4 {
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

const WorkflowSection = styled(motion.div)`
  margin-bottom: ${theme.spacing.xxxl};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
`;

const WorkflowTitle = styled.h4`
  font-size: ${theme.fluid.body};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const WorkflowModes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ModeCard = styled.div`
  padding: ${theme.spacing.lg};
  background: ${theme.colors.backgroundPure};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};

  h5 {
    font-size: ${theme.fluid.body};
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    font-size: 0.9rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.5;
  }
`;

const CTASection = styled(motion.div)`
  text-align: center;
  padding: ${theme.spacing.xxl};
  background: ${theme.colors.backgroundPure};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const CTATitle = styled.h3`
  font-size: ${theme.fluid.heroSubtitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  letter-spacing: -0.01em;
`;

const CTASubtitle = styled.p`
  font-size: ${theme.fluid.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
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

const About: React.FC = () => {
  const competencies = [
    {
      icon: marteloIcon,
      title: "Product Context Engineering",
      description: "Metodologia que criei para vibe coding com rigor de produto. Contexto versionado no Git, estruturado em 6 camadas, consumível por agentes de IA."
    },
    {
      icon: bigornaIcon,
      title: "Apolus.ai",
      description: "Co-founder de legal tech resolvendo Shadow AI no mercado jurídico. ChatRJE, Escola RJE e Orion — metodologia + tecnologia + governança."
    },
    {
      icon: fogoIcon,
      title: "Vibe Coding",
      description: "Desenvolvimento rápido com IA, sem perder estratégia e governança. Planning Mode para explorar, Act Mode para implementar com contexto."
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
            <Name>Victor Dias</Name>
            <Role>Co-founder & PM de Produto, Negócio e Marketing</Role>
          </AvatarContainer>

          <TextContent>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Missão
            </SectionTitle>

            <Mission
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <strong>Forjo produtos, metodologias e negócios com IA</strong> — da exploração
              à entrega, com rigor e fantasia. Misturo visão de produto, execução de negócio
              e um toque de criatividade para transformar ideias em sistemas que funcionam.
            </Mission>

            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              O que faço
            </SectionTitle>

            <CompetenciesList>
              {competencies.map((comp, index) => (
                <CompetencyItem
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.15) }}
                >
                  <IconWrapper>
                    <img src={comp.icon} alt={comp.title} />
                  </IconWrapper>
                  <CompetencyContent>
                    <h4>{comp.title}</h4>
                    <p>{comp.description}</p>
                  </CompetencyContent>
                </CompetencyItem>
              ))}
            </CompetenciesList>

            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Como trabalho
            </SectionTitle>

            <WorkflowSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <WorkflowTitle>Planning Mode vs. Act Mode</WorkflowTitle>
              <WorkflowModes>
                <ModeCard>
                  <h5>Planning Mode</h5>
                  <p>Explorar, refinar visão, criar PRDs. Entender o problema antes de propor soluções.</p>
                </ModeCard>
                <ModeCard>
                  <h5>Act Mode</h5>
                  <p>Implementar com contexto já definido. Código alinhado com estratégia de produto.</p>
                </ModeCard>
              </WorkflowModes>
            </WorkflowSection>

            <CTASection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <CTATitle>Quer forjar algo junto?</CTATitle>
              <CTASubtitle>Se fizer sentido, seguimos a conversa.</CTASubtitle>
              <LinkedInButton
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conectar no LinkedIn
              </LinkedInButton>
            </CTASection>
          </TextContent>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
