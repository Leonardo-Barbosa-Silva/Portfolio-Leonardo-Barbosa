import { Mail, PhoneCall, Pin } from 'lucide-react'
import { useTheme } from 'next-themes'

import { getUiDesignClass } from '@/components/helpers/get-ui-design-class'
import { cn } from '@/lib/utils'

export function InfoContact() {
  const { resolvedTheme } = useTheme()

  const variant = getUiDesignClass(resolvedTheme)

  return (
    <div className="flex select-none flex-col items-start gap-2 font-montserrat text-sm font-semibold lg:absolute lg:left-16 lg:top-16 lg:gap-4">
      <div
        className={cn(
          'flex select-none items-center gap-4 rounded-full p-3 px-6',
          variant,
        )}
      >
        <Pin className="h-4 w-4" /> São Paulo, Brazil
      </div>

      <div
        className={cn(
          'flex select-none items-center gap-4 rounded-full p-3 px-6',
          variant,
        )}
      >
        <PhoneCall className="h-4 w-4" /> +55 (11) 9 94928-4957
      </div>

      <div
        className={cn(
          'flex select-none items-center gap-4 rounded-full p-3 px-6',
          variant,
        )}
      >
        <Mail className="h-4 w-4" /> leonardo.barbosa.silva@gmail.com
      </div>
    </div>
  )
}
