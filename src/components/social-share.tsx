'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from './icons'
import Link from 'next/link'
import { Check, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'

export function SocialShare({ text, url }: { text: string; url: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      return null
    }
  }

  const whatsappLink = `https://api.whatsapp.com/send?text=${text}`

  return (
    <div className="grid grid-cols-3 gap-2">
      <Link
        href={whatsappLink}
        className={buttonVariants({ variant: 'secondary' })}
      >
        <Icons.Whatsapp />
      </Link>

      <Button variant="secondary">
        <Share2 />
      </Button>

      <Button onClick={handleCopy} variant="secondary">
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  )
}
