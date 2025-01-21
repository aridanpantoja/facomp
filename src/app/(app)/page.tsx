import { badgeVariants } from '@/components/ui/badge'
import { WidthWrapper } from '@/components/width-wrapper'
import { Book, ChevronRight, Newspaper, University } from 'lucide-react'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { PostsArchive } from '@/components/posts-archive'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    page: 1,
    limit: 4,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  const PEEKS = [
    {
      title: 'Sobre',
      description: 'Conheça a estrutura da Faculdade de Computação',
      Icon: University,
      href: '/sobre',
    },
    {
      title: 'Notícias',
      description: 'Confira as novidades da Faculdade de Computação',
      Icon: Newspaper,
      href: '/noticias',
    },
    {
      title: 'Documentos',
      description: 'Todos os documentos necessários para o seu curso',
      Icon: Book,
      href: '/documentos',
    },
  ]

  return (
    <>
      <section>
        <WidthWrapper>
          <div className="relative mx-auto max-w-4xl">
            <div className="text-balance text-center">
              <Link
                href="/calendarios"
                className={badgeVariants({
                  className:
                    'group border-border px-4 py-1.5 text-xs hover:border-primary',
                  variant: 'secondary',
                })}
              >
                📆 Confira o calendário atual{' '}
                <ChevronRight className="ml-1 size-3 group-hover:text-primary" />
              </Link>

              <h1 className="mb-4 mt-3 md:mb-6 md:mt-4 lg:text-6xl lg:leading-tight">
                Transformando o Futuro com{' '}
                <span className="text-primary">Tecnologia e Inovação</span>
              </h1>
              <p className="text-muted-foreground">
                Seja bem-vindo à{' '}
                <span className="font-semibold text-foreground">
                  Faculdade de Computação
                </span>{' '}
                do{' '}
                <span className="font-semibold text-foreground">
                  Campus Castanhal!
                </span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {PEEKS.map((peek) => (
                <Link
                  href={peek.href}
                  key={peek.title}
                  className="group overflow-hidden rounded-md"
                >
                  <div className="overflow-hidden rounded-md bg-muted-foreground/30 p-[1px] transition-colors group-hover:bg-primary/60 dark:bg-gradient-to-br dark:from-border/80 dark:to-border/20 dark:group-hover:bg-primary">
                    <div className="relative rounded-md bg-gradient-to-br from-background to-background/80 p-4 pr-12 dark:to-background/90 md:p-6 md:pr-14">
                      <div className="space-y-2">
                        <span className="font-semibold">{peek.title}</span>
                        <p className="text-xs text-muted-foreground">
                          {peek.description}
                        </p>
                      </div>
                      <peek.Icon className="absolute right-4 top-4 size-4 text-muted-foreground transition-colors group-hover:text-primary md:right-6 md:top-6" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </WidthWrapper>
      </section>

      <section className="text-balance border-t bg-muted/50 text-center">
        <WidthWrapper>
          <div>
            <div className="space-y-4">
              <h2>Últimas notícias</h2>
              <p className="text-muted-foreground">
                <Link
                  className="text-primary underline underline-offset-4"
                  href="/noticias"
                >
                  Confira aqui
                </Link>{' '}
                todas as novidades da Faculdade de Computação
              </p>
            </div>

            <PostsArchive posts={posts.docs} />
          </div>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper>
          <div></div>
        </WidthWrapper>
      </section>
    </>
  )
}
