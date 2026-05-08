import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, error, className, ...props }, ref) => (
    <div className="relative flex items-center">
      {leftIcon && (
        <span className="pointer-events-none absolute left-3 text-foreground-subtle">
          {leftIcon}
        </span>
      )}
      <input
        ref={ref}
        className={cn(
          'flex h-9 w-full rounded-lg border bg-surface px-3 py-2 text-sm text-foreground',
          'placeholder:text-foreground-subtle',
          'transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-destructive focus-visible:ring-destructive'
            : 'border-input hover:border-border-strong',
          leftIcon && 'pl-9',
          rightIcon && 'pr-9',
          className,
        )}
        {...props}
      />
      {rightIcon && (
        <span className="pointer-events-none absolute right-3 text-foreground-subtle">
          {rightIcon}
        </span>
      )}
    </div>
  ),
)
Input.displayName = 'Input'
