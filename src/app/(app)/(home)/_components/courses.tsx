import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Card } from '@/app/(app)/(home)/_components/card'

const ITEMS = [
  {
    title: 'Engenharia de Computação',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'row-span-2',
  },
  {
    title: 'Professores',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
  {
    title: 'Engenharia de Computação',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'row-span-2',
  },
  {
    title: 'Engenharia de Computação',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
    className: 'row-span-2',
  },
  {
    title: 'Engenharia de Computação',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
  {
    title: 'Engenharia de Computação',
    description:
      'Explore conteúdos completos sobre Engenharia de Computação, incluindo conceitos, tendências e oportunidades na área.',
    imageSrc: '/emojis/robot.gif',
    imageAlt: 'Emoji animado de um robô',
    href: '/cursos/engenharia',
  },
]

export function Courses() {
  return (
    <section>
      <WidthWrapper className="max-w-5xl">
        <div className="w-full space-y-8">
          <SectionHeader.Root>
            <SectionHeader.Title>O que você procura?</SectionHeader.Title>
            <SectionHeader.Description>
              Saiba tudo sobre os cursos da Faculdade de Computação
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid w-full grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3">
            <Card
              title="Engenharia de Computação"
              description="Saiba tudo relacionado ao curso de Engenharia"
              imageSrc="/emojis/robot.gif"
              imageAlt="Emoji animado de um robô"
              href="/cursos/engenharia"
              className="row-span-2"
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
