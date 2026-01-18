import { swiftTransition, SwiftTransitionOptions } from '@/lib/motion-util'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, stagger, Variants } from 'motion/react'

const defaultTransition: SwiftTransitionOptions = {
  fromBlur: 5,
  offset: 10,
  duration: 0.3,
  bounce: 0.6,
  fromScale: 0.5,
}

interface LetterTransitionProps {
  id: string
  string: string
  transitionOptions?: SwiftTransitionOptions
  className?: string
  staggerBy?: number
}

export default function LetterTransition({
  id,
  string,
  transitionOptions = defaultTransition,
  staggerBy = 0.02,
  className,
}: LetterTransitionProps) {
  const transition = swiftTransition(transitionOptions)

  const chars = Array.from(string)

  const container: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(staggerBy, { startDelay: staggerBy * 2 }) } },
    exit: { transition: { delayChildren: stagger(staggerBy) } },
  }

  return (
    <div className={cn('inline-flex', className)}>
      <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          key={id}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="inline-flex">
          {chars.map((ch, i) => (
            <motion.span key={`${id}:${i}`} variants={transition} className="inline-block">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
