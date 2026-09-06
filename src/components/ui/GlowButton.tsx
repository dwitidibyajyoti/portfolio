"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

const variants = {
  primary:
    "bg-accent text-background font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] active:scale-95",
  secondary:
    "bg-card border border-card-border text-foreground hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]",
  outline:
    "bg-transparent border border-accent/40 text-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GlowButton({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...props
}: GlowButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-mono transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
