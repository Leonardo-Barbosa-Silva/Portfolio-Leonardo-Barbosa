export function Overlay() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-primary" />

      <div className="texture-overlay" aria-hidden="true" />
    </>
  )
}
