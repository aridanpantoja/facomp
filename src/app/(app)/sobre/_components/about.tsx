import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'

export function About() {
  return (
    <section>
      <WidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          <div>
            <SectionHeader.Root className="items-center md:items-start md:text-start">
              <SectionHeader.Badge>📜 História</SectionHeader.Badge>
              <SectionHeader.Title>Sobre a Faculdade</SectionHeader.Title>

              <SectionHeader.Description>
                Encontre as informações que você precisa sobre nossos cursos. Se
                tiver mais dúvidas, sinta-se à vontade para entrar em contato
                conosco!
              </SectionHeader.Description>
            </SectionHeader.Root>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
