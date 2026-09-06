"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Package,
  ShieldCheck,
  Zap,
  MousePointerClick,
  ClipboardCopy,
  MonitorDown,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Bundled FFmpeg",
    description:
      "FFmpeg binary is bundled inside the .app bundle. No Homebrew or terminal setup required.",
    color: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Zero Compression",
    description:
      "No re-encoding ever. Original 4K/1080p video & audio streams preserved bit-for-bit.",
    color: "text-accent-cyan",
  },
  {
    icon: Zap,
    title: "1–2 Second Processing",
    description:
      "Lossless stream copy means near-instant splitting. No waiting for video encoding.",
    color: "text-yellow-400",
  },
  {
    icon: MousePointerClick,
    title: "Finder Quick Action",
    description:
      'Right-click any video in Finder → Quick Actions to automatically open and process it directly in HDShare.',
    color: "text-blue-400",
  },
  {
    icon: ClipboardCopy,
    title: 'One-Click "Copy All"',
    description:
      "Copies all split parts to the macOS clipboard for instant sequential pasting with Cmd+V.",
    color: "text-purple-400",
  },
  {
    icon: MonitorDown,
    title: "Menu Bar + Window",
    description:
      "Drag & drop from anywhere — use the menu bar extra or the full app window.",
    color: "text-pink-400",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-mono text-sm mb-2">
              {"// "}features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Why{" "}
              <span className="text-accent-cyan">HDShare</span>?
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Built for speed and quality. No compromises.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={idx * 0.1}>
                <div className="group rounded-xl border border-card-border bg-card hover:bg-card-hover p-6 transition-all duration-300 h-full gradient-border">
                  <div
                    className={`w-12 h-12 rounded-xl bg-card-hover border border-card-border flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-mono font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
