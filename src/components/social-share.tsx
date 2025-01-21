import { Button } from '@/components/ui/button'

export function SocialShare() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button variant="secondary">Whatsapp</Button>
      <Button variant="secondary">Instagram</Button>
      <Button variant="secondary">Share</Button>
    </div>
  )
}
