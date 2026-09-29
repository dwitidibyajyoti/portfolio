"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Activity, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          // Determine active section based on scroll position
          const sections = navLinks.map((link) => link.href.replace("#", ""));
          const scrollPos = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="mx-auto max-w-6xl">
        <nav
          className={`flex h-14 items-center justify-between px-3 sm:px-5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-accent/20 bg-[#070b14]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
              : "border-card-border/70 bg-[#090e1a]/80 backdrop-blur-xl shadow-lg"
          }`}
        >
          {/* Logo / Callout */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-accent/20 via-accent-cyan/15 to-accent-purple/20 border border-accent/40 flex items-center justify-center font-mono text-xs text-accent font-bold shadow-[0_0_15px_rgba(0,255,136,0.25)] group-hover:scale-105 transition-transform">
              <span className="text-accent">&gt;_</span>
              {/* Pulsing online status dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent animate-ping opacity-75" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {siteConfig.shortName}
                </span>
              </div>
              <span className="text-[9px] font-mono text-muted/80 tracking-widest uppercase hidden md:inline">
                SR. FULL STACK DEV
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#0e1526]/80 px-2 py-1 rounded-xl border border-card-border/80">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/30 -z-10 shadow-[0_0_12px_rgba(0,255,136,0.15)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Status indicator & Uplink Button */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-accent">
              <Activity size={12} className="animate-pulse" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-[#121a2f] transition-colors border border-card-border/60"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Cyber Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-3 rounded-2xl border border-accent/20 bg-[#070b14]/95 backdrop-blur-2xl shadow-2xl space-y-1"
            >
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-card-border text-[10px] font-mono text-muted uppercase tracking-wider">
                <span>Navigation Matrix</span>
                <span className="text-accent flex items-center gap-1">
                  <ShieldCheck size={11} /> 2026 Telemetry
                </span>
              </div>
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                      isActive
                        ? "text-accent bg-accent/15 border border-accent/30 font-semibold"
                        : "text-muted hover:text-foreground hover:bg-[#12192b]"
                    }`}
                  >
                    {"> "}
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
