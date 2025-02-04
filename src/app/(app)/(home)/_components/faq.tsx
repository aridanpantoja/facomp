import { SectionHeader } from '@/components/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { WidthWrapper } from '@/components/width-wrapper'

const FAQS = [
  {
    question: 'Quais cursos a Faculdade de Computação oferece?',
    awnser:
      'A Faculdade oferece dois cursos de graduação: Engenharia de Computação e Sistemas de Informação.',
  },
  {
    question:
      'Qual a diferença entre Engenharia de Computação e Sistemas de Informação?',
    awnser:
      'Engenharia de Computação: Foca no desenvolvimento de hardware e software, integrando conhecimentos de eletrônica e computação. O curso é mais voltado para a criação de sistemas embarcados, robótica e desenvolvimento de dispositivos.Sistemas de Informação: Concentra-se no desenvolvimento de software, gestão de dados e sistemas de informação para empresas. O curso é mais voltado para a área de TI, com foco em soluções tecnológicas para negócios.',
  },
  {
    question: 'Os cursos são presenciais ou EAD?',
    awnser:
      'Atualmente, os cursos são oferecidos apenas no formato presencial.',
  },
  {
    question: 'Como posso me inscrever para os cursos?',
    awnser:
      'As inscrições são feitas através da nota do ENEM. Consulte o edital no site para mais informações.',
  },
  {
    question: 'A faculdade oferece atividades extracurriculares?',
    awnser:
      'Sim, há grupos de estudo, projetos de pesquisa, maratonas de programação, hackathons e outras atividades que complementam a formação dos alunos.',
  },
]

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

          <Accordion type="single" className="space-y-1" collapsible>
            {FAQS.map((question, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.awnser}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </WidthWrapper>
    </section>
  )
}
