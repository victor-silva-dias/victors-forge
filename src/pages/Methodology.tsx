import { Container, Section, Grid } from '../styles/GlobalStyles';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { theme } from '../styles/theme';

export default function Methodology() {
  return (
    <Section variant="spacious">
      <Container>
        <SectionHeading title="Product Context Engineering" subtitle="Metodologia" />
        <p style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          O <strong>PCE</strong> é a metodologia que desenvolvi para resolver a "amnésia de contexto" 
          no desenvolvimento de software assistido por IA. Trato o contexto do produto com o mesmo rigor do código-fonte.
        </p>

        <Grid columns={3} gap={theme.spacing.md}>
          {[
            { id: 1, title: 'Project Context', desc: 'Quem somos, missão, ICP (A "Constituição").' },
            { id: 2, title: 'Working Docs', desc: 'Rascunhos ativos, meeting notes (A "Mesa de Trabalho").' },
            { id: 3, title: 'Strategy & Vision', desc: 'Roadmap, diferenciais competitivos (O "Norte").' },
            { id: 4, title: 'Product Requirements', desc: 'Definição funcional das features (O "O Que").' },
            { id: 5, title: 'Timeline & Reports', desc: 'Histórico do que foi feito (O "Rastro").' },
            { id: 6, title: 'Prompts & Instructions', desc: 'A interface com a IA (O "Comando").' },
          ].map((layer) => (
            <GlassCard key={layer.id} variant="default">
              <h4 style={{ color: theme.colors.accent, marginBottom: '0.5rem' }}>Layer 0{layer.id}</h4>
              <h3>{layer.title}</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{layer.desc}</p>
            </GlassCard>
          ))}
        </Grid>

        <div style={{ marginTop: '5rem' }}>
            <SectionHeading title="Vibe Coding com Governança" subtitle="Filosofia" />
            <p>
                "Vibe Coding" é o termo popular para criar software rapidamente usando LLMs.
                Para mim, <strong>Vibe Coding sem governança é débito técnico instantâneo.</strong>
            </p>
        </div>
      </Container>
    </Section>
  );
}
