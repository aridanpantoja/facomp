import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type ShortcutsProps = {
  links: {
    href: string
    title: string
    description: string
    Icon: LucideIcon
  }[]
}

export function Shortcuts({ links }: ShortcutsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((peek) => (
        <Link
          href={peek.href}
          key={peek.title}
          className="default-border hover-border-animation relative rounded-md p-4 pr-12 md:p-6 md:pr-14"
        >
          <div className="flex h-full flex-col items-start justify-center gap-2">
            <span className="font-semibold transition-colors">
              {peek.title}
            </span>
            <p className="text-xs text-muted-foreground">{peek.description}</p>
          </div>
          <peek.Icon className="absolute right-4 top-4 size-4 text-muted-foreground transition-colors md:right-6 md:top-6" />
        </Link>
      ))}
    </div>
  )
}
