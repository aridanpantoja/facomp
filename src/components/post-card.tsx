'use client'

import { Media } from '@/components/media'
import type { Post } from '@/payload-types'
import Link from 'next/link'

export type PostCardProps = Pick<Post, 'slug' | 'meta' | 'title'>

export function PostCard({ title, meta, slug }: PostCardProps) {
  return (
    <Link
      href={`/noticias/${slug}`}
      className="gradient-card default-border hover-border-animation group flex w-full flex-col overflow-hidden rounded-lg text-start"
    >
      <div className="relative w-full">
        {meta?.image && typeof meta?.image !== 'string' && (
          <Media resource={meta?.image} />
        )}
      </div>
      <div className="flex w-full grow flex-col gap-2 p-4">
        <span className="font-semibold">{title}</span>
        <p className="w-full truncate text-xs text-muted-foreground">
          {meta?.description}
        </p>
      </div>
    </Link>
  )
}
