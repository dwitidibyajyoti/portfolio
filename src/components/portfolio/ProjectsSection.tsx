"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { TiltCard } from "@/components/3d/TiltCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { portfolioProjects, ProjectItem } from "@/lib/constants";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  Layers,
  Maximize2,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { label: "All Missions", value: "All" },
    { label: "SaaS & Independent", value: "SaaS" },
    { label: "FinTech & AI", value: "FinTech" },
    { label: "HealthTech & Enterprise", value: "Enterprise" },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "SaaS") {
      return (
        project.category.toLowerCase().includes("saas") ||
        project.category.toLowerCase().includes("macos") ||
        project.category.toLowerCase().includes("gaming")
      );
    }
    if (activeFilter === "FinTech") {
      return (
        project.category.toLowerCase().includes("fintech") ||
        project.category.toLowerCase().includes("ai") ||
        project.tags.some((t) => t.toLowerCase().includes("openai") || t.toLowerCase().includes("payment"))
      );
    }
    if (activeFilter === "Enterprise") {
      return (
        project.category.toLowerCase().includes("health") ||
        project.category.toLowerCase().includes("e-commerce") ||
        project.category.toLowerCase().includes("telehealth") ||
        project.category.toLowerCase().includes("foodtech")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-3">
              <FolderGit2 size={13} />
              <span>DEPLOYED SYSTEMS &amp; ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Engineering <span className="text-accent glow-text">Missions</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              Production full-stack platforms, fintech aggregators, AI/NLP pipelines, and native utilities delivered with excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Navigation */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  activeFilter === tab.value
                    ? "bg-accent/15 border-accent text-accent font-bold shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                    : "bg-[#0c1220]/80 border-card-border text-muted hover:text-foreground hover:bg-[#121a2d]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* 3D Interactive Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.08}>
              <TiltCard
                glowColor={project.featured ? "green" : "cyan"}
                className="h-full p-6 sm:p-7 flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded border border-accent-cyan/20">
                      {project.category}
                    </span>
                    {project.featured ? (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-accent/10 text-accent border border-accent/20 font-semibold">
                        <Sparkles size={11} />
                        Flagship
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-muted/80 flex items-center gap-1">
                        <Terminal size={11} /> PROD
                      </span>
                    )}
                  </div>

                  {/* Project Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold font-mono text-white group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <Maximize2 size={15} className="opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                    </h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Optional preview if HDShare */}
                  {project.link === "/hdshare" && (
                    <div className="relative rounded-xl border border-card-border bg-black/40 h-40 w-full overflow-hidden">
                      <Image
                        src="/images/screenshot-1.jpg"
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-foreground/85 font-mono leading-relaxed"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags & Actions */}
                <div className="pt-5 mt-4 border-t border-card-border/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b2e] text-muted border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Inspect Details</span>
                      <ArrowRight size={13} />
                    </button>

                    {project.link && (
                      <GlowButton
                        href={project.link}
                        size="sm"
                        external={project.link.startsWith("http")}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{project.link.startsWith("http") ? "Launch" : "Open App"}</span>
                        {project.link.startsWith("http") ? (
                          <ExternalLink size={12} />
                        ) : (
                          <ArrowRight size={12} />
                        )}
                      </GlowButton>
                    )}
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

