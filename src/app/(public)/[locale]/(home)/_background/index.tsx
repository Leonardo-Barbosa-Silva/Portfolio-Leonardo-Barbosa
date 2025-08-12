'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useTheme } from 'next-themes'

import { useMount } from '@/hooks/use-mount'

import { DarkBackground } from './dark-background'
import { LightBackground } from './light-background'

const bgVariants: Variants = {
  initial: { opacity: 0, scale: 1.02 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
}

export function HomeBackground() {
  const { resolvedTheme } = useTheme()
  const { isMounted } = useMount()

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={resolvedTheme || 'light'}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {resolvedTheme === 'dark' ? <DarkBackground /> : <LightBackground />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
