"use client";

import { GlitchText } from "@/components/ui/GlitchText";
import { GlowButton } from "@/components/ui/GlowButton";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/constants";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection delay={0}>
              <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-mono mb-6">
                <Sparkles size={14} />
                Available for work
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-4 leading-tight">
                <span className="text-muted">{">"} </span>
                Hi, I&apos;m{" "}
                <span className="text-accent glow-text">
                  {siteConfig.name}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-muted mb-6 h-10">
                <GlitchText
                  texts={[
                    "Software Engineer",
                    "Full-Stack Developer",
                    "Next.js & React Specialist",
                    "Node.js & Python Builder",
                    "Cloud & DevOps Integrator",
                  ]}
                  className="text-foreground"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-muted text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                {siteConfig.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <GlowButton href="/#projects" size="lg">
                  <Code2 size={18} />
                  View Projects
                </GlowButton>
                <GlowButton href="/#contact" variant="secondary" size="lg">
                  Get in Touch
                </GlowButton>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Terminal card */}
          <AnimatedSection delay={0.3} direction="left" className="flex-1 w-full max-w-lg">
            <TerminalCard title="~/developer-profile" className="glow-green-sm">
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-muted">cat</span> profile.json
                </p>
                <div className="pl-2 text-muted">
                  <p>{"{"}</p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">&quot;name&quot;</span>:{" "}
                    <span className="text-green-400">
                      &quot;{siteConfig.name}&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">&quot;role&quot;</span>:{" "}
                    <span className="text-green-400">
                      &quot;{siteConfig.role}&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">&quot;experience&quot;</span>:{" "}
                    <span className="text-yellow-400">
                      &quot;4+ Years Full-Stack&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">&quot;location&quot;</span>:{" "}
                    <span className="text-yellow-400">
                      &quot;{siteConfig.location}&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">&quot;coreStack&quot;</span>:{" "}
                    <span className="text-yellow-400">
                      [&quot;Next.js&quot;, &quot;Node.js&quot;, &quot;React&quot;, &quot;Laravel&quot;, &quot;AWS&quot;, &quot;Docker&quot;]
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent-cyan">
                      &quot;focus&quot;
                    </span>
                    :{" "}
                    <span className="text-green-400">
                      &quot;High-performance scalable web &amp; AI architectures&quot;
                    </span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </TerminalCard>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={0.8} className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <span className="text-xs font-mono">scroll down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
