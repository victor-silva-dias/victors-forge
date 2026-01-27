import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container, Section, Grid, Flex } from '../styles/GlobalStyles';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';

// Assets
import principalImg from '../assets/principal.svg';
import martelosImg from '../assets/martelos crizados.svg';
import bigornaImg from '../assets/bigorna.svg';
import fogoImg from '../assets/fogo.svg';
import anaoImg from '../assets/anao-perfil.svg';

const HeroSection = styled(Section)`
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at 50% 50%, rgba(74, 110, 72, 0.05), transparent 70%);
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const HeroImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: ${theme.spacing.md};
  img {
    width: 100%;
    height: 100%;
  }
`;

const ValueCard = styled(GlassCard)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white; 
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.subtle};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }
`;

export default function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{ fontSize: theme.fluid.heroTitle, marginBottom: theme.spacing.lg, color: theme.colors.primary }}>
                   Victor's <span style={{ color: theme.colors.accent }}>Forge</span>
                </h1>
                <p style={{ fontSize: theme.fluid.heroSubtitle, color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  Construindo Negócios Soberanos com Inteligência Artificial.
                </p>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: theme.colors.text.primary }}>
                  "Forja, não fogos de artifício."
                </p>
              </motion.div>
            </HeroText>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HeroImage src={principalImg} alt="Victor's Forge Principal Illustration" />
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section variant="spacious" background={theme.colors.backgroundSecondary}>
        <Container>
          <SectionHeading 
            title="A Trilogia da Soberania" 
            subtitle="Filosofia" 
            centered 
          />
          <Grid columns={3} gap={theme.spacing.lg}>
            <ValueCard>
              <IconWrapper>
                <img src={martelosImg} alt="Soberania Intelectual" />
              </IconWrapper>
              <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.primary }}>Intelectual</h3>
              <p>Ter meu próprio conhecimento estruturado e acessível. A mente é o primeiro ativo.</p>
            </ValueCard>
            
            <ValueCard>
              <IconWrapper>
                <img src={bigornaImg} alt="Soberania Operacional" />
              </IconWrapper>
              <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.primary }}>Operacional</h3>
              <p>Não depender de VCs ou ferramentas proprietárias fechadas. Construir sistemas próprios.</p>
            </ValueCard>
            
            <ValueCard>
              <IconWrapper>
                <img src={fogoImg} alt="Soberania Financeira" />
              </IconWrapper>
              <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.primary }}>Financeira</h3>
              <p>Gerar valor real que paga a conta. Bootstrap disciplinado antes da aceleração.</p>
            </ValueCard>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Flex align="center" justify="space-between" wrap>
             <div style={{ maxWidth: '600px' }}>
                <SectionHeading title="Sobre a Forja" />
                <p>
                  A Forja representa o lugar onde ideias cruas são transformadas em produtos sólidos através de calor (esforço), 
                  marteladas (iteração) e técnica (engenharia).
                </p>
             </div>
             <motion.img 
                src={anaoImg} 
                alt="Perfil do Ferreiro" 
                style={{ maxHeight: '300px' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             />
          </Flex>
        </Container>
      </Section>
    </>
  );
}
