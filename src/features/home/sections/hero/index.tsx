'use client'

import Image from 'next/image'

/* const bgVariants: Variants = {
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
} */

export const HeroSection = () => {
  /* const { resolvedTheme } = useTheme() */

  /* function getAvatarImage(theme: string) {
    if (theme === 'light') {
      return '/images/avatars/me-cartoon.svg'
    }
    return '/images/avatars/me.jpg'
  }

  const variant = getUiDesignClass(resolvedTheme)
 */
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-10 p-4 lg:h-full">
      <div className="flex h-[calc(100dvh-4rem)] w-full flex-col gap-4 lg:mt-0">
        <h1 className="text-5xl font-bold lg:text-8xl">Software Engineer</h1>

        <h2 className="font-grid text-4xl font-bold text-primary-foreground lg:text-5xl">
          FULL STACK DEVELOPER
        </h2>

        <div className="mx-auto mt-8 flex h-56 w-56 items-center justify-center rounded-full p-8 ring-2 ring-primary/60 backdrop-blur-[8px]">
          <Image
            src="/images/avatars/me.webp"
            alt="Avatar"
            width={80}
            height={100}
            quality={100}
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="text-center text-lg font-medium">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems.
        </h3>
      </div>
    </div>
  )
}
