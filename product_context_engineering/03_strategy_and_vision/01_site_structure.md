# Victor's Forge - Estrutura do Site

> Estrutura definitiva de secoes, navegacao e conteudo por pagina.

---

## 1. Visao Geral

### Navegacao Principal

| Secao | Rota | Funcao Principal |
|-------|------|------------------|
| **Home** | `/` | Impacto inicial, identidade, convite a exploracao |
| **Sobre** | `/sobre` | Posicionamento atual como founder/builder |
| **Projetos** | `/projetos` | Demonstracao de execucao |
| **Conteudo** | `/conteudo` | Ensaios, notas, metodologia |

### Principio

Menos > Mais. Cada secao tem funcao clara. Nao ha redundancia.

---

## 2. Home

### Funcao

Impacto inicial. Comunicar identidade em segundos. Gerar curiosidade.

### Elementos

- **Hero**: Identidade visual forte + manifesto/frase central
- **Navegacao clara**: "Tres portas" para outras secoes
- **Preview de valor**: O que o visitante encontrara

### Principios

- Nao precisa ser "completa"
- Deve comunicar quem e Victor em 5 segundos
- Convite a explorar, nao sobrecarga de informacao

### Resultado Esperado

Visitante entende "O que Victor faz" e sente vontade de explorar.

---

## 3. Sobre

### Funcao

Quem e Victor Dias HOJE. Posicionamento, nao biografia.

### Elementos

- **Posicionamento atual**: Co-founder, CPO & Business Builder
- **Filosofia e valores**: Soberania, pragmatismo, resiliencia
- **O que faz**: Construtor de empresas com IA como vantagem

### O Que NAO E

- Timeline historica extensa (Law -> Legal Design -> ...)
- Lista de skills/tecnologias
- Curriculo disfaracado

### Principios

- Foco no PRESENTE e FUTURO, nao no passado
- Posicionamento claro, nao neutro
- Mostra visao, nao lista experiencias

### Resultado Esperado

Visitante entende o posicionamento unico de Victor e o que ele pode oferecer.

---

## 4. Projetos

### Funcao

Demonstracao de execucao. Prova de capacidade.

### Escopo Atual

**Projeto Principal**: Apolus.ai

Foco unico por enquanto. Qualidade > Quantidade.

### Estrutura por Projeto

1. **Contexto/Problema**: O que motivou
2. **Abordagem/Solucao**: Como foi resolvido
3. **Stack/Metodologia**: Tecnologias e metodos usados
4. **Resultado/Impacto**: O que foi alcancado

### Projetos Futuros (quando expandir)

| Projeto | Tipo | Descricao |
|---------|------|-----------|
| Apolus.ai | Produto | Plataforma Legal AI |
| Marketing Generator | Infra | Automacao criativa |
| PCE | Metodologia | Product Context Engineering |
| The Brain | Meta | Sistema de conhecimento |

### Principios

- Mostrar processo, nao so resultado
- Cases reais, nao genericos
- O metodo de construcao importa tanto quanto o que foi construido

### Resultado Esperado

Visitante pensa "Esse cara realmente executa" e ve prova concreta.

---

## 5. Conteudo

### Funcao

Espaco autoral. Compartilhar visao, metodologia, reflexoes.

### Formatos

| Formato | Descricao | Frequencia |
|---------|-----------|------------|
| **Ensaios** | Reflexoes profundas sobre produto, IA, lideranca | Quando tiver algo a dizer |
| **Notas** | Reflexoes rapidas, observacoes, thoughts | Mais frequente |
| **Metodologia** | PCE, Vibe Coding, frameworks praticos | Evergreen |

### O Que NAO E

- Blog com calendario de publicacao forcado
- Reposts do LinkedIn
- Conteudo generico para SEO

### Principios

- Qualidade > Frequencia
- Autoral, com posicao clara
- Mix de formatos conforme o tema
- Vive NO SITE, nao depende de outras plataformas

### Resultado Esperado

Visitante encontra conteudo unico que nao existe em outro lugar.

---

## 6. Arquitetura Tecnica

### Rotas (React Router)

```
/           -> Home
/sobre      -> Sobre
/projetos   -> Projetos
/conteudo   -> Conteudo
/conteudo/:slug -> Artigo individual (futuro)
```

### Componentes de Pagina

```
src/pages/
├── Home/Home.tsx
├── Sobre/Sobre.tsx
├── Projetos/Projetos.tsx
└── Conteudo/Conteudo.tsx
```

### Navegacao

- Header fixo com links para todas as secoes
- Footer minimalista com social links
- Mobile: menu hamburger ou similar

---

## 7. Decisoes de Design

| Aspecto | Decisao |
|---------|---------|
| Numero de paginas | 4 (Home, Sobre, Projetos, Conteudo) |
| Navegacao | Header fixo + Footer |
| Mobile | Responsivo, nao app separado |
| Conteudo | No site, nao em plataformas externas |
| Projetos | Foco unico (Apolus.ai) por enquanto |

---

## 8. Proximas Expansoes (Futuro)

Quando fizer sentido:

1. Adicionar mais projetos a secao Projetos
2. Sistema de tags/categorias no Conteudo
3. Pagina de Metodologia separada (se o conteudo crescer)
4. Newsletter ou forma de captura (se houver demanda)

Por enquanto: manter simples e focado.

---

*Documento criado em: 27/01/2026*
*Baseado nas decisoes da sessao de planejamento*
