"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

// Loaded lazily — the import() is only triggered when <MobileCarousel> first renders,
// which only happens when isMobile is true. Desktop browsers never fetch this chunk.
const MobileCarousel = dynamic(
  () => import("./MobileCarousel"),
  { ssr: false },
);

export default function MobileCarouselLoader({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  // On desktop, bail out immediately — MobileCarousel JS is never downloaded.
  // MobileCarousel handles resize internally (returning null if resized to desktop).
  if (!isMobile) return null;

  return <MobileCarousel>{children}</MobileCarousel>;
}
