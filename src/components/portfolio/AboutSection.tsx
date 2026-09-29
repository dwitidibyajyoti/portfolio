"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/3d/TiltCard";
import { siteConfig } from "@/lib/constants";
import {
  User,
  MapPin,
  Cpu,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Server,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const [activeConsoleCmd, setActiveConsoleCmd] = useState<string>("overview");

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial cyber ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
              <Activity size={13} />
              <span>DIAGNOSTICS &amp; CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Engineering <span className="text-accent-cyan glow-text-cyan">Profile</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              4+ years of building resilient full-stack systems, modern cloud microservices, and AI-accelerated user experiences.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Key Animated Metric Pillars */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            
            <TiltCard glowColor="green" className="p-5 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-accent/10 text-accent mb-2">
                  <Zap size={22} />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
                  4<span className="text-accent">+</span>
                </span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Years In Production
                </span>
              </div>
            </TiltCard>

            <TiltCard glowColor="cyan" className="p-5 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-2">
                  <Layers size={22} />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
                  10<span className="text-accent-cyan">+</span>
                </span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Production Systems
                </span>
              </div>
            </TiltCard>

            <TiltCard glowColor="purple" className="p-5 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple mb-2">
                  <Cpu size={22} />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
                  15<span className="text-accent-purple">+</span>
                </span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Core Technologies
                </span>
              </div>
            </TiltCard>

            <TiltCard glowColor="amber" className="p-5 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-accent-amber/10 text-accent-amber mb-2">
                  <Award size={22} />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
                  ~25<span className="text-accent-amber">%</span>
                </span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Latency Optimization
                </span>
              </div>
            </TiltCard>
          </div>
        </AnimatedSection>

        {/* Core Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: 3 Diagnostic Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Card 1: Full Stack Mastery */}
            <AnimatedSection delay={0.15}>
              <TiltCard glowColor="cyan" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan flex-shrink-0 border border-accent-cyan/30">
                    <Code2 size={22} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-bold text-base text-white">
                        Full-Stack &amp; Modern Frameworks
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                        FRONTEND + BACKEND
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      With over 4 years of professional software development experience, I design and build end-to-end architectures across fintech, healthtech, logistics, gaming, and SaaS. Specializing in Next.js, React.js, TypeScript, Node.js/Express.js, PHP/Laravel, and GraphQL.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 2: AI / NLP & Cloud Microservices */}
            <AnimatedSection delay={0.25}>
              <TiltCard glowColor="green" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/15 text-accent flex-shrink-0 border border-accent/30">
                    <Cpu size={22} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-bold text-base text-white">
                        AI, NLP &amp; Cloud Infrastructure
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                        AWS + DOCKER
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      Experienced in deploying AI-assisted intelligence via OpenAI APIs, building speech-to-text NLP data extraction pipelines, containerizing microservices with Docker/Kubernetes, and managing robust AWS cloud workloads (EC2, S3, RDS).
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 3: Location & Operational Availability */}
            <AnimatedSection delay={0.35}>
              <TiltCard glowColor="purple" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-purple/15 text-accent-purple flex-shrink-0 border border-accent-purple/30">
                    <MapPin size={22} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-bold text-base text-white">
                        Operational Headquarters &amp; Availability
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        GLOBAL COLLABORATION
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      Based in <span className="text-white font-semibold">{siteConfig.location}</span>. Available for senior engineering roles, remote international teams, enterprise contract consulting, and innovative product builds.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>

          {/* Right: Live Interactive Diagnostic Terminal (5 cols) */}
          <AnimatedSection delay={0.2} direction="left" className="lg:col-span-5">
            <div className="rounded-2xl border border-card-border bg-[#080d19]/90 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-card-border/80 bg-[#0c1222]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-muted pl-2">
                    ~/diagnostics --system
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-accent">
                  <ShieldCheck size={13} />
                  <span>INTEGRITY 100%</span>
                </div>
              </div>

              {/* Terminal Interactive Selector */}
              <div className="flex border-b border-card-border/60 bg-[#0a0f1e] px-3 py-1.5 gap-2 text-[11px] font-mono overflow-x-auto">
                {[
                  { id: "overview", label: "system.info" },
                  { id: "strengths", label: "strengths.log" },
                  { id: "delivery", label: "delivery.spec" },
                ].map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => setActiveConsoleCmd(cmd.id)}
                    className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                      activeConsoleCmd === cmd.id
                        ? "bg-accent-cyan/20 text-accent-cyan font-bold"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {"> "}
                    {cmd.label}
                  </button>
                ))}
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 min-h-[300px] leading-relaxed">
                {activeConsoleCmd === "overview" && (
                  <div className="space-y-3">
                    <p className="text-muted">
                      <span className="text-accent">$</span> neofetch --engineer
                    </p>
                    <div className="space-y-1.5 text-xs text-muted-foreground border-l-2 border-accent/40 pl-3">
                      <p><span className="text-accent-cyan font-bold">DEVELOPER:</span> {siteConfig.name}</p>
                      <p><span className="text-accent-cyan font-bold">TITLE:</span> {siteConfig.role}</p>
                      <p><span className="text-accent-cyan font-bold">EXPERIENCE:</span> 4+ Years Enterprise &amp; SaaS</p>
                      <p><span className="text-accent-cyan font-bold">EDUCATION:</span> B.Tech CSE (KITE) &bull; Dip. Mech</p>
                      <p><span className="text-accent-cyan font-bold">FOCUS:</span> Scalable Web Apps &bull; AI Integrations</p>
                    </div>
                  </div>
                )}

                {activeConsoleCmd === "strengths" && (
                  <div className="space-y-3">
                    <p className="text-muted">
                      <span className="text-accent">$</span> cat core_strengths.md
                    </p>
                    <ul className="space-y-2 text-xs text-foreground/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>High-performance frontend rendering &amp; ~25% load time cuts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>Resilient REST &amp; GraphQL API contract design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>Real-time bidirectional communication (WebSockets &amp; WebRTC)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>OpenAI smart filtering &amp; speech-to-text integration</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeConsoleCmd === "delivery" && (
                  <div className="space-y-3">
                    <p className="text-muted">
                      <span className="text-accent">$</span> verify --workflow-sdlc
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-[#0d1424] border border-card-border/70 flex items-center justify-between">
                        <span className="text-muted">Agile / Sprint Cadence</span>
                        <span className="text-accent font-bold">Active Sprint Delivery</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0d1424] border border-card-border/70 flex items-center justify-between">
                        <span className="text-muted">Code Quality &amp; Reviews</span>
                        <span className="text-accent-cyan font-bold">Modular Reusable Libs</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0d1424] border border-card-border/70 flex items-center justify-between">
                        <span className="text-muted">Deployment Safety</span>
                        <span className="text-yellow-400 font-bold">Docker Containerized</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-card-border/60 flex items-center gap-2 text-[11px] text-accent font-mono">
                  <CheckCircle2 size={13} />
                  <span>SDLC Management &bull; Scalable Architectures &bull; Clean Code</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


