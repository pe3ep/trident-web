import Navbar from '@/components/elements/navbar'
import GithubLogo from '@/components/icons/github'
import ModrinthLogo from '@/components/icons/modrinth'
import { House } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-background relative z-10 h-[100vh] w-full">
        <main className="mx-auto max-w-6xl p-4">
          {/* <h1 className="font-public-sans scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Trident
          </h1>
          <div className="flex max-w-min flex-col gap-4">
            <Button variant="default">Hello!</Button>
            <Button variant="secondary">Hello!</Button>
            <Button variant="modrinth">Hello!</Button>
            <Button variant="destructive">Hello!</Button>
            <Button variant="ghost">Hello!</Button>
            <Button variant="outline">Hello!</Button>
          </div>
          <div className="mt-4 flex max-w-min gap-2">
            <Badge variant="default">hello</Badge>
            <Badge variant="destructive">hello</Badge>
            <Badge variant="outline">hello</Badge>
            <Badge variant="secondary">hello</Badge>
          </div>
          <p>This is regular text.</p>
          <ModrinthVersionComponent /> */}
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
