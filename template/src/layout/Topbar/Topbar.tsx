import { Menu, Bell, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { initials } from '@/lib/utils'
import { cn } from '@/lib/cn'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/analytics': 'Analytics',
  '/customers': 'Clientes',
  '/transactions': 'Transações',
  '/reports': 'Relatórios',
  '/settings': 'Configurações',
}

const CURRENT_USER = { name: 'Joana Trindade', role: 'Administradora' }

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { pathname } = useLocation()
  const title = PAGE_TITLES[pathname] ?? 'Atlântico DS'

  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center justify-between gap-4',
        'border-b border-border bg-surface px-6',
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Alternar menu"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted hover:bg-surface-subtle hover:text-foreground transition-colors"
        >
          <Menu className="h-4 w-4" />
        </button>
        <h1 className="text-base font-semibold text-foreground">{title}</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          aria-label="Buscar"
          className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-surface-subtle px-3 py-1.5 text-sm text-foreground-muted hover:border-border-strong hover:text-foreground transition-colors w-48"
        >
          <Search className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate text-xs">Buscar...</span>
          <kbd className="ml-auto hidden sm:inline-flex h-4 select-none items-center rounded border border-border px-1 text-[10px] text-foreground-subtle">
            ⌘K
          </kbd>
        </button>

        {/* Notifications */}
        <button
          aria-label="Notificações"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted hover:bg-surface-subtle hover:text-foreground transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        <ThemeToggle />

        {/* Divider */}
        <div className="h-6 w-px bg-border" />

        {/* User */}
        <button className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-surface-subtle transition-colors">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
            {initials(CURRENT_USER.name)}
          </div>
          <div className="hidden md:flex flex-col items-start leading-none">
            <span className="text-xs font-medium text-foreground">{CURRENT_USER.name}</span>
            <span className="text-[10px] text-foreground-muted">{CURRENT_USER.role}</span>
          </div>
        </button>
      </div>
    </header>
  )
}
