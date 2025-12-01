import { ThemeProvider } from '@/components/theme-provider'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import { Geist_Mono, Inter, Public_Sans } from 'next/font/google'
import './globals.css'

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Trident',
  description: 'MCC Island companion mod for everyone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${publicSans.variable} ${geistMono.variable} ${inter.className} selection:bg-foreground/20 flex min-h-screen flex-col tracking-tight antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
