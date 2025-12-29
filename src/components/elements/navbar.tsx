'use client'
import Link from 'next/link'
import ModrinthLogo from '../icons/modrinth'
import TridentLogo from '../icons/trident'
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header className="bg-background border-accent sticky top-0 z-99 mx-auto flex w-full items-center justify-center overflow-hidden border-b p-3">
      <div className="flex w-full max-w-5xl items-center justify-between px-1">
        <Link href="/" className="hover:fill-primary fill-foreground transition-all active:scale-90">
          <TridentLogo className="size-6 md:size-7" />
        </Link>

        <div className="flex flex-row-reverse items-center gap-2">
          <Button className="font-semibold" asChild>
            <a href="https://modrinth.com/project/trident-mcci">Download</a>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/docs" prefetch={false}>
              Docs
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://github.com/pe3ep/Trident">Github</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
