import { ThemeModeToggle } from './_components/theme/toggle'

export default function HomePage() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <ThemeModeToggle className="absolute left-1/2 top-10 z-10" />

      <video
        autoPlay
        muted
        loop
        className="absolute -top-[290px] left-1/2 w-full min-w-48 max-w-6xl -translate-x-1/2 rotate-180 object-cover"
        aria-hidden="true"
        tabIndex={-1}
        playsInline
      >
        <source src="/videos/purple-blackhole.webm" type="video/webm" />
      </video>

      <span className="z-10">Texto simples</span>
    </div>
  )
}
