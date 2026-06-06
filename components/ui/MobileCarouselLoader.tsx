"use client";

import dynamic from "next/dynamic";

// Loaded lazily — the import() is only triggered when <MobileCarousel> first renders,
// which only happens when isMobile is true. Desktop browsers never fetch this chunk.
const MobileCarousel = dynamic(
  () => import("./MobileCarousel"),
  { ssr: false },
);

export default function MobileCarouselLoader() {
  return <MobileCarousel />;
}
