import { cn } from '@/lib/utils'

type SectionHeaderDescriptionProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

export function SectionHeaderDescription({
  children,
  className,
  ...props
}: SectionHeaderDescriptionProps) {
  return (
    <p
      className={cn(
        'text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
