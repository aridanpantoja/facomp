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
    <>
      <section>
        <WidthWrapper>
          <div className="mx-auto w-full max-w-3xl items-center space-y-4 text-balance text-center md:space-y-6">
            <h1>Notícias</h1>
            <p className="text-muted-foreground">
              Confira todas as oportunidades, notícias e mais sobre da Faculdade
              de Computação
            </p>
          </div>
        </WidthWrapper>
      </section>

      <section className="bg-muted/50">
        <WidthWrapper>
          <PostsArchive posts={posts.docs} />
        </WidthWrapper>
      </section>
    </>
  )
}
