import Image from 'next/image'

export function LightBackground() {
  return (
    <>
      <Image
        src="/images/nostalgic-happy-2.png"
        alt="Sun"
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="-z-10 h-full w-full object-cover"
      />
    </>
  )
}
