<h1 align="center">
  <br />
  Portfolio — Rafael Couto Silva
  <br />
</h1>

<p align="center">
  Portfólio pessoal desenvolvido com <strong>Next.js 16</strong>, <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, construído sobre uma arquitetura <strong>Modular MVVM</strong> com SSR habilitado em todos os componentes — e produzido inteiramente com <strong>Programação Orientada por I.A</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/next--intl-4.9-E48B00" alt="next-intl" />
</p>

---

## 🤖 Programação Orientada a I.A — o que é?

**Programação Orientada a I.A (AI-Oriented Programming)** é uma abordagem de desenvolvimento de software onde agentes de inteligência artificial atuam como colaboradores ativos no ciclo de produção — e não apenas como ferramentas de autocomplete.

Diferente do uso passivo de I.A (como pedir uma sugestão pontual de código), a Programação Orientada a I.A estabelece um **fluxo de trabalho estruturado** em que:

- O **desenvolvedor humano** define a visão, a arquitetura, os requisitos e a estratégia;
- Os **agentes de I.A** executam tarefas específicas dentro de um escopo bem delimitado (geração de telas, codificação, revisão de texto, refatoração etc.);
- A **revisão humana** valida cada entrega antes de avançar para a etapa seguinte.

Esse modelo redistribui o esforço cognitivo: o desenvolvedor foca em **decisões estratégicas e julgamento crítico**, enquanto a I.A acelera a execução de tarefas repetitivas ou de alta densidade de código.

### Por que essa abordagem funciona?

| Aspecto | Desenvolvimento tradicional | Programação Orientada a I.A |
|---|---|---|
| Velocidade de execução | Alta dependência manual | Acelerada por agentes especializados |
| Consistência de padrões | Depende da disciplina individual | Reforçada por regras passadas ao agente |
| Foco do desenvolvedor | Código + decisão + execução | Decisão + revisão + arquitetura |
| Qualidade do resultado | Variável conforme o estado mental | Estável dentro do escopo definido |

> A chave está em **não delegar a autoria**, mas sim a **execução**. O desenvolvedor continua sendo o arquiteto; a I.A é o engenheiro que constrói sob sua direção.

---

## 🛠️ Ferramentas de I.A utilizadas neste projeto

Este portfólio foi construído com três agentes distintos, cada um com uma responsabilidade específica dentro do processo de desenvolvimento:

### 🧠 Antigravity — Geração e Manutenção de Código

[Antigravity](https://antigravity.dev) foi o agente principal de desenvolvimento. Responsável por toda a codificação do projeto, incluindo:

- Implementação da arquitetura Modular MVVM no Next.js App Router;
- Criação dos componentes de feature (`home`, `layout`) e dos componentes de `core`;
- Configuração do sistema de internacionalização com `next-intl`;
- Refatorações, ajustes de responsividade e correções de linting/type-check.

O Antigravity recebe instruções em linguagem natural e as traduz em código TypeScript/TSX aderente às regras do projeto, respeitando restrições rígidas como: zero hooks, zero `"use client"`, SSR em todos os componentes.

---

### 🎨 Stitch — Design de Telas Base

[Stitch](https://stitch.withgoogle.com) foi a ferramenta utilizada para criar o design visual das telas. As telas geradas pelo Stitch estão disponíveis no diretório [`/documents/screens`](./documents/screens) e serviram como referência visual e estrutural para o desenvolvimento dos componentes.

As seções do portfólio cobertas pelo Stitch:

| Tela | Arquivo de design |
|---|---|
| Home / Hero Section | `home.png` / `home.html` |
| Sobre Mim | `sobre-mim.png` / `sobre-mim.html` |
| Habilidades & Projetos | `skills-projetos.png` / `skills-projetos.html` |
| Contato | `contato.png` / `contato.html` |

O design gerado pelo Stitch definiu a paleta de cores, tipografia, espaçamentos e hierarquia visual — que o Antigravity então implementou como componentes React Server Components.

---

### ✍️ Claude Code — Elaboração de Textos

[Claude Code](https://claude.ai/code) foi utilizado para elaboração, refinamento e revisão dos textos presentes no portfólio — incluindo as descrições das seções "Sobre", "Eficiência", "Colaboração" e "A Essência Criativa". Esse agente garantiu que os textos fossem claros, coesos e alinhados com a identidade profissional do portfólio.

---

## 📐 Arquitetura — Modular MVVM com SSR

O projeto aplica uma arquitetura **Modular MVVM** (Model–View–ViewModel) adaptada ao paradigma do Next.js App Router, com as seguintes premissas inegociáveis:

- **SSR sempre ativo** — todos os componentes são Server Components por padrão;
- **Zero hooks** — nenhum `use*` é permitido;
- **Zero estado client-side** — sem `useState`, `useContext`, Zustand ou similares;
- **Textos via i18n** — nenhuma string hardcoded nos componentes; tudo em `messages/pt.json`.

```
/
├── app/                   → Apenas rotas Next.js (page.tsx, layout.tsx)
├── src/
│   ├── feature/           → Módulos de domínio (home, layout)
│   │   └── [feature]/
│   │       └── view/      → Componentes visuais (Server Components)
│   └── core/              → Componentes e utilitários globais
├── messages/
│   └── pt.json            → Todos os textos visíveis da aplicação
└── documents/
    └── screens/           → Telas geradas pelo Stitch (referência visual)
```

### Camadas MVVM

| Camada | Localização | Responsabilidade |
|---|---|---|
| Model | `feature/[name]/model/` | Tipos da API e funções de fetch |
| Controller | `feature/[name]/controller/` | Transformação de dados e Server Actions |
| View | `feature/[name]/view/` | Componentes visuais puros e i18n |

> **Model e Controller só existem quando há API envolvida.**

---

## 🚀 Stack Tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2 | Framework principal (App Router + SSR) |
| [React](https://react.dev) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipagem estática (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilização utility-first |
| [next-intl](https://next-intl-docs.vercel.app) | 4.9 | Internacionalização (i18n) com suporte a SSR |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Composição condicional de classes |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.5 | Resolução de conflitos de classes Tailwind |

---

## ▶️ Rodando o Projeto

### Pré-requisitos

- Node.js 20+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rafaelcsilvadev/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev          # Servidor local em localhost:3000
npm run build        # Build de produção
npm run start        # Servidor de produção (após build)
npm run lint         # ESLint
npm run type-check   # tsc --noEmit (verificação de tipos)
```

---

## 🧩 Seções do Portfólio

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação principal com nome, título e call-to-actions |
| **Sobre** | Cards narrativos: jornada, eficiência, colaboração e criatividade |
| **Habilidades** | Arsenal tecnológico: Flutter, .NET, Nest.js, Angular e React |
| **Contatos** | Canal direto (e-mail) e redes sociais (LinkedIn / GitHub) |

---

## 📁 Estrutura de Features

```
src/feature/
├── home/
│   └── view/
│       ├── HomePage.tsx       → Componente raiz da página
│       ├── HeroSection.tsx    → Seção hero
│       ├── AboutSection.tsx   → Seção sobre mim
│       ├── SkillsSection.tsx  → Seção habilidades
│       └── ContactSection.tsx → Seção contatos
└── layout/
    └── view/
        ├── Header.tsx         → Navegação principal
        └── Footer.tsx         → Rodapé
```

---

## 🌐 Internacionalização

Todo o conteúdo textual visível está em `messages/pt.json`, organizado por namespace:

```json
{
  "nav": { ... },
  "common": { ... },
  "home": { ... },
  "about": { ... },
  "skills": { ... },
  "contact": { ... }
}
```

Nos componentes, sempre via `getTranslations` (server-side):

```ts
import { getTranslations } from 'next-intl/server'

const t = await getTranslations('about')
t('title') // → "Além do Código"
```

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência ou inspiração.

---

<p align="center">
  Feito com foco, eficiência e um time de agentes de I.A bem treinados. 🤖
  <br />
  <a href="https://github.com/rafaelcsilvadev">GitHub</a> · <a href="https://www.linkedin.com/in/rafa-couto">LinkedIn</a>
</p>
