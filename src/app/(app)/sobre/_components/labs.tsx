import { SectionHeader } from '@/components/section-header'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { WidthWrapper } from '@/components/width-wrapper'

const LABS = [
  {
    imageSrc: '/Alan_Turing.jpg',
    title: 'Alan Turing',
  },
  {
    imageSrc: '/Alan_Turing.jpg',
    title: 'Steve Jobs',
  },
  {
    imageSrc: '/Alan_Turing.jpg',
    title: 'Grace Hooper',
  },
  {
    imageSrc: '/Alan_Turing.jpg',
    title: 'Ada Lovelace',
  },
  {
    imageSrc: '/Alan_Turing.jpg',
    title: 'LADES',
  },
]

export function Labs() {
  return (
    <section>
      <WidthWrapper>
        <SectionHeader.Root>
          <SectionHeader.Title>Laboratórios</SectionHeader.Title>
          <SectionHeader.Description>
            Saiba tudo sobre a Faculdade de Computação Campus Castanhal
          </SectionHeader.Description>
        </SectionHeader.Root>

        <div className="mt-8">
          <InfiniteMovingCards items={LABS} direction="right" speed="slow" />
        </div>
      </WidthWrapper>
    </section>
  )
}
