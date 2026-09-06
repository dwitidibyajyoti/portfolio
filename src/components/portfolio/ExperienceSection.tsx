"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { workExperience, educationList } from "@/lib/constants";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
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

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}career &amp; education
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              Experience &amp; <span className="text-accent glow-text">Background</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3">
              4+ years of professional full-stack development, delivering scalable enterprise products, AI integrations, and modern cloud solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Briefcase size={20} />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <AnimatedSection key={exp.company} delay={idx * 0.15}>
                  <div className="rounded-xl border border-card-border bg-card hover:border-accent/30 transition-all p-6 sm:p-7 relative group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold font-mono text-foreground group-hover:text-accent transition-colors">
                          {exp.role}
                        </h4>
                        {"website" in exp && exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:underline group/link"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={12} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-accent-cyan">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-muted/70">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-muted leading-relaxed"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border/60">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent/5 text-accent border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Education & Overview (1 Col) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <AnimatedSection key={edu.degree} delay={0.1 + idx * 0.1}>
                  <div className="rounded-xl border border-card-border bg-card p-5 space-y-2.5 group hover:border-accent-cyan/30 transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block text-[11px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-mono font-bold text-sm text-foreground group-hover:text-accent-cyan transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-muted/70 font-mono flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </p>

                    {/* Institution links */}
                    {edu.links && edu.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-card-border/60">
                        {edu.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#141414] text-muted hover:text-accent-cyan hover:bg-[#1a1a1a] border border-card-border transition-colors"
                          >
                            {link.type === "instagram" ? (
                              <InstagramIcon size={12} />
                            ) : link.type === "facebook" ? (
                              <FacebookIcon size={12} />
                            ) : link.type === "map" ? (
                              <MapPin size={12} className="text-yellow-400" />
                            ) : (
                              <Globe size={12} />
                            )}
                            <span>{link.label}</span>
                            <ExternalLink size={10} className="text-muted/60" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Core Values / Engineering Strengths */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-xl border border-card-border bg-card p-5 space-y-3 mt-6">
                <div className="flex items-center gap-2 text-accent text-sm font-mono font-semibold">
                  <Code2 size={16} />
                  <span>Engineering Focus</span>
                </div>
                <ul className="space-y-2 text-xs text-muted leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Full Lifecycle Architecture &amp; Scalability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    AI/NLP Integrations &amp; Speech Extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cloud Infrastructure &amp; Containerization (AWS / Docker)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Clean, Maintainable &amp; Type-Safe Codebases
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

