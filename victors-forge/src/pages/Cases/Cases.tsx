import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Container, Section, Grid } from '../../styles/GlobalStyles';

const CasesSection = styled(Section)`
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.secondary};
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

const CaseCard = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.neutral} 100%);
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.medium};
  transition: all 0.3s ease;
  border-left: 4px solid ${theme.colors.accent};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.strong};
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.md};
  }

  .problem {
    margin-bottom: ${theme.spacing.lg};
    
    h4 {
      color: ${theme.colors.action};
      font-size: 1.1rem;
      margin-bottom: ${theme.spacing.sm};
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      opacity: 0.9;
    }
  }

  .solution {
    margin-bottom: ${theme.spacing.lg};
    
    h4 {
      color: ${theme.colors.action};
      font-size: 1.1rem;
      margin-bottom: ${theme.spacing.sm};
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      opacity: 0.9;
    }
  }

  .impact {
    h4 {
      color: ${theme.colors.accent};
      font-size: 1.1rem;
      margin-bottom: ${theme.spacing.sm};
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: ${theme.spacing.xs};
        position: relative;
        padding-left: ${theme.spacing.lg};

        &::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: ${theme.colors.accent};
        }
      }
    }
  }
`;

const ComingSoonCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(74, 110, 72, 0.1) 0%, rgba(58, 58, 58, 0.1) 100%);
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.lg};
  border: 2px dashed ${theme.colors.accent};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.8;
    max-width: 300px;
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
