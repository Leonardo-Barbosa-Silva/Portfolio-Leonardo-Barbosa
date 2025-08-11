import '@/app/globals.css'

import { HeaderActions } from '@/components/header/actions'

import { HomeBackground } from './_background'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
      <HomeBackground />

      <HeaderActions />

      {children}
    </div>
  )
}
