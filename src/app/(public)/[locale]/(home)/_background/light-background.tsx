import Image from 'next/image'

export function LightBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full">
      <Image
        src="/images/sunset-2.png"
        alt="Sun"
        quality={70}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="h-full w-full object-cover opacity-40"
      />
    </div>
  )
}
