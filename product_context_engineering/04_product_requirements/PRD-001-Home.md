# PRD-001: Reestruturação da Home

> **Status**: Em revisão  
> **Data**: 27/01/2026  
> **Baseado em**: [01_product_vision.md](file:///d:/Victor's%20Forge/Project/victors-forge/product_context_engineering/00_project_context/01_product_vision.md), [Brain Docs](file:///D:/Victor's%20Forge/Project/victors-forge-brain/docs)

---

## Objetivo

Transformar a Home de "layout de apresentação" para **Manifesto de Intenção** — uma página que comunica identidade, posicionamento e metodologia em segundos.

### Resultado Esperado
- Visitante entende **quem é Victor** e **o que é a Forja** em 5 segundos
- Comunicar que isto é um **sistema operacional vivo**, não um portfólio estático
- Criar curiosidade para explorar Projetos e Conteúdo

---

## Arquitetura Proposta

```
┌──────────────────────────────────────┐
│  1. HERO - "A Forja Digital"         │ ← Impacto imediato
├──────────────────────────────────────┤
│  2. O QUE É ESTE LUGAR?              │ ← O "meta-produto" explicado
├──────────────────────────────────────┤
│  3. BRIEF BIO - O Builder            │ ← Quem é Victor HOJE
├──────────────────────────────────────┤
│  4. MOTIVAÇÕES & PILARES             │ ← Por que isso existe
├──────────────────────────────────────┤
│  5. RADAR DE CONTEÚDO (opcional)     │ ← Prova de que o site está vivo
└──────────────────────────────────────┘
```

---

## Detalhamento das Seções

### 1. Hero Section: "Business & AI"

**Objetivo**: Posicionamento Executivo e Estratégico.

| Elemento | Conteúdo |
|----------|----------|
| **Headline** | "Construindo Negócios de Tecnologia na Era da IA" |
| **Sub-headline** | "Estratégia, Produto e Escala. Uma abordagem proprietária para criar ativos soberanos e lucrativos." |
| **CTA Primário** | [ Entenda o Método ] → scroll para seção 2 |
| **CTA Secundário** | [ Ver Projetos ] → link para `/projetos` |
| **Visual** | Manter `principal.svg` (considerar mudar no futuro se destoar do tom business) |

**Feedback do User**: Remover referências excessivas a "Forja" no copy inicial. Tom deve ser de "Business Leader" e não apenas "Builder".

---

### 2. O Que é Este Lugar? (The Tour)

**Objetivo**: Explicar o conceito de "meta-produto" e o PCE.

| Elemento | Conteúdo |
|----------|----------|
| **Título** | "Contexto como Código" |
| **Copy** | "Este site não foi apenas 'codado'. Ele foi engenheirado. Utilizando a metodologia PCE (Product Context Engineering), este ambiente conecta minha visão estratégica diretamente à execução técnica. O que você vê aqui é a prova viva de que é possível construir produtos complexos mantendo a integridade da visão original." |
| **Visual** | Diagrama sutil: `Brain → Context → Code` (pode ser ilustração SVG ou texto estilizado) |

**Decisão pendente**: Diagrama visual ou apenas texto? *(Recomendação: começar só com texto, visual é melhoria futura)*

---

### 3. Brief Bio: O Builder

**Objetivo**: Apresentação rápida focada no HOJE, não no currículo.

| Elemento | Conteúdo |
|----------|----------|
| **Título** | "Founder de Dia, Builder de Noite." |
| **Copy** | "Minha cadeira principal é a de Co-founder da Apolus.ai. Minha rotina envolve navegar a incerteza de criar uma empresa bootstrap, equilibrando decisões de C-Level com a capacidade técnica de 'por a mão na massa' via Vibe Coding. Acredito que a IA é a maior alavanca de soberania individual da nossa geração." |
| **CTA** | "Leia mais sobre minha filosofia" → `/sobre` |
| **Visual** | Reutilizar `anao-perfil.svg` já existente |

**Fonte**: Baseado em [01_quem_sou.md](file:///D:/Victor's%20Forge/Project/victors-forge-brain/docs/01_Sobre_Mim/01_quem_sou.md)

---

### 4. Motivações e Pilares

**Objetivo**: Deixar claro **por que** este projeto existe.

Reformular a "Trilogia da Soberania" atual com copy mais autoral:

| Pilar | Copy Proposto | Ícone |
|-------|---------------|-------|
| **Soberania Intelectual** | "Não terceirizo meu conhecimento para algoritmos de redes sociais. Aqui, eu publico o que penso, como penso, sem filtros de engajamento." | `martelos crizados.svg` |
| **Skin in the Game** | "A melhor forma de mostrar que sei construir é... construindo. Este site é meu laboratório de experimentação técnica e de produto." | `bigorna.svg` |
| **Documentação de Jornada** | "Construir uma empresa é caótico. O Victor's Forge é onde organizo esse caos em aprendizado estruturado." | `fogo.svg` |

**Nota**: Renomear de "Trilogia da Soberania" para representar melhor o propósito.

---

### 5. Radar de Conteúdo (Carrossel)

**Objetivo**: Mostrar que o site está vivo e atualizado.

| Elemento | Conteúdo |
|----------|----------|
| **Título** | "Saindo da Forja" |
| **Conteúdo** | Cards com últimos 3 Working Docs / Ensaios |

> [!IMPORTANT]
> **Decisão: MVP ou Futuro?**  
> Esta seção depende da implementação da página `/conteudo` com dados dinâmicos.  
> **Recomendação**: Deixar para v1.1 e focar nas seções 1-4 agora.

---

## Comparação: Antes vs Depois

| Aspecto | Antes (Atual) | Depois (Proposto) |
|---------|---------------|-------------------|
| Hero | Nome + frase genérica | Headline posicionada + pitch + CTAs |
| Explicação do site | Não existe | Seção dedicada "O Que é Isto" |
| Bio | Seção "Sobre a Forja" genérica | Brief Bio focada no TODAY |
| Pilares | "Trilogia da Soberania" técnica | Pilares com copy autoral/provocativa |
| Prova de vida | Não existe | Radar de conteúdo (futuro) |

---

## Escopo de Implementação

### Incluso nesta versão
- [x] Refatorar Hero Section com novo copy
- [x] Criar seção "O Que é Este Lugar?"
- [x] Criar seção "Brief Bio - O Builder"
- [x] Atualizar pilares com nova copy
- [x] Manter assets SVG existentes

### Exclusões (v1.1+)
- Radar de Conteúdo (depende de `/conteudo`)
- Diagrama visual Brain → Context → Code
- Animações avançadas

---

## Arquivos Afetados

#### [MODIFY] [Home.tsx](file:///d:/Victor's%20Forge/Project/victors-forge/src/pages/Home.tsx)
- Refatorar estrutura das seções
- Atualizar copy conforme definido acima
- Adicionar nova seção "O Que é Este Lugar?"
- Reorganizar "Brief Bio"
- Atualizar copy dos pilares

---

## Plano de Verificação

### Visual
1. Rodar `bun run dev` (já em execução)
2. Acessar `http://localhost:5173` no browser
3. Verificar cada seção com scroll completo
4. Confirmar responsividade em viewport mobile (F12 → responsive)

### Build
```bash
bun run build
```
Deve completar sem erros.

---

*Criado em: 27/01/2026*  
*Referências: 01_product_vision.md, 01_quem_sou.md, 01_visao_futuro.md*
