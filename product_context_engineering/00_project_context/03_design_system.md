# Victor's Forge - Design System

> Referencia de identidade visual, cores, tipografia e principios de design.

---

## 1. Conceito Visual

### Estetica: "Industrial Premium"

Estetica de forja, metalurgia, craft. Comunica seriedade sem ser corporativo, qualidade sem ser generico.

- **Dark mode nativo** (nao opcional)
- **Precisao**: Pixels perfeitos, alinhamento importa
- **Profundidade**: Sombras, camadas glass, fundos escuros
- **Restricao**: Nao e "flashy" por ser. Animacoes propositais

### Filosofia: "Rigorous Luxury"

O design deve transmitir que **Vibe Coding e diferente de Lazy Coding**.

---

## 2. Paleta de Cores

### Cores Primarias

| Nome | Hex | Uso |
|------|-----|-----|
| **Gold** | `#D4A017` | Destaque, acoes primarias, soberania |
| **Fire** | `#FF7A00` | Energia, CTAs, calor da forja |
| **Green** | `#4A6E48` | Crescimento, estabilidade |
| **Background** | `#121214` | Dark mode base |

### Tons Metalicos (Steel)

| Nome | Hex | Uso |
|------|-----|-----|
| steel-100 | `#F5F5F7` | Highlight |
| steel-400 | `#8E8E93` | Texto secundario |
| steel-700 | `#3A3A3C` | Dark steel |
| steel-900 | `#1C1C1E` | Near black |

### Backgrounds (Concrete)

| Nome | Hex | Uso |
|------|-----|-----|
| concrete-base | `#121214` | Background primario |
| concrete-surface | `#1C1C1E` | Cards |
| concrete-elevated | `#252527` | Elementos elevados |

### Efeitos

| Nome | Valor | Uso |
|------|-------|-----|
| glow | `rgba(212, 160, 23, 0.4)` | Gold glow |
| spark | `rgba(255, 122, 0, 0.6)` | Fire spark |

---

## 3. Tipografia

### Fonte Principal

**Familia**: Saira (Google Fonts)

- Geometrica, moderna, com personalidade
- Alternativa: Space Grotesk / IBM Plex Sans

### Hierarquia

| Nivel | Uso | Caracteristicas |
|-------|-----|-----------------|
| Display | Hero, titulos principais | Bold, maior escala |
| Heading | Titulos de secao | Semi-bold |
| Body | Texto corrido | Regular, boa leitura |
| Caption | Legendas, metadata | Light, menor escala |

---

## 4. Elementos Visuais

### Principios

- **Dark mode nativo** - Base escura sempre
- **Glow effects sutis** - Em elementos de destaque
- **Micro-interacoes com "peso"** - Nao leves, transmitem craft
- **Espacamento generoso** - Respiro visual

### Componentes Chave

**Glass Card**
- Blur de fundo
- Borda sutil
- Variante com glow

**Section Heading**
- Underline dourado
- Subtitulo uppercase
- Hierarquia clara

---

## 5. Espacamento e Grid

### Breakpoints

| Nome | Valor | Uso |
|------|-------|-----|
| mobile | 768px | Telefones |
| tablet | 1024px | Tablets |
| desktop | 1200px | Desktop padrao |
| ultrawide | 1440px | Telas grandes |

### Escala de Espacamento

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| xxl | 48px |
| xxxl | 64px |

---

## 6. Animacoes

### Principios

- Animacoes **propositais**, nao decorativas
- Velocidade moderada (cinematico, nao rapido)
- Revela conteudo progressivamente
- Transmite "downloading de contexto"

### Timings

| Nome | Duracao | Uso |
|------|---------|-----|
| fast | 150ms | Micro-interacoes |
| normal | 250ms | Transicoes padrao |
| slow | 350ms | Entradas, reveals |

---

## 7. Iconografia

### Estilo

- SVG customizados
- Tematica de forja: martelo, bigorna, fogo
- Linhas limpas, estilo industrial

### Assets Existentes

- `anao-perfil.svg` - Perfil/avatar
- `bigorna.svg` - Simbolo da forja
- `fogo.svg` - Energia, acao
- `martelo.svg` - Construcao, craft

---

## 8. Implementacao

### Arquivo de Referencia

O tema esta implementado em: `src/styles/theme.ts`

Contem:
- Paleta de cores completa
- Sistema de tipografia
- Escala de espacamento
- Sombras
- Transicoes
- Breakpoints

### Uso

```typescript
import { theme } from '../styles/theme';

// Cores
color: ${({ theme }) => theme.colors.primary.gold};

// Espacamento
padding: ${({ theme }) => theme.spacing.md};

// Tipografia
font-size: ${({ theme }) => theme.typography.heading.fontSize};
```

---

*Documento criado em: 27/01/2026*
*Baseado em theme.ts e Discovery Session*
