"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MousePointerClick, SplitSquareHorizontal, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Drop or Right-Click",
    description:
      "Drag any video into the HDShare window or menu bar popup. Or right-click in Finder → Quick Actions.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    number: "02",
    icon: SplitSquareHorizontal,
    title: "Choose Platform & Split",
    description:
      'Select your target platform (WhatsApp, Discord, Telegram, or custom). Click "Process & Split" — takes 1–2 seconds.',
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan/20",
  },
  {
    number: "03",
    icon: Send,
    title: "Copy All → Paste",
    description:
      'Click "Copy All for WhatsApp", open your chat, and press Cmd+V to paste all parts in order. Done!',
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}how it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Three Simple{" "}
              <span className="text-accent glow-text">Steps</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              From video to shared — in seconds, not minutes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={idx * 0.15}>
                <div className="relative">
                  {/* Connection line (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-px border-t border-dashed border-card-border" />
                  )}

                  <div className="text-center">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center mb-6">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full border ${step.borderColor} ${step.bgColor} ${step.color}`}
                      >
                        Step {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`mx-auto w-16 h-16 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center mb-6 ${step.color}`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-mono font-bold text-lg text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
