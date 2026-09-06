export const HDSHARE_DOWNLOAD_URL =
  "https://downlod.s3.ap-south-1.amazonaws.com/HDShare-v1.1.0.dmg";

export const HDSHARE_PRO_CHECKOUT_URL =
  "https://dwitiapps.lemonsqueezy.com/checkout/buy/14f97665-6146-4cf5-9952-027b89919c55";

export const siteConfig = {
  name: "Your Name",
  tagline: "Developer & Creator",
  description: "Building tools that make life easier.",
  url: "https://yoursite.com",
  socials: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "you@example.com",
  },
};

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
}

export const products: Product[] = [
  {
    slug: "hdshare",
    name: "HDShare",
    tagline: "Lossless Video Splitting for macOS",
    description:
      "Slice videos into exact parts for WhatsApp, Discord, Telegram — zero compression, 100% quality preserved.",
    icon: "🎬",
    href: "/hdshare",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
