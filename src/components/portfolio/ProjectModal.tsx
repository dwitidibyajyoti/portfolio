"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Terminal,
  Cpu,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl rounded-2xl border border-card-border bg-[#0b0f19] shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8"
        >
          {/* Top Holographic Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-card-border/80 bg-[#0d1322]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted pl-2">
                <Terminal size={14} className="text-accent" />
                <span>mission_spec // {project.title.toLowerCase().replace(/\s+/g, "_")}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 font-semibold">
                  <Sparkles size={12} />
                  Flagship Architecture
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* HDShare Screenshot if available */}
            {project.link === "/hdshare" && (
              <div className="relative w-full h-56 sm:h-72 rounded-xl border border-card-border overflow-hidden bg-black/40">
                <Image
                  src="/images/screenshot-1.jpg"
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            )}

            {/* Technical Highlights & Architecture */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-2">
                <Cpu size={14} />
                Key Engineering Deliverables &amp; Impact
              </h4>
              <div className="grid gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-card-border/60 bg-[#0e1424]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-mono">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-2">
                <Layers size={14} />
                Deployed Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#141b2d] text-muted-foreground border border-card-border hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-card-border/80 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-card-border bg-card/60 text-xs font-mono text-muted hover:text-foreground hover:bg-card transition-colors"
              >
                Close Inspector
              </button>

              {project.link && (
                <GlowButton
                  href={project.link}
                  size="md"
                  external={project.link.startsWith("http")}
                >
                  <span>
                    {project.link.startsWith("http")
                      ? "Visit Live Deployment"
                      : "Open Application Page"}
                  </span>
                  {project.link.startsWith("http") ? (
                    <ExternalLink size={16} />
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </GlowButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
