import StarsBackground from '@/components/backgrounds/star/star-background'

export function DarkBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        aria-hidden="true"
        tabIndex={-1}
        playsInline
        className="absolute -top-[260px] left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 rotate-180 object-contain"
      >
        <source src="/videos/black-hole.webm" type="video/webm" />
      </video>

      <StarsBackground />
    </>
  )
}
