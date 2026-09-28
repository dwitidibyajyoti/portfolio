import { useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { useThree, useFrame, ThreeEvent } from '@react-three/fiber';

export interface PointerInteractionState {
  pointer3D: THREE.Vector3;
  smoothPointer3D: THREE.Vector3;
  isDragging: boolean;
  isPointerActive: boolean;
  lastInteractionTime: number;
}

export function usePointerInteraction() {
  const { camera, raycaster, pointer } = useThree();

  const state = useRef<PointerInteractionState>({
    pointer3D: new THREE.Vector3(999, 999, 999),
    smoothPointer3D: new THREE.Vector3(999, 999, 999),
    isDragging: false,
    isPointerActive: false,
    lastInteractionTime: 0,
  });

  const interactionPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const intersectPoint = useMemo(() => new THREE.Vector3(), []);

  // Update 3D pointer position every frame via raycasting on the interaction plane
  useFrame((_, delta) => {
    if (state.current.isPointerActive) {
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.ray.intersectPlane(interactionPlane, intersectPoint);
      if (hit) {
        state.current.pointer3D.copy(hit);
        // Smoothly interpolate the tracker
        const lerpFactor = Math.min(1, delta * 14);
        state.current.smoothPointer3D.lerp(hit, lerpFactor);
      }
    } else {
      // Damped return when pointer leaves
      state.current.pointer3D.set(999, 999, 999);
      state.current.smoothPointer3D.lerp(state.current.pointer3D, Math.min(1, delta * 6));
    }
  });

  const handlePointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    state.current.isDragging = true;
    state.current.isPointerActive = true;
    state.current.lastInteractionTime = performance.now();
  }, []);

  const handlePointerUp = useCallback(() => {
    state.current.isDragging = false;
  }, []);

  const handlePointerEnter = useCallback(() => {
    state.current.isPointerActive = true;
  }, []);

  const handlePointerLeave = useCallback(() => {
    state.current.isPointerActive = false;
    state.current.isDragging = false;
  }, []);

  const handlePointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    state.current.isPointerActive = true;
    state.current.lastInteractionTime = performance.now();
  }, []);

  return {
    state,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      onPointerMove: handlePointerMove,
    },
  };
}
