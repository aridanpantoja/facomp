import { badgeVariants } from '@/components/ui/badge'
import { WidthWrapper } from '@/components/width-wrapper'
import { Book, ChevronRight, Newspaper, University } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
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
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#FFFFFF_50%,#2563EB_150%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#020817_50%,#3B82F6_150%)]"></div>

        <WidthWrapper>
          <div className="relative mx-auto max-w-4xl">
            {/* <Bot className="absolute -top-2 left-44 -z-10 size-10 rotate-12 text-muted-foreground opacity-15" />
            <Code className="absolute top-60 -z-10 size-10 -rotate-12 text-muted-foreground opacity-20" />
            <SquareSigma className="absolute right-0 top-32 -z-10 size-10 -rotate-12 text-muted-foreground opacity-20" /> */}

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

      <section className="text-balance border-t bg-muted py-16 text-center">
        <WidthWrapper>
          <h2>Love U 💗</h2>
        </WidthWrapper>
      </section>
    </>
  )
}
