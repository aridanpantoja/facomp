import { PostCard } from '@/components/post-card'
import type { Post } from '@/payload-types'

type PostProps = Pick<Post, 'slug' | 'meta' | 'title' | 'id' | 'heroImage'>

export function PostsArchive({ posts }: { posts: PostProps[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.meta?.description || ''}
          image={post.heroImage}
          slug={post.slug || ''}
        />
      ))}
    </div>
  )
}
