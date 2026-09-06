"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="mx-auto max-w-6xl">
        <nav className="flex h-14 items-center justify-between px-4 sm:px-6 rounded-2xl border border-card-border/80 bg-[#0d0d0d]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent/30 via-accent/10 to-accent-cyan/20 border border-accent/40 flex items-center justify-center font-mono text-sm text-accent font-bold shadow-[0_0_15px_rgba(0,255,136,0.2)] group-hover:scale-105 transition-transform">
              &gt;_
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-base font-bold text-foreground group-hover:text-accent transition-colors">
                portfolio
              </span>
              <span className="text-xs text-accent cursor-blink font-mono">_</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-card/60 px-3 py-1 rounded-xl border border-card-border/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-foreground hover:bg-card-hover"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Projects link */}
          <div className="flex items-center gap-2">
            <Link
              href="#projects"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-xl border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all"
            >
              <span>View Work</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Menu Toggle */}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-xs font-mono text-muted hover:text-accent hover:bg-card transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
