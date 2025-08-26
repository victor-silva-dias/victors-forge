import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Grid } from '../../styles/GlobalStyles';
import fogoIcon from '../../assets/fogo.svg';

const ContentSection = styled(Section)`
  background-color: ${theme.colors.neutral};
  color: ${theme.colors.text.primary};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${theme.colors.accent};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid rgba(212, 160, 23, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.medium};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent} 0%, ${theme.colors.action} 100%);
  }

  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: ${theme.spacing.md};
    opacity: 0.8;
  }

  h3 {
    font-size: 1.4rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.sm};
  }

  .type {
    font-size: 0.9rem;
    color: ${theme.colors.action};
    font-weight: 500;
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: ${theme.spacing.md};
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    opacity: 0.7;
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .status {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      background: rgba(212, 160, 23, 0.2);
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.accent};
      font-weight: 500;
    }
  }
`;

const PlaceholderCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(74, 110, 72, 0.1) 0%, rgba(58, 58, 58, 0.1) 100%);
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  border: 2px dashed rgba(212, 160, 23, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;

  .icon {
    width: 48px;
    height: 48px;
    margin-bottom: ${theme.spacing.lg};
    opacity: 0.5;
  }

  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.8;
    max-width: 280px;
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
