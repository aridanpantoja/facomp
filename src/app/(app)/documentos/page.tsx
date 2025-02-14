import { PostsArchive } from '@/components/posts-archive'
import { SectionHeader } from '@/components/section-header/index'
import { WidthWrapper } from '@/components/width-wrapper'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function DocumentsPage() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    where: {
      categories: {
        contains: 10,
      },
    },
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
          <SectionHeader.Root>
            <SectionHeader.Title mainTitle>Documentos</SectionHeader.Title>
            <SectionHeader.Description>
              Confira todas os documentos dos cursos de Engenharia de
              Computação, Sistemas de Informação e da Faculdade de Computação
              Campus Castanhal
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
