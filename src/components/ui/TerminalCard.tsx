import { type ReactNode } from "react";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalCard({
  title = "terminal",
  children,
  className = "",
}: TerminalCardProps) {
  return (
    <div
      className={`rounded-xl border border-card-border bg-card overflow-hidden ${className}`}
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-[#0d0d0d]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted font-mono ml-2">{title}</span>
      </div>
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
