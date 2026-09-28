"use client";

import dynamic from "next/dynamic";
import { GlitchText } from "@/components/ui/GlitchText";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/lib/constants";
import { Code2, Send } from "lucide-react";
import { motion } from "framer-motion";

// Dynamic import for Fullscreen 3D Interactive Rubik's Cube Scene
const CubeScene = dynamic(
  () => import("@/components/3d/CubeScene").then((mod) => mod.CubeScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] h-[100svh] sm:h-screen sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* FULLSCREEN 3D CUBE ANIMATION - Interactive throughout the entire viewport */}
      <CubeScene modelPath="/cube.glb" />

      {/* Radial ambient fade to seamlessly blend canvas with dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,transparent_0%,rgba(6,8,13,0.65)_60%,#06080d_95%)] pointer-events-none" />

      {/* RESPONSIVE CLEAN LEFT CONTENT OVERLAY */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none pt-16 sm:pt-0">
        <div className="max-w-xl space-y-4 sm:space-y-6 text-left">
          
          {/* Name & Dynamic Glitch Role */}
          <div className="space-y-2 sm:space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-mono tracking-tight text-white leading-[1.1] sm:leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-xl lg:text-2xl font-mono text-muted flex items-center gap-2 h-7 sm:h-8"
            >
              <span className="text-accent-cyan font-bold">&gt;</span>
              <GlitchText
                texts={[
                  "Full-Stack Software Engineer",
                  "Next.js & React Specialist",
                  "Node.js & Python Architect",
                  "AI & Cloud Solutions Builder",
                ]}
                className="text-white font-semibold truncate"
              />
            </motion.div>
          </div>

          {/* Clean Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed font-sans max-w-lg"
          >
            Designing scalable web platforms, high-performance microservices, and AI-driven experiences.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 pointer-events-auto"
          >
            <GlowButton href="#projects" size="md" variant="primary">
              <Code2 size={16} />
              <span>View Work</span>
            </GlowButton>
            <GlowButton href="#contact" variant="secondary" size="md">
              <Send size={15} />
              <span>Contact</span>
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



