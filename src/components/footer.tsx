import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t">
      <WidthWrapper>
        <div className="py-5 md:py-16">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-start">
              <Link href="/" className="flex w-fit items-center gap-2">
                <span className="font-bold">FACOMP</span>
              </Link>
            </div>

            <div className="grid grid-cols-[repeat(2,minmax(150px,1fr))] gap-5 gap-y-10 lg:grid-cols-[repeat(4,minmax(150px,1fr))] lg:gap-0">
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
    </footer>
  )
}
