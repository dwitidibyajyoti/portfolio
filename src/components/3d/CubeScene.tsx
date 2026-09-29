"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RubiksCube } from "./RubiksCube";
import { SceneLighting } from "./SceneLighting";

interface CubeSceneProps {
  modelPath?: string;
  className?: string;
  isVisible?: boolean;
}

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    </div>
  );
}

export const CubeScene: React.FC<CubeSceneProps> = ({
  modelPath = "/cube.glb",
  className = "",
  isVisible = true,
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
    >
      {/* Soft Ambient Radial Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[20%] right-[10%] w-[650px] h-[650px] rounded-full blur-3xl opacity-35 pointer-events-none transform-gpu"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.3) 0%, rgba(56,189,248,0.12) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[20%] w-[550px] h-[550px] rounded-full blur-3xl opacity-25 pointer-events-none transform-gpu"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,136,0.25) 0%, rgba(99,102,241,0.1) 45%, transparent 70%)",
          }}
        />
      </div>

      {/* Fullscreen Interactive 3D Canvas */}
      <div className="w-full h-full select-none pointer-events-auto">
        <Suspense fallback={<SceneLoader />}>
          <Canvas
            frameloop={isVisible ? "always" : "never"}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            camera={{ position: [11.5, 7.8, 15.0], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              powerPreference: "high-performance",
              alpha: true,
              preserveDrawingBuffer: true,
            }}
          >
            <SceneLighting environmentIntensity={0.9} />
            <RubiksCube
              modelPath={modelPath}
              baseSpacing={1.38}
              rotationSpeed={0.22}
            />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default CubeScene;


