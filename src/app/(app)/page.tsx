import { PostCard } from '@/components/post-card'
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

  const POSTS = [
    {
      title: 'Ajuste de matrícula para Engenharia de Computação',
      description: '🎓 Atenção, discentes de Engenharia de Computação!',
      href: '/noticias/ajuste-de-matricula-para-engenharia-de-computacao',
      image: '/image.png',
    },
    {
      title: 'Calendário de aulas de 2024.4',
      description: 'Confira todos os calendários de aulas:',
      href: '/noticias/ajuste-de-matricula-para-engenharia-de-computacao',
      image: '/horarios-aulas-web-2.jpg',
    },
    {
      title: 'Edital de Prescrição (Jubilamento) 2024',
      description:
        '🎓 LISTA DE ALUNOS CONVOCADOS PELA CHAMADA PÚBLICA A PRESCRIÇÃO 2024 2024 2024',
      href: '/noticias/ajuste-de-matricula-para-engenharia-de-computacao',
      image: '/jubilacao-graduacao-web.jpg',
    },
    {
      title: 'Projeto Jiquiri - Resultado Final da Seleção',
      description:
        'Confira aqui o resultado final da seleção para o Projeto Jiquiri: Implementando um sistema de irrigação automatizado no Jardim do NEAB/Campus Castanhal.',
      href: '/noticias/ajuste-de-matricula-para-engenharia-de-computacao',
      image: '/PROJETO-JIQUIRI-WEB.jpg',
    },
  ]

  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#FFFFFF_50%,#2563EB_150%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#020817_50%,#3B82F6_150%)]"></div>

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

      <section className="text-balance border-t bg-muted/50 py-16 text-center">
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

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {POSTS.map((post, i) => (
                <PostCard
                  key={i}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  href={post.href}
                />
              ))}
            </div>
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
