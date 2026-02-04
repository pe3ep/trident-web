'use client'
import { motion } from 'motion/react'
import { ModrinthVersion } from './types'
import React from 'react'

export default function ModrinthVersionComponent() {
  const [version, setVersion] = React.useState<ModrinthVersion[] | null>(null)
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchModrinth() {
      let data = await fetch('https://api.modrinth.com/v2/project/L6RCcsrd/version')
        .then((res) => res.json())
        .catch((e) => console.error(e))

      setVersion(data as ModrinthVersion[])
      setLoading(false)
    }

    fetchModrinth()
  }, [])

  if (isLoading) {
    return <span className="text-foreground font-semibold blur-[4px]">1.0.0</span>
  }

  return (
    <motion.span
      initial={{ filter: 'blur(4px)' }}
      animate={{ filter: 'blur(0px)' }}
      className="text-foreground font-semibold">
      {version ? version[0].version_number : 'unkown'}
    </motion.span>
  )
}
