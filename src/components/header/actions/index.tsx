import { LanguageToggle } from './language-toggle'
import { MenuHamburguer } from './menu-hamburguer'
import { ThemeModeToggle } from './theme-toggle'

export function HeaderActions() {
  return (
    <div className="absolute right-4 top-4 z-10 flex items-center gap-4 lg:right-16 lg:top-16">
      <LanguageToggle />

      <ThemeModeToggle />

      <MenuHamburguer />
    </div>
  )
}
