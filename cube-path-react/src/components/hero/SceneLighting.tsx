import React from 'react';
import { Environment } from '@react-three/drei';

interface SceneLightingProps {
  environmentIntensity?: number;
}

export const SceneLighting: React.FC<SceneLightingProps> = ({ environmentIntensity = 0.9 }) => {
  return (
    <>
      {/* Soft general ambient light */}
      <ambientLight intensity={0.65} color="#e6f2ff" />

      {/* Primary key light: Soft blue-white tint from upper-left/front */}
      <directionalLight
        position={[-6, 7, 5]}
        intensity={1.4}
        color="#e0f0ff"
        castShadow={false}
      />

      {/* Subtle fill light from lower left for depth */}
      <directionalLight
        position={[-3, -4, 2]}
        intensity={0.4}
        color="#bae6fd"
      />

      {/* Point light positioned behind and to the right for soft rim lighting */}
      <pointLight
        position={[4.5, -1.5, -3]}
        intensity={3.2}
        distance={14}
        color="#60a5fa"
      />

      {/* Accent front rim light */}
      <pointLight
        position={[3, 3.5, 3]}
        intensity={1.8}
        distance={10}
        color="#93c5fd"
      />

      {/* Drei Environment for realistic glass refractions and specular highlights */}
      <Environment preset="city" environmentIntensity={environmentIntensity} />
    </>
  );
};

export default SceneLighting;
