"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { HDShareDownloadTrigger } from "@/components/hdshare/DownloadButton";
import { Download, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.08)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-mono mb-6">
            <Zap size={14} />
            Zero compression. 100% quality.
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-6 leading-tight">
            Ready to share{" "}
            <span className="text-accent glow-text">HD videos</span>{" "}
            without compression?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted text-lg max-w-lg mx-auto mb-10">
            Download HDShare for free and start splitting videos in seconds.
            Upgrade to Pro for just $4.99 — one-time, lifetime access.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <HDShareDownloadTrigger>
            {(trigger) => (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={trigger}
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-mono transition-all duration-300 cursor-pointer bg-accent text-background font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] active:scale-95 px-8 py-4 text-lg"
                >
                  <Download size={20} />
                  Download HDShare
                </button>
                <GlowButton href="#pricing" variant="outline" size="lg">
                  View Pricing
                </GlowButton>
              </div>
            )}
          </HDShareDownloadTrigger>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-8 space-y-2">
            <p className="text-xs text-muted/60 font-mono">
              Designed for macOS • Apple Silicon &amp; Intel • Free plan included forever
            </p>
            <p className="text-xs text-yellow-400/80 font-mono">
              <span>Independent unsigned release: Requires 1-time </span>
              <a href="#gatekeeper-guide" className="underline hover:text-yellow-300">
                &quot;Open Anyway&quot; permission (Step 2)
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
