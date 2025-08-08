import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World</h1>

      <Button>
        <Link href="/"></Link>
        Click me
      </Button>
    </div>
  )
}
