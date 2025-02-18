import { Metadata } from 'next'
import { Labs } from '@/app/(app)/sobre/_components/labs'
import { Teachers } from '@/app/(app)/sobre/_components/teachers'
import { Hero } from '@/app/(app)/sobre/_components/hero'
import { About } from './_components/about'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Confira todas as oportunidades, notícias e mais sobre da Faculdade de Computação',
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <About />
      <Labs />
      <Teachers />
    </>
  )
}
