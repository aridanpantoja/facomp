import { PostsArchive } from '@/components/posts-archive'
import { SectionHeader } from '@/components/section-header/index'
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
    where: {
      categories: {
        contains: 1,
      },
    },
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
          <SectionHeader.Root>
            <SectionHeader.Title mainTitle>Notícias</SectionHeader.Title>
            <SectionHeader.Description>
              Confira todas as oportunidades, notícias e mais sobre da Faculdade
              de Computação
            </SectionHeader.Description>
          </SectionHeader.Root>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper>
          {posts.docs.length > 0 ? (
            <PostsArchive posts={posts.docs} />
          ) : (
            <p>Not Found</p>
            // TO-DO: NOT FOUND COMPONENTE FOR POSTS
          )}
        </WidthWrapper>
      </section>
    </>
  )
}
