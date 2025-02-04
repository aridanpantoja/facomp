import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'
import { SectionHeader } from '@/components/section-header'
import { Marker } from '@/components/marker'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="absolute bottom-0 -z-10 h-screen w-full bg-[radial-gradient(150%_50%_at_50%_100%,rgba(37,99,235,0.25)_0,transparent_50%,transparent_100%)]"></div>
      <div className="py-24">
        <WidthWrapper>
          <div className="flex flex-col items-center gap-6">
            <SectionHeader.Root>
              <SectionHeader.Title>
                Sua carreira em tecnologia começa{' '}
                <span className="relative mx-1">
                  <Marker /> agora!
                </span>
              </SectionHeader.Title>
              <SectionHeader.Description>
                Encontre as informações que você precisa sobre nossos cursos. Se
                tiver mais dúvidas, sinta-se à vontade para entrar em contato
                conosco!
              </SectionHeader.Description>
            </SectionHeader.Root>

            <div className="flex items-center gap-4">
              <Button>Saber mais</Button>
              <Button variant="outline">Ver projetos</Button>
            </div>
          </div>
        </WidthWrapper>
      </div>
      <div className="pb-6">
        <WidthWrapper>
          <div className="default-border rounded-2xl bg-background px-6 py-8 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/50 md:p-16">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-0">
              <div className="flex flex-col items-start">
                <Link href="/" className="flex w-fit items-center gap-2">
                  <span className="font-bold">FACOMP</span>
                </Link>
              </div>

              <div className="grid grid-cols-[repeat(2,minmax(130px,1fr))] gap-5 gap-y-10 lg:grid-cols-[repeat(4,minmax(130px,1fr))] lg:gap-0">
                {siteConfig.footerNav.map((tab, i) => (
                  <div
                    className="flex flex-col items-start gap-2.5 text-sm leading-[1.4em]"
                    key={i}
                  >
                    <h6 className="font-semibold">{tab.title}</h6>

                    {tab.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="font-medium opacity-50 transition-opacity hover:opacity-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WidthWrapper>
      </div>
    </footer>
  )
}
