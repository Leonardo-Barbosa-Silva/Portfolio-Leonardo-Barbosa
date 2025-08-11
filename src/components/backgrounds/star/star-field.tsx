'use client'

import { PointMaterial, Points } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { inSphere } from 'maath/random'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type StarFieldProps = {
  /** total de estrelas (pontos) — ajustado automaticamente no mobile */
  count?: number
  /** raio da esfera onde as estrelas são distribuídas */
  radius?: number
  /** velocidade de rotação base (radianos/segundo) */
  baseSpeed?: number
  /** intensidade de parallax (0 = desliga) */
  parallax?: number
  /** cor das estrelas */
  color?: string
  /** tamanho base (em unidades de mundo quando sizeAttenuation=true) */
  size?: number
  /** usar blending aditivo (efeito glow) */
  additive?: boolean
}

export function StarField({
  count = 4000,
  radius = 2,
  baseSpeed = 0.07,
  color = '#ffffff',
  size = 0.004,
  additive = true,
}: StarFieldProps) {
  // Reference to the container that will rotate
  const group = useRef<THREE.Group>(null)

  // Reference to the object points
  const points = useRef<THREE.Points>(null)

  // Get the viewport size for future start density adjustments
  const { size: viewportSize } = useThree()

  // Adjust the stars density
  const finalCount = useMemo(() => {
    if (viewportSize.width <= 768) {
      return Math.floor(count * 0.7)
    }

    return count
  }, [count, viewportSize.width])

  // Generate the stars positions
  const positions = useMemo(() => {
    const arr = new Float32Array(finalCount * 3)
    inSphere(arr, { radius })

    return arr
  }, [finalCount, radius])

  // Rotate the stars in every frame
  useFrame((state, delta) => {
    const currentGroup = group.current

    if (!currentGroup) return

    // Rotate the stars
    currentGroup.rotation.y -= delta * (baseSpeed * 1.0)
    currentGroup.rotation.x += delta * (baseSpeed * 0.6)
  })

  return (
    <group ref={group} rotation={[0, 0, Math.PI / 4]}>
      {/* Container rotated 45° in Z for a nice initial composition. */}
      <Points ref={points} positions={positions} stride={3} frustumCulled>
        {/* Points: "point cloud" in 1 draw-call.
            - positions: Float32Array mapped as BufferAttribute.
            - stride=3: every 3 floats is a vertex (x,y,z).
            - frustumCulled: let the Three skip the drawing if it's out of the frustum.
        (Improves performance; disable if you notice unwanted clipping.) */}
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          blending={additive ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
        {/* (25) Material para pontos:
               - transparent: habilita canal alpha/blending.
               - color: cor das estrelas.
               - size: tamanho base.
               - sizeAttenuation: tamanho em "mundo" (varia com distância);
                 sem isso, seria tamanho em pixels fixos na tela.
               - depthWrite={false}: evita artefatos de ordenação entre partículas
                 semi-transparentes (z-buffer não "grava" a profundidade).
               - blending: Additive soma cores (efeito "glow" natural); Normal é opaco. */}
      </Points>
    </group>
  )
}
