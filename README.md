# @atlantico/ds

Atlântico Design System — componentes React, design tokens e Tailwind preset.

## Instalação

```bash
bun add @atlantico/ds
# ou
npm install @atlantico/ds
```

Instale também as peer dependencies (caso seu projeto ainda não as tenha):

```bash
bun add react react-dom tailwindcss tailwindcss-animate lucide-react \
  @radix-ui/react-checkbox @radix-ui/react-label @radix-ui/react-radio-group \
  @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-tooltip \
  @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Uso

### 1. Importe os tokens CSS no seu entrypoint

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@atlantico/ds/styles.css";
```

### 2. Use o preset no Tailwind

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import dsPreset from "@atlantico/ds/tailwind-preset";

export default {
  presets: [dsPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@atlantico/ds/dist/**/*.js",
  ],
} satisfies Config;
```

### 3. Importe os componentes

```tsx
import { AtlButton, AtlCard, AtlCardHeader } from "@atlantico/ds";

export function Demo() {
  return (
    <AtlCard>
      <AtlCardHeader headline="Olá" subheadline="Atlântico DS" />
      <AtlButton variant="primary" size="small">Continuar</AtlButton>
    </AtlCard>
  );
}
```

## Modo escuro

Adicione a classe `.dark` em `<html>` ou `<body>`. Tokens HSL alternam automaticamente.

## Build local

```bash
bun install
bun run build
```

Saída em `dist/` (ESM + d.ts + `styles.css`).

## Publicação

```bash
npm version patch
npm publish --access public
```

Nos projetos consumidores: `bun update @atlantico/ds`.
