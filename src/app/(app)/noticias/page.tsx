import { PostsArchive } from '@/components/posts-archive'
import { WidthWrapper } from '@/components/width-wrapper'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <section className="my-16">
      <WidthWrapper>
        <div className="flex w-full flex-col items-center">
          <h1>Blog Page</h1>

          <PostsArchive posts={posts.docs} />
        </div>
      </WidthWrapper>
    </section>
  )
}
