"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { HDSHARE_DOWNLOAD_URL } from "@/lib/constants";
import {
  Download,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Terminal,
  MousePointerClick,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export function InstallGuide() {
  const [gatekeeperOpen, setGatekeeperOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const terminalCommand = 'xattr -dr com.apple.quarantine "/Applications/HDShare.app"';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-mono text-sm mb-2">
              {"// "}installation guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              Install{" "}
              <span className="text-accent-cyan">HDShare</span> on macOS
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Follow these simple steps. Please pay special attention to{" "}
              <span className="text-yellow-400 font-semibold">Step 2</span> for
              macOS Gatekeeper approval.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {/* Step 1: Download & Install */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-card-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <Download size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-3">
                    1. Download &amp; Move to Applications
                  </h3>
                  <ol className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                        1
                      </span>
                      <div className="flex-1">
                        <span>
                          Download{" "}
                          <a
                            href={HDSHARE_DOWNLOAD_URL}
                            className="text-accent font-semibold underline hover:text-accent-cyan transition-colors"
                          >
                            HDShare-v1.1.0.dmg
                          </a>{" "}
                          directly to your Mac.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                        2
                      </span>
                      <span>
                        Open the DMG and drag{" "}
                        <span className="text-foreground font-semibold">
                          HDShare.app
                        </span>{" "}
                        into your{" "}
                        <code className="text-accent-cyan bg-accent-cyan/10 px-1.5 py-0.5 rounded text-xs font-mono">
                          /Applications
                        </code>{" "}
                        folder.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 2: macOS Gatekeeper - HIGHLIGHTED CRITICAL STEP */}
          <AnimatedSection delay={0.2}>
            <div
              id="gatekeeper-guide"
              className="rounded-2xl border-2 border-yellow-500/50 bg-yellow-500/[0.03] shadow-[0_0_30px_rgba(234,179,8,0.12)] overflow-hidden transition-all duration-300"
            >
              {/* Top Banner Notice */}
              <div className="bg-yellow-500/15 border-b border-yellow-500/30 px-6 py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-yellow-400 font-mono text-xs sm:text-sm font-semibold">
                  <AlertTriangle size={18} className="flex-shrink-0" />
                  <span>CRITICAL: macOS Unsigned App Approval</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 font-mono border border-yellow-500/30">
                  Required Once
                </span>
              </div>

              {/* Accordion header button */}
              <button
                onClick={() => setGatekeeperOpen(!gatekeeperOpen)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-yellow-500/[0.05] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-yellow-500/20 text-yellow-400 flex-shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg sm:text-xl text-yellow-300">
                      2. macOS Blocks the App? (Don&apos;t Delete It!)
                    </h3>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed max-w-2xl">
                      Because HDShare is currently distributed independently without an Apple Developer subscription, macOS will show an{" "}
                      <span className="text-yellow-400 font-medium">&quot;Unidentified Developer&quot;</span> or{" "}
                      <span className="text-yellow-400 font-medium">&quot;App is damaged&quot;</span> security warning.{" "}
                      <span className="text-foreground font-semibold">This is completely normal and safe.</span>
                    </p>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 ml-2">
                  {gatekeeperOpen ? (
                    <ChevronUp size={20} className="flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="flex-shrink-0" />
                  )}
                </div>
              </button>

              {gatekeeperOpen && (
                <div className="px-6 sm:px-8 pb-8 space-y-6 border-t border-yellow-500/20 pt-6 bg-card/60">
                  {/* Method 1: Open Anyway (Recommended) */}
                  <div className="rounded-xl border border-green-500/30 bg-green-500/[0.04] p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/40 font-bold">
                        ⭐ Method 1 (Recommended — 2 Clicks)
                      </span>
                      <h4 className="font-mono font-bold text-foreground">
                        System Settings &rarr; Open Anyway
                      </h4>
                    </div>
                    <ol className="space-y-2.5 text-sm text-muted ml-1">
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                          1
                        </span>
                        <span>
                          Try to open{" "}
                          <span className="text-foreground font-semibold">
                            HDShare
                          </span>{" "}
                          once (macOS will show a blocked popup — click Cancel/OK).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                          2
                        </span>
                        <span>
                          Open Mac{" "}
                          <span className="text-foreground font-semibold">
                            System Settings &rarr; Privacy &amp; Security
                          </span>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                          3
                        </span>
                        <span>
                          Scroll down to the{" "}
                          <span className="text-foreground font-semibold">
                            Security
                          </span>{" "}
                          section.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                          4
                        </span>
                        <span>
                          Click the{" "}
                          <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                            &quot;Open Anyway&quot;
                          </span>{" "}
                          button next to HDShare.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold">
                          5
                        </span>
                        <span>
                          Confirm by clicking{" "}
                          <span className="text-foreground font-semibold">
                            &quot;Open&quot;
                          </span>
                          .
                        </span>
                      </li>
                    </ol>
                    <div className="mt-4 flex items-center gap-2 text-xs text-green-400/90 font-mono bg-green-500/10 p-2.5 rounded-lg border border-green-500/20">
                      <CheckCircle2 size={15} className="flex-shrink-0" />
                      <span>You only need to do this ONCE. After approval, HDShare opens instantly forever!</span>
                    </div>
                  </div>

                  {/* Method 2: Terminal (Quarantine Fix) */}
                  <div className="rounded-xl border border-card-border bg-card p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-card-border text-muted border border-card-border">
                          ⚡ Method 2 (Terminal — 1 Line Fix)
                        </span>
                        <h4 className="font-mono font-semibold text-foreground">
                          Remove Quarantine Attribute
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted mb-3">
                      If macOS says the app is &quot;damaged&quot; or won&apos;t open, open{" "}
                      <span className="text-foreground font-semibold">Terminal</span> and run this single command:
                    </p>

                    <div className="relative group">
                      <TerminalCard title="Terminal" className="text-xs sm:text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <p className="overflow-x-auto py-1">
                            <span className="text-accent font-bold">$</span>{" "}
                            <span className="text-yellow-300 font-mono select-all">
                              {terminalCommand}
                            </span>
                          </p>
                          <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-card-hover border border-card-border text-xs font-mono text-muted hover:text-accent hover:border-accent/40 transition-colors cursor-pointer flex-shrink-0"
                            title="Copy command"
                          >
                            {copied ? (
                              <>
                                <Check size={14} className="text-accent" />
                                <span className="text-accent">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </TerminalCard>
                    </div>

                    <p className="text-xs text-muted mt-3">
                      Then launch HDShare:{" "}
                      <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded font-mono">
                        open &quot;/Applications/HDShare.app&quot;
                      </code>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Step 3: Finder Quick Action */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-xl border border-card-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                  <MousePointerClick size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-3">
                    3. Finder Quick Action{" "}
                    <span className="text-muted font-normal text-sm">
                      (Optional Productivity Boost)
                    </span>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Right-click any video file in Finder &rarr;{" "}
                    <span className="text-foreground font-semibold">
                      Quick Actions
                    </span>{" "}
                    &rarr;{" "}
                    <span className="text-accent font-semibold">
                      &quot;Split &amp; Share for WhatsApp HD&quot;
                    </span>
                    . Selecting your video file automatically opens and loads it directly into HDShare for instant splitting.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
