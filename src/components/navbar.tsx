import { ModeToggle } from '@/components/theme/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-2 z-50 w-full md:top-4">
      <div>
        <WidthWrapper>
          <div className="default-border flex h-14 items-center justify-between rounded-full bg-background px-6 py-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60 md:h-[60px] md:px-8">
            <Link href="/" className="flex h-full w-fit items-center gap-2">
              <span className="font-bold">FACOMP</span>
            </Link>

            <div className="flex h-full items-center">
              <nav className="hidden md:block">
                <ul className="flex gap-6 text-sm font-medium">
                  {siteConfig.mainNav.map((link) => (
                    <li
                      key={link.label}
                      className="transition-colors hover:text-primary"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Separator
                className="ml-6 mr-4 hidden h-full md:block"
                orientation="vertical"
              />

              <div className="flex gap-1">
                <Link
                  href="/search"
                  className={buttonVariants({ size: 'icon', variant: 'ghost' })}
                  aria-label="Pesquisar"
                >
                  <Search />
                </Link>

                <ModeToggle className="hidden md:flex" />
                <MobileNav />
              </div>
            </div>
          </div>
        </WidthWrapper>
      </div>
    </header>
  )
}
