import { MenuHamburguer } from './menu-hamburguer'
import { ThemeModeToggle } from './theme-toggle'

export function HeaderActions() {
  return (
    <div className="fixed right-10 top-10 z-10 flex items-center gap-8">
      <ThemeModeToggle />
      <MenuHamburguer />
    </div>
  )
}
