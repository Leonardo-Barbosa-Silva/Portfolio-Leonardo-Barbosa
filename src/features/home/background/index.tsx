'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { useMount } from '@/hooks/use-mount'

const bgVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

export function Background() {
  const { resolvedTheme } = useTheme()
  const { isMounted } = useMount()

  if (!isMounted) return null

  function getBackground() {
    switch (resolvedTheme) {
      case 'dark':
        return (
          <Image
            src="/images/backgrounds/space.webp"
            alt="A space background"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="-z-10 h-full w-full object-cover opacity-50"
            quality={100}
          />
        )
      default:
        return (
          <Image
            src="/images/backgrounds/nostalgic-happy.png"
            alt="A nostalgic happy iluminated vintage house"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="-z-10 h-full w-full object-cover opacity-50"
            quality={80}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={resolvedTheme || 'light'}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {getBackground()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
