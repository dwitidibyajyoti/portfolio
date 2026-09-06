"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HDShareDownloadTrigger } from "@/components/hdshare/DownloadButton";

const hdshareLinks = [
  { label: "Modes", href: "#modes" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Installation", href: "#install" },
];

export function HDShareNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="mx-auto max-w-6xl">
        <nav className="flex h-14 items-center justify-between px-4 sm:px-6 rounded-2xl border border-card-border/80 bg-[#0d0d0d]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* HDShare Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent/30 via-accent/10 to-accent-cyan/20 border border-accent/40 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,255,136,0.2)] group-hover:scale-105 transition-transform">
              🎬
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-base font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
                HDShare
              </span>
              <span className="text-[10px] font-mono text-accent/80 bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20 hidden sm:inline-block">
                macOS
              </span>
            </div>
          </a>

          {/* Product Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-card/60 px-3 py-1 rounded-xl border border-card-border/60">
            {hdshareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-muted hover:text-foreground hover:bg-card-hover hover:text-accent transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <HDShareDownloadTrigger>
              {(trigger) => (
                <button
                  onClick={trigger}
                  className="inline-flex items-center gap-1.5 rounded-xl font-mono text-xs font-semibold px-3.5 sm:px-4 py-2 bg-accent text-background hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Download size={14} className="stroke-[2.5]" />
                  <span>Download DMG</span>
                </button>
              )}
            </HDShareDownloadTrigger>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-card transition-colors border border-card-border/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 p-3 rounded-2xl border border-card-border bg-[#0e0e0e]/95 backdrop-blur-2xl shadow-2xl space-y-1"
            >
              {hdshareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-xs font-mono text-muted hover:text-accent hover:bg-card transition-all"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
