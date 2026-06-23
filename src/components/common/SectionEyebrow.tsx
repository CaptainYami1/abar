import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_OUT } from '../../lib/motion'

interface SectionEyebrowProps {
  children: ReactNode
  tone?: 'gold' | 'navy'
  pulse?: boolean
  className?: string
}

export function SectionEyebrow({
  children,
  tone = 'gold',
  pulse = false,
  className = '',
}: SectionEyebrowProps) {
  const textColor = tone === 'gold' ? 'text-gold' : 'text-navy'
  const dashColor = tone === 'gold' ? 'bg-gold' : 'bg-navy'

  return (
    <motion.div
      className={`mb-7 inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.14em] sm:mb-8 sm:text-[0.72rem] ${textColor} ${className}`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
    >
      <span
        className={`block h-0.5 w-6 rounded-full ${dashColor} ${pulse ? 'animate-eyebrow-pulse' : ''}`}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}
