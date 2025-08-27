# System Patterns: Victor's Forge

## Arquitetura Geral

### Stack Principal
```
Frontend: React 18 + TypeScript + Vite
Styling: Styled Components + Theme System
Routing: React Router DOM (planejado)
Build: Vite (ESNext + TypeScript)
```

### Estrutura de Pastas
```
src/
├── components/     # Componentes reutilizáveis
│   └── Header/     # Navegação principal
├── pages/          # Páginas da aplicação
│   ├── Home/       # Landing page
│   ├── About/      # Sobre Victor
│   ├── Cases/      # Portfolio de cases
│   └── Content/    # Blog/Artigos
├── styles/         # Sistema de design
│   ├── theme.ts    # Tokens de design
│   └── GlobalStyles.ts # Reset + base styles
├── contexts/       # Context API (futuro)
├── hooks/          # Custom hooks (futuro)
├── store/          # Estado global (futuro)
├── types/          # TypeScript definitions
└── utils/          # Utilitários
```

## Decisões Arquiteturais

### 1. Component-Based Architecture
**Decisão:** Componentes funcionais com hooks
**Racional:** 
- Performance melhor que class components
- Código mais limpo e reutilizável
- Melhor integração com TypeScript

### 2. Styled Components + Theme System
**Decisão:** CSS-in-JS com sistema de tokens
**Racional:**
- Type safety no styling
- Temas dinâmicos (light/dark mode futuro)
- Scoped styles (sem conflitos CSS)
- Design tokens centralizados

### 3. File-based Component Organization
**Decisão:** Cada componente em sua pasta
**Racional:**
- Organização clara por funcionalidade
- Facilita importações e exports
- Escalabilidade para componentes complexos

## Sistema de Design (Implementado)

### Theme Structure
```typescript
interface Theme {
  colors: {
    primary: '#4A6E48';      // Verde Forja
    accent: '#D4A017';       // Dourado
    action: '#FF7A00';       // Laranja Fogo
    neutral: '#2F3E46';      // Cinza escuro
    background: '#FAFCFA';   // Quase branco
    text: {
      primary: string;
      secondary: string;
      accent: string;
      // ... outros
    }
  };
  fonts: {
    heading: 'Space Grotesk';
    body: 'IBM Plex Sans';
  };
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
  shadows: Record<string, string>;
  transitions: Record<string, string>;
}
```

### Paleta de Cores (Definida)
- **Primary (#4A6E48):** Verde Forja - identidade principal
- **Accent (#D4A017):** Dourado - detalhes refinados
- **Action (#FF7A00):** Laranja Fogo - CTAs e ações
- **Neutral (#2F3E46):** Cinza escuro sofisticado
- **Background (#FAFCFA):** Quase branco com sutileza

### Tipografia (Configurada)
- **Headings:** Space Grotesk (moderna, tecnológica)
- **Body:** IBM Plex Sans (legível, profissional)
- **Fluid Typography:** Clamp values para responsividade

### Responsive Design Pattern
```typescript
const breakpoints = {
  mobile: '768px',
  tablet: '1024px', 
  desktop: '1200px',
  ultrawide: '1440px'
};
```

## Padrões de Componentes

### Estrutura Padrão
```typescript
// ComponentName/
├── ComponentName.tsx    # Componente principal
├── styles.ts           # Styled components (se necessário)
├── types.ts            # Props interface (se complexo)
└── index.ts            # Export barrel
```

### Pattern de Props
```typescript
interface ComponentProps {
  // Props obrigatórias primeiro
  title: string;
  content: ReactNode;
  
  // Props opcionais depois
  className?: string;
  variant?: 'primary' | 'secondary';
  
  // Event handlers por último
  onClick?: () => void;
}
```

### Naming Conventions
- **Componentes:** PascalCase (`Header.tsx`)
- **Props:** camelCase com interface `ComponentProps`
- **Styled:** PascalCase com prefix (`StyledHeader`)
- **Páginas:** PascalCase na pasta + arquivo (`Home/Home.tsx`)

## Padrões de Styling

### Styled Components Pattern
```typescript
import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;
```

### Theme Access Pattern
- Sempre usar theme provider
- Acessar valores via props: `${({ theme }) => theme.colors.primary}`
- Evitar valores hardcoded

## Asset Management

### SVG Strategy (Implementado)
```
src/assets/
├── anao-perfil.svg     # Avatar/logo principal
├── bigorna.svg         # Ícone temático
├── fogo.svg            # Ícone temático  
├── martelo.svg         # Ícone temático
├── martelos-cruzados.svg # Ícone temático
└── principal.svg       # Logo principal
```

### Asset Optimization Pattern
- **SVGs:** External files para reutilização
- **Lazy Loading:** Para performance (futuro)
- **WebP + Fallback:** Para imagens (futuro)

## Performance Patterns

### Bundle Optimization
```typescript
// Lazy loading de páginas (futuro)
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
```

### CSS Optimization
- **Styled Components:** Tree shaking automático
- **Theme System:** Centralização evita duplicação
- **Critical CSS:** Inline para first paint

## Estado e Data Flow

### Local State
- **useState:** Para estado simples de componente
- **useReducer:** Para lógica complexa (futuro)

### Global State (Planejado)
- **Context + useReducer:** Para temas, user preferences
- **Evitar:** Redux (overkill para o escopo atual)

## Error Handling Patterns

### Error Boundaries (Planejado)
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  // Pattern para fallback UI elegante
}
```

### Type Safety
- **TypeScript Strict Mode:** Enabled
- **Props Validation:** Interfaces explícitas
- **Runtime Validation:** Zod (futuro se necessário)

## Build & Deploy Patterns

### Development
```bash
npm run dev    # Vite dev server
npm run build  # Production build
npm run preview # Preview build local
```

### Performance Targets
- **Bundle Size:** < 500KB inicial
- **Loading Time:** < 3s em 3G
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1

## Accessibility Patterns

### Semantic HTML
- **Proper Heading Hierarchy:** h1 → h2 → h3
- **ARIA Labels:** Para elementos interativos
- **Keyboard Navigation:** Tab order lógico

### Color Contrast
- **Primary Text:** 4.5:1 minimum ratio
- **Action Elements:** High contrast for visibility
- **Focus States:** Clear visual feedback

## Code Quality Patterns

### TypeScript
- **Strict Mode:** Enabled
- **Explicit Types:** Evitar 'any'
- **Interface Exports:** Para props reutilizáveis

### Component Organization
- **Single Responsibility:** Um propósito por componente
- **Composition over Inheritance:** React patterns
- **Props Drilling:** Context para dados globais

## Future Architecture Considerations

### Scaling Patterns
- **Micro-frontends:** Se projeto crescer significativamente
- **State Management:** Zustand se Context não for suficiente
- **Component Library:** Storybook para documentação

### Integration Points
- **CMS:** Headless CMS para blog (futuro)
- **Analytics:** GA4 ou alternativa privacy-first
- **Forms:** React Hook Form + validation
