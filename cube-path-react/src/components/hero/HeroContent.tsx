import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroContentProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs mb-6 backdrop-blur-xs">
        <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
        <span className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
          AI • AUTOMATION • INNOVATION
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
        Build an AI Driven{' '}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
          Future
        </span>{' '}
        for Your Business
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
        Transform your business with intelligent automation, modern technology, and AI-powered solutions.
      </p>

      {/* Action CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
        {/* Primary CTA */}
        <button
          onClick={onPrimaryClick}
          className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onSecondaryClick}
          className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-white/90 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-full shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-xs transition-all duration-200 cursor-pointer"
        >
          <span>Explore Solutions</span>
        </button>
      </div>

      {/* Micro trust indicators */}
      <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200/60 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span>Enterprise-grade security</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span>Real-time deployment</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
