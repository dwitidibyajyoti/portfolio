"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Soft glowing circular particle sprite
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(0, 255, 136, 0.85)");
        gradient.addColorStop(0.5, "rgba(0, 229, 255, 0.35)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    const isMobile = window.innerWidth < 768;

    // 1. Interactive 3D Particle Wavefield Mesh
    const gridX = isMobile ? 40 : 75;
    const gridY = isMobile ? 30 : 50;
    const particleCount = gridX * gridY;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorEmerald = new THREE.Color(0x00ff88);
    const colorCyan = new THREE.Color(0x00e5ff);
    const colorBlue = new THREE.Color(0x38bdf8);

    let idx = 0;
    const spacingX = 0.55;
    const spacingY = 0.55;
    const offsetX = (gridX * spacingX) / 2;
    const offsetY = (gridY * spacingY) / 2;

    for (let ix = 0; ix < gridX; ix++) {
      for (let iy = 0; iy < gridY; iy++) {
        const i3 = idx * 3;
        const x = ix * spacingX - offsetX;
        const y = iy * spacingY - offsetY;
        const z = Math.sin((ix / gridX) * Math.PI) * Math.cos((iy / gridY) * Math.PI) * 2.5;

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        // Gradient coloring
        const t = ix / gridX;
        const col = t < 0.5 ? colorEmerald.clone().lerp(colorCyan, t * 2) : colorCyan.clone().lerp(colorBlue, (t - 0.5) * 2);
        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;

        idx++;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.16,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(geometry, material);
    waveMesh.rotation.x = -Math.PI / 4.5;
    waveMesh.position.y = -1.5;
    scene.add(waveMesh);

    // 2. Floating Ambient Constellation Nodes
    const floatingCount = isMobile ? 120 : 350;
    const floatingGeo = new THREE.BufferGeometry();
    const floatingPos = new Float32Array(floatingCount * 3);
    const floatingColors = new Float32Array(floatingCount * 3);

    for (let i = 0; i < floatingCount; i++) {
      const i3 = i * 3;
      floatingPos[i3] = (Math.random() - 0.5) * 35;
      floatingPos[i3 + 1] = (Math.random() - 0.5) * 25;
      floatingPos[i3 + 2] = (Math.random() - 0.5) * 20;

      const col = Math.random() > 0.5 ? colorEmerald : colorCyan;
      floatingColors[i3] = col.r;
      floatingColors[i3 + 1] = col.g;
      floatingColors[i3 + 2] = col.b;
    }

    floatingGeo.setAttribute("position", new THREE.BufferAttribute(floatingPos, 3));
    floatingGeo.setAttribute("color", new THREE.BufferAttribute(floatingColors, 3));

    const floatingMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const floatingParticles = new THREE.Points(floatingGeo, floatingMat);
    scene.add(floatingParticles);

    // Mouse & Interactive Cursor Ray Tracking
    let mouseWorldX = 0;
    let mouseWorldY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;
    let scrollOffset = 0;

    // Interactive Ripple on Click
    let rippleTime = 999;
    let rippleCenter = new THREE.Vector2(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseWorldX = nx * 14;
      mouseWorldY = ny * 10;
      targetCameraX = nx * 1.5;
      targetCameraY = ny * 1.2;
    };

    const handlePointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      rippleCenter.set(nx * 14, ny * 10);
      rippleTime = 0;
    };

    const handleScroll = () => {
      scrollOffset = window.scrollY * 0.005;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      rippleTime += delta * 4;

      // Smooth camera parallax
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, -0.5, 0);

      // Wave physics on particles
      const posArr = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];
        const bz = basePositions[i3 + 2];

        // Smooth flowing harmonic multi-wave
        const wave1 = Math.sin(time * 1.8 + bx * 0.4 + by * 0.3) * 0.8;
        const wave2 = Math.cos(time * 1.2 + bx * 0.2 - by * 0.5) * 0.5;

        // Interactive mouse magnetic push
        const dx = bx - mouseWorldX;
        const dy = by - mouseWorldY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let mouseDisplacement = 0;

        if (dist < 4.5) {
          const force = (1 - dist / 4.5);
          mouseDisplacement = Math.sin(force * Math.PI) * 2.2;
        }

        // Click ripple wave
        let rippleDisplacement = 0;
        if (rippleTime < 6) {
          const rdx = bx - rippleCenter.x;
          const rdy = by - rippleCenter.y;
          const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
          const waveFront = rippleTime * 4.0;
          const diff = Math.abs(rDist - waveFront);
          if (diff < 2.0) {
            rippleDisplacement = Math.sin((1 - diff / 2.0) * Math.PI) * Math.max(0, 2.5 - rippleTime * 0.4);
          }
        }

        posArr[i3 + 2] = bz + wave1 + wave2 + mouseDisplacement + rippleDisplacement;
      }

      geometry.attributes.position.needsUpdate = true;

      // Slowly rotate floating constellation
      floatingParticles.rotation.y = time * 0.02;
      floatingParticles.rotation.x = Math.sin(time * 0.03) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      floatingGeo.dispose();
      floatingMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-auto w-full h-full overflow-hidden"
      aria-hidden="true"
    />
  );
}
