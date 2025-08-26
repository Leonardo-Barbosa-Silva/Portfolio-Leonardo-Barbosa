'use client'

import { Wifi } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { Button } from '@/components/ui/button'
import { LocaleCode } from '@/constants/locales'

import { ThemeModeToggle } from './theme-toggle'

const countryIconsPath: Record<LocaleCode, string> = {
  'pt-BR': '/images/countries/br.png',
  'en-US': '/images/countries/us.png',
  'es-ES': '/images/countries/es.png',
}

export function Header() {
  const locale = useLocale()
  const router = useRouter()

  return (
    <header className="fixed inset-0 z-50 flex h-16 w-full items-center justify-center bg-transparent shadow-md backdrop-blur-[6px]">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end gap-4 px-8">
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 hover:bg-transparent"
          onClick={() => {
            const newLocale = locale === 'pt-BR' ? 'en-US' : 'es-ES'
            router.push(`/${newLocale}`)
          }}
        >
          <Image
            src={countryIconsPath[locale]}
            alt="Brazil"
            width={60}
            height={60}
            quality={100}
            className="rounded-full object-contain"
          />
        </Button>

        <ThemeModeToggle />

        <Button size="icon" variant="ghost" className="hover:bg-transparent">
          <Wifi />
        </Button>
      </div>
    </header>
  )
}
