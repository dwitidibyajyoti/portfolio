import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { CubeData, ClusterConfig, calculateRepulsionDisplacement } from '../../lib/cubeCluster';
import { PointerInteractionState } from './usePointerInteraction';

interface GlassCubeProps {
  cubeData: CubeData;
  templateScene: THREE.Group;
  pointerState: React.MutableRefObject<PointerInteractionState>;
  config: ClusterConfig;
}

export const GlassCube: React.FC<GlassCubeProps> = ({
  cubeData,
  templateScene,
  pointerState,
  config,
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  // Clone the exact Blender GLB scene with its original textures and materials
  const clonedScene = useMemo(() => {
    const clone = templateScene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const originalMat = mesh.material as THREE.MeshStandardMaterial;
          const mat = originalMat.clone();
          mat.envMapIntensity = 1.4;
          mesh.material = mat;
        }
      }
    });
    return clone;
  }, [templateScene]);

  // Mutable vectors to avoid garbage collection inside useFrame
  const currentDisplacement = useRef(new THREE.Vector3(0, 0, 0));
  const targetDisplacement = useRef(new THREE.Vector3(0, 0, 0));
  const currentWorldPos = useRef(new THREE.Vector3(...cubeData.originPosition));

  // Base rotation vectors
  const baseRot = useMemo(
    () => new THREE.Euler(...cubeData.originRotation),
    [cubeData.originRotation]
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();
    const t = time * config.idleSpeed * cubeData.idleSpeed;

    // 1. Calculate Idle Offset (sinusoidal gentle floating in space)
    const idleX = Math.cos(t * 0.75 + cubeData.idlePhase[0]) * (config.idleFloatAmplitude * 0.45);
    const idleY = Math.sin(t + cubeData.idlePhase[1]) * config.idleFloatAmplitude;
    const idleZ = Math.sin(t * 0.65 + cubeData.idlePhase[2]) * (config.idleFloatAmplitude * 0.35);

    // 2. Current base position in world space
    currentWorldPos.current.set(
      cubeData.originPosition[0] + idleX + currentDisplacement.current.x,
      cubeData.originPosition[1] + idleY + currentDisplacement.current.y,
      cubeData.originPosition[2] + idleZ + currentDisplacement.current.z
    );

    // 3. Pointer Interaction: Calculate repulsion force away from cursor
    calculateRepulsionDisplacement(
      currentWorldPos.current,
      pointerState.current.smoothPointer3D,
      pointerState.current.isDragging,
      pointerState.current.isPointerActive,
      config,
      targetDisplacement.current
    );

    // 4. Smooth Damped Spring-like Lerp toward target displacement
    const lerpRate = pointerState.current.isPointerActive ? 12 : 6;
    const lerpAlpha = Math.min(1, delta * lerpRate);
    currentDisplacement.current.lerp(targetDisplacement.current, lerpAlpha);

    // 5. Final animated position = originPosition + idleOffset + pointerDisplacement
    groupRef.current.position.set(
      cubeData.originPosition[0] + idleX + currentDisplacement.current.x,
      cubeData.originPosition[1] + idleY + currentDisplacement.current.y,
      cubeData.originPosition[2] + idleZ + currentDisplacement.current.z
    );

    // 6. Subtle organic rotation & tilt response to pointer force
    const rotTiltX = currentDisplacement.current.y * 0.25;
    const rotTiltY = -currentDisplacement.current.x * 0.25;
    const idleRotX = Math.sin(t * 0.6 + cubeData.idlePhase[0]) * config.idleRotateAmplitude;
    const idleRotY = Math.cos(t * 0.5 + cubeData.idlePhase[1]) * config.idleRotateAmplitude;
    const idleRotZ = Math.sin(t * 0.4 + cubeData.idlePhase[2]) * (config.idleRotateAmplitude * 0.6);

    groupRef.current.rotation.set(
      baseRot.x + idleRotX + rotTiltX,
      baseRot.y + idleRotY + rotTiltY,
      baseRot.z + idleRotZ
    );
  });

  return (
    <group ref={groupRef} scale={cubeData.scale}>
      <primitive object={clonedScene} />
    </group>
  );
};

export default GlassCube;
