import { Link, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function MenuHamburguer() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="relative h-12 w-12 rounded-full [&>svg]:size-6"
        >
          <MenuIcon className="h-8 w-8" />

          <span className="sr-only">Menu</span>
        </Button>
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
