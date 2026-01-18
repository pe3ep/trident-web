import { StaggerOptions, Variant, Variants, stagger } from 'motion/react'
import { del } from 'motion/react-client'

export interface AppearTransitionOptions {
  fromScale?: number
  fromBlur?: number
  duration?: number
  bounce?: number
}

export function appearTransition({
  fromScale = 0.7,
  fromBlur = 8,
  duration = 0.6,
  bounce = 0.3,
}: AppearTransitionOptions = {}): Variants {
  const hidden: Variant = {
    opacity: 0,
    scale: fromScale,
    filter: `blur(${fromBlur}px)`,
    transition: {
      filter: { type: 'tween', duration: duration * 0.25, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration * 0.25, ease: 'easeOut' },
      type: 'spring',
      duration: duration,
      bounce: 0.0,
    },
  }

  const visible: Variant = {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      filter: { type: 'tween', duration: duration * 0.25, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration * 0.25, ease: 'easeOut' },
      type: 'spring',
      duration: duration,
      bounce: bounce,
    },
  }

  return {
    hidden: hidden,
    visible: visible,
    exit: hidden,
  }
}

export interface SwiftTransitionOptions {
  fromScale?: number
  fromBlur?: number
  toOpacity?: number
  direction?: 'up' | 'down'
  duration?: number
  bounce?: number
  offset?: number
  delay?: number
}

export function swiftTransition({
  fromScale = 0.3,
  fromBlur = 10,
  toOpacity = 1,
  direction = 'up',
  duration = 0.3,
  bounce = 0.5,
  offset = 20,
  delay = 0,
}: SwiftTransitionOptions = {}): Variants {
  const hidden: Variant = {
    opacity: 0,
    y: direction == 'up' ? offset : offset * -1,
    scale: fromScale,
    filter: `blur(${fromBlur}px)`,
    transition: {
      filter: { type: 'tween', duration: duration * 0.5, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration, ease: 'easeOut' },
      type: 'spring',
      visualDuration: duration,
      bounce: 0,
    },
  }

  const visible: Variant = {
    opacity: toOpacity,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      filter: { type: 'tween', duration: duration, ease: 'easeOut' },
      scale: { type: 'tween', duration: duration, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration, ease: 'easeOut' },
      type: 'spring',
      visualDuration: duration,
      bounce: bounce,
    },
  }

  const exit: Variant = {
    opacity: 0,
    y: direction == 'up' ? offset * -1 : offset,
    scale: fromScale,
    filter: `blur(${fromBlur}px)`,
    transition: {
      filter: { type: 'tween', duration: duration * 0.5, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration, ease: 'easeOut' },
      type: 'spring',
      visualDuration: duration,
      bounce: 0,
    },
  }

  return {
    hidden: hidden,
    visible: visible,
    exit: exit,
  }
}

export interface SlideTransitionOptions {
  offest?: number
  duration?: number
  fromBlur?: number
  staggerBy?: number
  staggerDelay?: number
}

export function slideTransition({
  offest = 10,
  duration = 0.6,
  fromBlur = 0,
  staggerBy = 0,
  staggerDelay = 0,
}: SlideTransitionOptions = {}): Variants {
  const hidden: Variant = {
    opacity: 0,
    y: offest,
    filter: `blur(${fromBlur}px)`,
  }
  const visible: Variant = {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: staggerBy != 0 ? stagger(staggerBy, { startDelay: staggerDelay }) : undefined,
      type: 'spring',
      duration: duration,
      bounce: 0,
    },
    filter: 'blur(0px)',
  }
  return {
    hidden: hidden,
    visible: visible,
    exit: hidden,
  }
}

export interface ZoomTransitionOptions {
  fromBlur?: number
  originX?: number
  originY?: number
  duration?: number
  bounce?: number
}

export function zoomTransition({
  fromBlur = 10,
  originX = 0.5,
  originY = 0,
  duration = 0.3,
  bounce = 0.3,
}: ZoomTransitionOptions = {}): Variants {
  const hidden: Variant = {
    scale: 0,
    opacity: 0,
    filter: `blur(${fromBlur}px`,
    originX: originX,
    originY: originY,
  }
  const visible: Variant = {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      filter: { type: 'tween', duration: duration, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration, ease: 'easeOut' },
      type: 'spring',
      visualDuration: duration,
      bounce: bounce,
    },
  }
  const exit: Variant = {
    scale: 0,
    opacity: 0,
    filter: `blur(${fromBlur}px`,
    transition: {
      filter: { type: 'tween', duration: duration, ease: 'easeOut' },
      opacity: { type: 'tween', duration: duration, ease: 'easeOut' },
      type: 'spring',
      visualDuration: duration,
      bounce: 0.0,
    },
  }

  return {
    hidden: hidden,
    visible: visible,
    exit: exit,
  }
}

export function staggerWrapper(duration: number, options?: StaggerOptions): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(duration, options),
      },
    },
    exit: {},
  }
}
