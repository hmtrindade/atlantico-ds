# AI_RULES.md — Atlântico DS: Regras Obrigatórias para Geração de Código

> **Este documento é vinculante.** Qualquer código gerado por IA para este projeto deve seguir
> estas regras sem exceção. Violações devem ser corrigidas antes de qualquer commit.

---

## 0. Princípio Fundamental

O Atlântico DS é um Design System centralizado. Toda interface deve ser construída **a partir
dos blocos existentes**, não do zero. A IA nunca inventa componentes, tokens, cores ou layouts
quando o equivalente já existe no sistema.

**Regra de ouro:** Se você está escrevendo CSS inline, cor hex, Tailwind de cor direta
(`blue-500`, `gray-200`) ou duplicando estrutura de layout — você está errado. Pare e corrija.

---

## 1. Componentes de UI — Uso Obrigatório

### 1.1 Inventário de componentes disponíveis

Antes de criar qualquer elemento visual, verifique se já existe:

| Necessidade            | Componente correto                                    | Importação                              |
|------------------------|-------------------------------------------------------|-----------------------------------------|
| Botão / ação           | `<Button>`                                            | `@/components/ui/button`                |
| Rótulo de status       | `<Badge>`                                             | `@/components/ui/badge`                 |
| Caixa de conteúdo      | `<Card>`, `<CardHeader>`, `<CardContent>`, `<CardFooter>` | `@/components/ui/card`              |
| Imagem/iniciais usuário| `<Avatar>`                                            | `@/components/ui/avatar`                |
| Campo de texto         | `<Input>`                                             | `@/components/ui/input`                 |
| Cabeçalho de página    | `<PageHeader>`                                        | `@/components/shared/PageHeader`        |
| KPI / métrica          | `<StatCard>`                                          | `@/components/shared/StatCard`          |
| Estado vazio           | `<EmptyState>`                                        | `@/components/shared/EmptyState`        |

### 1.2 Proibição de reimplementação

```tsx
// ❌ PROIBIDO — nunca reimplemente um componente que já existe
function MyButton({ children }: { children: React.ReactNode }) {
  return (
    <button style={{ background: '#1d4ed8', color: 'white', borderRadius: 8 }}>
      {children}
    </button>
  )
}

// ✅ CORRETO — use sempre o componente do sistema
import { Button } from '@/components/ui/button'
<Button variant="primary">Salvar</Button>
```

```tsx
// ❌ PROIBIDO — badge manual
<span className="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-xs">
  Aprovado
</span>

// ✅ CORRETO
import { Badge } from '@/components/ui/badge'
<Badge variant="success" dot>Aprovado</Badge>
```

```tsx
// ❌ PROIBIDO — card manual
<div className="bg-white rounded-xl shadow p-5 border border-gray-200">
  ...
</div>

// ✅ CORRETO
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
<Card>
  <CardHeader><CardTitle>Título</CardTitle></CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### 1.3 Extensão de componentes existentes

Quando precisar de variação não prevista, **estenda via `className`**, nunca substitua:

```tsx
// ✅ CORRETO — extensão via prop className
<Card className="border-l-4 border-l-primary">
  ...
</Card>

<Button variant="outline" className="w-full">
  Texto
</Button>
```

---

## 2. Estilos Inline — Absolutamente Proibido

A prop `style` é **banida** em 100% dos casos, sem exceção.

```tsx
// ❌ PROIBIDO
<div style={{ marginTop: 24, padding: '16px 20px', fontSize: 14 }}>

// ❌ PROIBIDO
<p style={{ color: '#64748b', fontWeight: 500 }}>

// ❌ PROIBIDO — mesmo que seja "só um valor"
<div style={{ width: '256px' }}>

// ✅ CORRETO — tudo via classes Tailwind com tokens
<div className="mt-6 px-5 py-4 text-sm">
<p className="text-foreground-muted font-medium">
<div className="w-64">
```

**Única exceção aceita:** valores genuinamente dinâmicos calculados em runtime que não
podem ser expressos por classes Tailwind, como barras de progresso com percentual variável.
Mesmo assim, use CSS custom properties:

```tsx
// ✅ ACEITO — valor dinâmico como CSS variable, não como style direto
<div
  className="h-1.5 rounded-full bg-primary/70 transition-all duration-500"
  style={{ width: `${percent}%` }}   // ← única exceção tolerada
/>
```

---

## 3. Cores Hardcoded — Absolutamente Proibido

**Nunca escreva valores de cor diretamente** — nem hex, nem RGB, nem nomes CSS,
nem utilitários Tailwind de cor bruta.

```tsx
// ❌ PROIBIDO — hex direta
className="bg-[#1d4ed8]"
className="text-[#64748b]"
className="border-[#e2e8f0]"

// ❌ PROIBIDO — utilitário Tailwind de cor sem semântica
className="bg-blue-600"
className="text-gray-500"
className="border-slate-200"
className="bg-green-100 text-green-800"

// ❌ PROIBIDO — cor no style
style={{ color: 'rgb(100, 116, 139)' }}
style={{ backgroundColor: 'white' }}

// ✅ CORRETO — sempre tokens semânticos
className="bg-primary"
className="text-foreground-muted"
className="border-border"
className="bg-success-bg text-success"
```

### 3.1 Mapeamento cores → tokens obrigatório

| Intenção visual           | Token obrigatório           | Classe Tailwind             |
|---------------------------|-----------------------------|-----------------------------|
| Fundo da aplicação        | `--background`              | `bg-background`             |
| Fundo de card/painel      | `--surface`                 | `bg-surface`                |
| Fundo sutil               | `--surface-subtle`          | `bg-surface-subtle`         |
| Fundo apagado             | `--surface-muted`           | `bg-surface-muted`          |
| Texto principal           | `--foreground`              | `text-foreground`           |
| Texto secundário          | `--foreground-muted`        | `text-foreground-muted`     |
| Texto terciário           | `--foreground-subtle`       | `text-foreground-subtle`    |
| Texto desabilitado        | `--foreground-disabled`     | `text-foreground-disabled`  |
| Cor primária / brand      | `--primary`                 | `bg-primary`, `text-primary`|
| Texto sobre primário      | `--primary-foreground`      | `text-primary-foreground`   |
| Fundo primário suave      | `--primary-muted`           | `bg-primary-muted`          |
| Secundário                | `--secondary`               | `bg-secondary`              |
| Texto secundário          | `--secondary-foreground`    | `text-secondary-foreground` |
| Borda padrão              | `--border`                  | `border-border`             |
| Borda forte               | `--border-strong`           | `border-border-strong`      |
| Fundo sidebar             | `--sidebar`                 | `bg-sidebar`                |
| Texto sidebar             | `--sidebar-foreground`      | `text-sidebar-foreground`   |
| Texto sidebar ativo       | `--sidebar-foreground-active`| `text-sidebar-foreground-active`|
| Sucesso                   | `--success`                 | `text-success`              |
| Fundo sucesso             | `--success-bg`              | `bg-success-bg`             |
| Aviso                     | `--warning`                 | `text-warning`              |
| Fundo aviso               | `--warning-bg`              | `bg-warning-bg`             |
| Erro/destrutivo           | `--destructive`             | `text-destructive`          |
| Fundo erro                | `--destructive-bg`          | `bg-destructive-bg`         |
| Informação                | `--info`                    | `text-info`                 |
| Fundo informação          | `--info-bg`                 | `bg-info-bg`                |
| Ring / foco               | `--ring`                    | `ring-ring`                 |

### 3.2 Adicionar novos tokens

Se precisar de uma cor que não existe na tabela acima:

1. Adicione a CSS custom property em `:root` **e** `.dark` no arquivo `src/styles/globals.css`
2. Mapeie via `@theme inline`
3. Só então use a nova classe nos componentes

**Nunca use uma cor ad-hoc e não registrada.**

---

## 4. Tokens Semânticos — Obrigatoriedade Total

Tokens semânticos descrevem **intenção**, não aparência. Use o token que descreve o
propósito do elemento, não a cor que você quer ver.

```tsx
// ❌ ERRADO — descreve aparência
className="text-slate-600"   // "quero um texto cinza"
className="bg-blue-50"       // "quero um fundo azul claro"

// ✅ CORRETO — descreve intenção
className="text-foreground-muted"   // "este é um texto de suporte"
className="bg-primary-muted"        // "este é o fundo suave da cor primária"
```

### 4.1 Opacidade via modificador Tailwind

Quando precisar de variação de opacidade de um token, use o modificador `/`:

```tsx
// ✅ CORRETO — opacidade via modificador
className="bg-primary/10"       // 10% de opacidade do primário
className="bg-foreground/5"     // fundo overlay muito suave
className="border-primary/30"   // borda primária translúcida
```

---

## 5. Reutilização de Layout — Obrigatório

### 5.1 Toda página administrativa usa AdminLayout

Nenhuma página cria seu próprio layout. O `AdminLayout` já fornece sidebar + topbar + área de conteúdo.

```tsx
// src/app/Router.tsx — padrão estabelecido
<Route element={<AdminLayout />}>
  <Route index element={<DashboardPage />} />
  <Route path="nova-pagina" element={<NovaPagina />} />  // ← adicione aqui
</Route>
```

```tsx
// ❌ PROIBIDO — página com layout próprio
export function NovaPagina() {
  return (
    <div className="flex">
      <nav>...</nav>        {/* reimplementando sidebar */}
      <header>...</header>  {/* reimplementando topbar */}
      <main>...</main>
    </div>
  )
}

// ✅ CORRETO — página recebe o layout via Outlet, foca só no conteúdo
export function NovaPagina() {
  return (
    <div className="space-y-6">
      <PageHeader title="Nova Página" />
      {/* apenas conteúdo da página */}
    </div>
  )
}
```

### 5.2 Estrutura interna de página

Toda página deve seguir esta estrutura de topo para baixo:

```tsx
export function MinhaPage() {
  return (
    <div className="space-y-6">
      {/* 1. Cabeçalho obrigatório */}
      <PageHeader
        title="Título da Página"
        description="Descrição opcional"
        actions={<Button>Ação primária</Button>}
      />

      {/* 2. KPIs (quando aplicável) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard ... />
      </div>

      {/* 3. Conteúdo principal em grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">...</Card>
        <Card>...</Card>
      </div>
    </div>
  )
}
```

### 5.3 Sidebar e Topbar — não modifique sem justificativa

A sidebar e a topbar são componentes de infraestrutura. Só os modifique quando:
- Adicionar nova rota de navegação (adicione em `NAV` em `src/layout/Sidebar/Sidebar.tsx`)
- Adicionar item de ação global na topbar

Nunca adicione lógica de negócio dentro da sidebar ou topbar.

---

## 6. Padrões de Espaçamento

Use **exclusivamente a escala de espaçamento do Tailwind**. Nunca use valores arbitrários
para espaçamento comum.

### 6.1 Escala de referência

| Uso                              | Classe              | Valor    |
|----------------------------------|---------------------|----------|
| Espaço mínimo entre elementos    | `gap-1` / `p-1`     | 4px      |
| Espaço interno de badge/tag      | `px-2 py-0.5`       | 8px/2px  |
| Espaço interno de botão sm       | `px-3 py-1.5`       | 12px/6px |
| Espaço interno de botão padrão   | `px-4 py-2`         | 16px/8px |
| Espaço entre itens de lista      | `gap-2` / `space-y-2`| 8px    |
| Padding interno de card          | `p-5`               | 20px     |
| Gap entre cards/seções           | `gap-4`             | 16px     |
| Gap entre seções maiores         | `gap-6`             | 24px     |
| Margem entre seções de página    | `space-y-6`         | 24px     |
| Espaço vertical generoso         | `py-8` / `mt-8`     | 32px     |
| Padding de página principal      | `p-6`               | 24px     |

```tsx
// ❌ PROIBIDO — valores arbitrários para espaçamento convencional
className="mt-[24px]"
className="gap-[18px]"
className="p-[20px]"

// ✅ CORRETO
className="mt-6"
className="gap-4"
className="p-5"
```

### 6.2 Padrão de espaçamento vertical de página

```tsx
// ✅ SEMPRE use space-y-6 como wrapper da página
<div className="space-y-6">
  <PageHeader ... />
  <div className="grid ...">...</div>
  <Card>...</Card>
</div>
```

---

## 7. Padrões de Tipografia

### 7.1 Hierarquia tipográfica

| Contexto                          | Classes obrigatórias                          |
|-----------------------------------|-----------------------------------------------|
| Título principal de página        | `text-xl font-semibold text-foreground`        |
| Título de card/seção              | `text-sm font-semibold text-foreground`        |
| Label de KPI / rótulo             | `text-xs font-medium text-foreground-muted uppercase tracking-wider` |
| Valor de KPI / número grande      | `text-2xl font-semibold text-foreground leading-none tracking-tight` |
| Corpo de texto principal          | `text-sm text-foreground`                     |
| Texto de suporte / descrição      | `text-sm text-foreground-muted`               |
| Texto terciário / hint            | `text-xs text-foreground-subtle`              |
| Texto desabilitado                | `text-sm text-foreground-disabled`            |
| Código / ID / referência          | `font-mono text-xs text-foreground-muted`     |
| Label de coluna de tabela         | `text-xs font-medium text-foreground-muted uppercase tracking-wider` |
| Texto de célula de tabela         | `text-sm text-foreground`                     |

```tsx
// ❌ PROIBIDO
<h2 className="text-lg font-bold text-gray-900">Título</h2>
<p className="text-sm text-gray-500">Descrição</p>
<span className="text-xs text-blue-600 font-semibold uppercase">LABEL</span>

// ✅ CORRETO
<h2 className="text-xl font-semibold text-foreground">Título</h2>
<p className="text-sm text-foreground-muted">Descrição</p>
<span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">LABEL</span>
```

### 7.2 Peso de fonte

| Uso                    | Classe          |
|------------------------|-----------------|
| Texto corrido          | `font-normal`   |
| Labels / suporte       | `font-medium`   |
| Títulos / destaques    | `font-semibold` |
| Nunca use              | `font-bold` / `font-extrabold` em UI de dados |

### 7.3 Proibições tipográficas

```tsx
// ❌ PROIBIDO
className="text-[14px]"           // tamanho arbitrário
className="font-[500]"            // peso arbitrário
className="leading-[1.4]"         // line-height arbitrário
className="tracking-[0.05em]"     // tracking arbitrário

// ✅ CORRETO — escala semântica Tailwind
className="text-sm"
className="font-medium"
className="leading-relaxed"
className="tracking-wide"
```

---

## 8. Padrões de Sidebar e Topbar

### 8.1 Adicionar nova rota à sidebar

Edite **somente** o array `NAV` em `src/layout/Sidebar/Sidebar.tsx`:

```tsx
// ✅ CORRETO — adicionar item à seção existente
{
  label: 'Principal',
  items: [
    { label: 'Dashboard',   href: '/',            icon: LayoutDashboard },
    { label: 'Analytics',   href: '/analytics',   icon: BarChart3 },
    { label: 'Novo Módulo', href: '/novo-modulo', icon: IconApropiado }, // ← adicione aqui
  ],
},
```

**Regras do item de navegação:**
- `label`: capitalizado, conciso (máx. 2 palavras)
- `href`: sempre kebab-case, nunca com trailing slash (exceto `/`)
- `icon`: sempre do pacote `lucide-react`
- `badge`: apenas quando houver contagem relevante e dinâmica

### 8.2 Sidebar não recebe lógica de negócio

```tsx
// ❌ PROIBIDO — lógica de negócio na sidebar
function Sidebar() {
  const { data: notifications } = useQuery(...)  // API call na sidebar
  const userPermissions = usePermissions()        // lógica de auth na sidebar
}

// ✅ CORRETO — sidebar é puramente estrutural
// Dados dinâmicos (ex: badge count) devem vir de props ou context global
```

### 8.3 Topbar não duplica elementos da página

Botões de ação, filtros e buscas específicos de uma página pertencem ao `<PageHeader>`,
não à Topbar.

```tsx
// ❌ PROIBIDO — ação de página na topbar
function Topbar() {
  return <header>
    ...
    <Button>Exportar Relatório</Button>   {/* específico de uma página */}
  </header>
}

// ✅ CORRETO — ação fica no PageHeader da página
<PageHeader
  title="Relatórios"
  actions={<Button>Exportar Relatório</Button>}
/>
```

---

## 9. Acessibilidade — Obrigatório

### 9.1 Elementos interativos

Todo elemento clicável que não seja `<button>` ou `<a>` é proibido sem justificativa
explícita. Se precisar de div clicável, use `role="button"` + `tabIndex={0}` + handler de teclado.

```tsx
// ❌ PROIBIDO
<div onClick={handleClick} className="cursor-pointer">Clique aqui</div>

// ✅ CORRETO
<button onClick={handleClick} className="...">Clique aqui</button>
// ou
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={e => e.key === 'Enter' && handleClick()}
  className="cursor-pointer"
>
  Clique aqui
</div>
```

### 9.2 Labels obrigatórios

```tsx
// ❌ PROIBIDO — ícone sem descrição
<button><Bell className="h-4 w-4" /></button>

// ✅ CORRETO — sempre aria-label em botões de ícone
<button aria-label="Notificações"><Bell className="h-4 w-4" /></button>

// ❌ PROIBIDO — imagem sem alt
<img src={user.avatar} />

// ✅ CORRETO
<img src={user.avatar} alt={`Foto de ${user.name}`} />
// ou, se decorativo:
<img src={decoration} alt="" role="presentation" />
```

### 9.3 Hierarquia de headings

Cada página deve ter exatamente **um** `<h2>` como título principal (fornecido pelo `PageHeader`).
Sub-seções usam `<h3>`. Nunca pule níveis.

```tsx
// ❌ PROIBIDO
<h1>Dashboard</h1>    {/* h1 é reservado ao app shell */}
<h4>Sub-seção</h4>    {/* pulando h3 */}

// ✅ CORRETO — PageHeader gera o h2, CardTitle gera h3
<PageHeader title="Dashboard" />     {/* → <h2> */}
<CardTitle>Transações</CardTitle>    {/* → <h3> */}
```

### 9.4 Contraste mínimo

Nunca combine tokens de texto e fundo que gerem contraste insuficiente:

```tsx
// ❌ PROIBIDO — contraste insuficiente
className="text-foreground-subtle bg-surface-muted"  // muito baixo

// ✅ CORRETO — mínimo WCAG AA
className="text-foreground-muted bg-surface"
className="text-foreground bg-surface-muted"
```

### 9.5 Estados de foco

Nunca remova o outline de foco sem substituí-lo:

```tsx
// ❌ PROIBIDO
className="focus:outline-none"     // sem alternativa

// ✅ CORRETO — troque pelo ring do sistema
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### 9.6 Textos em português

Toda interface visível ao usuário deve estar em português (pt-BR).
Comentários de código podem ser em inglês.

```tsx
// ❌ PROIBIDO
<Button>Save</Button>
<Badge>Approved</Badge>
<EmptyState title="No results found" />

// ✅ CORRETO
<Button>Salvar</Button>
<Badge>Aprovado</Badge>
<EmptyState title="Nenhum resultado encontrado" />
```

---

## 10. Responsividade

### 10.1 Mobile-first obrigatório

Escreva o estilo base para mobile e use prefixos de breakpoint para telas maiores.

```tsx
// ❌ PROIBIDO — desktop-first
className="grid-cols-4 sm:grid-cols-2 xs:grid-cols-1"

// ✅ CORRETO — mobile-first
className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
```

### 10.2 Breakpoints do sistema

| Prefixo | Largura mínima | Uso típico                      |
|---------|----------------|---------------------------------|
| (base)  | 0px            | Mobile portrait                 |
| `sm:`   | 640px          | Mobile landscape / tablet       |
| `md:`   | 768px          | Tablet / desktop pequeno        |
| `lg:`   | 1024px         | Desktop padrão                  |
| `xl:`   | 1280px         | Desktop largo                   |
| `2xl:`  | 1536px         | Monitores grandes               |

### 10.3 Grids responsivos padronizados

```tsx
// KPI cards — padrão obrigatório
className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"

// Layout com sidebar lateral de conteúdo — padrão obrigatório
className="grid grid-cols-1 gap-6 lg:grid-cols-3"
// (conteúdo principal: lg:col-span-2, sidebar: lg:col-span-1)

// Grid de dois itens iguais
className="grid grid-cols-1 gap-6 md:grid-cols-2"

// Grid de três itens iguais
className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
```

### 10.4 Elementos que devem se ocultar em mobile

```tsx
// Colunas de tabela não-críticas
<td className="hidden sm:table-cell">...</td>

// Texto complementar na topbar
<span className="hidden md:inline">Nome do usuário</span>

// Atalho de teclado
<kbd className="hidden sm:inline-flex">⌘K</kbd>
```

### 10.5 Scroll horizontal em tabelas

Tabelas em mobile devem ter scroll horizontal, nunca quebrar o layout:

```tsx
// ✅ CORRETO
<div className="overflow-x-auto">
  <table className="w-full min-w-[600px]">...</table>
</div>
```

---

## 11. Arquitetura e Estrutura de Pastas

### 11.1 Onde cada arquivo deve viver

```
src/
├── app/              Apenas: App.tsx, Router.tsx, Providers.tsx
├── components/
│   ├── ui/           Primitivos do DS (Button, Badge, Card…) — sem lógica de negócio
│   └── shared/       Componentes compostos reutilizáveis (PageHeader, StatCard…)
├── features/         Módulos de feature com componentes específicos de domínio
│   └── [feature]/
│       ├── components/
│       ├── hooks/
│       └── types.ts
├── hooks/            Hooks genéricos reutilizáveis em toda a aplicação
├── layout/           Apenas componentes de infraestrutura de layout
├── lib/              Utilitários puros (cn, formatadores, helpers)
├── pages/            Um arquivo por rota — componente de orquestração apenas
├── styles/           Apenas globals.css — nenhum outro arquivo CSS aqui
└── types/            Tipos TypeScript globais compartilhados
```

### 11.2 Regras por pasta

**`pages/`** — Componente de orquestração. Não contém lógica complexa.
Delega para componentes de `features/` ou `components/shared/`.

```tsx
// ✅ CORRETO — página é só orquestração
export function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" actions={<CustomerActions />} />
      <CustomerFilters />
      <CustomerTable />
    </div>
  )
}
```

**`components/ui/`** — Zero dependência de lógica de negócio ou dados.
Aceita apenas props de apresentação. Nunca faz chamadas de API.

**`features/`** — Use quando um componente é específico de um domínio
(ex: `CustomerTable` é de `features/customers/`, não de `components/shared/`).

### 11.3 Novos arquivos CSS são proibidos

```
// ❌ PROIBIDO
src/components/ui/button.module.css
src/pages/dashboard/dashboard.css
src/features/customers/styles.css

// ✅ CORRETO — tudo via Tailwind, sem arquivos CSS avulsos
```

---

## 12. Convenções de Nomes

### 12.1 Arquivos e pastas

| Tipo                  | Convenção         | Exemplo                          |
|-----------------------|-------------------|----------------------------------|
| Componente React      | `PascalCase.tsx`  | `CustomerTable.tsx`              |
| Hook                  | `use-kebab.ts`    | `use-customer-filters.ts`        |
| Utilitário / lib      | `kebab-case.ts`   | `format-currency.ts`             |
| Tipos TypeScript      | `kebab-case.ts`   | `customer.types.ts`              |
| Pasta de feature      | `kebab-case/`     | `features/customer-management/`  |
| Pasta de página       | `kebab-case/`     | `pages/not-found/`               |

### 12.2 Variáveis e funções

```tsx
// ✅ Componentes: PascalCase
export function CustomerTable() { ... }
export const Badge = forwardRef(...)

// ✅ Hooks: camelCase com prefixo "use"
export function useCustomerFilters() { ... }

// ✅ Handlers: camelCase com prefixo "handle"
function handleSubmit() { ... }
function handleRowClick(id: string) { ... }

// ✅ Constantes de módulo: SCREAMING_SNAKE_CASE
const MAX_PAGE_SIZE = 50
const STATUS_CONFIG: Record<TxStatus, ...> = { ... }

// ✅ Variáveis e props: camelCase
const isLoading = true
const onToggle = () => { ... }
```

### 12.3 Props de componentes

```tsx
// ✅ Eventos: sempre prefixo "on"
interface ButtonProps {
  onClick?: () => void      // ✅
  onFocus?: () => void      // ✅
  handleClick?: () => void  // ❌
  clicked?: () => void      // ❌
}

// ✅ Booleanos: prefixo "is", "has", "can", "should"
interface CardProps {
  isLoading?: boolean   // ✅
  hasError?: boolean    // ✅
  loading?: boolean     // ❌
  error?: boolean       // ❌ (ambíguo — pode ser o objeto de erro)
}
```

---

## 13. Composição vs. Duplicação

### 13.1 Regra das três ocorrências

Se um padrão visual aparece **3 ou mais vezes**, ele deve virar um componente.
Se aparece 1 ou 2 vezes, pode ser inline.

```tsx
// ❌ PROIBIDO — mesmo padrão repetido 3x na mesma tela
<div className="flex items-center gap-2">
  <div className="h-2 w-2 rounded-full bg-success" />
  <span className="text-sm text-foreground">Ativo</span>
</div>
<div className="flex items-center gap-2">
  <div className="h-2 w-2 rounded-full bg-warning" />
  <span className="text-sm text-foreground">Pendente</span>
</div>
<div className="flex items-center gap-2">
  <div className="h-2 w-2 rounded-full bg-destructive" />
  <span className="text-sm text-foreground">Inativo</span>
</div>

// ✅ CORRETO — já existe o componente certo
<Badge variant="success" dot>Ativo</Badge>
<Badge variant="warning" dot>Pendente</Badge>
<Badge variant="danger"  dot>Inativo</Badge>
```

### 13.2 Composição de componentes existentes

```tsx
// ❌ PROIBIDO — reimplementar o que Card já faz
function StatusPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
      {children}
    </div>
  )
}

// ✅ CORRETO — compor com Card
function StatusPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
```

### 13.3 Extensão de variantes existentes

Antes de criar um novo componente, verifique se as props `variant`, `size` e `className`
do componente existente já resolvem o problema.

```tsx
// ❌ PROIBIDO — novo componente para variação pequena
function DangerButton({ children }: { children: React.ReactNode }) {
  return <button className="bg-red-600 text-white px-4 py-2 rounded">{children}</button>
}

// ✅ CORRETO — variante já existe
<Button variant="danger">Excluir</Button>
```

---

## 14. Protocolo para Geração de Novas Telas

Ao criar uma nova tela/página, siga este checklist em ordem:

### Passo 1 — Criar a rota

```tsx
// src/app/Router.tsx
<Route path="meu-modulo" element={<MeuModuloPage />} />
```

### Passo 2 — Criar a entrada na sidebar

```tsx
// src/layout/Sidebar/Sidebar.tsx — array NAV
{ label: 'Meu Módulo', href: '/meu-modulo', icon: IconeApropiado }
```

### Passo 3 — Criar o arquivo da página

```
src/pages/meu-modulo/MeuModuloPage.tsx
```

### Passo 4 — Estrutura mínima obrigatória da página

```tsx
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MeuModuloPage() {
  return (
    <div className="space-y-6">
      {/* 1. Sempre começa com PageHeader */}
      <PageHeader
        title="Nome do Módulo"
        description="Descrição do propósito desta seção"
        actions={
          <Button variant="primary" size="sm">
            Ação Principal
          </Button>
        }
      />

      {/* 2. KPIs (se o módulo tiver métricas) */}
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"> */}

      {/* 3. Conteúdo principal em Card */}
      <Card>
        <CardHeader>
          <CardTitle>Seção Principal</CardTitle>
        </CardHeader>
        <CardContent>
          {/* conteúdo */}
        </CardContent>
      </Card>
    </div>
  )
}
```

### Passo 5 — Checklist de validação antes de finalizar

- [ ] Nenhum `style={{}}` no arquivo
- [ ] Nenhuma cor hex ou Tailwind de cor bruta (`blue-*`, `gray-*`, `green-*`)
- [ ] Todos os textos visíveis estão em português
- [ ] Todos os botões de ícone têm `aria-label`
- [ ] Grid usa classes responsivas (`grid-cols-1 ... lg:grid-cols-X`)
- [ ] Importações usam alias `@/` (nunca `../../`)
- [ ] Componentes de UI importados de `@/components/ui`
- [ ] Componentes shared importados de `@/components/shared`

---

## 15. Anti-Padrões — O Que NUNCA Fazer

### ❌ Criar estilos CSS em arquivo separado

```css
/* ❌ NUNCA crie arquivos como este */
/* src/pages/dashboard/dashboard.css */
.dashboard-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
}
```

### ❌ Usar Tailwind como "shorthand de CSS" sem semântica

```tsx
// ❌ PROIBIDO — Tailwind usado para simular estilos inline
className="bg-[#ffffff] text-[#0f172a] rounded-[8px] p-[20px]"

// ✅ CORRETO
className="bg-surface text-foreground rounded-lg p-5"
```

### ❌ `className` com dezenas de classes sem organização

```tsx
// ❌ PROIBIDO — ilegível e impossível de revisar
className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 shadow-sm text-sm font-medium text-gray-900"

// ✅ CORRETO — use cn() para organizar por categoria
className={cn(
  // layout
  'flex items-center justify-between gap-2',
  // aparência
  'bg-surface border border-border rounded-xl',
  // espaçamento
  'px-4 py-3',
  // interação
  'hover:bg-surface-subtle cursor-pointer transition-colors',
  // tipografia
  'text-sm font-medium text-foreground',
)}
```

### ❌ Lógica de dados em componentes de UI

```tsx
// ❌ PROIBIDO — componente UI fazendo fetch
function CustomerBadge({ userId }: { userId: string }) {
  const { data } = useFetch(`/api/users/${userId}`)  // ← errado aqui
  return <Badge>{data?.status}</Badge>
}

// ✅ CORRETO — dados passados por props
function CustomerBadge({ status }: { status: string }) {
  return <Badge variant="success">{status}</Badge>
}
```

### ❌ Hard-coded text em inglês na interface

```tsx
// ❌ PROIBIDO
<EmptyState title="No data available" description="Try adjusting your filters" />
<Button>Cancel</Button>
<p>Loading...</p>

// ✅ CORRETO
<EmptyState title="Nenhum dado disponível" description="Tente ajustar os filtros" />
<Button variant="outline">Cancelar</Button>
<p className="text-sm text-foreground-muted">Carregando...</p>
```

### ❌ Importações com caminhos relativos longos

```tsx
// ❌ PROIBIDO
import { Button } from '../../../components/ui/button'
import { cn } from '../../../../lib/cn'

// ✅ CORRETO — sempre alias @/
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
```

### ❌ Modificar tokens de design para casos específicos

```tsx
// ❌ PROIBIDO — sobrescrever variável CSS para um componente
<div style={{ '--primary': '#ff0000' } as React.CSSProperties}>

// ✅ CORRETO — se precisa de uma cor especial, crie um token no globals.css
// e use a classe gerada
```

### ❌ `any` em TypeScript

```tsx
// ❌ PROIBIDO
const data: any = await fetch(...)
function Component({ value }: { value: any })

// ✅ CORRETO — tipos explícitos sempre
interface ApiResponse { id: string; status: TxStatus }
const data: ApiResponse = await fetch(...)
```

### ❌ Criar estrutura de layout paralela ao AdminLayout

```tsx
// ❌ PROIBIDO — sidebar própria dentro de uma página
export function SettingsPage() {
  return (
    <div className="flex">
      <aside className="w-48 bg-surface border-r ...">   {/* sidebar aninhada */}
        <nav>...</nav>
      </aside>
      <main>...</main>
    </div>
  )
}

// ✅ CORRETO — se precisar de sub-navegação, use tabs ou um componente dedicado
export function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Configurações" />
      <div className="flex gap-1 border-b border-border">
        {/* tabs de sub-navegação */}
      </div>
      <Card>...</Card>
    </div>
  )
}
```

---

## Resumo — Checklist Rápido

Antes de entregar qualquer código, responda:

| #  | Pergunta                                                     | Resposta esperada |
|----|--------------------------------------------------------------|-------------------|
| 1  | Existe `style={{}}` em algum elemento?                       | Não               |
| 2  | Existe cor hex ou `blue-*`, `gray-*`, `green-*` no className? | Não              |
| 3  | Os componentes usados existem em `@/components/ui` ou `@/components/shared`? | Sim |
| 4  | A página começa com `<PageHeader>`?                          | Sim               |
| 5  | A página usa `<div className="space-y-6">` como wrapper?     | Sim               |
| 6  | Importações usam `@/` em vez de `../`?                       | Sim               |
| 7  | Todo texto visível está em português?                        | Sim               |
| 8  | Botões de ícone têm `aria-label`?                            | Sim               |
| 9  | Grids têm classes responsivas?                               | Sim               |
| 10 | Não há arquivo CSS novo criado?                              | Correto, não há   |

---

*Última atualização: 2026-05-08 — Atlântico DS v0.1.0*
