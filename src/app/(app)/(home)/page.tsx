import { Courses } from '@/app/(app)/(home)/_components/courses'
import { CTA } from '@/app/(app)/(home)/_components/cta'
import { FAQ } from '@/app/(app)/(home)/_components/faq'
import { Hero } from '@/app/(app)/(home)/_components/hero'
import { LastNews } from '@/app/(app)/(home)/_components/last-news'

export default async function Home() {
  return (
    <>
      <Hero />
      <LastNews />
      <Courses />
      <FAQ />
      <CTA />
    </>
  )
}
