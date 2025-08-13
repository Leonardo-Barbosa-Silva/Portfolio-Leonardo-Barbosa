'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { getUiDesignClass } from '@/components/helpers/get-ui-design-class'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SocialContact({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()

  const variant = getUiDesignClass(resolvedTheme)

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button
        variant={variant}
        size="icon"
        className="h-12 w-12 rounded-full"
        asChild
      >
        <Link href="https://github.com/leo-barbosa">
          <Github />
        </Link>
      </Button>

      <Button
        variant={variant}
        size="icon"
        className="h-12 w-12 rounded-full"
        asChild
      >
        <Link href="https://www.linkedin.com/in/leonardo-barbosa-silva/">
          <Linkedin />
        </Link>
      </Button>
    </div>
  )
}
