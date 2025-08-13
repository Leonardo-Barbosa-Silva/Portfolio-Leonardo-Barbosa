import '@/app/globals.css'

import { HeaderActions } from '@/components/header/actions'

import { HomeBackground } from './_background'
import { Overlay } from './_background/overlay'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-scroll">
      <HomeBackground />

      <HeaderActions />

      {children}

      <Overlay />
    </div>
  )
}
