import { PostsArchive } from '@/components/posts-archive'
import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export async function LastNews() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    page: 1,
    limit: 4,
    where: {
      categories: {
        contains: 1,
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
    <section>
      <WidthWrapper>
        <div>
          <SectionHeader.Root className="mb-8">
            <SectionHeader.Title>Últimas notícias</SectionHeader.Title>
            <SectionHeader.Description>
              <Link href="/noticias">Confira aqui</Link> todas as novidades da
              Faculdade de Computação
            </SectionHeader.Description>
          </SectionHeader.Root>

          <PostsArchive posts={posts.docs} />
        </div>
      </WidthWrapper>
    </section>
  )
}
