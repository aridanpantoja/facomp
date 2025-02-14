import { cn } from '@/lib/utils'

type SectionHeaderTitleProps = {
  children: React.ReactNode
  mainTitle?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionHeaderTitle({
  children,
  className,
  mainTitle = false,
  ...props
}: SectionHeaderTitleProps) {
  if (mainTitle) {
    return (
      <h1 className={cn('mb-4', className)} {...props}>
        {children}
      </h1>
    )
  }
  return (
    <h2 className={cn('mb-4', className)} {...props}>
      {children}
    </h2>
  )
}
