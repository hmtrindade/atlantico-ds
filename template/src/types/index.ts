import type { LucideIcon } from 'lucide-react'

export type Theme = 'light' | 'dark' | 'system'

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'outline'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'link'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: string | number
}

export interface NavSection {
  label?: string
  items: NavItem[]
}

export interface User {
  id: string
  name: string
  email: string
  role: string
  avatarUrl?: string
}
