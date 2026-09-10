"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/3d/TiltCard";
import { skillCategories } from "@/lib/constants";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Technology details mapping with real skills only from constants.ts
interface TechDetail {
  name: string;
  category: string;
  level: string;
  context: string;
  glow: "green" | "cyan" | "purple" | "amber";
}

const detailedSkills: Record<string, TechDetail> = {
  // Programming Languages
  "JavaScript (ES6+)": {
    name: "JavaScript (ES6+)",
    category: "Languages",
    level: "Core Expert",
    context: "Asynchronous workflows, ESNext features, browser & server engines",
    glow: "amber",
  },
  TypeScript: {
    name: "TypeScript",
    category: "Languages",
    level: "Core Expert",
    context: "Strict type contracts, generics, interface modeling across stack",
    glow: "cyan",
  },
  PHP: {
    name: "PHP",
    category: "Languages",
    level: "Proficient",
    context: "Laravel backends, microservices, secure authentication & REST",
    glow: "purple",
  },
  Python: {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    context: "Data pipelines, automation scripts, healthcare API integration",
    glow: "green",
  },
  SQL: {
    name: "SQL",
    category: "Languages",
    level: "Core Expert",
    context: "Complex relational queries, indexing, stored procedures & migrations",
    glow: "cyan",
  },
  "HTML5 / CSS3": {
    name: "HTML5 / CSS3",
    category: "Languages",
    level: "Core Expert",
    context: "Semantic markups, responsive design, animations & accessibility",
    glow: "amber",
  },

  // Frameworks & Libraries
  "Next.js": {
    name: "Next.js",
    category: "Frontend",
    level: "Core Expert",
    context: "App Router, SSR, SSG, Server Actions, route handlers & SEO",
    glow: "green",
  },
  "React.js": {
    name: "React.js",
    category: "Frontend",
    level: "Core Expert",
    context: "Component architectures, hooks, state management & ~25% load cut",
    glow: "cyan",
  },
  "Node.js": {
    name: "Node.js",
    category: "Backend",
    level: "Core Expert",
    context: "High-throughput event loops, microservices & real-time streaming",
    glow: "green",
  },
  "Express.js": {
    name: "Express.js",
    category: "Backend",
    level: "Core Expert",
    context: "RESTful endpoints, middleware chains, auth & error handling",
    glow: "green",
  },
  Laravel: {
    name: "Laravel",
    category: "Backend",
    level: "Proficient",
    context: "Eloquent ORM, MVC architecture, migrations & subscription queues",
    glow: "purple",
  },
  GraphQL: {
    name: "GraphQL",
    category: "Backend",
    level: "Proficient",
    context: "Schema stitching, resolvers, queries, mutations & type validation",
    glow: "purple",
  },
  Angular: {
    name: "Angular",
    category: "Frontend",
    level: "Proficient",
    context: "Enterprise components, services, dependency injection & modules",
    glow: "amber",
  },

  // Databases & Storage
  MySQL: {
    name: "MySQL",
    category: "Databases",
    level: "Core Expert",
    context: "Schema design, relational indexes, transactions & ACID reliability",
    glow: "cyan",
  },
  MongoDB: {
    name: "MongoDB",
    category: "Databases",
    level: "Proficient",
    context: "Document modeling, aggregation pipelines, gaming & payment logs",
    glow: "green",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    category: "Databases",
    level: "Core Expert",
    context: "Relational data structures, JSONB columns, robust constraints",
    glow: "cyan",
  },
  "Firebase Realtime DB": {
    name: "Firebase Realtime DB",
    category: "Databases",
    level: "Proficient",
    context: "Real-time subscriptions, auth sync, client websocket triggers",
    glow: "amber",
  },
  Redis: {
    name: "Redis",
    category: "Databases",
    level: "Proficient",
    context: "In-memory caching, rate-limiting, session store & pub/sub",
    glow: "purple",
  },

  // Cloud, DevOps & Tools
  "AWS (EC2, S3, RDS)": {
    name: "AWS (EC2, S3, RDS)",
    category: "Cloud & DevOps",
    level: "Core Expert",
    context: "Cloud instances, static asset CDN distribution & managed databases",
    glow: "amber",
  },
  Docker: {
    name: "Docker",
    category: "Cloud & DevOps",
    level: "Core Expert",
    context: "Multi-stage container builds, microservice isolation & CI/CD",
    glow: "cyan",
  },
  Kubernetes: {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    level: "Proficient",
    context: "Container orchestration, rolling updates, pod scaling & ingress",
    glow: "cyan",
  },
  "Git & GitHub": {
    name: "Git & GitHub",
    category: "Cloud & DevOps",
    level: "Core Expert",
    context: "Gitflow branching, PR reviews, CI/CD actions & semantic tags",
    glow: "purple",
  },
  Elasticsearch: {
    name: "Elasticsearch",
    category: "Cloud & DevOps",
    level: "Proficient",
    context: "Sub-second inverted index search across massive healthcare records",
    glow: "amber",
  },
  Figma: {
    name: "Figma",
    category: "Cloud & DevOps",
    level: "Proficient",
    context: "UI/UX handoff, token systems, rapid wireframes & interactive prototypes",
    glow: "purple",
  },
};

export function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<TechDetail | null>(null);

  const filters = [
    { label: "All Modules", value: "All" },
    { label: "Languages", value: "Programming Languages" },
    { label: "Frameworks", value: "Frameworks & Libraries" },
    { label: "Databases", value: "Databases & Storage" },
    { label: "Cloud & DevOps", value: "Cloud, DevOps & Tools" },
  ];

  // Filter categories
  const displayedCategories =
    selectedFilter === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Terminal size={18} className="text-yellow-400" />;
      case "Frameworks & Libraries":
        return <Code2 size={18} className="text-accent-cyan" />;
      case "Databases & Storage":
        return <Database size={18} className="text-accent" />;
      case "Cloud, DevOps & Tools":
        return <Cloud size={18} className="text-accent-purple" />;
      default:
        return <Cpu size={18} className="text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-3">
              <Cpu size={13} />
              <span>QUANTUM TECH ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
              Interactive <span className="text-accent glow-text">Skills Matrix</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
              Tactical engineering capabilities verified across production enterprise platforms and high-scale SaaS.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Navigation Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  selectedFilter === f.value
                    ? "bg-accent/15 border-accent text-accent font-bold shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                    : "bg-[#0c1220]/80 border-card-border text-muted hover:text-foreground hover:bg-[#121a2d]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* 3D Skills Categories & Interactive Tilt Cards */}
        <div className="space-y-10">
          {displayedCategories.map((group, gIdx) => (
            <AnimatedSection key={group.category} delay={gIdx * 0.1}>
              <div className="space-y-4">
                
                {/* Category Title Header */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-card-border/60">
                  <div className="p-2 rounded-lg bg-[#0e1628] border border-card-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-mono font-bold text-white">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {group.skills.length} Deployed Competencies
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skillName) => {
                    const detail = detailedSkills[skillName] || {
                      name: skillName,
                      category: group.category,
                      level: "Proficient",
                      context: "Production utilized across enterprise builds",
                      glow: "cyan",
                    };

                    return (
                      <TiltCard
                        key={skillName}
                        glowColor={detail.glow}
                        className="p-5 cursor-pointer"
                        onClick={() => setHoveredSkill(detail)}
                      >
                        <div className="flex flex-col justify-between h-full space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-mono font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                                {skillName}
                              </h4>
                              <span className="text-[10px] font-mono text-muted/80">
                                {detail.category}
                              </span>
                            </div>

                            <span
                              className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-semibold ${
                                detail.level === "Core Expert"
                                  ? "bg-accent/15 text-accent border border-accent/30"
                                  : "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                              }`}
                            >
                              {detail.level}
                            </span>
                          </div>

                          {/* Skill Context / Real Production Description */}
                          <p className="text-xs text-muted leading-relaxed font-sans">
                            {detail.context}
                          </p>

                          {/* Interactive Telemetry Level Bar */}
                          <div className="pt-2 border-t border-card-border/60">
                            <div className="flex items-center justify-between text-[10px] font-mono text-muted mb-1">
                              <span>VERIFIED STACK</span>
                              <span className="text-accent flex items-center gap-1">
                                <CheckCircle2 size={11} /> READY
                              </span>
                            </div>
                            <div className="h-1 w-full bg-[#12192a] rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  detail.glow === "green"
                                    ? "bg-accent w-[95%]"
                                    : detail.glow === "cyan"
                                    ? "bg-accent-cyan w-[90%]"
                                    : detail.glow === "purple"
                                    ? "bg-accent-purple w-[88%]"
                                    : "bg-accent-amber w-[92%]"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tactical Highlight Banner */}
        <AnimatedSection delay={0.25} className="mt-14">
          <div className="p-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-accent-cyan/5 to-accent-purple/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30 flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-mono font-bold text-sm text-white">
                  Zero Fabrication Policy &bull; Pure Source-of-Truth
                </h4>
                <p className="text-xs text-muted font-sans">
                  Every listed technology corresponds to actual production repositories, enterprise deliverables, and verified commits.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="px-4 py-2 rounded-xl border border-accent/40 bg-accent/15 text-accent text-xs font-mono font-semibold hover:bg-accent/25 transition-all whitespace-nowrap"
            >
              See In Real Projects &rarr;
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
