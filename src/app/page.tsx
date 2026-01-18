'use client'
import Navbar from '@/components/elements/navbar'
import GithubLogo from '@/components/icons/github'
import ModrinthLogo from '@/components/icons/modrinth'
import TridentLogo from '@/components/icons/trident'
import ModulesSection from '@/components/sections/modules-section'
import ModrinthVersionComponent from '@/components/test/ModrinthVersionComponent'
import { Button } from '@/components/ui/button'
import LetterTransition from '@/lib/letter-transition'
import { slideTransition, staggerWrapper, swiftTransition } from '@/lib/motion-util'
import { House } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-background relative z-10 h-full w-full">
        <main className="">
          <div className="from-primary/15 to-primary/0 relative grid w-full place-content-center bg-gradient-to-t to-90% p-4 py-20">
            <div className="flex flex-col items-center gap-4">
              <motion.div
                variants={swiftTransition({
                  direction: 'down',
                  offset: 200,
                  duration: 0.5,
                  bounce: 0.35,
                  fromBlur: 16,
                })}
                initial="hidden"
                animate="visible">
                <TridentLogo className="size-16 fill-white" />
              </motion.div>
              <motion.h1
                variants={swiftTransition({
                  direction: 'up',
                  offset: 100,
                  duration: 0.5,
                  bounce: 0.1,
                  fromScale: 0.9,
                })}
                initial="hidden"
                animate="visible"
                className="font-public-sans scroll-m-20 text-center text-5xl font-extrabold tracking-tight text-balance">
                <LetterTransition
                  id={`title`}
                  string={'Trident'}
                  transitionOptions={{
                    offset: 15,
                    fromBlur: 4,
                    duration: 0.4,
                    bounce: 0.5,
                    fromScale: 0.7,
                  }}
                  staggerBy={0.04}
                />
              </motion.h1>

              <motion.div
                className="flex flex-col items-center gap-2 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  duration: 0.9,
                  bounce: 0,
                  delay: 0.3,
                }}>
                <p className="text-muted-foreground">Companion mod for everyone</p>
                <span className="hidden sm:inline-block">•</span>
                <p className="text-muted-foreground">
                  Latest version: <ModrinthVersionComponent />
                </p>
              </motion.div>
              <DownloadButtons />
            </div>
          </div>
          <div className="border-t-2 border-dashed border-white/15" />
          <ModulesSection />
          <div className="border-t-2 border-dashed border-white/15" />
          <ModulesSection />
          <div className="border-t-2 border-dashed border-white/15" />
          <ModulesSection />
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

const DownloadButtons = () => {
  const staggerVariants = slideTransition({ offest: 5, duration: 0.7, fromBlur: 2 })

  return (
    <motion.div
      variants={staggerWrapper(0.075, { startDelay: 0.5 })}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-1.5">
      <motion.div key={1} variants={staggerVariants}>
        <Button variant="secondary" asChild>
          <a href="https://github.com/pe3ep/Trident">Source</a>
        </Button>
      </motion.div>
      <motion.div key={2} variants={staggerVariants}>
        <Button variant="secondary" asChild>
          <Link href="/docs" prefetch={false}>
            Docs
          </Link>
        </Button>
      </motion.div>
      <motion.div key={3} variants={staggerVariants}>
        <Button asChild>
          <a href="https://modrinth.com/project/trident-mcci">
            <ModrinthLogo className="h-5 w-5" />
            Download
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}
