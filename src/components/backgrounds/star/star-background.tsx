'use client'

import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { StarField } from './star-field'

export default function StarsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <StarField />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
