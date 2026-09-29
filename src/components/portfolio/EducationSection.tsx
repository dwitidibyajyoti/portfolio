"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/3d/TiltCard";
import { educationList } from "@/lib/constants";
import {
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  BookOpen,
  Award,
  Globe,
  Map,
} from "lucide-react";

function InstagramIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function EducationSection() {
  const getLinkIcon = (type?: string) => {
    switch (type) {
      case "instagram":
        return <InstagramIcon size={12} />;
      case "facebook":
        return <FacebookIcon size={12} />;
      case "map":
        return <Map size={12} />;
      default:
        return <Globe size={12} />;
    }
  };

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
              <GraduationCap size={13} />
              <span>ACADEMIC FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Education &amp; <span className="text-accent-cyan glow-text-cyan">Credentials</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              Formal engineering degree, technical background, and foundational education.
            </p>
          </div>
        </AnimatedSection>

        {/* Education 3D Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {educationList.map((edu, idx) => (
            <AnimatedSection key={edu.degree} delay={idx * 0.1}>
              <TiltCard
                glowColor={idx === 0 ? "cyan" : idx === 1 ? "purple" : "amber"}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#11192e] text-accent-cyan border border-card-border">
                      <BookOpen size={18} />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-muted border border-card-border flex items-center gap-1">
                      <Calendar size={11} className="text-accent" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-base font-bold font-mono text-white group-hover:text-accent-cyan transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-mono text-accent-cyan mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-muted font-sans">
                    <MapPin size={13} className="text-muted/70 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Institutional Links */}
                {edu.links && edu.links.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-card-border/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted/70 block mb-2">
                      Verified Portals
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0e1628] text-muted hover:text-white hover:border-accent-cyan/40 hover:bg-[#14203a] border border-card-border transition-all"
                        >
                          {getLinkIcon(link.type)}
                          <span>{link.label}</span>
                          <ExternalLink size={10} className="opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
