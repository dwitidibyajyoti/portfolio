"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { TiltCard } from "@/components/3d/TiltCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { portfolioProjects, ProjectItem } from "@/lib/constants";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Shield,
  Activity,
  Maximize2,
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProjectSection() {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  // We highlight ClientLane CRM and HDShare for macOS as the flagship featured products
  const clientLane = portfolioProjects.find((p) => p.title.includes("ClientLane")) || portfolioProjects[0];
  const hdShare = portfolioProjects.find((p) => p.title.includes("HDShare")) || portfolioProjects[1];

  return (
    <section id="featured" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-3">
              <Sparkles size={13} />
              <span>FLAGSHIP ENGINEERING SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Featured <span className="text-accent glow-text">Innovations</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              Spotlight on independent SaaS architectures and native applications built from concept to production.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Showcase 1: ClientLane CRM */}
        <AnimatedSection delay={0.1} className="mb-14">
          <TiltCard glowColor="cyan" className="p-6 sm:p-10 border-accent-cyan/30">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 font-semibold">
                    {clientLane.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 font-bold">
                    <Sparkles size={12} />
                    FLAGSHIP SAAS
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-white mb-2">
                    {clientLane.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                    {clientLane.description}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-1.5 font-bold">
                    <Activity size={14} /> Core Architectural Deliverables
                  </span>
                  <div className="grid gap-2.5">
                    {clientLane.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#09101d] border border-card-border/80 text-xs sm:text-sm text-foreground/90 font-mono"
                      >
                        <CheckCircle2 size={16} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {clientLane.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#11192e] text-muted-foreground border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-card-border/60">
                    <GlowButton href={clientLane.link} size="md" external>
                      <span>Launch Live Platform</span>
                      <ExternalLink size={15} />
                    </GlowButton>
                    <button
                      onClick={() => setSelectedModalProject(clientLane)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-card-border bg-[#0d1424] text-xs font-mono text-muted hover:text-white hover:border-accent/40 transition-all cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      <span>Inspect Telemetry</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right 3D Mockup Holographic Display */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-accent-cyan/40 bg-gradient-to-br from-[#0c1426] via-[#090e1a] to-[#060912] p-6 shadow-[0_15px_40px_rgba(0,229,255,0.15)] overflow-hidden">
                  
                  {/* Cyber Holographic HUD header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-card-border/80 text-[11px] font-mono">
                    <span className="text-accent-cyan flex items-center gap-1.5">
                      <Zap size={13} /> SAAS DEPLOYMENT
                    </span>
                    <span className="text-accent">ONLINE: HTTPS</span>
                  </div>

                  {/* Visual Interface Elements */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#0e1628] border border-card-border space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted">Deal Pipeline Visualizer</span>
                        <span className="text-xs font-mono text-accent font-bold">$124,500</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded bg-[#131d33] text-center border border-card-border">
                          <span className="text-[10px] font-mono text-muted block">Leads</span>
                          <span className="text-xs font-mono text-white font-bold">28</span>
                        </div>
                        <div className="p-2 rounded bg-[#131d33] text-center border border-card-border">
                          <span className="text-[10px] font-mono text-accent-cyan block">Negotiation</span>
                          <span className="text-xs font-mono text-accent-cyan font-bold">14</span>
                        </div>
                        <div className="p-2 rounded bg-[#131d33] text-center border border-card-border">
                          <span className="text-[10px] font-mono text-accent block">Closed</span>
                          <span className="text-xs font-mono text-accent font-bold">32</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e1628] border border-card-border space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white">Unified Client Directory</span>
                        <span className="text-accent-cyan">Active Sync</span>
                      </div>
                      <p className="text-[11px] font-sans text-muted leading-relaxed">
                        Seamless contact histories, file attachments, and business growth analytics for modern entrepreneurs.
                      </p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="mt-4 pt-3 border-t border-card-border/60 flex items-center justify-between text-[10px] font-mono text-muted">
                    <span>HOSTED: VERCEL EDGE</span>
                    <span className="text-accent">SSL TLS 1.3</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </AnimatedSection>

        {/* Featured Showcase 2: HDShare for macOS */}
        <AnimatedSection delay={0.2}>
          <TiltCard glowColor="green" className="p-6 sm:p-10 border-accent/30">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Screenshot & Visual Preview */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl border border-accent/40 overflow-hidden shadow-[0_15px_40px_rgba(0,255,136,0.15)] bg-black/60">
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src="/images/screenshot-1.jpg"
                      alt={hdShare.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 bg-[#080e1a]/95 border-t border-card-border flex items-center justify-between text-[11px] font-mono">
                    <span className="text-accent flex items-center gap-1.5">
                      <Shield size={12} /> NATIVE MACOS UTILITY
                    </span>
                    <span className="text-muted">SWIFTUI + NEXT.JS</span>
                  </div>
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 font-semibold">
                    {hdShare.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                    <Zap size={12} />
                    0% QUALITY LOSS
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-white mb-2">
                    {hdShare.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                    {hdShare.description}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-1.5 font-bold">
                    <Activity size={14} /> Native Performance Highlights
                  </span>
                  <div className="grid gap-2.5">
                    {hdShare.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#09101d] border border-card-border/80 text-xs sm:text-sm text-foreground/90 font-mono"
                      >
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hdShare.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#11192e] text-muted-foreground border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-card-border/60">
                    <GlowButton href={hdShare.link} size="md">
                      <span>Explore HDShare App</span>
                      <ArrowRight size={15} />
                    </GlowButton>
                    <button
                      onClick={() => setSelectedModalProject(hdShare)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-card-border bg-[#0d1424] text-xs font-mono text-muted hover:text-white hover:border-accent/40 transition-all cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      <span>Inspect Telemetry</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </AnimatedSection>
      </div>

      {/* Project Detail Inspection Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
