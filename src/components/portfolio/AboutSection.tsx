"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { siteConfig } from "@/lib/constants";
import { User, MapPin, Coffee } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,229,255,0.03)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-mono text-sm mb-2">
              {"// "}who I am
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              About{" "}
              <span className="text-accent-cyan">Me</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-card-border bg-card">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold mb-1">Who I Am</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    I&apos;m a developer and creator who loves turning ideas into
                    polished products. I focus on native experiences that feel
                    right at home on every platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-card-border bg-card">
                <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <Coffee size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold mb-1">What I Do</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    I build developer tools, macOS apps, and web applications. I
                    care about performance, design, and the small details that
                    make software delightful.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-card-border bg-card">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold mb-1">Where I Am</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Working remotely, building products, and always learning something
                    new. Open to collaborations and freelance work.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="left">
            <TerminalCard title="~/skills">
              <div className="space-y-3 text-sm">
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-muted">ls</span> skills/
                </p>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {[
                    "Swift / SwiftUI",
                    "TypeScript",
                    "React / Next.js",
                    "Node.js",
                    "Python",
                    "Tailwind CSS",
                    "FFmpeg",
                    "Git / CI-CD",
                  ].map((skill) => (
                    <p key={skill} className="text-accent-cyan">
                      <span className="text-muted mr-1">→</span> {skill}
                    </p>
                  ))}
                </div>
              </div>
            </TerminalCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
