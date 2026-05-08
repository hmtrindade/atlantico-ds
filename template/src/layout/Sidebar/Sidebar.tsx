import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/cn'
import { SidebarNavItem } from './SidebarNavItem'
import { initials } from '@/lib/utils'
import type { NavSection } from '@/types'

const NAV: NavSection[] = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard', href: '/', icon: LayoutDashboard },
      { label: 'Analytics', href: '/analytics', icon: BarChart3 },
      { label: 'Clientes', href: '/customers', icon: Users },
      { label: 'Transações', href: '/transactions', icon: CreditCard, badge: 12 },
    ],
  },
  {
    label: 'Gestão',
    items: [
      { label: 'Relatórios', href: '/reports', icon: FileText },
      { label: 'Configurações', href: '/settings', icon: Settings },
    ],
  },
]

const CURRENT_USER = {
  name: 'Joana Trindade',
  role: 'Administradora',
  email: 'joana@atlantico.com.br',
}

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        'relative flex shrink-0 flex-col bg-sidebar border-r border-sidebar-border',
        'transition-all duration-300 ease-in-out overflow-hidden',
        collapsed ? 'w-16' : 'w-64',
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          'flex h-16 shrink-0 items-center border-b border-sidebar-border',
          collapsed ? 'justify-center px-0' : 'gap-3 px-5',
        )}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
          <span className="text-sm font-bold tracking-tight">A</span>
        </div>
        {!collapsed && (
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-sidebar-foreground-active tracking-tight">
              Atlântico
            </span>
            <span className="text-[10px] text-sidebar-foreground uppercase tracking-widest">
              Design System
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-4">
        {NAV.map(section => (
          <div key={section.label ?? 'main'}>
            {!collapsed && section.label && (
              <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground opacity-60">
                {section.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map(item => (
                <li key={item.href}>
                  <SidebarNavItem item={item} collapsed={collapsed} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User profile */}
      <div className={cn('shrink-0 border-t border-sidebar-border', collapsed ? 'p-2' : 'p-3')}>
        {collapsed ? (
          <div className="flex justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {initials(CURRENT_USER.name)}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-sidebar-accent transition-colors cursor-pointer group">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {initials(CURRENT_USER.name)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-sidebar-foreground-active leading-tight">
                {CURRENT_USER.name}
              </p>
              <p className="truncate text-[11px] text-sidebar-foreground leading-tight">
                {CURRENT_USER.role}
              </p>
            </div>
            <LogOut className="h-3.5 w-3.5 shrink-0 text-sidebar-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
        className={cn(
          'absolute -right-3 top-[72px] z-10',
          'flex h-6 w-6 items-center justify-center rounded-full',
          'border border-sidebar-border bg-surface shadow-md',
          'text-foreground-muted hover:text-foreground transition-colors',
        )}
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </button>
    </aside>
  )
}
