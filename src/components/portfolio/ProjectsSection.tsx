"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { portfolioProjects } from "@/lib/constants";
import { ArrowRight, ExternalLink, Sparkles, FolderGit2, CheckCircle2 } from "lucide-react";

export function ProjectsSection() {
  const featured = portfolioProjects.filter((p) => p.featured);
  const otherProjects = portfolioProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}featured work &amp; systems
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              Engineered <span className="text-accent glow-text">Projects</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3">
              A collection of native macOS tools, AI/NLP pipelines, and enterprise full-stack web applications.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          {featured.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.15}>
              <div className="group relative rounded-xl border border-card-border bg-card hover:bg-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between h-full p-6 sm:p-8">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded border border-accent-cyan/20">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 font-semibold">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-mono mb-2 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Screenshot preview if HDShare */}
                  {project.link === "/hdshare" && (
                    <div className="relative rounded-lg border border-card-border bg-background/50 h-44 w-full mb-5 overflow-hidden">
                      <Image
                        src="/images/screenshot-1.jpg"
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-muted leading-relaxed"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / Tags & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161616] text-muted border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex items-center gap-3 pt-3 border-t border-card-border/60">
                      <GlowButton
                        href={project.link}
                        size="sm"
                        external={project.link.startsWith("http")}
                      >
                        <span>
                          {project.link.startsWith("http")
                            ? "Visit Platform"
                            : "Explore App"}
                        </span>
                        {project.link.startsWith("http") ? (
                          <ExternalLink size={13} />
                        ) : (
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        )}
                      </GlowButton>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enterprise & Client Solutions Grid */}
        <div className="mt-14">
          <div className="mb-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-foreground flex items-center gap-2 font-bold">
              <FolderGit2 size={16} className="text-accent" />
              Client Platforms &amp; Enterprise Systems Contributed To
            </h3>
            <p className="text-xs text-muted font-mono mt-1">
              Production platforms, client web apps, and enterprise systems where I worked as a software developer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {otherProjects.map((project, idx) => (
              <AnimatedSection key={project.title} delay={0.1 + idx * 0.1}>
                <div className="p-6 rounded-xl border border-card-border bg-card/60 hover:bg-card hover:border-accent/30 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono text-accent-cyan">
                        {project.category}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted hover:text-accent font-mono flex items-center gap-1"
                        >
                          <span>Live Link</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <h4 className="font-mono font-bold text-base text-foreground group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-muted/90 leading-relaxed"
                        >
                          <span className="text-accent text-xs mt-0.5">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-card-border/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-background text-muted border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

