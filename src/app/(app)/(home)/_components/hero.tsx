import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Book, Newspaper, University } from 'lucide-react'
import Link from 'next/link'
import { ScrollIndicator } from './scroll-indicator'

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
    <section className="flex items-center justify-center bg-gradient-to-br pb-28 pt-16 md:min-h-screen md:py-0">
      <WidthWrapper className="max-w-5xl">
        <SectionHeader.Root>
          <Link href="/404">
            <SectionHeader.Badge>
              📝 Avaliar experiência no site
            </SectionHeader.Badge>
          </Link>

          <SectionHeader.Title
            mainTitle
            className="mb-4 md:mb-6 lg:text-6xl lg:leading-tight"
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

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {SHORTCUTS.map((peek) => (
            <Link
              href={peek.href}
              key={peek.title}
              className="default-border hover-border-animation group relative h-20 rounded-md px-4 pr-12 sm:h-28 md:px-6 md:pr-14"
            >
              <div className="flex h-full flex-col items-start justify-center gap-2">
                <span className="font-semibold">{peek.title}</span>
                <p className="text-xs text-muted-foreground">
                  {peek.description}
                </p>
              </div>
              <peek.Icon className="absolute right-4 top-4 size-4 text-muted-foreground transition-colors group-hover:text-primary md:right-6 md:top-6" />
            </Link>
          ))}
        </div>
      </WidthWrapper>

      <ScrollIndicator />
    </section>
  )
}
