import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Container, Section } from '../styles/GlobalStyles';
import { SectionHeading } from '../components/ui/SectionHeading';

// Assets
import principalImg from '../assets/principal.svg';
import martelosImg from '../assets/martelos crizados.svg';
import bigornaImg from '../assets/bigorna.svg';
import fogoImg from '../assets/fogo.svg';
import anaoImg from '../assets/anao-perfil.svg';

// ============================================
// ATO 1: A CHEGADA - Styled Components
// ============================================

const Act1Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 0;
  background: linear-gradient(180deg, 
    ${theme.colors.neutralDark} 0%, 
    ${theme.colors.neutral} 40%,
    ${theme.colors.backgroundDark} 100%
  );
  overflow: hidden;

  /* Efeito de brilho quente (forja) */
  &::before {
    content: '';
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
    background: radial-gradient(ellipse at center bottom, 
      rgba(212, 160, 23, 0.3) 0%, 
      rgba(255, 122, 0, 0.15) 40%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Act1Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  padding: ${theme.spacing.lg};
  margin-top: -5vh; /* Sobe o conteúdo um pouco */
`;

const ForgeImage = styled(motion.img)`
  max-width: 220px;
  height: auto;
  margin-bottom: ${theme.spacing.lg};
  filter: drop-shadow(0 0 40px rgba(212, 160, 23, 0.3));

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 180px;
  }
`;

const WelcomeText = styled(motion.span)`
  display: block;
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: ${theme.spacing.sm};
  font-weight: 500;
`;

const ForgeTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.md};
  font-weight: 700;
  
  span {
    color: ${theme.colors.accent};
  }
`;

const ForgeSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${theme.colors.neutralLight};
  max-width: 500px;
  line-height: 1.6;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.neutralLight};
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, ${theme.colors.accent}, transparent);
`;

// ============================================
// ATO 2: POR QUE A FORJA - Styled Components
// ============================================

const Act2Section = styled.section`
  position: relative;
  padding: ${theme.spacing.xl} 0 ${theme.spacing.xxxl};
  background: ${theme.colors.backgroundDark};
  overflow: hidden;

  /* Glow no topo - espelho do Ato 1 */
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
    background: radial-gradient(ellipse at center top, 
      rgba(212, 160, 23, 0.3) 0%, 
      rgba(255, 122, 0, 0.15) 40%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Act2Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Act2Subtitle = styled(motion.span)`
  display: block;
  font-size: 0.85rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: ${theme.spacing.md};
`;

const Act2Title = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.3;
`;

const Act2Manifesto = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: ${theme.colors.neutralLight};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.xxl};
`;

const PillarsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  flex-wrap: wrap;
  margin-top: ${theme.spacing.xl};
`;

const Pillar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  max-width: 180px;
`;

const PillarIcon = styled.div`
  width: 48px;
  height: 48px;
  
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0) saturate(100%) invert(73%) sepia(54%) saturate(456%) hue-rotate(6deg) brightness(95%) contrast(94%);
  }
`;

const PillarLabel = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.text.light};
  font-weight: 600;
`;

// ============================================
// ATO 3: O FERREIRO - Styled Components
// ============================================

const Act3Section = styled(Section)`
  background: ${theme.colors.backgroundDark};
`;

const BlacksmithCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BlacksmithImage = styled(motion.img)`
  max-width: 200px;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.1));
`;

const BlacksmithInfo = styled.div``;

const BlacksmithName = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.xs};
`;

const BlacksmithClass = styled.p`
  color: ${theme.colors.accent};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StatsGrid = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const StatBadge = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 160, 23, 0.3);
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  text-align: center;
  min-width: 80px;
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.colors.accent};
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: ${theme.colors.neutralLight};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const BlacksmithBio = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
  max-width: 500px;
`;

const ProfileLink = styled(Link)`
  display: inline-block;
  margin-top: ${theme.spacing.md};
  color: ${theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// ============================================
// ATO 4: AS CRIAÇÕES - Styled Components
// ============================================

const Act4Section = styled(Section)`
  background: ${theme.colors.backgroundDark};
`;

const ProjectPreview = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 160, 23, 0.2);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.accent};
    box-shadow: 0 10px 40px rgba(212, 160, 23, 0.15);
  }
`;

const ProjectLabel = styled.span`
  display: inline-block;
  background: ${theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${theme.spacing.md};
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDesc = styled.p`
  color: ${theme.colors.neutralLight};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// ============================================
// COMPONENT
// ============================================

export default function Home() {
  return (
    <>
      {/* ATO 1: A CHEGADA */}
      <Act1Section>
        <Act1Content>
          <ForgeImage 
            src={principalImg} 
            alt="A Forja"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          
          <WelcomeText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bem-vindo à
          </WelcomeText>
          
          <ForgeTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Victor's <span>Forge</span>
          </ForgeTitle>
          
          <ForgeSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Construindo negócios de IA e com IA.
          </ForgeSubtitle>
        </Act1Content>

        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span>Explorar</span>
          <ScrollLine 
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </ScrollIndicator>
      </Act1Section>

      {/* ATO 2: POR QUE A FORJA */}
      <Act2Section>
        <Container>
          <Act2Content>
            <Act2Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Por que isso existe
            </Act2Subtitle>
            
            <Act2Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Cansei de alimentar algoritmos que não me pertencem.
            </Act2Title>
            
            <Act2Manifesto
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Redes sociais são ótimas para alcance, péssimas para profundidade. 
              Aqui eu documento o que realmente importa: como construo empresas, 
              como penso sobre produto, e os aprendizados que não cabem em 280 caracteres.
            </Act2Manifesto>

            <PillarsRow>
              <Pillar
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <PillarIcon><img src={martelosImg} alt="Soberania" /></PillarIcon>
                <PillarLabel>Soberania Intelectual</PillarLabel>
              </Pillar>
              
              <Pillar
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <PillarIcon><img src={bigornaImg} alt="Profundidade" /></PillarIcon>
                <PillarLabel>Profundidade Real</PillarLabel>
              </Pillar>
              
              <Pillar
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <PillarIcon><img src={fogoImg} alt="Documentação" /></PillarIcon>
                <PillarLabel>Jornada Documentada</PillarLabel>
              </Pillar>
            </PillarsRow>
          </Act2Content>
        </Container>
      </Act2Section>

      {/* ATO 3: O FERREIRO */}
      <Act3Section variant="spacious">
        <Container>
          <BlacksmithCard>
            <BlacksmithImage 
              src={anaoImg} 
              alt="Victor Dias"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            
            <BlacksmithInfo>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <BlacksmithClass>Co-founder & Builder</BlacksmithClass>
                <BlacksmithName>Victor Dias</BlacksmithName>
                
                <StatsGrid>
                  <StatBadge>
                    <StatValue>+5</StatValue>
                    <StatLabel>Anos Tech</StatLabel>
                  </StatBadge>
                  <StatBadge>
                    <StatValue>AI</StatValue>
                    <StatLabel>Especialidade</StatLabel>
                  </StatBadge>
                  <StatBadge>
                    <StatValue>🔥</StatValue>
                    <StatLabel>Bootstrap</StatLabel>
                  </StatBadge>
                </StatsGrid>
                
                <BlacksmithBio>
                  Visão estratégica, execução de produto, resiliência de founder. 
                  Uso IA como alavanca para construir negócios soberanos e lucrativos.
                </BlacksmithBio>
                
                <ProfileLink to="/sobre">
                  Conhecer mais →
                </ProfileLink>
              </motion.div>
            </BlacksmithInfo>
          </BlacksmithCard>
        </Container>
      </Act3Section>

      {/* ATO 4: AS CRIAÇÕES */}
      <Act4Section variant="spacious">
        <Container>
          <SectionHeading 
            title="Saindo da Forja" 
            subtitle="Criações" 
            centered 
          />
          
          <ProjectPreview
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProjectLabel>Projeto Principal</ProjectLabel>
            <ProjectName>Apolus.ai</ProjectName>
            <ProjectDesc>
              Plataforma de IA Jurídica. O maior case da forja — 
              do zero ao produto com clientes reais.
            </ProjectDesc>
            <ProjectLink to="/projetos">
              Ver o projeto →
            </ProjectLink>
          </ProjectPreview>
        </Container>
      </Act4Section>
    </>
  );
}
