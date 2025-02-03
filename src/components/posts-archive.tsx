import { PostCard } from '@/components/post-card'
import type { Post } from '@/payload-types'

type PostProps = Pick<Post, 'slug' | 'meta' | 'title' | 'id'>

export function PostsArchive({ posts }: { posts: PostProps[] }) {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            meta={post.meta}
            slug={post.slug}
          />
        )
      })}
    </div>
  )
}
