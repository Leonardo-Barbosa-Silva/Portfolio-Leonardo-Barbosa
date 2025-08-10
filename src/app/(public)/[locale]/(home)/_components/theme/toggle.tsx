'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ThemeModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  console.log(theme)

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('relative rounded-full', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
