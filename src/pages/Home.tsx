import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';

// Assets
import principalImg from '../assets/principal.svg';
import martelosImg from '../assets/martelos crizados.svg';
import bigornaImg from '../assets/bigorna.svg';
import fogoImg from '../assets/fogo.svg';
import anaoImg from '../assets/anao-perfil.svg';
import victorPhoto from '../assets/victor-photo.png';

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
// ATO 2: A FORJA - Styled Components (Redesign)
// ============================================

const Act2Section = styled.section`
  position: relative;
  padding: ${theme.spacing.xxxl} 0;
  background: ${theme.colors.backgroundDark};
  overflow: hidden;

  /* Glow no topo - espelho do Ato 1 (efeito sol esférico) */
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
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Act2Label = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  border: 1px solid rgba(212, 160, 23, 0.4);
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
`;

const Act2Headline = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;
  
  /* Gradiente dourado no texto */
  background: linear-gradient(135deg, 
    ${theme.colors.accent} 0%, 
    #f5d48a 50%,
    ${theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Act2Subheading = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${theme.colors.neutralLight};
  margin-bottom: ${theme.spacing.xl};
  font-style: italic;
`;

const ManifestoCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(212, 160, 23, 0.15);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  margin: ${theme.spacing.xl} auto ${theme.spacing.xxl};
  max-width: 800px;
  text-align: left;
  
  /* Aspas decorativas */
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 30px;
    font-size: 6rem;
    font-family: Georgia, serif;
    color: ${theme.colors.accent};
    opacity: 0.3;
    line-height: 1;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
    text-align: center;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ManifestoHighlight = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${theme.colors.text.light};
  font-weight: 500;
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
  padding-left: ${theme.spacing.lg};
  border-left: 3px solid ${theme.colors.accent};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    border-left: none;
    padding-left: 0;
    border-bottom: 2px solid ${theme.colors.accent};
    padding-bottom: ${theme.spacing.md};
  }
`;

const ManifestoText = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: ${theme.colors.neutralLight};
  line-height: 1.9;
  padding-left: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-left: 0;
  }
`;

// Timeline Visual (Pedra -> Forja -> Diamante)
const TimelineContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.xxl} 0;
  padding: ${theme.spacing.xl} 0;
  position: relative;
`;

const TimelineNode = styled(motion.div)<{ $glow?: boolean }>`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 60px;
    height: 60px;
    filter: ${props => props.$glow 
      ? 'drop-shadow(0 0 20px rgba(212, 160, 23, 0.8))' 
      : 'drop-shadow(0 0 10px rgba(212, 160, 23, 0.4))'};
  }
  
  ${props => props.$glow && `
    &::after {
      content: '';
      position: absolute;
      inset: -10px;
      background: radial-gradient(circle, rgba(212, 160, 23, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      z-index: -1;
    }
  `}
`;

const TimelineLine = styled(motion.div)`
  height: 2px;
  width: 80px;
  background: linear-gradient(90deg, 
    rgba(212, 160, 23, 0.2) 0%,
    rgba(212, 160, 23, 0.6) 50%,
    rgba(212, 160, 23, 0.2) 100%
  );
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 10px ${theme.colors.accent};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 40px;
  }
`;



// ============================================
// ATO 3: O FERREIRO - Styled Components (Layout Assimétrico)
// ============================================

const Act3Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.backgroundDark};
  position: relative;
  overflow: hidden;
`;

const Act3Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const Act3Layout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${theme.spacing.lg};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.md};
  }
`;

const Act3Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
    align-items: center;
  }
`;

const Act3Label = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: ${theme.spacing.sm};

  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &::before {
      display: none;
    }
  }
`;

const ProfileVisual = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Glow orgânico atrás da foto */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 320px;
    background: radial-gradient(ellipse at center,
      rgba(212, 160, 23, 0.2) 0%,
      rgba(255, 122, 0, 0.1) 40%,
      transparent 70%
    );
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;

    &::before {
      width: 220px;
      height: 260px;
    }
  }
`;

const ProfilePhoto = styled(motion.img)`
  width: 220px;
  height: auto;
  filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.4))
          drop-shadow(0 0 40px rgba(212, 160, 23, 0.1));
  position: relative;
  z-index: 1;

  /* Fade suave na parte inferior */
  mask-image: linear-gradient(to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 180px;
  }
`;

const DwarfWatermark = styled(motion.img)`
  position: absolute;
  top: -10px;
  right: 10px;
  width: 80px;
  opacity: 0.2;
  filter: drop-shadow(0 0 12px rgba(212, 160, 23, 0.4));
  z-index: 2;
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60px;
    top: -5px;
    right: 25%;
  }
`;

const ProfileName = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${theme.colors.text.light};
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: ${theme.spacing.xs};

  span {
    /* Gradiente dourado como no Act2Headline */
    background: linear-gradient(135deg,
      ${theme.colors.accent} 0%,
      #f5d48a 50%,
      ${theme.colors.accent} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ProfileTagline = styled(motion.p)`
  font-family: ${theme.fonts.heading};
  font-style: italic;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: ${theme.colors.neutralLight};
  margin-bottom: ${theme.spacing.md};
`;

const SkillBadgeContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SkillBadge = styled(motion.span)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.8rem;
  color: ${theme.colors.text.tertiary};

  &.highlight {
    border-color: rgba(212, 160, 23, 0.5);
    color: ${theme.colors.accent};
    background: rgba(212, 160, 23, 0.08);
  }
`;

const ProfileBio = styled(motion.p)`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  padding-left: ${theme.spacing.md};
  border-left: 2px solid rgba(212, 160, 23, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-left: none;
    padding-left: 0;
    text-align: center;
  }
`;

const ProfileCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.light};
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.3s ease;

  &:hover, &:focus, &:active {
    color: ${theme.colors.text.light};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 20px rgba(74, 110, 72, 0.3);
    transform: translateX(5px);
  }

  &:visited {
    color: ${theme.colors.text.light};
  }
`;

// ============================================
// ATO 4: SAINDO DA FORJA - Styled Components
// ============================================

const Act4Section = styled.section`
  padding: ${theme.spacing.xxxl} 0;
  background: ${theme.colors.backgroundDark};
  position: relative;
  overflow: hidden;
`;

const Act4Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const Act4Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const Act4Label = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  border: 1px solid rgba(212, 160, 23, 0.4);
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
`;

const Act4Headline = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;

  /* Gradiente dourado no texto */
  background: linear-gradient(135deg,
    ${theme.colors.accent} 0%,
    #f5d48a 50%,
    ${theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Act4ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const ContentBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 160, 23, 0.15);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 160, 23, 0.4);
    box-shadow: 0 15px 40px rgba(212, 160, 23, 0.1);
  }
`;

const BlockTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 600;
`;

const BlockDesc = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.neutralLight};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const BlockItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const BlockItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: rgba(255, 255, 255, 0.02);
  border-radius: ${theme.borderRadius.sm};
  border-left: 2px solid rgba(212, 160, 23, 0.3);
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;

  &::before {
    content: '→';
    color: ${theme.colors.accent};
    font-size: 0.8rem;
  }
`;

const BlockCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.light};
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.3s ease;

  &:hover, &:focus, &:active {
    color: ${theme.colors.text.light};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 20px rgba(74, 110, 72, 0.3);
    transform: translateX(5px);
  }

  &:visited {
    color: ${theme.colors.text.light};
  }
`;

// ============================================
// ATO 5: A JORNADA CONTINUA - Styled Components
// ============================================

const Act5Section = styled.section`
  padding: ${theme.spacing.xxxl} 0;
  background: ${theme.colors.backgroundDark};
  position: relative;
  overflow: hidden;

  /* Sutil glow superior para separar do Act 4 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(212, 160, 23, 0.3) 50%,
      transparent 100%
    );
  }
`;

const Act5Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  text-align: center;
`;

const Act5Header = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const Act5Label = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  border: 1px solid rgba(212, 160, 23, 0.4);
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
`;

const Act5Headline = styled(motion.h2)`
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.3;

  /* Gradiente dourado no texto */
  background: linear-gradient(135deg,
    ${theme.colors.accent} 0%,
    #f5d48a 50%,
    ${theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Act5Subtitle = styled(motion.p)`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: ${theme.colors.neutralLight};
  font-style: italic;
  margin-bottom: ${theme.spacing.lg};
`;

const Act5Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${theme.spacing.sm};
  width: 100%;
  max-width: 450px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 160, 23, 0.3);
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.text.light};
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 15px rgba(212, 160, 23, 0.15);
  }
`;

const NewsletterButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: transparent;
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.text.light};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 20px rgba(74, 110, 72, 0.3);
    transform: translateY(-2px);
  }
`;

const LinkedInLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.light};
  text-decoration: none;
  font-size: 0.95rem;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: 1px solid rgba(212, 160, 23, 0.4);
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.text.light};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 15px rgba(74, 110, 72, 0.3);
    transform: translateY(-2px);
  }
`;

const ContactEmail = styled(motion.a)`
  color: ${theme.colors.accent};
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
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

      {/* ATO 2: A FORJA */}
      <Act2Section>
        <Container>
          <Act2Content>
            {/* Label */}
            <Act2Label
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Por que a Forja?
            </Act2Label>
            
            {/* Headline */}
            <Act2Headline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A Forja molda o Ferro.<br />A Jornada molda o Ferreiro.
            </Act2Headline>
            
            {/* Subheading */}
            <Act2Subheading
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Onde ideias brutas viram ferramentas e cada construção é um passo ao longo da jornada.
            </Act2Subheading>
            
            {/* Timeline Visual: Pedra -> Forja -> Diamante */}
            <TimelineContainer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TimelineNode
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img src={martelosImg} alt="Pedra Bruta" />
              </TimelineNode>
              
              <TimelineLine
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              
              <TimelineNode $glow
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <img src={bigornaImg} alt="A Forja" />
              </TimelineNode>
              
              <TimelineLine
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              />
              
              <TimelineNode
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <img src={fogoImg} alt="Diamante" />
              </TimelineNode>
            </TimelineContainer>
            
            {/* Texto Principal - Card Manifesto */}
            <ManifestoCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ManifestoHighlight>
                Toda ideia nasce crua e intangível. A Forja é onde ela é testada, 
                moldada, lapidada e vira algo real.
              </ManifestoHighlight>
              <ManifestoText>
                Aqui documento a jornada de construir teses de produto, experimentos 
                com IA e Vibe Coding, lições de negócio e os erros que acontecem ao 
                longo da Jornada. Este é meu laboratório aberto, onde o caminho 
                importa tanto quanto o destino.
              </ManifestoText>
            </ManifestoCard>
          </Act2Content>
        </Container>
      </Act2Section>

      {/* ATO 3: O FERREIRO */}
      <Act3Section>
        <Act3Container>
          <Act3Layout>
            {/* Coluna Esquerda: Conteúdo */}
            <Act3Content>
              <Act3Label
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                O Ferreiro
              </Act3Label>

              <ProfileName
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Victor <span>Dias</span>
              </ProfileName>

              <ProfileTagline
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Founder por escolha. Builder por natureza.
              </ProfileTagline>

              <SkillBadgeContainer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SkillBadge className="highlight">Founder</SkillBadge>
                <SkillBadge>Gestão de Produto</SkillBadge>
                <SkillBadge className="highlight">AI</SkillBadge>
                <SkillBadge>Business</SkillBadge>
              </SkillBadgeContainer>

              <ProfileBio
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Minha base é gestão de produto. Minha alavanca é a IA. Junto as duas coisas
                para construir software e estratégia de negócio. A IA não substitui os
                profissionais de tecnologia, ela amplifica. E quem domina contexto e dados,
                domina a ferramenta.
              </ProfileBio>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ProfileCTA to="/sobre">
                  Me conheça melhor →
                </ProfileCTA>
              </motion.div>
            </Act3Content>

            {/* Coluna Direita: Foto */}
            <ProfileVisual
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <DwarfWatermark
                src={anaoImg}
                alt="Spirit of the Forge"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <ProfilePhoto src={victorPhoto} alt="Victor Dias" />
            </ProfileVisual>
          </Act3Layout>
        </Act3Container>
      </Act3Section>

      {/* ATO 4: SAINDO DA FORJA */}
      <Act4Section>
        <Act4Container>
          {/* Header */}
          <Act4Header>
            <Act4Label
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Saindo da Forja
            </Act4Label>

            <Act4Headline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ideias viram frameworks.<br />Frameworks viram produto.
            </Act4Headline>
          </Act4Header>

          {/* Content Grid: Pensamento + Execução */}
          <Act4ContentGrid>
            {/* Bloco Pensamento */}
            <ContentBlock
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BlockTitle>Pensamento</BlockTitle>
              <BlockDesc>
                Teses, frameworks e reflexões sobre produto, IA e construção de negócios.
              </BlockDesc>
              <BlockItems>
                <BlockItem>Em breve: Framework de validação</BlockItem>
                <BlockItem>Em breve: Tese sobre IA generativa</BlockItem>
                <BlockItem>Em breve: Reflexões de produto</BlockItem>
              </BlockItems>
              <BlockCTA to="/conteudos">
                Explorar ideias →
              </BlockCTA>
            </ContentBlock>

            {/* Bloco Execução */}
            <ContentBlock
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BlockTitle>Execução</BlockTitle>
              <BlockDesc>
                Projetos reais. Do zero ao produto, do produto ao negócio.
              </BlockDesc>
              <BlockItems>
                <BlockItem>Apolus.ai — IA Jurídica</BlockItem>
                <BlockItem>Em breve: Novo projeto</BlockItem>
                <BlockItem>Em breve: Experimento</BlockItem>
              </BlockItems>
              <BlockCTA to="/cases">
                Ver projetos →
              </BlockCTA>
            </ContentBlock>
          </Act4ContentGrid>

        </Act4Container>
      </Act4Section>

      {/* ATO 5: A JORNADA CONTINUA */}
      <Act5Section>
        <Act5Container>
          <Act5Header>
            <Act5Label
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              A Jornada Continua
            </Act5Label>

            <Act5Headline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A forja está acesa.<br />Quer acompanhar?
            </Act5Headline>

            <Act5Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Receba reflexões, frameworks e novidades direto no seu email.
            </Act5Subtitle>
          </Act5Header>

          <Act5Content
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NewsletterForm onSubmit={(e) => e.preventDefault()}>
              <NewsletterInput
                type="email"
                placeholder="Seu melhor email"
                aria-label="Email para newsletter"
              />
              <NewsletterButton type="submit">
                Inscrever
              </NewsletterButton>
            </NewsletterForm>

            <LinkedInLink
              href="https://www.linkedin.com/in/victordias0027/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Me siga no LinkedIn
            </LinkedInLink>

            <ContactEmail
              href="mailto:contato@victorsforge.xyz"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              contato@victorsforge.xyz
            </ContactEmail>
          </Act5Content>
        </Act5Container>
      </Act5Section>
    </>
  );
}
