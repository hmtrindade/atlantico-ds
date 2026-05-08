import preset from '../src/tailwind-preset'
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx,html}',
    '../src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // ── Compatibility aliases ─────────────────────────────────────────
        // Maps template class names to DS token values.
        // No new design values — all point to existing DS tokens.
        'foreground':              'hsl(var(--on-background))',
        'foreground-muted':        'hsl(var(--on-background-variant))',
        'foreground-subtle':       'hsl(var(--on-surface-variant))',
        'foreground-disabled':     'hsl(var(--disabled))',
        'surface-subtle':          'hsl(var(--background-variant))',
        'surface-muted':           'hsl(var(--surface-variant))',
        'primary':                 'hsl(var(--brand-primary))',
        'primary-foreground':      'hsl(var(--brand-on-primary))',
        'primary-hover':           'hsl(var(--brand-primary-hover))',
        'primary-muted':           'hsl(var(--surface-primary))',
        'secondary':               'hsl(var(--brand-secondary))',
        'secondary-foreground':    'hsl(var(--brand-on-secondary))',
        'muted':                   'hsl(var(--background-variant))',
        'muted-foreground':        'hsl(var(--on-background-variant))',
        'accent':                  'hsl(var(--surface-primary))',
        'accent-foreground':       'hsl(var(--brand-primary))',
        'destructive':             'hsl(var(--critical))',
        'destructive-foreground':  'hsl(var(--on-critical))',
        'destructive-bg':          'hsl(var(--surface-error))',
        'warning':                 'hsl(var(--alert))',
        'warning-foreground':      'hsl(var(--on-alert))',
        'warning-bg':              'hsl(var(--comp-amber-surface))',
        'warning-border':          'hsl(var(--alert))',
        'success-foreground':      'hsl(var(--on-success))',
        'success-bg':              'hsl(var(--surface-success))',
        'success-border':          'hsl(var(--success))',
        'info':                    'hsl(var(--comp-blue))',
        'info-foreground':         'hsl(var(--on-comp-blue))',
        'info-bg':                 'hsl(var(--comp-blue-surface))',
        'info-border':             'hsl(var(--comp-blue))',
        'border-strong':           'hsl(var(--input))',
        // ── Sidebar (template-specific layout) ───────────────────────────
        'sidebar':                   'var(--sidebar)',
        'sidebar-foreground':        'var(--sidebar-foreground)',
        'sidebar-foreground-active': 'var(--sidebar-foreground-active)',
        'sidebar-accent':            'var(--sidebar-accent)',
        'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
        'sidebar-border':            'var(--sidebar-border)',
      },
    },
  },
}

export default config
