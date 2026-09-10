"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "green" | "cyan" | "purple" | "amber";
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  glowColor = "green",
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const borderStyles = {
    green: "hover:border-emerald-500/40 hover:shadow-[0_20px_40px_-12px_rgba(0,255,136,0.12)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-12px_rgba(0,229,255,0.12)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.12)]",
    amber: "hover:border-amber-500/40 hover:shadow-[0_20px_40px_-12px_rgba(245,158,11,0.12)]",
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(circle 280px at ${x}px ${y}px, rgba(255, 255, 255, 0.06), transparent 70%)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative rounded-2xl border border-white/[0.08] bg-[#0c1220]/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.35)] ${borderStyles[glowColor]} ${className}`}
    >
      {/* Subtle Interactive Spotlight Glare */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10 opacity-0"
      />

      {/* Delicate Corner Accent Highlights */}
      <div className="pointer-events-none absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20 rounded-tl-sm group-hover:border-emerald-400/60 transition-colors duration-300" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/20 rounded-br-sm group-hover:border-cyan-400/60 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-0 h-full">{children}</div>
    </div>
  );
}

