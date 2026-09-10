"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/3d/TiltCard";
import { workExperience } from "@/lib/constants";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Zap,
  Activity,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background cyber grid & glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-3">
              <Briefcase size={13} />
              <span>CHRONOLOGICAL TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Professional <span className="text-accent glow-text">Experience</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              4+ years of professional full-stack development, delivering scalable enterprise architectures, AI pipelines, and high-performance web systems.
            </p>
          </div>
        </AnimatedSection>

        {/* 3D Interactive Timeline Container */}
        <div className="relative border-l-2 border-accent/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {workExperience.map((exp, idx) => (
            <AnimatedSection key={exp.company} delay={idx * 0.15}>
              <div className="relative group">
                
                {/* Timeline Pulse Node Indicator */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full bg-[#06080d] border-2 border-accent flex items-center justify-center shadow-[0_0_12px_rgba(0,255,136,0.5)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>

                {/* 3D Tilt Experience Card */}
                <TiltCard
                  glowColor={idx === 0 ? "green" : idx === 1 ? "cyan" : "purple"}
                  className="p-6 sm:p-8"
                >
                  <div className="space-y-4">
                    
                    {/* Role, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          {idx === 0 && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/15 text-accent border border-accent/30 font-semibold animate-pulse">
                              PRESENT
                            </span>
                          )}
                        </div>

                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold font-mono text-accent-cyan hover:underline group/link"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={13} className="opacity-80 group-hover/link:opacity-100" />
                          </a>
                        ) : (
                          <span className="text-sm font-semibold font-mono text-accent-cyan">
                            {exp.company}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-muted">
                        <span className="flex items-center gap-1 text-foreground/90 font-medium">
                          <Calendar size={13} className="text-accent" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-muted/70">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans border-l-2 border-card-border pl-3">
                      {exp.description}
                    </p>

                    {/* Bullet Achievements */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-1.5 font-bold">
                        <Activity size={13} /> Verified Contributions &amp; Impact
                      </span>
                      <div className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-accent flex-shrink-0 mt-0.5"
                            />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Modules */}
                    <div className="pt-4 border-t border-card-border/60">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#11192e] text-muted border border-card-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

