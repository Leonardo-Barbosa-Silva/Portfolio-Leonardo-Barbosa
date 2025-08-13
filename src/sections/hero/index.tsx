'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

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

export const HeroSection = () => {
  const { resolvedTheme } = useTheme()

  function getAvatarImage(theme: string) {
    if (theme === 'light') {
      return '/images/me-cartoon.svg'
    }
    return '/images/me.jpg'
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={getAvatarImage(resolvedTheme || 'light')}
            variants={bgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pointer-events-none relative h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-soft-ring"
          >
            <Image
              src={getAvatarImage(resolvedTheme || 'light')}
              alt="Avatar"
              width={400}
              height={400}
              quality={40}
              className="h-full w-full object-cover object-[50%_20%]"
            />
          </motion.div>
        </AnimatePresence>

        <h1 className="text-center font-sans text-6xl font-bold">
          Leonardo Barbosa Silva
        </h1>

        <h2 className="text-center font-math text-2xl font-bold text-primary-foreground">
          I&apos;m a software engineer with a passion for building products that
          help people live better lives.
        </h2>
      </div>
    </div>
  )
}
