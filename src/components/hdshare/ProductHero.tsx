"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { HDShareDownloadTrigger } from "@/components/hdshare/DownloadButton";
import { Download, Apple, Zap } from "lucide-react";

export function ProductHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.08)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center">
          {/* Badge */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-mono mb-8">
              <Apple size={14} />
              Native macOS App
            </div>
          </AnimatedSection>

          {/* App Icon placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-cyan/20 border border-accent/30 flex items-center justify-center mb-8 glow-green-sm">
              <span className="text-5xl">🎬</span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-mono mb-4 leading-tight">
              <span className="text-accent glow-text">HDShare</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl sm:text-2xl lg:text-3xl font-mono text-muted mb-6">
              Lossless Video Splitting for macOS
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Slice videos into exact parts tailored to platform file size
              limits —{" "}
              <span className="text-foreground font-semibold">
                zero compression
              </span>
              ,{" "}
              <span className="text-foreground font-semibold">
                100% quality preserved
              </span>
              .
            </p>
          </AnimatedSection>

          {/* CTA Buttons with Download Trigger */}
          <AnimatedSection delay={0.3}>
            <HDShareDownloadTrigger>
              {(trigger) => (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <button
                    onClick={trigger}
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-mono transition-all duration-300 cursor-pointer bg-accent text-background font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] active:scale-95 px-8 py-4 text-lg"
                  >
                    <Download size={20} />
                    Download DMG
                  </button>
                  <GlowButton href="#features" variant="secondary" size="lg">
                    <Zap size={18} />
                    See Features
                  </GlowButton>
                </div>
              )}
            </HDShareDownloadTrigger>
            <p className="text-xs text-yellow-400/90 font-mono mb-12 flex items-center justify-center gap-1.5">
              <span>⚠️ macOS Note: Requires a quick 1-time approval in System Settings.</span>
              <a href="#gatekeeper-guide" className="underline hover:text-yellow-300 transition-colors">
                See Step 2 below &rarr;
              </a>
            </p>
          </AnimatedSection>

          {/* App Screenshot */}
          <AnimatedSection delay={0.4}>
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border border-card-border bg-card overflow-hidden glow-green-sm shadow-2xl">
                {/* macOS title bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-[#0d0d0d]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-muted font-mono ml-2">
                      HDShare — Lossless Video Splitter
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    SwiftUI + FFmpeg
                  </span>
                </div>

                {/* Screenshot image */}
                <div className="relative aspect-video w-full bg-[#080808] overflow-hidden">
                  <Image
                    src="/images/screenshot-1.jpg"
                    alt="HDShare App Interface for macOS"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
