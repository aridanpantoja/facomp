import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SectionHeaderBadgeProps = {} & BadgeProps

export function SectionHeaderBadge({
  children,
  className,
  ...props
}: SectionHeaderBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        'group flex items-center justify-center gap-2 border-border px-4 py-1.5 text-xs hover:border-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}
