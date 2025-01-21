import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

type PostCardProps = {
  title: string
  description: string
  slug: string
  image: Media
}

export function PostCard({ title, description, slug, image }: PostCardProps) {
  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex overflow-hidden rounded-lg text-start"
    >
      <div className="flex w-full flex-col rounded-md bg-muted-foreground/30 p-[1px] transition-colors group-hover:bg-primary/60 dark:bg-gradient-to-br dark:from-border/80 dark:to-border/20 dark:group-hover:bg-primary">
        <div>
          {image && typeof image !== 'string' && image.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 1008}
              height={image.height || 567}
              className="h-48 w-full object-cover"
            />
          )}
        </div>
        <div className="flex grow rounded-b-md bg-gradient-to-br from-background to-background/80 p-4 dark:to-background/90">
          <div className="flex w-full grow flex-col gap-2">
            <span className="font-semibold">{title}</span>
            <p className="w-full truncate text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
