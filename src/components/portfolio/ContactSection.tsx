"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/lib/constants";
import { Mail, Send, MapPin, Globe } from "lucide-react";

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.04)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}let&apos;s connect
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Get in <span className="text-accent glow-text">Touch</span>
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-lg mx-auto">
              Open to software engineering opportunities, product development, and technical consulting.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Info Cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="p-5 rounded-xl border border-card-border bg-card hover:bg-card-hover hover:border-accent/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent mb-3 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <span className="text-xs font-mono text-muted mb-1">Email</span>
              <span className="text-xs sm:text-sm font-mono text-foreground group-hover:text-accent transition-colors font-medium break-all">
                {siteConfig.socials.email}
              </span>
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-card-border bg-card hover:bg-card-hover hover:border-accent-cyan/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-3 group-hover:scale-110 transition-transform">
                <GithubIcon size={22} />
              </div>
              <span className="text-xs font-mono text-muted mb-1">GitHub</span>
              <span className="text-xs sm:text-sm font-mono text-foreground group-hover:text-accent-cyan transition-colors font-medium">
                dwitidibyajyoti
              </span>
            </a>

            <div className="p-5 rounded-xl border border-card-border bg-card flex flex-col items-center text-center">
              <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 mb-3">
                <MapPin size={22} />
              </div>
              <span className="text-xs font-mono text-muted mb-1">Location</span>
              <span className="text-xs sm:text-sm font-mono text-foreground font-medium">
                {siteConfig.location}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Action Buttons & Social Links */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GlowButton
              href={`mailto:${siteConfig.socials.email}`}
              size="lg"
              external
            >
              <Send size={18} />
              Send Email
            </GlowButton>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-card-border bg-card font-mono text-sm text-foreground hover:text-accent hover:border-accent/40 hover:bg-card-hover transition-all"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-card-border bg-card font-mono text-sm text-foreground hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-card-hover transition-all"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-card-border bg-card font-mono text-sm text-foreground hover:text-blue-500 hover:border-blue-500/40 hover:bg-card-hover transition-all"
            >
              <FacebookIcon size={18} />
              <span>Facebook</span>
            </a>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-card-border bg-card font-mono text-sm text-foreground hover:text-pink-400 hover:border-pink-400/40 hover:bg-card-hover transition-all"
            >
              <InstagramIcon size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
