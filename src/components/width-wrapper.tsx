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
      className={cn('mx-auto w-full max-w-screen-2xl px-4 md:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
