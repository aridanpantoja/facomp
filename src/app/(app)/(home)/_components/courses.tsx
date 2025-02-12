import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Card } from '@/app/(app)/(home)/_components/card'

const ITEMS = [
  {
    title: 'Engenharia de Computação',
    description:
      'Conheça a estrutura do curso, disciplinas, áreas de atuação e oportunidades na área de computação.',
    imageSrc: '/emojis/gear.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'lg:row-span-2',
  },
  {
    title: 'Professores',
    description:
      'Informações sobre o corpo docente, áreas de pesquisa e contatos dos professores.',
    imageSrc: '/emojis/graduation-cap.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
  {
    title: 'Sistemas de Informação',
    description:
      'Explore a integração entre tecnologia e negócios, com foco em desenvolvimento de sistemas e gestão de dados.',
    imageSrc: '/emojis/light-bulb.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'lg:row-span-2',
  },
  {
    title: 'Estágio',
    description:
      'Orientações, vagas disponíveis e requisitos para estágios na área de computação.',
    imageSrc: '/emojis/nerd.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'lg:row-span-2',
  },
  {
    title: 'Calendários',
    description:
      'Acompanhe datas importantes, prazos de matrícula e eventos acadêmicos.',
    imageSrc: '/emojis/clock.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
  {
    title: 'Laboratórios',
    description:
      'Conheça os laboratórios e equipamentos disponíveis na FACOMP.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
]

export function Courses() {
  return (
    <section className="md:pb-24">
      <WidthWrapper className="max-w-5xl">
        <div className="w-full space-y-8">
          <SectionHeader.Root>
            <SectionHeader.Title>O que você procura?</SectionHeader.Title>
            <SectionHeader.Description>
              Saiba tudo sobre os cursos da Faculdade de Computação
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid w-full grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
            {ITEMS.map((item, i) => (
              <Card
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                href={item.href}
                className={item.className}
                key={i}
              />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
