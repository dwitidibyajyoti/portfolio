import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { generateCubeCluster, CONFIG, ClusterConfig } from '../../lib/cubeCluster';
import { GlassCube } from './GlassCube';
import { usePointerInteraction } from './usePointerInteraction';

interface CubeClusterProps {
  configOverrides?: Partial<ClusterConfig>;
  modelPath?: string;
}

export const CubeCluster: React.FC<CubeClusterProps> = ({
  configOverrides,
  modelPath = '/cube.glb',
}) => {
  const { size } = useThree();
  const groupRef = useRef<THREE.Group>(null!);

  // Responsive cube configuration based on viewport width
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

  const config = useMemo(() => {
    return {
      ...CONFIG,
      cubeCount: isMobile ? 30 : isTablet ? 42 : 52,
      clusterWidth: isMobile ? 4.2 : isTablet ? 5.0 : CONFIG.clusterWidth,
      clusterHeight: isMobile ? 3.8 : isTablet ? 4.2 : CONFIG.clusterHeight,
      spacing: isMobile ? 0.68 : CONFIG.spacing,
      repulsionRadius: isMobile ? 2.2 : CONFIG.repulsionRadius,
      ...configOverrides,
    };
  }, [isMobile, isTablet, configOverrides]);

  // Load the Blender GLB model once
  const gltf = useGLTF(modelPath);

  // Extract and normalize geometry from the GLB
  const geometry = useMemo(() => {
    let geo: THREE.BufferGeometry | null = null;
    gltf.scene.traverse((child) => {
      if (!geo && (child as THREE.Mesh).isMesh && (child as THREE.Mesh).geometry) {
        geo = (child as THREE.Mesh).geometry.clone();
      }
    });

    if (!geo) {
      // Safe fallback if mesh not found in traversal
      geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    }

    // Center geometry around local origin
    geo.center();
    geo.computeVertexNormals();

    // Normalize scale if model dimensions are non-standard
    geo.computeBoundingSphere();
    const radius = geo.boundingSphere ? geo.boundingSphere.radius : 0.5;
    if (radius > 0) {
      const targetRadius = 0.55;
      const factor = targetRadius / radius;
      geo.scale(factor, factor, factor);
    }

    return geo;
  }, [gltf]);

  // Custom Glass MeshPhysicalMaterial matching specification
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      transmission: 0.92,
      roughness: 0.1,
      thickness: 1.25,
      ior: 1.5,
      color: new THREE.Color('#ebf5ff'),
      attenuationColor: new THREE.Color('#93c5fd'),
      attenuationDistance: 1.8,
      emissive: new THREE.Color('#3b82f6'),
      emissiveIntensity: 0.035,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.75,
      transparent: true,
      opacity: 1.0,
      side: THREE.FrontSide,
    });
  }, []);

  // Generate procedural cube cluster layout
  const cubes = useMemo(() => {
    return generateCubeCluster(config);
  }, [config]);

  // Pointer tracking & drag interaction hook
  const { state: pointerState, handlers } = usePointerInteraction();

  // Gentle global cluster floating and slight parallax
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Ultra-subtle global breathing
    const globalY = Math.sin(time * 0.4) * 0.08;
    const globalRotY = Math.sin(time * 0.25) * 0.06;
    const globalRotX = Math.cos(time * 0.2) * 0.04;

    groupRef.current.position.y = globalY;
    groupRef.current.rotation.y = globalRotY;
    groupRef.current.rotation.x = globalRotX;
  });

  return (
    <>
      {/* Invisible interaction hit plane capturing pointer & drag events */}
      <mesh
        position={[0, 0, 0]}
        visible={false}
        {...handlers}
      >
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Main Cluster Hierarchy */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {cubes.map((cubeData) => (
          <GlassCube
            key={cubeData.id}
            cubeData={cubeData}
            templateScene={gltf.scene}
            pointerState={pointerState}
            config={config}
          />
        ))}
      </group>
    </>
  );
};

// Preload the GLB model
useGLTF.preload('/cube.glb');

export default CubeCluster;
