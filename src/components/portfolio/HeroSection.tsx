"use client";

import dynamic from "next/dynamic";
import { GlitchText } from "@/components/ui/GlitchText";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/lib/constants";
import {
  Code2,
  Sparkles,
  ArrowDown,
  Send,
  Zap,
  Layers,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

// Dynamic import for Three.js 3D Hero Scene
const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function HeroSection() {
  const coreTech = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Python",
    "AWS",
    "Docker",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Super Interactive 3D Particle Mesh Background */}
      <HeroScene />

      {/* Subtle Radial Ambient Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06080d_90%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-8 pointer-events-none">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-mono backdrop-blur-xl shadow-lg pointer-events-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Available for Senior Roles &amp; High-Impact Projects</span>
        </motion.div>

        {/* Name & Role Headline */}
        <div className="space-y-3 pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-mono tracking-tight text-white"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl font-mono text-muted flex items-center justify-center gap-2 h-8"
          >
            <span className="text-accent-cyan font-bold">&gt;</span>
            <GlitchText
              texts={[
                "Senior Full Stack Developer",
                "Next.js & React Specialist",
                "Node.js & Python Architect",
                "AI & Cloud Microservices Builder",
              ]}
              className="text-white font-semibold"
            />
          </motion.div>
        </div>

        {/* Punchy Clean Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans pointer-events-auto"
        >
          {siteConfig.description}
        </motion.p>

        {/* Core Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 pointer-events-auto"
        >
          {coreTech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#0e1424]/80 text-muted border border-white/[0.08] backdrop-blur-md hover:border-accent/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Clear CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 pointer-events-auto"
        >
          <GlowButton href="#projects" size="lg" variant="primary">
            <Code2 size={17} />
            <span>View My Work</span>
          </GlowButton>
          <GlowButton href="#contact" variant="secondary" size="lg">
            <Send size={15} />
            <span>Contact Me</span>
          </GlowButton>
        </motion.div>

        {/* Clean Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex justify-center pointer-events-auto"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-muted/80 hover:text-accent transition-colors"
            aria-label="Scroll to explore"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted/60 group-hover:text-accent transition-colors">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-accent/60 transition-colors">
              <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
