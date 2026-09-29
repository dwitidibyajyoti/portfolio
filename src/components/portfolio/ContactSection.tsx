"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { TiltCard } from "@/components/3d/TiltCard";
import { siteConfig } from "@/lib/constants";
import {
  Mail,
  Send,
  MapPin,
  Check,
  Copy,
  Terminal,
  Radio,
  Sparkles,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.socials.email}?subject=${encodeURIComponent(
      formState.subject || "Project / Engineering Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background cyber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-3">
              <Radio size={13} className="animate-pulse" />
              <span>COMMAND CENTER UPLINK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono tracking-tight text-white mb-3">
              Let&apos;s build something <span className="text-accent glow-text">amazing.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto font-sans">
              Open to senior full-stack opportunities, scalable architecture builds, AI integrations, and technical consulting.
            </p>
          </div>
        </AnimatedSection>

        {/* 3D Command Center Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Holographic Contact Form (7 cols) */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 h-full">
            <TiltCard glowColor="green" className="p-6 sm:p-8 h-full flex flex-col">
              
              {/* Terminal Frame Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-card-border/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-muted/80 pl-2">
                    transmission_protocol // secure_channel
                  </span>
                </div>
                <span className="text-[10px] font-mono text-accent flex items-center gap-1">
                  <Activity size={11} /> 256-BIT ENCRYPTED
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted flex items-center gap-1">
                        <span>Sender Name</span>
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-[#080d1a] text-xs sm:text-sm font-mono text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-all placeholder:text-muted/40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted flex items-center gap-1">
                        <span>Email Uplink</span>
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="s.connor@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-[#080d1a] text-xs sm:text-sm font-mono text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-all placeholder:text-muted/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted flex items-center gap-1">
                      <span>Transmission Subject</span>
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Senior Full Stack Role / Product Architecture"
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-[#080d1a] text-xs sm:text-sm font-mono text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-all placeholder:text-muted/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted flex items-center gap-1">
                      <span>Message Data</span>
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your product vision, timeline, stack requirements, or team objectives..."
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-[#080d1a] text-xs sm:text-sm font-mono text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-all placeholder:text-muted/40 resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-card-border/60">
                  <GlowButton type="submit" size="md" className="w-full sm:w-auto">
                    <Send size={16} />
                    <span>Transmit Message</span>
                  </GlowButton>

                  <span className="text-[11px] font-mono text-muted/70 flex items-center gap-1">
                    <ShieldCheck size={13} className="text-accent" />
                    Direct to dwitidibyajyoti@gmail.com
                  </span>
                </div>
              </form>
            </TiltCard>
          </AnimatedSection>

          {/* Right: Direct Communication Nodes (5 cols) */}
          <AnimatedSection delay={0.2} direction="left" className="lg:col-span-5 h-full flex flex-col justify-between gap-4">
            
            {/* Primary Email Node Card */}
            <TiltCard glowColor="green" className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30">
                  <Mail size={22} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg border border-card-border bg-[#0e1628] text-xs font-mono text-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-accent" />
                      <span className="text-accent font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-muted block mb-1">Direct Priority Inquiries</span>
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="text-sm sm:text-base font-mono font-bold text-white hover:text-accent transition-colors break-all"
              >
                {siteConfig.socials.email}
              </a>
            </TiltCard>

            {/* Location & Status Card */}
            <TiltCard glowColor="cyan" className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted block mb-1">Station Coordinates</span>
                  <p className="text-sm font-mono font-bold text-white mb-1">
                    {siteConfig.location}
                  </p>
                  <p className="text-xs font-mono text-accent-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    Available Worldwide &bull; Remote &bull; Relocation Ready
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Social Network Nodes Grid */}
            <div className="p-6 rounded-2xl border border-card-border bg-[#080d19]/85 backdrop-blur-xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                Network Transceivers
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-card-border bg-[#0d1424] hover:bg-[#131d33] hover:border-accent/40 text-xs font-mono text-foreground hover:text-accent transition-all group"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={11} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-card-border bg-[#0d1424] hover:bg-[#131d33] hover:border-accent-cyan/40 text-xs font-mono text-foreground hover:text-accent-cyan transition-all group"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={11} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-card-border bg-[#0d1424] hover:bg-[#131d33] hover:border-accent/40 text-xs font-mono text-foreground hover:text-accent transition-all group"
                >
                  <TwitterIcon size={16} />
                  <span>Twitter / X</span>
                  <ExternalLink size={11} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-card-border bg-[#0d1424] hover:bg-[#131d33] hover:border-blue-500/40 text-xs font-mono text-foreground hover:text-blue-400 transition-all group"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                  <ExternalLink size={11} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center gap-2.5 p-3 rounded-xl border border-card-border bg-[#0d1424] hover:bg-[#131d33] hover:border-pink-400/40 text-xs font-mono text-foreground hover:text-pink-400 transition-all group"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                  <ExternalLink size={11} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
