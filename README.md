# TailwindLab — Estudo de Tailwind CSS

Projeto desenvolvido para demonstrar a utilização do **Tailwind CSS** na construção de uma interface web responsiva.

O projeto foi desenvolvido utilizando **React, TypeScript, Vite e Tailwind CSS**.

## 📌 Objetivo

O objetivo deste projeto é demonstrar a utilização de diferentes classes utilitárias do Tailwind CSS para estilização de uma aplicação.

Foram utilizados recursos relacionados a:

* Cores
* Tipografia
* Espaçamentos
* Dimensões
* Bordas
* Sombras
* Posicionamento
* Flexbox
* CSS Grid
* Responsividade
* Estados como `hover`
* Transições

---

## 🛠️ Tecnologias utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML
* CSS

---

## 📂 Estrutura do projeto

```text
tailwind-estudos/
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Stats.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Instalação

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd tailwind-estudos
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

---

## 🎨 Classes Tailwind utilizadas

O projeto utiliza mais de 30 classes diferentes do Tailwind CSS.

### Cores

| Classe           | Função            |
| ---------------- | ----------------- |
| `bg-white`       | Fundo branco      |
| `bg-slate-950`   | Fundo escuro      |
| `bg-slate-50`    | Fundo cinza claro |
| `bg-blue-600`    | Fundo azul        |
| `bg-purple-600`  | Fundo roxo        |
| `text-white`     | Texto branco      |
| `text-slate-600` | Texto cinza       |
| `text-slate-900` | Texto escuro      |
| `text-blue-600`  | Texto azul        |

### Tipografia

| Classe            | Função                         |
| ----------------- | ------------------------------ |
| `text-sm`         | Texto pequeno                  |
| `text-xl`         | Texto grande                   |
| `text-3xl`        | Título grande                  |
| `text-4xl`        | Título maior                   |
| `font-medium`     | Peso médio                     |
| `font-semibold`   | Peso semibold                  |
| `font-bold`       | Negrito                        |
| `uppercase`       | Texto em maiúsculo             |
| `tracking-tight`  | Reduz espaçamento das letras   |
| `tracking-widest` | Aumenta espaçamento das letras |
| `leading-6`       | Altura da linha                |
| `leading-8`       | Altura da linha                |

### Espaçamento

| Classe   | Função                            |
| -------- | --------------------------------- |
| `p-6`    | Padding em todos os lados         |
| `px-4`   | Padding horizontal                |
| `px-6`   | Padding horizontal                |
| `py-2`   | Padding vertical                  |
| `py-20`  | Padding vertical                  |
| `mt-3`   | Margem superior                   |
| `mt-4`   | Margem superior                   |
| `mt-6`   | Margem superior                   |
| `mt-8`   | Margem superior                   |
| `mb-12`  | Margem inferior                   |
| `gap-4`  | Espaçamento entre elementos       |
| `gap-6`  | Espaçamento maior entre elementos |
| `gap-12` | Espaçamento grande                |

### Dimensões

| Classe         | Função                          |
| -------------- | ------------------------------- |
| `w-full`       | Ocupa 100% da largura           |
| `h-16`         | Define altura                   |
| `h-12`         | Define altura                   |
| `max-w-xl`     | Define largura máxima           |
| `max-w-2xl`    | Define largura máxima           |
| `max-w-7xl`    | Define largura máxima da página |
| `min-h-screen` | Altura mínima igual à tela      |

### Bordas e sombras

| Classe             | Função                  |
| ------------------ | ----------------------- |
| `border`           | Adiciona borda          |
| `border-b`         | Adiciona borda inferior |
| `border-slate-200` | Define cor da borda     |
| `border-slate-700` | Define borda escura     |
| `rounded-lg`       | Arredondamento          |
| `rounded-xl`       | Arredondamento maior    |
| `rounded-2xl`      | Arredondamento grande   |
| `shadow-sm`        | Sombra pequena          |
| `shadow-lg`        | Sombra grande           |
| `shadow-xl`        | Sombra extra grande     |

### Flexbox

| Classe            | Função                  |
| ----------------- | ----------------------- |
| `flex`            | Ativa Flexbox           |
| `flex-col`        | Organiza em coluna      |
| `flex-row`        | Organiza em linha       |
| `items-center`    | Alinha no centro        |
| `justify-between` | Distribui os elementos  |
| `justify-center`  | Centraliza os elementos |

### Grid

| Classe        | Função                    |
| ------------- | ------------------------- |
| `grid`        | Ativa CSS Grid            |
| `grid-cols-3` | Três colunas              |
| `grid-cols-4` | Quatro colunas            |
| `gap-6`       | Espaçamento entre células |

### Responsividade

O projeto utiliza os breakpoints do Tailwind para adaptar a interface a diferentes tamanhos de tela.

| Classe           | Comportamento                         |
| ---------------- | ------------------------------------- |
| `sm:px-6`        | Altera o padding em telas pequenas    |
| `sm:flex-row`    | Altera Flexbox para linha             |
| `sm:grid-cols-2` | Utiliza duas colunas                  |
| `md:flex`        | Ativa Flexbox em telas médias         |
| `lg:grid-cols-2` | Utiliza duas colunas em telas grandes |
| `lg:grid-cols-4` | Utiliza quatro colunas                |
| `lg:text-6xl`    | Aumenta o tamanho do título           |


---

## 📱 Responsividade

A aplicação foi desenvolvida utilizando os breakpoints do Tailwind CSS.

Em telas menores, os elementos são reorganizados para melhorar a visualização.

Em telas maiores, o Grid apresenta mais colunas e os elementos são distribuídos horizontalmente.

Exemplo:

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

Nesse caso:

* Mobile: 1 coluna
* `sm`: 2 colunas
* `lg`: 4 colunas

