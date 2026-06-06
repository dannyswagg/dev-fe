"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

// Loaded lazily — the import() is only triggered when <MobileCarousel> first renders,
// which only happens when isMobile is true. Desktop browsers never fetch this chunk.
const MobileCarousel = dynamic(
  () => import("./MobileCarousel"),
  { ssr: false },
);

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

function getMobileSnapshot() {
  return window.innerWidth < 768;
}

function getServerMobileSnapshot() {
  return false;
}

export default function MobileCarouselLoader() {
  const isMobile = useSyncExternalStore(
    subscribeToResize,
    getMobileSnapshot,
    getServerMobileSnapshot,
  );

  // On desktop, bail out immediately — MobileCarousel JS is never downloaded.
  // MobileCarousel handles resize internally (returning null if resized to desktop).
  if (!isMobile) return null;

  return <MobileCarousel />;
}
