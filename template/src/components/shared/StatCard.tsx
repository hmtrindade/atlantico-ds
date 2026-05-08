import { TrendingUp, TrendingDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AtlCard } from '@ds'
import { cn } from '@/lib/cn'
import { formatPercent } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  change?: number
  period?: string
  icon: LucideIcon
  iconColor?: 'primary' | 'success' | 'warning' | 'info'
  className?: string
}

const ICON_COLORS = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success-bg text-success',
  warning: 'bg-warning-bg text-warning',
  info:    'bg-info-bg text-info',
}

export function StatCard({
  title,
  value,
  change,
  period,
  icon: Icon,
  iconColor = 'primary',
  className,
}: StatCardProps) {
  const isPositive = change != null && change >= 0

  return (
    <AtlCard className={cn('p-5', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <p className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
            {title}
          </p>
          <p className="text-2xl font-semibold text-foreground leading-none tracking-tight">
            {value}
          </p>
          {change != null && (
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className={cn(
                  'inline-flex items-center gap-0.5 text-xs font-medium',
                  isPositive ? 'text-success' : 'text-destructive',
                )}
              >
                {isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {formatPercent(change)}
              </span>
              {period && (
                <span className="text-xs text-foreground-subtle">{period}</span>
              )}
            </div>
          )}
        </div>
        <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', ICON_COLORS[iconColor])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </AtlCard>
  )
}
