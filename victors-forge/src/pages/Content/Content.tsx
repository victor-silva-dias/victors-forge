import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Grid } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';

const ContentSection = styled(Section)`
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

const Title = styled(motion.h2)`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.heroSubtitle};
  }
`;

const ContentCard = styled(motion.div)`
  background: ${theme.colors.backgroundPure};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  transition: ${theme.transitions.normal};
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
    border-color: ${theme.colors.neutral};
    box-shadow: ${theme.shadows.medium};
  }

  .icon {
    width: 28px;
    height: 28px;
    margin-bottom: ${theme.spacing.md};
    opacity: 0.6;
    filter: grayscale(100%);
  }

  h3 {
    font-size: ${theme.fluid.heroSubtitle};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
    letter-spacing: -0.01em;
  }

  .type {
    font-size: ${theme.fluid.body};
    color: ${theme.colors.primary};
    font-weight: 600;
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: ${theme.fluid.body};
    line-height: 1.6;
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.md};
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.fluid.body};
    color: ${theme.colors.text.secondary};
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    border-top: 1px solid ${theme.colors.border};

    .status {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      background: ${theme.colors.backgroundSecondary};
      border: 1px solid ${theme.colors.border};
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.primary};
      font-weight: 500;
      font-size: 0.85rem;
    }
  }
`;

const PlaceholderCard = styled(motion.div)`
  background: ${theme.colors.backgroundSecondary};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px dashed ${theme.colors.border};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  position: relative;
  z-index: 1;
  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.neutral};
    background: ${theme.colors.backgroundPure};
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: ${theme.spacing.lg};
    opacity: 0.4;
    filter: grayscale(100%);
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
    line-height: 1.6;
    color: ${theme.colors.text.secondary};
    max-width: 300px;
  }
`;

const Content: React.FC = () => {
  const upcomingContent = [
    {
      title: "IA B2B: Do Hype à Implementação Real",
      type: "Artigo",
      description: "Análise prática sobre como empresas podem sair do ciclo de POCs eternos e implementar IA que gera valor real para o negócio.",
      status: "Em produção",
      estimatedDate: "Janeiro 2025"
    },
    {
      title: "Governança de IA em Ambientes Regulados",
      type: "Guia Técnico",
      description: "Framework completo para implementar sistemas de IA auditáveis e compliance-ready em setores altamente regulados como legal e financeiro.",
      status: "Em planejamento",
      estimatedDate: "Fevereiro 2025"
    },
    {
      title: "Orquestração de Agentes: Cases Reais",
      type: "Vídeo + Código",
      description: "Demonstração prática de como construir e orquestrar agentes de IA para resolver problemas complexos de operações B2B.",
      status: "Em planejamento",
      estimatedDate: "Março 2025"
    }
  ];

  return (
    <ContentSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conteúdos & Insights
        </Title>

        <Grid columns={2} minColumnWidth="350px" gap={theme.spacing.xl}>
          {upcomingContent.map((item, index) => (
            <ContentCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            >
              <img src={fogoIcon} alt="Content icon" className="icon" />
              <div className="type">{item.type}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="meta">
                <span>Previsão: {item.estimatedDate}</span>
                <span className="status">{item.status}</span>
              </div>
            </ContentCard>
          ))}

          <PlaceholderCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={fogoIcon} alt="Coming soon icon" className="icon" />
            <h3>Mais Conteúdos em Breve</h3>
            <p>
              Este espaço será constantemente atualizado com artigos, guias práticos, 
              vídeos e experimentos sobre IA B2B e transformação digital.
            </p>
          </PlaceholderCard>

          <ContentCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img src={fogoIcon} alt="Newsletter icon" className="icon" />
            <div className="type">Newsletter</div>
            <h3>Victor's Forge Weekly</h3>
            <p>
              Insights semanais sobre IA B2B, casos de uso reais, ferramentas emergentes 
              e tendências do mercado enterprise. Para quem quer se manter na vanguarda.
            </p>
            <div className="meta">
              <span>Lançamento: Janeiro 2025</span>
              <span className="status">Em desenvolvimento</span>
            </div>
          </ContentCard>
        </Grid>
      </Container>
    </ContentSection>
  );
};

export default Content;
