"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { siteConfig, skillCategories } from "@/lib/constants";
import { User, MapPin, Code, Cpu, Terminal, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,229,255,0.03)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-mono text-sm mb-2">
              {"// "}profile &amp; technical proficiency
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              About <span className="text-accent-cyan">Me</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Top Split: Bio & Terminal */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-card-border bg-card">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-1">
                    Software Engineer &amp; Full-Stack Builder
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    With over 4 years of hands-on full-stack development experience,
                    I specialize in modern JavaScript/TypeScript ecosystems (Next.js, React, Node.js),
                    PHP/Laravel backends, and Python data pipelines. I manage the entire software
                    development life cycle from initial schema design to cloud deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-card-border bg-card">
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-1">
                    AI, NLP &amp; Cloud Integration
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Experienced in integrating OpenAI APIs and speech-to-text models for
                    automated NLP document parsing, dockerizing distributed microservices,
                    and deploying scalable workloads on Amazon Web Services (AWS).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-card-border bg-card">
                <div className="p-2.5 rounded-lg bg-yellow-500/10 text-yellow-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-1">
                    Location &amp; Availability
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Based in <span className="text-foreground font-semibold">{siteConfig.location}</span>.
                    Open to full-time engineering roles, high-impact projects, and technical collaborations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="left">
            <TerminalCard title="~/developer-skills" className="glow-cyan-sm">
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-muted font-mono mb-1">
                    <span className="text-accent">$</span> neofetch --skills
                  </p>
                  <p className="text-accent-cyan font-mono text-xs mb-2">
                    ---------------------------------------
                  </p>
                </div>

                <div className="space-y-3 font-mono">
                  <div>
                    <span className="text-yellow-400 font-semibold">Languages:</span>
                    <p className="text-muted text-xs pl-2 mt-0.5">
                      JavaScript (ES6+), TypeScript, PHP, Python, SQL, HTML5/CSS3
                    </p>
                  </div>
                  <div>
                    <span className="text-accent-cyan font-semibold">Frameworks:</span>
                    <p className="text-muted text-xs pl-2 mt-0.5">
                      Next.js, React.js, Node.js, Express.js, Laravel, GraphQL, Angular
                    </p>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">Databases:</span>
                    <p className="text-muted text-xs pl-2 mt-0.5">
                      MySQL, MongoDB, PostgreSQL, Firebase Realtime DB, Redis
                    </p>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Cloud &amp; DevOps:</span>
                    <p className="text-muted text-xs pl-2 mt-0.5">
                      AWS (EC2, S3, RDS), Docker, Kubernetes, Git, Elasticsearch, Figma
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-card-border flex items-center gap-2 text-xs text-green-400 font-mono">
                  <CheckCircle2 size={14} />
                  <span>SDLC Management &bull; Scalable Architectures &bull; Clean Code</span>
                </div>
              </div>
            </TerminalCard>
          </AnimatedSection>
        </div>

        {/* Detailed Skills Grid */}
        <AnimatedSection delay={0.3}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl border border-card-border bg-card/60 hover:bg-card transition-all"
              >
                <h4 className="font-mono font-bold text-xs text-accent-cyan uppercase tracking-wider mb-3">
                  {group.category}
                </h4>
                <div className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-muted font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

