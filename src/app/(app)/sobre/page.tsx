import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Teachers } from './_components/teachers'
import { Labs } from './_components/labs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Confira todas as oportunidades, notícias e mais sobre da Faculdade de Computação',
}

export default function AboutPage() {
  return (
    <>
      <section>
        <WidthWrapper>
          <SectionHeader.Root>
            <SectionHeader.Title mainTitle>Sobre</SectionHeader.Title>
            <SectionHeader.Description>
              Saiba tudo sobre a Faculdade de Computação Campus Castanhal
            </SectionHeader.Description>
          </SectionHeader.Root>
        </WidthWrapper>
      </section>

      <Labs />
      <Teachers />
    </>
  )
}
