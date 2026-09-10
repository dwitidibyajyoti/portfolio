"use client";

import { useEffect, useState } from "react";

export function CyberGridBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const updateSmoothGlow = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateSmoothGlow);
    };

    animId = requestAnimationFrame(updateSmoothGlow);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06080d]" aria-hidden="true">
      {/* Luxury Ambient Atmospheric Aurora Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-cyan-500/10 via-blue-600/5 to-transparent blur-[150px] transform-gpu" />
      <div className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-emerald-500/5 to-transparent blur-[120px] transform-gpu" />

      {/* Interactive Cursor Spotlight Glow */}
      {mounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,rgba(0,229,255,0.03)_40%,transparent_70%)] blur-[60px] transform-gpu will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          }}
        />
      )}

      {/* Subtle Luxury Micro-Grid Lines with Radial Mask */}
      <div
        className="absolute inset-0 opacity-25"
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#06080d_90%)]" />
    </div>
  );
}

