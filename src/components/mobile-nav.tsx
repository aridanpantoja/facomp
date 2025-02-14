'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { ModeToggle } from './theme/mode-toggle'

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="flex md:hidden">
          <AlignRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="block max-w-64 rounded-md md:hidden">
        <DialogHeader className="hidden">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col items-start gap-6">
          {siteConfig.mainNav.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Separator className="my-6" />

        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">Trocar tema</span>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}
