import { cn } from '@/lib/utils'

type SectionHeaderRootProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function SectionHeaderRoot({
  children,
  className,
  ...props
}: SectionHeaderRootProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-4xl flex-col items-center text-balance text-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
