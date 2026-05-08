import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:  'bg-muted text-foreground-muted',
        primary:  'bg-primary/10 text-primary',
        success:  'bg-success-bg text-success border border-success-border',
        warning:  'bg-warning-bg text-warning border border-warning-border',
        danger:   'bg-destructive-bg text-destructive border border-destructive/20',
        info:     'bg-info-bg text-info border border-info-border',
        outline:  'border border-border text-foreground-muted bg-transparent',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

const DOT_COLORS: Record<string, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger:  'bg-destructive',
  info:    'bg-info',
  primary: 'bg-primary',
  default: 'bg-foreground-subtle',
  outline: 'bg-foreground-subtle',
}

export function Badge({ variant = 'default', dot, children, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', DOT_COLORS[variant ?? 'default'])} />
      )}
      {children}
    </span>
  )
}
