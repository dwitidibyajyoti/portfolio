"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  MessageCircle,
  Film,
  Send,
  Mail,
  SlidersHorizontal,
  Clock,
} from "lucide-react";

const modes = [
  {
    icon: MessageCircle,
    platform: "WhatsApp Status",
    limit: "30-second slices",
    description: "Lossless slices for WhatsApp Status / Stories.",
    badge: "Free Forever",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    icon: Clock,
    platform: "WhatsApp Status 60s",
    limit: "60-second slices",
    description: "Extended status updates with longer 60-second segments.",
    badge: "Free Forever",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    icon: Film,
    platform: "WhatsApp HD Chat",
    limit: "95 MB limit",
    description:
      "Dynamically computed to stay under WhatsApp's 100 MB upload ceiling.",
    badge: "Pro",
    badgeColor: "bg-accent/10 text-accent border-accent/30",
    iconColor: "text-accent",
  },
  {
    icon: Mail,
    platform: "Discord / Email",
    limit: "25 MB limit",
    description: "Fits Gmail, Apple Mail, Outlook, and Discord without Nitro.",
    badge: "Pro",
    badgeColor: "bg-accent/10 text-accent border-accent/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Send,
    platform: "Telegram",
    limit: "2 GB limit",
    description: "Slices full-length 4K movies & recordings for Telegram.",
    badge: "Pro",
    badgeColor: "bg-accent/10 text-accent border-accent/30",
    iconColor: "text-sky-400",
  },
  {
    icon: SlidersHorizontal,
    platform: "Custom",
    limit: "Any size / duration",
    description: "Set any target file size (MB) or custom duration (seconds).",
    badge: "Pro",
    badgeColor: "bg-accent/10 text-accent border-accent/30",
    iconColor: "text-purple-400",
  },
];

export function PlatformModes() {
  return (
    <section id="modes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}split modes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Split for{" "}
              <span className="text-accent glow-text">Every Platform</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Choose the right mode for your platform. HDShare calculates
              the optimal split points automatically.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <AnimatedSection key={mode.platform} delay={idx * 0.08}>
                <div className="group relative rounded-xl border border-card-border bg-card hover:bg-card-hover p-6 transition-all duration-300 h-full gradient-border">
                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-mono border ${mode.badgeColor}`}
                  >
                    {mode.badge}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-card-hover flex items-center justify-center mb-4 ${mode.iconColor}`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <h3 className="font-mono font-bold text-foreground mb-1">
                    {mode.platform}
                  </h3>
                  <p className="text-accent text-sm font-mono mb-2">
                    {mode.limit}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {mode.description}
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
