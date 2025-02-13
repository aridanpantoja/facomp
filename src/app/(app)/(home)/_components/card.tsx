import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'

type CardProps = {
  title: string
  description: string
  imageSrc: string
  className?: string
  imageAlt: string
} & LinkProps

export function Card({
  title,
  description,
  imageSrc,
  href,
  imageAlt,
  className,
  ...props
}: CardProps) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        'default-border flex flex-col items-center justify-center gap-3 rounded-3xl bg-background p-8 text-center transition-colors hover:bg-accent hover:text-accent-foreground',
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={512}
        height={512}
        className="size-16"
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  )
}
