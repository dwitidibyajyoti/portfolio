"use client";

import React from "react";
import { Environment } from "@react-three/drei";

interface SceneLightingProps {
  environmentIntensity?: number;
}

export const SceneLighting: React.FC<SceneLightingProps> = ({
  environmentIntensity = 0.9,
}) => {
  return (
    <>
      {/* Soft general ambient light */}
      <ambientLight intensity={0.7} color="#e0f2fe" />

      {/* Primary key light: Soft cyan-white tint from upper-left/front */}
      <directionalLight
        position={[-6, 7, 5]}
        intensity={1.5}
        color="#e0f0ff"
        castShadow={false}
      />

      {/* Subtle fill light from lower left for depth */}
      <directionalLight
        position={[-3, -4, 2]}
        intensity={0.5}
        color="#00ff88"
      />

      {/* Point light positioned behind and to the right for soft rim lighting */}
      <pointLight
        position={[4.5, -1.5, -3]}
        intensity={3.5}
        distance={14}
        color="#38bdf8"
      />

      {/* Accent front rim light */}
      <pointLight
        position={[3, 3.5, 3]}
        intensity={2.0}
        distance={10}
        color="#818cf8"
      />

      {/* Drei Environment for realistic reflections and specular highlights */}
      <Environment preset="city" environmentIntensity={environmentIntensity} />
    </>
  );
};

export default SceneLighting;
