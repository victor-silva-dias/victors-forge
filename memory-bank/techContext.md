# Tech Context: Victor's Forge

## Stack Tecnológico

### Core Technologies
- **React 19.1.1:** Framework principal com concurrent features
- **TypeScript 5.8.3:** Type safety e developer experience
- **Vite 7.1.2:** Build tool e dev server de alta performance
- **Styled Components 6.1.19:** CSS-in-JS para styling componente

### Additional Libraries
- **React Router DOM 7.8.2:** Roteamento client-side
- **Framer Motion 12.23.12:** Animações e micro-interactions
- **Zustand 5.0.8:** Estado global leve (se necessário)
- **TanStack React Query 5.85.5:** Data fetching e cache (futuro)

## Development Dependencies
```json
{
  "typescript": "~5.8.3",
  "vite": "^7.1.2", 
  "@vitejs/plugin-react": "^5.0.0",
  "eslint": "^9.33.0",
  "typescript-eslint": "^8.39.1",
  "@types/react": "^19.1.10",
  "@types/react-dom": "^19.1.7",
  "@types/styled-components": "^5.1.34"
}
```

## Setup de Desenvolvimento

### Pré-requisitos
- **Node.js:** >= 18.0.0 (LTS recommended)
- **npm:** >= 9.0.0 (ou yarn/pnpm)
- **Editor:** VSCode com extensões TypeScript + ES7 React snippets

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev          # Inicia dev server (localhost:5173)
npm run build        # Build para produção (tsc + vite build)
npm run preview      # Preview do build local
npm run lint         # ESLint check
```

### Configurações de Build

#### Vite Config (Implementado)
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/',              // Base path para deploy
  build: {
    outDir: 'dist',       // Output directory
    sourcemap: true,      // Source maps para debug
    rollupOptions: {
      output: {
        manualChunks: {   // Code splitting
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    port: 5173,           // Dev server port
    open: true            // Auto-open browser
  }
})
```

#### TypeScript Config
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext", 
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]    // Path mapping (configurado)
    }
  }
}
```

## Arquitetura de Assets

### Estrutura de Assets
```
src/assets/
├── anao-perfil.svg         # Avatar/logo principal
├── bigorna.svg             # Ícone temático forja
├── fogo.svg                # Ícone temático fogo
├── martelo.svg             # Ícone temático martelo
├── martelos-cruzados.svg   # Ícone temático duplo
└── principal.svg           # Logo principal marca
```

### Otimização de Assets
- **SVGs:** External files para reutilização e performance
- **Lazy Loading:** Implementação futura com Intersection Observer
- **Bundle Analysis:** Webpack Bundle Analyzer (futuro)

## Styling Architecture

### Styled Components Setup
```typescript
// GlobalStyles.ts - Reset + base styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

// theme.ts - Design tokens completamente definidos
export const theme = {
  colors: { /* paleta completa implementada */ },
  fonts: { 
    heading: 'Space Grotesk',
    body: 'IBM Plex Sans' 
  },
  spacing: { /* sistema de spacing */ },
  breakpoints: { /* responsive breakpoints */ },
  shadows: { /* sistema de sombras */ },
  transitions: { /* transições padronizadas */ }
};
```

## Development Constraints

### Performance Targets
- **Bundle Size:** < 500KB inicial
- **Loading Time:** < 3s em 3G
- **Core Web Vitals:**
  - LCP: < 2.5s
  - FID: < 100ms  
  - CLS: < 0.1

### Browser Support
- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **Legacy:** IE11 NÃO suportado (ES2020+ target)

### Accessibility Requirements
- **WCAG 2.1 Level AA:** Compliance obrigatório
- **Keyboard Navigation:** Funcional em todos componentes
- **Screen Readers:** ARIA labels apropriados
- **Color Contrast:** Mínimo 4.5:1 ratio (já implementado no theme)

## Tooling & Quality

### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended", 
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",  // React 17+ auto import
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

### Type Checking Strategy
- **Strict Mode:** Enabled para máxima type safety
- **Interface First:** Props sempre tipadas explicitamente  
- **No 'any':** Evitar any types, usar unknown quando necessário

## State Management Strategy

### Local State
- **useState:** Para estado simples de componente
- **useReducer:** Para lógica complexa local

### Global State
- **Zustand:** Já instalado para estado global leve
- **Context API:** Para temas e preferências de usuário
- **TanStack Query:** Para data fetching e cache (futuro blog)

### Data Flow Patterns
```typescript
// Zustand store example (se necessário)
interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));
```

## Animation & Interactions

### Framer Motion Setup
```typescript
// Animation variants pattern
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Page transitions
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
```

### Performance Considerations
- **Will-change:** Para animations específicas
- **Transform over position:** Para better performance  
- **Reduce motion:** Respeitar user preferences

## Deployment Strategy

### Current Setup
- **Local Development:** Vite dev server (port 5173)
- **Build Process:** TypeScript check + Vite build → `dist/`
- **Preview:** `npm run preview` para validação local

### Production (Planejado)
- **Platform:** Vercel (recomendado) ou Netlify
- **Domain:** victorsforge.com (ou similar)
- **SSL:** Automático via plataforma
- **CDN:** Global distribution automática
- **Environment:** Staging + Production branches

### Environment Variables
```env
# .env.local (não commitado)
VITE_ANALYTICS_ID=UA-XXXXXXX-X      # Google Analytics
VITE_CONTACT_EMAIL=victor@email.com  # Formulário contato
VITE_LINKEDIN_URL=linkedin.com/...   # Link LinkedIn
VITE_API_URL=https://api.domain.com  # Future API integration
```

## Dependencies Management

### Update Strategy
- **Major Updates:** Quarterly review com testing
- **Security Patches:** Immediate (npm audit fix)
- **Minor Updates:** Monthly batch updates
- **Lock File:** package-lock.json sempre commitado

### Bundle Analysis
```bash
# Analisar tamanho do bundle (futuro)
npm install -D rollup-plugin-analyzer
npm run build -- --analyze
```

## Performance Monitoring

### Development Tools
- **Vite DevTools:** Build analysis integrado
- **React DevTools:** Component profiling
- **Lighthouse:** Performance auditing local

### Production Monitoring (Planejado)
- **Core Web Vitals:** Real User Monitoring
- **Error Tracking:** Sentry ou alternativa
- **Analytics:** GA4 ou privacy-first alternative

## Testing Strategy (Planejado)

### Unit Tests
```typescript
// Jest + Testing Library setup (futuro)
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};
```

### E2E Testing
- **Playwright:** Para fluxos críticos
- **Visual Regression:** Percy ou similar
- **Accessibility:** axe-playwright integration

## Development Workflow

### Git Strategy
- **main:** Production-ready code
- **develop:** Integration branch (futuro)
- **feature/***:** Feature development
- **hotfix/***:** Emergency fixes

### Code Quality Gates
- **Pre-commit:** ESLint + Prettier (futuro)
- **Pre-push:** TypeScript check + tests
- **CI/CD:** GitHub Actions para deploy automático

## Security Considerations

### Build Security
- **Dependency Scanning:** npm audit regular
- **Environment Variables:** Never commit secrets
- **CSP Headers:** Content Security Policy (production)

### Runtime Security
- **Input Sanitization:** DOMPurify para user content (futuro)
- **XSS Prevention:** Template literals com escape
- **HTTPS Enforcement:** Redirect automático em production
