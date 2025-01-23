'use client'

import { Media } from '@/components/media'
import type { Post } from '@/payload-types'
import Link from 'next/link'

export type PostCardProps = Pick<Post, 'slug' | 'meta' | 'title'>

export function PostCard({ title, meta, slug }: PostCardProps) {
  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex w-full overflow-hidden rounded-lg text-start"
    >
      <div className="flex w-full flex-col rounded-md bg-muted-foreground/30 p-[1px] transition-colors group-hover:bg-primary/60 dark:bg-gradient-to-br dark:from-border/80 dark:to-border/20 dark:group-hover:bg-primary">
        <div className="relative w-full">
          {meta?.image && typeof meta?.image !== 'string' && (
            <Media resource={meta?.image} />
          )}
        </div>
        <div className="flex grow rounded-b-md bg-gradient-to-br from-background to-background/80 p-4 dark:to-background/90">
          <div className="flex w-full grow flex-col gap-2">
            <span className="font-semibold">{title}</span>
            <p className="w-full truncate text-xs text-muted-foreground">
              {meta?.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
