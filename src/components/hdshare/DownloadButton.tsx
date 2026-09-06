"use client";

import { type ReactNode } from "react";
import { HDSHARE_DOWNLOAD_URL } from "@/lib/constants";

interface HDShareDownloadTriggerProps {
  children: (trigger: () => void) => ReactNode;
}

export function HDShareDownloadTrigger({ children }: HDShareDownloadTriggerProps) {
  const handleDownload = () => {
    // 1. Trigger the direct DMG download
    const link = document.createElement("a");
    link.href = HDSHARE_DOWNLOAD_URL;
    link.download = "HDShare-v1.1.0.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Automatically scroll smoothly to the Gatekeeper verification guide
    setTimeout(() => {
      const guideEl =
        document.getElementById("gatekeeper-guide") ||
        document.getElementById("install");
      if (guideEl) {
        guideEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  };

  return <>{children(handleDownload)}</>;
}

