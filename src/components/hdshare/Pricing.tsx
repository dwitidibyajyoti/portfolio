"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { HDShareDownloadTrigger } from "@/components/hdshare/DownloadButton";
import { HDSHARE_PRO_CHECKOUT_URL } from "@/lib/constants";
import { Check, X, Crown, Gift, Download, ExternalLink } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    icon: Gift,
    description: "Get started with WhatsApp Status splitting at no cost.",
    features: [
      { text: "WhatsApp Status (30s & 60s slices)", included: true },
      { text: "Lossless stream copy", included: true },
      { text: "Bundled FFmpeg", included: true },
      { text: "Drag & drop + menu bar", included: true },
      { text: "WhatsApp HD Chat (95 MB)", included: false },
      { text: "Discord / Email (25 MB)", included: false },
      { text: "Telegram (2 GB)", included: false },
      { text: "Custom size & duration", included: false },
    ],
    cta: "Download Free",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "one-time — lifetime",
    icon: Crown,
    description: "Unlock all platforms and custom split options. Pay once, own forever.",
    features: [
      { text: "WhatsApp Status (30s & 60s slices)", included: true },
      { text: "Lossless stream copy", included: true },
      { text: "Bundled FFmpeg", included: true },
      { text: "Drag & drop + menu bar", included: true },
      { text: "WhatsApp HD Chat (95 MB)", included: true },
      { text: "Discord / Email (25 MB)", included: true },
      { text: "Telegram (2 GB)", included: true },
      { text: "Custom size & duration", included: true },
    ],
    cta: "Get Pro — $4.99",
    ctaVariant: "primary" as const,
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,136,0.04)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Simple{" "}
              <span className="text-accent glow-text">Pricing</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Free forever for WhatsApp Status. Unlock everything else for a
              one-time payment.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, idx) => {
            const PlanIcon = plan.icon;
            return (
              <AnimatedSection key={plan.name} delay={idx * 0.15}>
                <div
                  className={`relative rounded-2xl border p-6 sm:p-8 h-full flex flex-col ${
                    plan.highlight
                      ? "border-accent/40 bg-card glow-green-sm"
                      : "border-card-border bg-card"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-background text-xs font-mono font-bold">
                      Recommended
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <PlanIcon
                        size={20}
                        className={
                          plan.highlight ? "text-accent" : "text-muted"
                        }
                      />
                      <h3 className="font-mono font-bold text-lg text-foreground">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-bold font-mono text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted font-mono">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <Check
                            size={16}
                            className="text-accent mt-0.5 flex-shrink-0"
                          />
                        ) : (
                          <X
                            size={16}
                            className="text-muted/40 mt-0.5 flex-shrink-0"
                          />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted/40"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {plan.name === "Free" ? (
                    <HDShareDownloadTrigger>
                      {(trigger) => (
                        <button
                          onClick={trigger}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-lg font-mono transition-all duration-300 cursor-pointer bg-card border border-card-border text-foreground hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] px-6 py-3 text-base"
                        >
                          <Download size={16} />
                          {plan.cta}
                        </button>
                      )}
                    </HDShareDownloadTrigger>
                  ) : (
                    <GlowButton
                      href={HDSHARE_PRO_CHECKOUT_URL}
                      variant={plan.ctaVariant}
                      className="w-full"
                      external
                    >
                      <span>{plan.cta}</span>
                      <ExternalLink size={15} />
                    </GlowButton>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
