import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Book, Newspaper, University } from 'lucide-react'
import Link from 'next/link'

const SHORTCUTS = [
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

export function Hero() {
  return (
    <section>
      <WidthWrapper>
        <div className="relative mx-auto max-w-4xl">
          <SectionHeader.Root>
            <Link href="/calendarios">
              <SectionHeader.Badge>
                📆 Confira o calendário atual
              </SectionHeader.Badge>
            </Link>

            <SectionHeader.Title
              mainTitle
              className="mb-4 mt-3 md:mb-6 md:mt-4 lg:text-6xl lg:leading-tight"
            >
              Transformando o Futuro com{' '}
              <span className="text-primary">Tecnologia e Inovação</span>
            </SectionHeader.Title>

            <SectionHeader.Description>
              Seja bem-vindo à{' '}
              <span className="font-semibold text-primary">
                Faculdade de Computação
              </span>{' '}
              do{' '}
              <span className="font-semibold text-primary">
                Campus Castanhal!
              </span>
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {SHORTCUTS.map((peek) => (
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
  )
}
