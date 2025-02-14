import { Media } from '@/components/media'
import { SocialShare } from '@/components/social-share'
import { WidthWrapper } from '@/components/width-wrapper'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import { cache } from 'react'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    where: {
      categories: {
        contains: 1,
      },
    },
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  if (!post) return notFound()

  return (
    <article>
      <section>
        <WidthWrapper className="max-w-prose">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl">{post.title}</h1>
              <p className="mb-5 mt-4 text-muted-foreground">
                {post.meta?.description}
              </p>
              <div className="text-xs text-muted-foreground">
                <p className="text-sm font-bold">
                  Por <span className="text-primary">Aridan Pantoja</span>
                </p>
                <p>
                  {post.publishedAt} | {post.updatedAt}
                </p>
              </div>

              <SocialShare />
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl">
                {post.heroImage && typeof post.heroImage !== 'string' && (
                  <Media resource={post.heroImage} />
                )}
              </div>
            </div>

            <div>
              <RichText data={post.content}></RichText>
            </div>
          </div>
        </WidthWrapper>
      </section>
    </article>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
