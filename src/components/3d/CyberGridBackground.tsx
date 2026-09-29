"use client";

import { useEffect, useRef } from "react";

export function CyberGridBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animId: number | null = null;
    let isRunning = false;

    const updateSmoothGlow = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        currentX += dx * 0.08;
        currentY += dy * 0.08;
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
        }
        animId = requestAnimationFrame(updateSmoothGlow);
      } else {
        isRunning = false;
        animId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(updateSmoothGlow);
      }
    };

    // Initialize position once
    if (spotlightRef.current) {
      spotlightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06080d]" aria-hidden="true">
      {/* Luxury Ambient Atmospheric Aurora Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-cyan-500/10 via-blue-600/5 to-transparent blur-[150px] transform-gpu pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-emerald-500/5 to-transparent blur-[120px] transform-gpu pointer-events-none" />

      {/* Interactive Cursor Spotlight Glow - Hardware Accelerated direct DOM transform */}
      <div
        ref={spotlightRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,rgba(0,229,255,0.03)_40%,transparent_70%)] blur-[60px] transform-gpu will-change-transform pointer-events-none"
      />

      {/* Subtle Luxury Micro-Grid Lines with Radial Mask */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#06080d_90%)] pointer-events-none" />
    </div>
  );
}

