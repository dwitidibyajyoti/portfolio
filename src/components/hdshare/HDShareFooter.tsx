import { Apple, Film, ShieldCheck } from "lucide-react";

export function HDShareFooter() {
  return (
    <footer className="border-t border-card-border/50 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-sm">
                🎬
              </span>
              <span className="font-mono text-lg font-bold text-foreground">
                HDShare for macOS
              </span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Native macOS menu bar &amp; window app for lossless video splitting without re-encoding or quality degradation.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted/70 pt-2">
              <Apple size={14} />
              <span>Designed for Apple Silicon &amp; Intel Macs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
              Product
            </h4>
            <ul className="space-y-2 text-sm font-mono text-muted">
              <li>
                <a href="#modes" className="hover:text-accent transition-colors">
                  Split Modes
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-accent transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition-colors">
                  Pricing &amp; Plans
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-accent transition-colors">
                  Download &amp; Install
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
              Installation Help
            </h4>
            <ul className="space-y-2 text-sm font-mono text-muted">
              <li>
                <a href="#gatekeeper-guide" className="hover:text-yellow-400 transition-colors">
                  macOS Gatekeeper Guide
                </a>
              </li>
              <li>
                <a href="#gatekeeper-guide" className="hover:text-yellow-400 transition-colors">
                  Terminal Fix Command
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-accent transition-colors">
                  Finder Quick Action
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/60">
          <p>© {new Date().getFullYear()} HDShare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-muted/80">
              <ShieldCheck size={14} className="text-accent" />
              100% Lossless Stream Copy
            </span>
            <span>•</span>
            <span>Bundled FFmpeg</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
