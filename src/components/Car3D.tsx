import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei"
import type * as THREE from "three"

// Public GLB — the official three.js Ferrari showroom model:
// realistic body, wheels, interior at rims. High-poly at production-grade.
const CAR_URL = "https://threejs.org/examples/models/gltf/ferrari.glb"

function CarModel() {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF(
    CAR_URL,
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
  )

  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35
    }
  })

  return (
    <group ref={group} position={[0, -0.55, 0]} scale={1.35}>
      <primitive object={scene} />
    </group>
  )
}
useGLTF.preload(
  CAR_URL,
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
)

function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink text-bone-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-bone-200/30 border-t-bone-50" />
        <p className="text-[11px] font-semibold uppercase tracking-kicker text-bone-200/70">
          Loading 3D model
        </p>
      </div>
    </div>
  )
}

interface Props {
  className?: string
}

export default function Car3D({ className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [4.5, 1.6, 5.5], fov: 32 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <color attach="background" args={["#0c0c0e"]} />
        <fog attach="fog" args={["#0c0c0e", 8, 22]} />

        <ambientLight intensity={0.35} />
        <spotLight
          position={[6, 8, 4]}
          angle={0.35}
          penumbra={0.9}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-6, 4, -4]} intensity={0.6} color="#c9a15e" />

        <Suspense fallback={null}>
          <Float speed={1.1} rotationIntensity={0.05} floatIntensity={0.35}>
            <CarModel />
          </Float>

          <ContactShadows
            position={[0, -0.85, 0]}
            opacity={0.75}
            scale={12}
            blur={2.4}
            far={4.5}
            color="#000000"
          />

          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>

      {/* Minimal viewfinder overlay */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-6 top-6 h-6 w-6 border-l border-t border-bone-50/25" />
        <span className="absolute right-6 top-6 h-6 w-6 border-r border-t border-bone-50/25" />
        <span className="absolute bottom-6 left-6 h-6 w-6 border-b border-l border-bone-50/25" />
        <span className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-bone-50/25" />
      </div>
    </div>
  )
}

interface StageProps {
  className?: string
}

// Fallback wrapper with Suspense-based loading UI
export function Car3DStage({ className = "" }: StageProps) {
  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <Suspense fallback={<Fallback />}>
        <Car3D className="h-full w-full" />
      </Suspense>
    </div>
  )
}
