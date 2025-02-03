import { SectionHeader } from '@/components/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { WidthWrapper } from '@/components/width-wrapper'

export function FAQ() {
  return (
    <section>
      <WidthWrapper>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <SectionHeader.Root className="items-start text-start">
            <SectionHeader.Badge>Testando</SectionHeader.Badge>
            <SectionHeader.Title>Perguntas Frequentes</SectionHeader.Title>

            <SectionHeader.Description>
              Encontre as informações que você precisa sobre nossos cursos. Se
              tiver mais dúvidas, sinta-se à vontade para entrar em contato
              conosco!
            </SectionHeader.Description>
          </SectionHeader.Root>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </WidthWrapper>
    </section>
  )
}
