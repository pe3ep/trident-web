import GithubLogo from '@/components/icons/github'
import ModrinthLogo from '@/components/icons/modrinth'
import ModrinthVersionComponent from '@/components/test/ModrinthVersionComponent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import VariableTitle from '@/components/VariableTitle'
import { House } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="bg-background relative z-10 h-[100vh] w-full">
        <main className="max-w-6xl mx-auto p-4">
          <h1 className="font-public-sans scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Trident
          </h1>
          <VariableTitle />
          <div className="flex flex-col gap-4 max-w-min">
            <Button variant="default">Hello!</Button>
            <Button variant="secondary">Hello!</Button>
            <Button variant="modrinth">Hello!</Button>
            <Button variant="destructive">Hello!</Button>
            <Button variant="ghost">Hello!</Button>
            <Button variant="outline">Hello!</Button>
          </div>
          <div className="mt-4 flex gap-2 max-w-min">
            <Badge variant="default">hello</Badge>
            <Badge variant="destructive">hello</Badge>
            <Badge variant="outline">hello</Badge>
            <Badge variant="secondary">hello</Badge>
          </div>
          <p>This is regular text.</p>
          <ModrinthVersionComponent />
        </main>
      </div>
      <footer className="sticky z-0 bottom-0 h-48 bg-primary">
        <div className="relative overflow-hidden w-full h-full flex justify-center md:justify-end p-12">
          <div className="absolute mx-12 bottom-0 left-0 right-0 flex justify-center md:justify-start">
            <img
              src="/logo.svg"
              alt="Trident logo"
              className="w-[150px] md:w-[200px] translate-y-[20%]"
            />
          </div>
          <div className="relative flex flex-row space-x-12 sm:pace-x-16 md:space-x-24 sm:text-lg md:text-xl font-medium">
            <ul>
              <li className="hover:underline cursor-pointer flex items-center">
                <House className="h-5 w-5 mr-2" />
                Home
              </li>
              <li className="hover:underline cursor-pointer flex items-center">
                <ModrinthLogo className="h-5 w-5 mr-2" />
                Download
              </li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer flex items-center">
                <GithubLogo className="h-5 w-5 mr-2" />
                Github
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
