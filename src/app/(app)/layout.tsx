import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Aridan Pantoja', url: 'https://aridan.dev' }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  icons: '/favicon.ico',
  generator: 'Next.js',
  category: 'website',
  metadataBase: new URL(siteConfig.url),
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <body
        className={cn('relative h-full antialiased', plusJakartaSans.className)}
      >
        <div className="absolute top-0 -z-10 h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(37,99,235,0.25)_0,transparent_50%,transparent_100%)]"></div>
        <Providers>
          <div className="flex min-h-screen w-full flex-col">
            <Navbar />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
