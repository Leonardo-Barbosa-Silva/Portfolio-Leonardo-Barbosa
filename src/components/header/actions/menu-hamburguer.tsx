import { Link, MenuIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemedButton } from '@/components/ui/themed-button'

export function MenuHamburguer() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ThemedButton
          size="icon"
          radius="rounded"
          className="relative h-12 w-12 [&>svg]:size-6"
        >
          <MenuIcon className="h-8 w-8" />

          <span className="sr-only">Menu</span>
        </ThemedButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={0}
        className="w-[--radix-dropdown-menu-trigger-width] min-w-0"
      >
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
