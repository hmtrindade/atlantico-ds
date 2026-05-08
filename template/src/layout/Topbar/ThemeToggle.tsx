import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/cn'
import type { Theme } from '@/types'

const OPTIONS: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Claro' },
  { value: 'system', icon: Monitor, label: 'Sistema' },
  { value: 'dark', icon: Moon, label: 'Escuro' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-surface-subtle p-0.5">
      {OPTIONS.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={label}
          aria-label={`Tema ${label}`}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
            theme === value
              ? 'bg-surface text-foreground shadow-sm'
              : 'text-foreground-subtle hover:text-foreground-muted',
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  )
}
