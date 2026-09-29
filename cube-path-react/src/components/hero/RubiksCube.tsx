import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree, ThreeEvent } from '@react-three/fiber';

interface AsymmetricRubiksCubeProps {
  modelPath?: string;
  baseSpacing?: number;
  rotationSpeed?: number;
}

interface CubeletData {
  id: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
}

export const RubiksCube: React.FC<AsymmetricRubiksCubeProps> = ({
  modelPath = '/cube.glb',
  baseSpacing = 1.38,
  rotationSpeed = (2 * Math.PI) / 60,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const { camera, raycaster, pointer, gl } = useThree();

  // Load the Blender GLB once
  const gltf = useGLTF(modelPath);

  // Generate asymmetric Rubik's cube layout with uneven gaps and extra cubes
  const initialCubelets = useMemo(() => {
    const list: CubeletData[] = [];

    // Helper for deterministic pseudo-random variation based on seed
    const pseudoRand = (seed: number) => {
      const x = Math.sin(seed * 9999) * 10000;
      return x - Math.floor(x);
    };

    let count = 0;

    // 1. Core 3x3x3 Rubik's structure with uneven gaps and slice shifts
    for (let x of [-1, 0, 1]) {
      for (let y of [-1, 0, 1]) {
        for (let z of [-1, 0, 1]) {
          count++;
          const seed = count * 13.37;

          // Uneven gap offsets per axis (some cubes pulled further, some tighter)
          const gapJitterX = (pseudoRand(seed + 1) - 0.45) * 0.32;
          const gapJitterY = (pseudoRand(seed + 2) - 0.5) * 0.38;
          const gapJitterZ = (pseudoRand(seed + 3) - 0.48) * 0.34;

          // Asymmetric slice explosion offsets (e.g. partial twist/shift of certain layers)
          const sliceShiftX = x === 1 ? 0.22 : x === -1 ? -0.12 : 0;
          const sliceShiftY = y === 1 ? 0.18 : y === -1 ? -0.25 : 0;
          const sliceShiftZ = z === 1 ? 0.15 : z === -1 ? -0.18 : 0;

          const posX = x * baseSpacing + gapJitterX + sliceShiftX;
          const posY = y * baseSpacing + gapJitterY + sliceShiftY;
          const posZ = z * baseSpacing + gapJitterZ + sliceShiftZ;

          // Discrete 90-degree Rubik twists mixed with subtle tilt
          const rotSteps = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
          const stepX = rotSteps[Math.floor(pseudoRand(seed + 4) * 4)];
          const stepY = rotSteps[Math.floor(pseudoRand(seed + 5) * 4)];
          const stepZ = rotSteps[Math.floor(pseudoRand(seed + 6) * 4)];

          const microTiltX = (pseudoRand(seed + 7) - 0.5) * 0.08;
          const microTiltY = (pseudoRand(seed + 8) - 0.5) * 0.08;
          const microTiltZ = (pseudoRand(seed + 9) - 0.5) * 0.08;

          // Slight scale variations for organic deconstructed feel
          const scale = 0.94 + pseudoRand(seed + 10) * 0.12;

          list.push({
            id: `core-${x}-${y}-${z}`,
            position: new THREE.Vector3(posX, posY, posZ),
            rotation: new THREE.Euler(stepX + microTiltX, stepY + microTiltY, stepZ + microTiltZ),
            scale,
          });
        }
      }
    }

    // 2. Expanded satellite clusters and secondary layer cubes (doubling total count to ~80)
    const extraOffsets: [number, number, number][] = [
      // Outer Face Extensions (Layer 1)
      [2.2, 0.35, -0.2],
      [-2.25, 1.15, 0.3],
      [0.3, 2.3, -1.1],
      [1.1, -2.35, 0.4],
      [-1.2, -1.1, 2.2],
      [0.2, 1.35, -2.25],
      [1.85, 1.9, 0.6],
      [-1.9, -1.85, -0.5],
      [0.8, -2.15, -1.8],
      [-2.15, 0.2, 1.85],
      [1.9, -1.2, 1.75],
      [-0.4, 2.15, 1.9],

      // Corner extensions & floating satellites (Layer 2)
      [2.3, 2.2, 1.4],
      [-2.3, 2.1, -1.5],
      [2.2, -2.2, -1.3],
      [-2.4, -2.1, 1.6],
      [1.4, 2.4, -2.1],
      [-1.5, -2.3, -2.2],
      [2.5, -0.8, 1.9],
      [-2.4, 1.7, 1.8],
      [0.7, 2.5, 2.1],
      [-0.8, -2.5, 2.2],
      [2.2, 1.3, -2.3],
      [-2.2, -1.4, -2.4],

      // Peripheral asymmetric accents (Layer 3)
      [3.1, 0.5, 0.2],
      [-3.0, -0.4, 0.5],
      [0.4, 3.1, 0.3],
      [-0.5, -3.1, -0.2],
      [0.6, 0.2, 3.2],
      [-0.3, 0.6, -3.1],
      [2.8, 1.8, -0.9],
      [-2.9, -1.7, 0.8],
      [1.6, -2.9, 1.5],
      [-1.7, 2.8, -1.4],
      [2.1, -2.2, 2.6],
      [-2.2, 2.3, -2.5],
      [0.9, 3.0, -1.8],
      [-1.1, -3.0, 1.7],
      [2.7, -1.5, -2.2],
      [-2.6, 1.6, 2.3],
      [1.3, 2.2, 2.8],
      [-1.4, -2.4, -2.7],
      [3.2, -1.1, 0.9],
      [-3.1, 1.2, -0.8],
      [0.8, -3.2, 1.1],
      [-0.9, 3.2, -1.0],
      [2.0, 2.9, 1.2],
      [-2.1, -2.8, -1.3],
      [1.7, 0.9, -3.2],
      [-1.8, -0.8, 3.1],
      [2.9, 0.2, 2.4],
    ];

    extraOffsets.forEach((off, idx) => {
      const seed = (idx + 50) * 17.77;
      const scale = 0.88 + pseudoRand(seed + 1) * 0.18;
      const rotSteps = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
      const stepX = rotSteps[Math.floor(pseudoRand(seed + 2) * 4)];
      const stepY = rotSteps[Math.floor(pseudoRand(seed + 3) * 4)];
      const stepZ = rotSteps[Math.floor(pseudoRand(seed + 4) * 4)];

      list.push({
        id: `extra-${idx}`,
        position: new THREE.Vector3(off[0], off[1], off[2]),
        rotation: new THREE.Euler(stepX, stepY, stepZ),
        scale,
      });
    });

    return list;
  }, [baseSpacing]);

  // Keep live positions in a ref map so dragging updates smoothly
  const cubeletsMap = useRef(new Map<string, CubeletData>());
  useEffect(() => {
    cubeletsMap.current.clear();
    initialCubelets.forEach((c) => cubeletsMap.current.set(c.id, c));
  }, [initialCubelets]);

  // Dragging state ref
  const dragRef = useRef<{
    activeId: string | null;
    plane: THREE.Plane;
    offset: THREE.Vector3;
    cubeMeshGroup: THREE.Group | null;
  }>({
    activeId: null,
    plane: new THREE.Plane(),
    offset: new THREE.Vector3(),
    cubeMeshGroup: null,
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Auto-rotate the cluster continuously on its path
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
      groupRef.current.rotation.x = Math.sin(groupRef.current.rotation.y * 0.5) * 0.08;
    }

    // While dragging an active cube, update its position relative to the rotating cluster
    if (dragRef.current.activeId && dragRef.current.cubeMeshGroup && groupRef.current) {
      raycaster.setFromCamera(pointer, camera);
      const hitPoint = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(dragRef.current.plane, hitPoint)) {
        // Target world position accounting for initial grab offset
        const targetWorldPos = hitPoint.sub(dragRef.current.offset);
        // Transform from world coordinates into the rotating cluster's local space
        const localPos = groupRef.current.worldToLocal(targetWorldPos);

        // Update the live mesh position in cluster local coordinates
        dragRef.current.cubeMeshGroup.position.copy(localPos);

        const data = cubeletsMap.current.get(dragRef.current.activeId);
        if (data) {
          data.position.copy(localPos);
        }
      }
    }
  });

  // Cubelet Pick Handler
  const handlePointerDown = useCallback(
    (e: ThreeEvent<PointerEvent>, id: string, meshGroup: THREE.Group) => {
      e.stopPropagation();
      gl.domElement.style.cursor = 'grabbing';

      // Create a drag plane facing the camera passing through the cube's current world position
      const cubeWorldPos = new THREE.Vector3();
      meshGroup.getWorldPosition(cubeWorldPos);

      const planeNormal = new THREE.Vector3();
      camera.getWorldDirection(planeNormal).negate();
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(planeNormal, cubeWorldPos);

      // Calculate pick offset to prevent jumping
      raycaster.setFromCamera(pointer, camera);
      const hitPoint = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(plane, hitPoint)) {
        dragRef.current.offset.subVectors(hitPoint, cubeWorldPos);
      } else {
        dragRef.current.offset.set(0, 0, 0);
      }

      dragRef.current.plane = plane;
      dragRef.current.activeId = id;
      dragRef.current.cubeMeshGroup = meshGroup;
    },
    [camera, pointer, raycaster, gl]
  );

  // Global pointer up listener
  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (dragRef.current.activeId) {
        dragRef.current.activeId = null;
        dragRef.current.cubeMeshGroup = null;
        gl.domElement.style.cursor = hoveredId ? 'grab' : 'auto';
      }
    };

    window.addEventListener('pointerup', handleGlobalPointerUp);
    window.addEventListener('pointercancel', handleGlobalPointerUp);
    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointercancel', handleGlobalPointerUp);
    };
  }, [gl, hoveredId]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {initialCubelets.map((item) => (
        <InteractiveCubelet
          key={item.id}
          id={item.id}
          templateScene={gltf.scene}
          initialPosition={item.position}
          rotation={item.rotation}
          scale={item.scale}
          isHovered={hoveredId === item.id}
          onPick={handlePointerDown}
          onHover={(id, isHover) => {
            if (!dragRef.current.activeId) {
              setHoveredId(isHover ? id : null);
              gl.domElement.style.cursor = isHover ? 'grab' : 'auto';
            }
          }}
        />
      ))}
    </group>
  );
};

interface InteractiveCubeletProps {
  id: string;
  templateScene: THREE.Group;
  initialPosition: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
  isHovered: boolean;
  onPick: (e: ThreeEvent<PointerEvent>, id: string, meshGroup: THREE.Group) => void;
  onHover: (id: string, isHover: boolean) => void;
}

const InteractiveCubelet: React.FC<InteractiveCubeletProps> = ({
  id,
  templateScene,
  initialPosition,
  rotation,
  scale,
  isHovered,
  onPick,
  onHover,
}) => {
  const meshGroupRef = useRef<THREE.Group>(null!);

  // Clone the scene while preserving original textures and material
  const cloned = useMemo(() => {
    const clone = templateScene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          mat.envMapIntensity = 1.35;
          mesh.material = mat;
        }
      }
    });
    return clone;
  }, [templateScene]);

  return (
    <group
      ref={meshGroupRef}
      position={initialPosition}
      rotation={rotation}
      scale={scale}
      onPointerDown={(e) => onPick(e, id, meshGroupRef.current)}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(id, true);
      }}
      onPointerOut={() => {
        onHover(id, false);
      }}
    >
      <primitive object={cloned} />
    </group>
  );
};

useGLTF.preload('/cube.glb');

export default RubiksCube;
