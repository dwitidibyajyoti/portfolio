import * as THREE from 'three';

export interface ClusterConfig {
  cubeCount: number;
  spacing: number;
  clusterWidth: number;
  clusterHeight: number;
  clusterDepth: number;
  repulsionRadius: number;
  repulsionForce: number;
  dragRepulsionForce: number;
  dampFactor: number;
  idleFloatAmplitude: number;
  idleRotateAmplitude: number;
  idleSpeed: number;
}

export const CONFIG: ClusterConfig = {
  cubeCount: 50,
  spacing: 0.75,
  clusterWidth: 5.5,
  clusterHeight: 4.6,
  clusterDepth: 2.6,
  repulsionRadius: 2.75,
  repulsionForce: 1.5,
  dragRepulsionForce: 2.4,
  dampFactor: 0.08,
  idleFloatAmplitude: 0.16,
  idleRotateAmplitude: 0.08,
  idleSpeed: 0.75,
};

export interface CubeData {
  id: number;
  originPosition: [number, number, number];
  originRotation: [number, number, number];
  idlePhase: [number, number, number];
  idleSpeed: number;
  scale: number;
  rotationSpeed: [number, number, number];
}

/**
 * Procedurally generates an asymmetric, organic 3D cluster of cubes.
 * Avoids rigid Rubik's cube grid while maintaining balanced density and aesthetic spacing.
 */
export function generateCubeCluster(customConfig: Partial<ClusterConfig> = {}): CubeData[] {
  const cfg = { ...CONFIG, ...customConfig };
  const cubes: CubeData[] = [];

  const targetCount = cfg.cubeCount;
  const halfW = cfg.clusterWidth / 2;
  const halfH = cfg.clusterHeight / 2;
  const halfD = cfg.clusterDepth / 2;
  const minDistance = cfg.spacing * 0.78;

  // Generate candidate positions using organic ellipsoidal distribution with harmonic jitter
  const candidates: [number, number, number][] = [];
  const step = cfg.spacing * 0.72;

  for (let x = -halfW; x <= halfW; x += step) {
    for (let y = -halfH; y <= halfH; y += step) {
      for (let z = -halfD; z <= halfD; z += step) {
        // Normalized ellipsoidal coordinates
        const nx = x / halfW;
        const ny = y / halfH;
        const nz = z / halfD;

        // Asymmetric weighting: denser in upper-center and softly tapered toward bottom-right
        const asymmetry = Math.sin(nx * 2.2 + ny * 1.5) * 0.15 + Math.cos(nz * 2.0) * 0.1;
        const radiusSq = nx * nx + ny * ny + nz * nz + asymmetry;

        if (radiusSq <= 1.05) {
          // Add organic jitter
          const jx = x + (Math.random() - 0.5) * step * 0.65;
          const jy = y + (Math.random() - 0.5) * step * 0.65;
          const jz = z + (Math.random() - 0.5) * step * 0.65;
          candidates.push([jx, jy, jz]);
        }
      }
    }
  }

  // Shuffle candidates deterministically / pseudo-randomly
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  // Pick candidate points satisfying minimum distance constraint
  const selectedPositions: [number, number, number][] = [];

  for (const cand of candidates) {
    if (selectedPositions.length >= targetCount) break;

    let isTooClose = false;
    for (const sel of selectedPositions) {
      const dx = cand[0] - sel[0];
      const dy = cand[1] - sel[1];
      const dz = cand[2] - sel[2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < minDistance) {
        isTooClose = true;
        break;
      }
    }

    if (!isTooClose) {
      selectedPositions.push(cand);
    }
  }

  // Fallback if strict spacing prevented reaching targetCount
  let fallbackIndex = 0;
  while (selectedPositions.length < targetCount && fallbackIndex < candidates.length) {
    selectedPositions.push(candidates[fallbackIndex % candidates.length]);
    fallbackIndex++;
  }

  // Generate metadata for each cube
  for (let i = 0; i < selectedPositions.length; i++) {
    const pos = selectedPositions[i];

    // Subtle individual orientation offsets
    const rotX = (Math.random() - 0.5) * 0.45;
    const rotY = (Math.random() - 0.5) * 0.55;
    const rotZ = (Math.random() - 0.5) * 0.35;

    // Unique phases for sine-wave idle motion
    const phaseX = Math.random() * Math.PI * 2;
    const phaseY = Math.random() * Math.PI * 2;
    const phaseZ = Math.random() * Math.PI * 2;

    const idleSpeed = 0.65 + Math.random() * 0.6;
    const scale = 0.88 + Math.random() * 0.22;

    const rotSpeedX = (Math.random() - 0.5) * 0.15;
    const rotSpeedY = (Math.random() - 0.5) * 0.2;
    const rotSpeedZ = (Math.random() - 0.5) * 0.15;

    cubes.push({
      id: i,
      originPosition: [pos[0], pos[1], pos[2]],
      originRotation: [rotX, rotY, rotZ],
      idlePhase: [phaseX, phaseY, phaseZ],
      idleSpeed,
      scale,
      rotationSpeed: [rotSpeedX, rotSpeedY, rotSpeedZ],
    });
  }

  return cubes;
}

const _tempVec = new THREE.Vector3();
const _dirVec = new THREE.Vector3();

/**
 * Calculates spring-like repulsion displacement vector for a cube away from the 3D pointer.
 */
export function calculateRepulsionDisplacement(
  currentPos: THREE.Vector3,
  pointer3D: THREE.Vector3,
  isDragging: boolean,
  isPointerActive: boolean,
  config: ClusterConfig,
  outDisplacement: THREE.Vector3
): void {
  if (!isPointerActive) {
    outDisplacement.set(0, 0, 0);
    return;
  }

  // Distance in 3D space between pointer and cube
  const dist = currentPos.distanceTo(pointer3D);

  if (dist >= config.repulsionRadius || dist < 0.0001) {
    outDisplacement.set(0, 0, 0);
    return;
  }

  // Smooth quadratic falloff curve (1 at center, 0 at outer boundary)
  const normDist = dist / config.repulsionRadius;
  const falloff = Math.pow(1 - normDist, 1.8);

  // Direction vector pointing away from pointer
  _dirVec.subVectors(currentPos, pointer3D).normalize();

  // Add subtle outward Z push so nearby cubes bloom forward slightly
  _dirVec.z += 0.25;
  _dirVec.normalize();

  const strength = isDragging ? config.dragRepulsionForce : config.repulsionForce;
  outDisplacement.copy(_dirVec).multiplyScalar(falloff * strength);
}
