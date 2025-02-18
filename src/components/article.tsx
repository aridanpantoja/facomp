import { RichText } from '@payloadcms/richtext-lexical/react'
import { Media } from './media'
import { SocialShare } from './social-share'
import { WidthWrapper } from './width-wrapper'
import { Post } from '@/payload-types'

type ArticleProps = {
  post: Post
}

export function Article({ post }: ArticleProps) {
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

              <SocialShare text={post.meta?.description || ''} />
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
