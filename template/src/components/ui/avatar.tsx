import { cn } from '@/lib/cn'
import { initials } from '@/lib/utils'

interface AvatarProps {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const SIZE_CLASSES = {
  sm: 'h-6 w-6 text-[9px]',
  md: 'h-8 w-8 text-[11px]',
  lg: 'h-10 w-10 text-sm',
  xl: 'h-12 w-12 text-base',
}

export function Avatar({ name = '', src, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center rounded-full overflow-hidden',
        'bg-primary font-semibold text-primary-foreground select-none',
        SIZE_CLASSES[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <span>{initials(name)}</span>
      )}
    </div>
  )
}
