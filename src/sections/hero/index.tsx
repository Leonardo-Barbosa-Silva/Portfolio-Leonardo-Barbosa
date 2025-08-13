'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { getUiDesignClass } from '@/components/helpers/get-ui-design-class'
import { cn } from '@/lib/utils'

import { InfoContact } from './components/contact/info'
import { SocialContact } from './components/contact/social'

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
      return '/images/avatars/me-cartoon.svg'
    }
    return '/images/avatars/me.jpg'
  }

  const variant = getUiDesignClass(resolvedTheme)

  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center gap-10 p-4 lg:h-full">
      <div className="flex h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-4 lg:mt-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={getAvatarImage(resolvedTheme || 'light')}
            variants={bgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              'pointer-events-none h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-primary/50',
              variant,
            )}
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

        <h1 className="text-center font-sans text-2xl font-bold lg:text-6xl">
          Leonardo Barbosa Silva
        </h1>

        <h2 className="text-center font-math text-lg font-bold text-primary-foreground lg:text-2xl">
          I&apos;m a software engineer with a passion for building products that
          help people live better lives.
        </h2>
      </div>

      <SocialContact className="lg:absolute lg:left-1/2 lg:top-8 lg:-translate-x-1/2" />

      <InfoContact />
    </div>
  )
}
