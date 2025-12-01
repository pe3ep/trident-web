'use client'
import Link from 'next/link'
import ModrinthLogo from '../icons/modrinth'
import TridentLogo from '../icons/trident'
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header className="bg-background border-accent sticky top-0 z-99 mx-auto flex w-full items-center justify-center overflow-hidden border-b p-3">
      <div className="flex w-full max-w-5xl justify-between">
        <Link href="/" className="hover:fill-primary fill-foreground transition-all active:scale-90">
          <TridentLogo className="size-8" />
        </Link>

        <div className="flex flex-row-reverse items-center gap-2">
          <Button className="font-semibold">Download</Button>
          <Button asChild variant="ghost">
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost">Github</Button>
        </div>
      </div>
    </header>
  )
}
