import Image from 'next/image'

export function LightBackground() {
  return (
    <>
      <Image
        src="/images/sunset-3.png"
        alt="Sun"
        quality={50}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="-z-10 h-full w-full object-cover opacity-40"
      />
    </>
  )
}
