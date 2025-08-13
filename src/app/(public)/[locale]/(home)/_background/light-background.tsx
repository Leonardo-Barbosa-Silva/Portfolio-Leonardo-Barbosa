import Image from 'next/image'

export function LightBackground() {
  return (
    <>
      <Image
        src="/images/backgrounds/nostalgic-happy.png"
        alt="A nostalgic happy iluminated vintage house"
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="-z-10 h-full w-full object-cover opacity-40"
        quality={60}
      />
    </>
  )
}
