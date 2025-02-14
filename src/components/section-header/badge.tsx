import { cn } from '@/lib/utils'
import React from 'react'

type SectionHeaderBadgeProps = React.HTMLAttributes<HTMLDivElement>

export function SectionHeaderBadge({
  children,
  className,
  ...props
}: SectionHeaderBadgeProps) {
  const defaultStyle =
    'default-border group mb-3 flex h-9 items-center justify-center gap-2 rounded-md px-4 text-xs'

  return (
    <div className={cn(defaultStyle, className)} {...props}>
      {children}
    </div>
  )
}
