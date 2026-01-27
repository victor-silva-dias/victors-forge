import { Container, Section } from '../styles/GlobalStyles';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function About() {
  return (
    <Section variant="spacious">
      <Container>
        <SectionHeading title="A Forja (Sobre Mim)" subtitle="Trajetória" />
        <p>
          Minha atuação transcende o papel tradicional de um CPO. Não olho apenas para features ou roadmaps; 
          olho para a sobrevivência e o crescimento do negócio.
        </p>
        <br/>
        <h3>Founder & Business Leader</h3>
        <p>
          Nos últimos tempos, minha cadeira principal é a de <strong>Founder</strong>. 
          Isso significa enfrentar um turbilhão emocional e técnico para tirar uma empresa do zero (bootstrap).
        </p>
        <ul>
            <li><strong>Visão C-Level</strong>: Minha responsabilidade migrou de "como construir" para "como vender e escalar".</li>
            <li><strong>Beyond Product</strong>: Atuo ativamente em estratégias de Go-to-Market.</li>
        </ul>
        <br/>
        <div style={{ padding: '2rem', borderLeft: '2px solid #D4A017' }}>
            <em>"Não sou apenas um especialista em IA. Sou um construtor de empresas que usa IA como vantagem competitiva."</em>
        </div>
      </Container>
    </Section>
  );
}
