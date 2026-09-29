import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { RubiksCube } from './RubiksCube';
import { SceneLighting } from './SceneLighting';

interface HeroProps {
  modelPath?: string;
}

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
        <span className="text-xs font-medium text-slate-400">Loading Cube...</span>
      </div>
    </div>
  );
}

export const Hero: React.FC<HeroProps> = ({ modelPath = '/cube.glb' }) => {
  return (
    <section className="relative w-screen h-screen bg-[#f8fafc] overflow-hidden select-none">
      {/* Soft Ambient Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[20%] w-[900px] h-[900px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(186,230,253,0.6) 0%, rgba(224,242,254,0.35) 45%, rgba(248,250,252,0) 75%)',
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full blur-3xl opacity-45 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(199,210,254,0.45) 0%, rgba(224,242,254,0.2) 50%, rgba(248,250,252,0) 75%)',
          }}
        />
      </div>

      {/* Fullscreen 3D Canvas with Interactive Cube Picking & Dragging */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={<SceneLoader />}>
          <Canvas
            className="w-full h-full"
            camera={{ position: [8.0, 6.0, 10.0], fov: 45 }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              alpha: true,
            }}
          >
            <SceneLighting />
            <RubiksCube modelPath={modelPath} baseSpacing={1.38} rotationSpeed={(2 * Math.PI) / 60} />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
