import { cn } from '@/lib/utils'

type WidthWrapperProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function WidthWrapper({
  children,
  className,
  ...props
}: WidthWrapperProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-screen-xl px-3 md:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
