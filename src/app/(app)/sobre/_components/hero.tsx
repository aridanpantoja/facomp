import { SectionHeader } from '@/components/section-header'
import { Shortcuts } from '@/components/shortcuts'
import { WidthWrapper } from '@/components/width-wrapper'
import { GraduationCap, School, ScrollText } from 'lucide-react'

const SHORTCUTS = [
  {
    title: 'História',
    description: 'Conheça a estrutura da Faculdade de Computação',
    Icon: ScrollText,
    href: '#historia',
  },
  {
    title: 'Laboratórios',
    description: 'Confira as novidades da Faculdade de Computação',
    Icon: School,
    href: '#laboratorios',
  },
  {
    title: 'Docentes',
    description: 'Todos os documentos necessários para o seu curso',
    Icon: GraduationCap,
    href: '#docentes',
  },
]

export function Hero() {
  return (
    <section>
      <WidthWrapper className="max-w-5xl space-y-8">
        <SectionHeader.Root>
          <SectionHeader.Title mainTitle>Sobre</SectionHeader.Title>
          <SectionHeader.Description>
            Saiba tudo sobre a Faculdade de Computação Campus Castanhal
          </SectionHeader.Description>
        </SectionHeader.Root>

        <Shortcuts links={SHORTCUTS} />
      </WidthWrapper>
    </section>
  )
}
