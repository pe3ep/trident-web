'use client'
import React from 'react'
import VariableFontCursorProximity from './fancy/text/variable-font-cursor-proximity'
import { cn } from '@/lib/utils'

export default function VariableTitle() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  return (
    <div
      ref={containerRef}
      className="font-overusedgrotesk flex justify-center">
      <VariableFontCursorProximity
        className={cn('text-4xl md:text-6xl lg:text-7xl leading-none')}
        fromFontVariationSettings="'wght' 600, 'slnt' 0"
        toFontVariationSettings="'wght' 900, 'slnt' 0"
        radius={200}
        containerRef={containerRef}>
        Trident
      </VariableFontCursorProximity>
    </div>
  )
}
