import { Marker } from '@/components/marker'
import { SectionHeader } from '@/components/section-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { Book, Newspaper, Star, University } from 'lucide-react'
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
    <section className="flex items-center justify-center bg-gradient-to-br">
      <WidthWrapper className="max-w-5xl">
        <SectionHeader.Root>
          <Link
            href="/404"
            className={buttonVariants({ className: 'mb-3', size: 'sm' })}
          >
            📝 Avaliar experiência no site
          </Link>

          <SectionHeader.Title
            mainTitle
            className="mb-4 md:mb-6 lg:text-6xl lg:leading-tight"
          >
            Transformando o{' '}
            <span className="relative mx-1">
              <Marker />
              Futuro
            </span>{' '}
            com Tecnologia e Inovação
          </SectionHeader.Title>

          <SectionHeader.Description>
            Seja bem-vindo à{' '}
            <span className="font-semibold text-primary">
              Faculdade de Computação
            </span>{' '}
            da{' '}
            <span className="font-semibold text-primary">
              UFPA Campus Castanhal!
            </span>
          </SectionHeader.Description>
        </SectionHeader.Root>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {SHORTCUTS.map((peek) => (
            <Link
              href={peek.href}
              key={peek.title}
              className="default-border hover-border-animation relative rounded-md p-4 pr-12 md:p-6 md:pr-14"
            >
              <div className="flex h-full flex-col items-start justify-center gap-2">
                <span className="font-semibold transition-colors">
                  {peek.title}
                </span>
                <p className="text-xs text-muted-foreground">
                  {peek.description}
                </p>
              </div>
              <peek.Icon className="absolute right-4 top-4 size-4 text-muted-foreground transition-colors md:right-6 md:top-6" />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="relative flex gap-2">
            <Avatar>
              <AvatarFallback>SH</AvatarFallback>
              <AvatarImage src="/shadcn.jpg" alt="Foto de Shadcn" />
            </Avatar>
            <Avatar className="absolute right-1/2 translate-x-1/2">
              <AvatarFallback>KW</AvatarFallback>
              <AvatarImage
                src="/karol-wojtyla.webp"
                alt="Foto de Karol Wojtyla"
              />
            </Avatar>
            <Avatar>
              <AvatarFallback>AP</AvatarFallback>
              <AvatarImage src="/profile.webp" alt="Foto de Aridan Pantoja" />
            </Avatar>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star key={i} className="size-3 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm font-bold text-muted-foreground">
              +800 alunos
            </p>
          </div>
        </div>
      </WidthWrapper>
      {/* 
      <ScrollIndicator /> */}
    </section>
  )
}
