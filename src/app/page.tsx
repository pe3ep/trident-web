import Navbar from '@/components/elements/navbar'
import GithubLogo from '@/components/icons/github'
import ModrinthLogo from '@/components/icons/modrinth'
import TridentLogo from '@/components/icons/trident'
import ModrinthVersionComponent from '@/components/test/ModrinthVersionComponent'
import { House } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-background relative z-10 h-[100vh] w-full">
        <main className="mx-auto max-w-6xl p-4">
          <div className="grid h-64 w-full place-content-center">
            <div className="flex flex-col items-center gap-4">
              <TridentLogo className="size-16 fill-white" />
              <h1 className="font-public-sans scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance">
                Elevate your Island experience.
              </h1>
              <p className="text-muted-foreground">Trident is a utility mod made specifically for MCC Island.</p>
            </div>
          </div>
          <ModrinthVersionComponent />
        </main>
      </div>
      <footer className="bg-primary sticky bottom-0 z-0 h-48">
        <div className="relative flex h-full w-full justify-center overflow-hidden p-12 md:justify-end">
          <div className="absolute right-0 bottom-0 left-0 mx-12 flex justify-center md:justify-start">
            <img src="/logo.svg" alt="Trident logo" className="w-[150px] translate-y-[20%] md:w-[200px]" />
          </div>
          <div className="sm:pace-x-16 relative flex flex-row space-x-12 font-medium sm:text-lg md:space-x-24">
            <ul>
              <li className="flex cursor-pointer items-center hover:underline">
                <House className="mr-2 h-5 w-5" />
                Home
              </li>
              <li className="flex cursor-pointer items-center hover:underline">
                <ModrinthLogo className="mr-2 h-5 w-5" />
                Download
              </li>
            </ul>
            <ul>
              <li className="flex cursor-pointer items-center hover:underline">
                <GithubLogo className="mr-2 h-5 w-5" />
                Github
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
