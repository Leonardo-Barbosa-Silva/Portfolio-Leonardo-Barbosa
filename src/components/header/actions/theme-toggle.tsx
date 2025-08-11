'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

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

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('relative rounded-full', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {ThemeIcon(theme)}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
