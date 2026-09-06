import type { Metadata } from "next";
import { HDShareNavbar } from "@/components/hdshare/HDShareNavbar";
import { ProductHero } from "@/components/hdshare/ProductHero";
import { PlatformModes } from "@/components/hdshare/PlatformModes";
import { Features } from "@/components/hdshare/Features";
import { ProductShowcase } from "@/components/hdshare/ProductShowcase";
import { HowItWorks } from "@/components/hdshare/HowItWorks";
import { Pricing } from "@/components/hdshare/Pricing";
import { InstallGuide } from "@/components/hdshare/InstallGuide";
import { FinalCTA } from "@/components/hdshare/FinalCTA";
import { HDShareFooter } from "@/components/hdshare/HDShareFooter";

export const metadata: Metadata = {
  title: "HDShare — Lossless Video Splitting for macOS",
  description:
    "Slice videos into exact parts for WhatsApp, Discord, Telegram — zero compression, 100% quality preserved.",
};

export default function HDSharePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HDShareNavbar />
      <main className="flex-1">
        <ProductHero />
        <PlatformModes />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <Pricing />
        <InstallGuide />
        <FinalCTA />
      </main>
      <HDShareFooter />
    </div>
  );
}
