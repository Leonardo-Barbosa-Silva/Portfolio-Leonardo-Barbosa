import '@/app/globals.css'

import { Background } from '@/features/home/background'
import { Overlay } from '@/features/home/background/overlay'
import { Header } from '@/features/home/header'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Background />

      <Overlay />

      <Header />

      {children}
    </div>
  )
}
