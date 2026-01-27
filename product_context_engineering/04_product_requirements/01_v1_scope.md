# Product Requirements (PRD): V1 Launch

> Requisitos funcionais e tecnicos para o MVP do Victor's Forge.
> Referencia: `00_project_context/01_product_vision.md` e `03_strategy_and_vision/01_site_structure.md`

---

## 1. Visao Geral

**Objetivo**: Lancar o MVP do Victor's Forge com 4 paginas principais, demonstrando capacidade de execucao e estabelecendo presenca digital propria.

**Estrutura**:
- Home
- Sobre
- Projetos
- Conteudo

---

## 2. Requisitos Funcionais

### 2.1. Home

**Funcao**: Impacto inicial, comunicar identidade em segundos.

**Elementos obrigatorios**:
- Hero com identidade visual forte
- Manifesto ou frase central (a definir)
- Navegacao clara para outras secoes ("tres portas")
- Preview de valor

**Principio**: Nao precisa ser completa. Deve gerar curiosidade.

**Resultado esperado**: Visitante entende quem e Victor e quer explorar mais.

---

### 2.2. Sobre

**Funcao**: Posicionamento ATUAL como founder/builder.

**Elementos obrigatorios**:
- Posicionamento: Co-founder, CPO & Business Builder
- Filosofia e valores (Soberania, pragmatismo, resiliencia)
- O que faz: Construtor de empresas com IA como vantagem

**O que NAO incluir**:
- Timeline historica extensa
- Lista de skills/tecnologias
- Formato de curriculo

**Resultado esperado**: Visitante entende o posicionamento unico de Victor.

---

### 2.3. Projetos

**Funcao**: Demonstracao de execucao.

**Escopo V1**: Apenas Apolus.ai (foco unico)

**Estrutura do case**:
1. Contexto/Problema
2. Abordagem/Solucao
3. Stack/Metodologia
4. Resultado/Impacto

**Resultado esperado**: Visitante pensa "Esse cara realmente executa".

---

### 2.4. Conteudo

**Funcao**: Espaco autoral para ensaios, notas e metodologia.

**Formatos suportados**:
- Ensaios (reflexoes profundas)
- Notas (reflexoes rapidas)
- Metodologia (PCE, Vibe Coding)

**V1**: Pode comecar com conteudo estatico/hardcoded. Sistema de markdown pode vir depois.

**Resultado esperado**: Visitante encontra conteudo unico que nao existe em outro lugar.

---

### 2.5. Navegacao

**Header**:
- Links: Home, Sobre, Projetos, Conteudo
- Fixo no topo

**Footer**:
- Social links (LinkedIn, GitHub)
- Minimalista

**Mobile**:
- Menu responsivo (hamburger ou similar)

---

## 3. Stack Tecnica

| Camada | Tecnologia | Notas |
|--------|------------|-------|
| Framework | React 19 + Vite | Ja configurado |
| Linguagem | TypeScript | Strict mode |
| Styling | styled-components | Usar `theme.ts` |
| Animacao | framer-motion | Entradas, hovers |
| Roteamento | react-router-dom | Rotas: /, /sobre, /projetos, /conteudo |
| Conteudo | Hardcoded (V1) | Markdown parser futuro |
| Deploy | Vercel ou similar | Static hosting |

---

## 4. Requisitos Nao-Funcionais

| Requisito | Meta |
|-----------|------|
| Performance | Lighthouse > 90 |
| Responsividade | Mobile-first |
| Acessibilidade | Semantic HTML, contrast adequado |
| Dark mode | Nativo (nao opcional) |

---

## 5. Criterios de Aceitacao

### Home
- [ ] Hero com identidade visual forte
- [ ] Navegacao clara para outras secoes
- [ ] Responsivo em mobile

### Sobre
- [ ] Posicionamento claro (nao timeline)
- [ ] Filosofia e valores presentes
- [ ] Responsivo em mobile

### Projetos
- [ ] Case da Apolus.ai completo
- [ ] Estrutura: Contexto -> Abordagem -> Stack -> Resultado
- [ ] Responsivo em mobile

### Conteudo
- [ ] Pelo menos 1 peca de conteudo
- [ ] Estrutura para adicionar mais
- [ ] Responsivo em mobile

### Navegacao
- [ ] Header funcional em todas as paginas
- [ ] Footer com social links
- [ ] Mobile menu funcional

---

## 6. Fora do Escopo V1

- Sistema de markdown/CMS
- Newsletter/captura de email
- Analytics (pode vir depois)
- Blog com sistema de posts
- Multiplos projetos (so Apolus.ai)
- Internacionalizacao

---

## 7. Rotas

```
/           -> Home
/sobre      -> Sobre
/projetos   -> Projetos
/conteudo   -> Conteudo
```

---

*Documento atualizado em: 27/01/2026*
*Baseado nas decisoes da sessao de planejamento*
