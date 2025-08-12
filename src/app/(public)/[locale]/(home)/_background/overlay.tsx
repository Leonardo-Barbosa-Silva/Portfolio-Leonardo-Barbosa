export function Overlay() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-background/20" />

      <div className="texture-overlay" aria-hidden="true" />
    </>
  )
}
