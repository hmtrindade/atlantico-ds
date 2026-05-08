import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { NavItem } from '@/types'

interface SidebarNavItemProps {
  item: NavItem
  collapsed: boolean
}

export function SidebarNavItem({ item, collapsed }: SidebarNavItemProps) {
  const { href, label, icon: Icon, badge } = item

  return (
    <NavLink
      to={href}
      end={href === '/'}
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        cn(
          'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
          'transition-all duration-150 select-none',
          collapsed ? 'justify-center px-2' : 'justify-start',
          isActive
            ? 'bg-sidebar-accent text-sidebar-foreground-active before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-0.5 before:rounded-r before:bg-blue-400'
            : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground-active',
        )
      }
    >
      <Icon
        className={cn(
          'shrink-0 transition-colors',
          collapsed ? 'h-5 w-5' : 'h-4 w-4',
        )}
      />
      {!collapsed && (
        <>
          <span className="flex-1 truncate">{label}</span>
          {badge != null && (
            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
              {badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}
