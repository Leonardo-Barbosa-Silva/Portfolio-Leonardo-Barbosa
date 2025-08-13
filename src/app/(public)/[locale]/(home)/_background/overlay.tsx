export function Overlay() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-primary/40 dark:bg-transparent" />

      <div className="texture-overlay -z-10" aria-hidden="true" />
    </>
  )
}
