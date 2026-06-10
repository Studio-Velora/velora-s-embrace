import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Blobs() {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  const g3 = useRef<THREE.Mesh>(null);
  const g4 = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (g1.current) {
      g1.current.position.x = Math.sin(t * 0.3) * 2 + mouse.x * 0.6;
      g1.current.position.y = Math.cos(t * 0.25) * 1.5 + mouse.y * 0.4;
    }
    if (g2.current) {
      g2.current.position.x = Math.cos(t * 0.22) * 2.5 - mouse.x * 0.5;
      g2.current.position.y = Math.sin(t * 0.35) * 1.8 - mouse.y * 0.3;
    }
    if (g3.current) {
      g3.current.position.x = Math.sin(t * 0.18 + 2) * 3;
      g3.current.position.y = Math.cos(t * 0.28 + 1) * 2 + mouse.y * 0.5;
    }
    if (g4.current) {
      g4.current.position.x = Math.cos(t * 0.4 + 3) * 2 + mouse.x * 0.8;
      g4.current.position.y = Math.sin(t * 0.2 + 4) * 2;
    }
  });

  return (
    <group>
      <mesh ref={g1} position={[-2, 0, 0]}>
        <sphereGeometry args={[2.6, 64, 64]} />
        <meshBasicMaterial color="#E94F37" transparent opacity={0.55} />
      </mesh>
      <mesh ref={g2} position={[2, 1, -1]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#F2B07B" transparent opacity={0.6} />
      </mesh>
      <mesh ref={g3} position={[0, -2, -2]}>
        <sphereGeometry args={[2.8, 64, 64]} />
        <meshBasicMaterial color="#F5E6D3" transparent opacity={0.7} />
      </mesh>
      <mesh ref={g4} position={[1, -1, 1]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshBasicMaterial color="#FFD7B5" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

export function HeroWebGL() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ filter: "blur(60px) saturate(1.2)" }}
      >
        <Suspense fallback={null}>
          <Blobs />
        </Suspense>
      </Canvas>
    </div>
  );
}
