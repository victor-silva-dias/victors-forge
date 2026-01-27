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

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxxl};
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: ${theme.fluid.sectionTitle};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.heroSubtitle};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fluid.heroSubtitle};
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fluid.body};
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  letter-spacing: 0.02em;
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
    margin-bottom: ${theme.spacing.lg};
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .section {
    margin-bottom: ${theme.spacing.lg};

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      color: ${theme.colors.primary};
      font-size: ${theme.fluid.body};
      font-weight: 600;
      margin-bottom: ${theme.spacing.sm};
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};

      &::before {
        content: '';
        width: 3px;
        height: 16px;
        background: ${theme.colors.accent};
        border-radius: ${theme.borderRadius.full};
      }
    }

    p {
      font-size: ${theme.fluid.body};
      line-height: 1.7;
      color: ${theme.colors.text.secondary};
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: ${theme.fluid.body};
        line-height: 1.6;
        color: ${theme.colors.text.secondary};
        margin-bottom: ${theme.spacing.xs};
        position: relative;
        padding-left: ${theme.spacing.lg};

        &::before {
          content: '→';
          position: absolute;
          left: 0;
          color: ${theme.colors.accent};
          font-weight: bold;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const Cases: React.FC = () => {
  const cases = [
    {
      tag: "Metodologia",
      title: "Product Context Engineering",
      context: "O problema: vibe coding com IA é rápido, mas causa drift de produto — features tecnicamente corretas, mas estrategicamente desalinhadas. A IA esquece decisões entre sessões, e o contexto de negócio se perde no chat.",
      action: "Criei um framework de 6 camadas que trata contexto de produto como código: versionado no Git, estruturado em pastas (project_context, working_docs, strategy, PRDs, prompts), e consumível por agentes de IA. O workflow se divide em Planning Mode (explorar, refinar) e Act Mode (implementar com contexto).",
      impact: [
        "Planning Mode + Act Mode como workflow padrão",
        "Adotado internamente na Apolus.ai",
        "Documentação completa e estruturada",
        "Elimina 'amnésia de contexto' entre sessões de IA"
      ]
    },
    {
      tag: "Startup / Legal Tech",
      title: "Apolus.ai — Soberania Intelectual para Advogados",
      context: "71% dos advogados brasileiros usam IA generativa, mas 80% sem governança institucional ('Shadow AI'). Riscos: alucinações, jurisprudência inventada, responsabilidade profissional. O mercado jurídico precisa de IA vertical, não genérica.",
      action: "Co-fundei a Apolus para resolver isso com metodologia + tecnologia: ChatRJE (IA jurídica com citações verificáveis, 100% accuracy em precedentes vinculantes), Escola RJE (ensina advogados a serem 'pilotos', não passageiros), e Orion (SSOT estratégico da empresa, Handbook-First).",
      impact: [
        "792 boletins STJ indexados, 676 súmulas, 3.372 teses vinculantes",
        "Modelo Service-finances-Product (bootstrap, sem VC)",
        "Meta Q1 2026: R$ 20k em receita",
        "Time de 3 co-founders com papéis definidos"
      ]
    },
    {
      tag: "Infraestrutura de Marketing",
      title: "Gerador de Assets de Marketing via Vibe Coding",
      context: "Time de marketing dependia de designers externos para cada post, story ou apresentação. Gargalo de velocidade, inconsistência de marca, e custo alto por asset.",
      action: "Construí um sistema Astro + HTML/CSS onde descrevo o que quero em linguagem natural, a IA gera o código com design system aplicado, e exporto PNG/PDF em menos de 2 minutos. Tudo documentado via Product Context Engineering.",
      impact: [
        "45+ assets criados (posts, stories, emails, apresentações B2B)",
        "100% consistência de marca (design system documentado)",
        "Zero dependência de designer externo para operação diária",
        "Tempo médio por asset: < 2 minutos"
      ]
    }
  ];

  return (
    <CasesSection>
      <Container>
        <HeaderSection>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Peças forjadas
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Produtos, metodologias e sistemas que estou construindo.
          </Subtitle>
        </HeaderSection>

        <Grid columns={1} gap={theme.spacing.xxl}>
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
            >
              <Tag>{caseItem.tag}</Tag>
              <h3>{caseItem.title}</h3>

              <div className="section">
                <h4>Contexto</h4>
                <p>{caseItem.context}</p>
              </div>

              <div className="section">
                <h4>Ação</h4>
                <p>{caseItem.action}</p>
              </div>

              <div className="section">
                <h4>Impacto</h4>
                <ul>
                  {caseItem.impact.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                  ))}
                </ul>
              </div>
            </CaseCard>
          ))}
        </Grid>
      </Container>
    </CasesSection>
  );
};

export default Cases;
