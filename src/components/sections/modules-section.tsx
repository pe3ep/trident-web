'use client'
import { motion, useInView } from 'motion/react'
import React from 'react'
import { Button } from '../ui/button'

export default function ModulesSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: 0.3 } }}
      ref={ref}
      className="mx-auto flex max-w-6xl flex-col gap-4 p-4 py-12">
      <h2 className="font-public-sans ml-2 scroll-m-20 text-4xl font-bold tracking-tight text-balance">Modules</h2>
      <div className="bg-accent flex w-full justify-between gap-1 rounded-3xl p-2 *:grow">
        <Button>Test</Button>
        <Button>Test2</Button>
      </div>
      <div className="bg-accent h-[500px] w-full rounded-3xl"></div>
    </motion.section>
  )
}
