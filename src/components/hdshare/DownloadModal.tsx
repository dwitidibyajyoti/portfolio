"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  X,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { HDSHARE_DOWNLOAD_URL } from "@/lib/constants";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [copied, setCopied] = useState(false);
  const terminalCommand = 'xattr -dr com.apple.quarantine "/Applications/HDShare.app"';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl rounded-2xl border-2 border-yellow-500/60 bg-[#0e0e0e] shadow-[0_0_50px_rgba(234,179,8,0.2)] overflow-hidden z-10 my-8"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent border-b border-yellow-500/30 p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-yellow-500/20 text-yellow-400">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-yellow-300">
                    🎉 Download Started!
                  </h3>
                  <p className="text-xs sm:text-sm text-yellow-400/90 font-mono mt-0.5">
                    Please read before opening the app on your Mac
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Critical Alert */}
              <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/[0.06] flex items-start gap-3">
                <AlertTriangle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  <span className="text-yellow-300 font-semibold font-mono">Why macOS blocks HDShare: </span>
                  HDShare is distributed independently without an Apple Developer subscription. macOS will show an{" "}
                  <span className="text-foreground font-semibold">&quot;Unidentified Developer&quot;</span> popup by default.{" "}
                  <span className="text-green-400 font-semibold">The app is 100% safe &amp; contains bundled FFmpeg.</span>
                </p>
              </div>

              {/* Recommended 2-step solution */}
              <div className="rounded-xl border border-card-border bg-card p-4 sm:p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-green-500/20 text-green-400 border border-green-500/40">
                    ⭐ Recommended (Takes 5 seconds)
                  </span>
                  <h4 className="font-mono font-semibold text-sm text-foreground">
                    System Settings &rarr; Open Anyway
                  </h4>
                </div>

                <ol className="space-y-2.5 text-xs sm:text-sm text-muted font-mono">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </span>
                    <span>
                      Open the downloaded DMG &amp; drag <span className="text-foreground font-semibold">HDShare.app</span> to <span className="text-accent-cyan font-semibold">Applications</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </span>
                    <span>
                      Try opening HDShare once (it will show a security message).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </span>
                    <span>
                      Go to <span className="text-foreground font-semibold">System Settings &rarr; Privacy &amp; Security</span>, scroll down to <span className="text-foreground font-semibold">Security</span>, and click <span className="text-green-400 font-bold">&quot;Open Anyway&quot;</span>.
                    </span>
                  </li>
                </ol>

                <div className="flex items-center gap-2 text-xs text-green-400 font-mono bg-green-500/10 p-2.5 rounded-lg border border-green-500/20">
                  <CheckCircle2 size={14} className="flex-shrink-0" />
                  <span>You only need to do this ONCE per Mac installation.</span>
                </div>
              </div>

              {/* Terminal One-liner */}
              <div className="rounded-xl border border-card-border bg-card p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-muted">
                    ⚡ Or run this 1-line command in Terminal:
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 text-xs font-mono text-accent hover:underline cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={12} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-[#050505] p-3 rounded-lg border border-card-border font-mono text-xs text-yellow-300 overflow-x-auto select-all">
                  {terminalCommand}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <a
                  href={HDSHARE_DOWNLOAD_URL}
                  className="text-xs text-muted hover:text-accent font-mono underline"
                >
                  Didn&apos;t start? Click here to download again
                </a>
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById("install");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-accent text-background font-mono text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Full Step-by-Step Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
