import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Grid } from '../../styles/GlobalStyles';

const CasesSection = styled(Section)`
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

const CaseCard = styled(motion.div)`
  background: ${theme.colors.backgroundPure};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  transition: ${theme.transitions.normal};
  position: relative;
  z-index: 1;

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

  .problem {
    margin-bottom: ${theme.spacing.lg};
    
    h4 {
      color: ${theme.colors.primary};
      font-size: ${theme.fluid.body};
      font-weight: 600;
      margin-bottom: ${theme.spacing.sm};
    }

    p {
      font-size: ${theme.fluid.body};
      line-height: 1.6;
      color: ${theme.colors.text.secondary};
    }
  }

  .solution {
    margin-bottom: ${theme.spacing.lg};
    
    h4 {
      color: ${theme.colors.primary};
      font-size: ${theme.fluid.body};
      font-weight: 600;
      margin-bottom: ${theme.spacing.sm};
    }

    p {
      font-size: ${theme.fluid.body};
      line-height: 1.6;
      color: ${theme.colors.text.secondary};
    }
  }

  .impact {
    h4 {
      color: ${theme.colors.primary};
      font-size: ${theme.fluid.body};
      font-weight: 600;
      margin-bottom: ${theme.spacing.sm};
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: ${theme.fluid.body};
        line-height: 1.6;
        color: ${theme.colors.text.secondary};
        margin-bottom: ${theme.spacing.xs};
        position: relative;
        padding-left: ${theme.spacing.lg};

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${theme.colors.accent};
          font-weight: bold;
        }
      }
    }
  }
`;

const ComingSoonCard = styled(motion.div)`
  background: ${theme.colors.backgroundSecondary};
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.sm};
  border: 1px dashed ${theme.colors.border};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
  z-index: 1;
  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.neutral};
    background: ${theme.colors.backgroundPure};
  }

  h3 {
    font-size: ${theme.fluid.heroSubtitle};
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.lg};
    letter-spacing: -0.01em;
  }

  p {
    font-size: ${theme.fluid.body};
    line-height: 1.6;
    color: ${theme.colors.text.secondary};
    max-width: 350px;
  }
`;

const Cases: React.FC = () => {
  const cases = [
    {
      title: "Automação de Compliance Legal",
      problem: "Escritório de advocacia processava manualmente centenas de documentos regulatórios, gerando retrabalho constante e risco de não conformidade.",
      solution: "Implementei sistema de IA para classificação automática de documentos, extração de dados estruturados e workflows de aprovação com auditoria completa.",
      impact: [
        "Redução de 70% no tempo de processamento",
        "Zero incidentes de compliance em 12 meses",
        "Rastreabilidade completa para auditorias",
        "ROI de 300% no primeiro ano"
      ]
    },
    {
      title: "Operações B2B Inteligentes",
      problem: "Empresa mid-market com processos manuais de triagem de leads e múltiplas fontes de dados desconectadas, causando perda de oportunidades.",
      solution: "Desenvolvi plataforma integrada com IA para scoring automático de leads, orquestração de agentes e dashboards executivos em tempo real.",
      impact: [
        "Aumento de 45% na conversão de leads",
        "Redução de 60% no ciclo de vendas",
        "Visibilidade completa do pipeline",
        "Integração de 8 sistemas legados"
      ]
    }
  ];

  return (
    <CasesSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cases & Portfólio
        </Title>

        <Grid columns={1} gap={theme.spacing.xxl}>
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            >
              <h3>{caseItem.title}</h3>
              
              <div className="problem">
                <h4>Problema</h4>
                <p>{caseItem.problem}</p>
              </div>

              <div className="solution">
                <h4>Solução</h4>
                <p>{caseItem.solution}</p>
              </div>

              <div className="impact">
                <h4>Impacto</h4>
                <ul>
                  {caseItem.impact.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                  ))}
                </ul>
              </div>
            </CaseCard>
          ))}

          <ComingSoonCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Mais Cases em Breve</h3>
            <p>
              Estou documentando projetos adicionais que demonstram diferentes aspectos 
              da transformação digital com IA em ambientes B2B complexos.
            </p>
          </ComingSoonCard>
        </Grid>
      </Container>
    </CasesSection>
  );
};

export default Cases;
