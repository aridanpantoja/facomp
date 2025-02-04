import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { WidthWrapper } from '@/components/width-wrapper'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { siteConfig } from '@/config'

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/50 md:fixed md:top-4 md:border-none md:bg-transparent md:backdrop-blur-none">
      <div>
        <WidthWrapper>
          <div className="md:default-border flex h-[60px] items-center justify-between rounded-none bg-transparent px-0 py-4 shadow-none backdrop-blur md:rounded-full md:bg-background md:px-8 md:shadow-lg md:supports-[backdrop-filter]:bg-background/80">
            <Link href="/" className="flex h-full w-fit items-center gap-2">
              <span className="font-bold">FACOMP</span>
            </Link>

            <div className="flex h-full items-center">
              <nav className="hidden sm:block">
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
                className="ml-6 mr-4 hidden h-full sm:block"
                orientation="vertical"
              />

              <div className="flex gap-1">
                <Button size="icon" variant="ghost">
                  <Search />
                </Button>

                <ModeToggle className="hidden sm:flex" />
                <MobileNav />
              </div>
            </div>
          </div>
        </WidthWrapper>
      </div>
    </header>
  )
}
