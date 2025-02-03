import { cn } from '@/lib/utils'
import React from 'react'

type SectionHeaderBadgeProps = React.HTMLAttributes<HTMLDivElement>

export function SectionHeaderBadge({
  children,
  className,
  ...props
}: SectionHeaderBadgeProps) {
  return (
    <div
      className={cn(
        'default-border hover-border-animation group mb-3 flex h-9 items-center justify-center gap-2 rounded-md px-4 text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
