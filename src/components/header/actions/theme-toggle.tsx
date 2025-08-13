'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { getUiDesignClass } from '@/components/helpers/get-ui-design-class'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function ThemeIcon(theme?: string) {
  if (theme === 'dark') {
    return <Sun />
  }

  return <Moon />
}

export function ThemeModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  const variant = getUiDesignClass(theme)

  return (
    <Button
      variant={variant}
      size="icon"
      radius="rounded"
      className={cn('relative h-12 w-12 [&>svg]:size-6', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {ThemeIcon(theme)}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
