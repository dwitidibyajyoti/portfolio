"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const screenshots = [
  {
    src: "/images/screenshot-1.jpg",
    title: "Main Splitting Interface",
    description: "Lossless video slicing with instant progress indicators and mode presets.",
  },
  {
    src: "/images/screenshot-2.jpg",
    title: "Platform Mode Selection",
    description: "Presets for WhatsApp Status, HD Chat, Discord, Telegram, and custom limits.",
  },
  {
    src: "/images/screenshot-3.jpg",
    title: "Fast Stream Processing",
    description: "Lossless processing in 1-2 seconds with zero re-encoding.",
  },
  {
    src: "/images/screenshot-4.jpg",
    title: "Menu Bar Quick Access",
    description: "Drag and drop video files directly from anywhere on macOS.",
  },
  {
    src: "/images/screenshot-5.jpg",
    title: "Sequential Clip Management",
    description: "Preview numbered split parts ready to paste sequentially into chat apps.",
  },
  {
    src: "/images/screenshot-7.jpg",
    title: "Finder Quick Action & Clipboard",
    description: "One-click 'Copy All' to paste all clips directly with Cmd + V.",
  },
];

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 relative bg-[#070707]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-2">
              {"// "}app gallery
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              HDShare in <span className="text-accent glow-text">Action</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Clean native macOS interface designed for maximum productivity and speed.
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Showcase Carousel */}
        <AnimatedSection delay={0.1}>
          <div className="relative mx-auto max-w-4xl">
            {/* Main Image Frame */}
            <div className="rounded-2xl border border-card-border bg-card overflow-hidden glow-green-sm shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-[#0d0d0d]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted font-mono ml-2">
                    {screenshots[currentIndex].title}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-muted">
                  <span>{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{screenshots.length}</span>
                </div>
              </div>

              {/* Image display */}
              <div className="relative aspect-video w-full bg-[#050505] overflow-hidden">
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center transition-all duration-300"
                />
              </div>

              {/* Caption & Navigation Controls */}
              <div className="p-4 sm:p-6 bg-card flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-card-border">
                <div>
                  <h3 className="font-mono font-bold text-foreground text-sm sm:text-base">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    {screenshots[currentIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-lg bg-card-hover border border-card-border text-foreground hover:border-accent/40 hover:text-accent transition-colors cursor-pointer"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-lg bg-card-hover border border-card-border text-foreground hover:border-accent/40 hover:text-accent transition-colors cursor-pointer"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto py-2">
              {screenshots.map((s, idx) => (
                <button
                  key={s.src}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-10 rounded-md overflow-hidden border transition-all cursor-pointer flex-shrink-0 ${
                    idx === currentIndex
                      ? "border-accent ring-2 ring-accent/30 scale-105"
                      : "border-card-border opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
