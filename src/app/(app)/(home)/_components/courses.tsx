import { SectionHeader } from '@/components/section-header'
import { Separator } from '@/components/ui/separator'
import { WidthWrapper } from '@/components/width-wrapper'
import { CircleCheck, SquareCode, SquareSigma } from 'lucide-react'
import Link from 'next/link'

const COURSES = [
  {
    Icon: SquareSigma,
    slogan: 'Desenvolvimento e Automação',
    name: 'Engenharia de Computação',
    time: 5,
    href: '/cursos/engenharia-de-computacao',
    items: [
      'Matutino e Vespertino',
      'Concepção de sistemas',
      'Modelos computacionais',
      'Implementação de soluções',
    ],
  },
  {
    Icon: SquareCode,
    slogan: 'Soluções Inteligentes',
    name: 'Sistemas de Informação',
    time: 4,
    href: '/cursos/engenharia-de-computacao',
    items: ['Matutino, Vespertino e Noturno', 'TI aplicada à gestão'],
  },
]

export function Courses() {
  return (
    <section>
      <WidthWrapper>
        <div className="space-y-8">
          <SectionHeader.Root>
            <SectionHeader.Title>Nossos cursos</SectionHeader.Title>
            <SectionHeader.Description>
              Saiba tudo sobre os cursos da Faculdade de Computação
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="w-ful mx-auto grid max-w-4xl grid-cols-2 gap-4 pb-4">
            {COURSES.map((course) => (
              <Link
                href={course.href}
                className="gradient-card group relative flex flex-col items-start gap-5 overflow-hidden rounded-xl p-6"
                key={course.name}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <course.Icon className="size-6" />
                    <p className="text-sm">{course.slogan}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xl font-bold">
                    <h3>{course.name}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Duração de {course.time} anos
                  </p>
                </div>

                <Separator />

                <ul className="space-y-2">
                  {course.items.map((item, i) => (
                    <li className="flex items-center gap-2" key={i}>
                      <CircleCheck className="size-4" /> {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
