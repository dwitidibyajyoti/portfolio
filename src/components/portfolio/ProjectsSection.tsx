"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { products } from "@/lib/constants";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}what I&apos;ve built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              My{" "}
              <span className="text-accent glow-text">Projects</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((product, idx) => (
            <AnimatedSection key={product.slug} delay={idx * 0.15}>
              <div className="group relative rounded-xl border border-card-border bg-card hover:bg-card-hover transition-all duration-300 overflow-hidden gradient-border">
                {/* Product card content */}
                <div className="p-6 sm:p-8">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{product.icon}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                      Live
                    </span>
                  </div>

                  {/* Title & tagline */}
                  <h3 className="text-xl font-bold font-mono mb-2 text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted mb-1 font-mono">
                    {product.tagline}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Screenshot */}
                  <div className="relative rounded-lg border border-card-border bg-background/50 h-48 w-full mb-6 overflow-hidden">
                    <Image
                      src="/images/screenshot-1.jpg"
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <GlowButton href={product.href} size="sm">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </GlowButton>
                    <GlowButton
                      href={product.href}
                      variant="outline"
                      size="sm"
                    >
                      <ExternalLink size={14} />
                    </GlowButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Coming soon card */}
          <AnimatedSection delay={products.length * 0.15}>
            <div className="rounded-xl border border-dashed border-card-border bg-card/30 p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center mb-4">
                <span className="text-muted text-xl">+</span>
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">
                More Coming Soon
              </h3>
              <p className="text-sm text-muted max-w-xs">
                New projects and tools are in the works. Stay tuned!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
