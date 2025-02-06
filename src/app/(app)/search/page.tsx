import { Search } from '@/components/search'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PostProps, PostsArchive } from '@/components/posts-archive'
import { WidthWrapper } from '@/components/width-wrapper'
import { SectionHeader } from '@/components/section-header'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}

export default async function SearchPage({
  searchParams: searchParamsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return (
    <>
      <section>
        <WidthWrapper className="max-w-3xl">
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <SectionHeader.Root>
              <SectionHeader.Badge>🔎 Procurando</SectionHeader.Badge>
              <SectionHeader.Title mainTitle>Pesquisar</SectionHeader.Title>
              <SectionHeader.Description>
                Encontre o que você precisa de forma rápida e fácil!
              </SectionHeader.Description>
            </SectionHeader.Root>

            <Search />
          </div>
        </WidthWrapper>
      </section>
      <section>
        <WidthWrapper>
          {posts.totalDocs > 0 ? (
            <PostsArchive posts={posts.docs as PostProps[]} />
          ) : (
            <div>Nada encontrado.</div>
          )}
        </WidthWrapper>
      </section>
    </>
  )
}
