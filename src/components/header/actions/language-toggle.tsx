'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { ThemedButton } from '@/components/ui/themed-button'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()

  function getLanguageIcon(locale: string) {
    if (locale === 'en-US') {
      return '/images/countries/us.png'
    } else if (locale === 'es') {
      return '/images/countries/spain.png'
    }

    return '/images/countries/brazil.png'
  }

  function getNewLocale() {
    switch (locale) {
      case 'pt-BR':
        return 'en-US'
      case 'en-US':
        return 'es'
      case 'es':
        return 'pt-BR'
      default:
        return 'pt-BR'
    }
  }

  return (
    <ThemedButton
      size="icon"
      radius="rounded"
      className={cn('relative h-12 w-12 p-2')}
      onClick={() => router.push(`/${getNewLocale()}`)}
    >
      <Image
        src={getLanguageIcon(locale)}
        width={40}
        height={40}
        alt="Language"
      />

      <span className="sr-only">Toggle language</span>
    </ThemedButton>
  )
}
