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
      variant="soft"
      size="icon"
      radius="soft"
      className={cn(
        'relative h-12 w-12 hover:animate-spin-once [&>svg]:size-6',
        className,
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {ThemeIcon(theme)}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
