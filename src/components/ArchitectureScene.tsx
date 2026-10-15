"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import WebGLErrorBoundary from "./WebGLErrorBoundary";

type TileProps = {
  position: [number, number, number];
  delay: number;
};

function Tile({ position, delay }: TileProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    mesh.current.position.y = baseY + Math.sin(t * 0.9 + delay) * 0.08;
    mesh.current.rotation.x = y * 0.18 + Math.sin(t * 0.4 + delay) * 0.04;
    mesh.current.rotation.y = x * 0.18 + Math.cos(t * 0.35 + delay) * 0.04;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.85, 0.85, 0.12]} />
      <meshStandardMaterial
        color="#2a2c2e"
        roughness={0.72}
        metalness={0.08}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

function GridWall() {
  const tiles = useMemo(() => {
    const items: TileProps[] = [];
    const cols = 9;
    const rows = 6;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        items.push({
          position: [(col - (cols - 1) / 2) * 1.05, (row - (rows - 1) / 2) * 1.05, 0],
          delay: (col + row) * 0.22,
        });
      }
    }
    return items;
  }, []);

  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.25,
      0.05,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.12,
      0.05,
    );
  });

  return (
    <group ref={group} position={[0, 0, -1.2]}>
      {tiles.map((tile, i) => (
        <Tile key={i} {...tile} />
      ))}
    </group>
  );
}

function CssGridFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(rgba(42,44,46,0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(42,44,46,0.35) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
      }}
    />
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      fallback={<CssGridFallback />}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 8]} intensity={1.1} />
      <directionalLight position={[-5, -2, 3]} intensity={0.35} color="#b83228" />
      <GridWall />
    </Canvas>
  );
}

export default function ArchitectureScene() {
  return (
    <div className="absolute inset-0 -z-0 opacity-40 md:opacity-55 pointer-events-none">
      <WebGLErrorBoundary fallback={<CssGridFallback />}>
        <Scene />
      </WebGLErrorBoundary>
    </div>
  );
}
