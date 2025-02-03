import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { GraduationCap } from 'lucide-react'
import Link from 'next/link'

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
            <Link href="/" className="group overflow-hidden rounded-md">
              <div className="overflow-hidden rounded-md bg-muted-foreground/30 p-[1px] transition-colors group-hover:bg-primary/60 dark:bg-gradient-to-br dark:from-border/80 dark:to-border/20 dark:group-hover:bg-primary">
                <div className="relative flex flex-col items-center rounded-md bg-gradient-to-br from-background to-background/80 p-6 text-muted-foreground group-hover:text-primary dark:to-background/90 md:p-10">
                  <GraduationCap className="mb-4 size-14 transition-colors" />
                  <h3>Engenharia de Computação</h3>

                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </Link>

            <div></div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
