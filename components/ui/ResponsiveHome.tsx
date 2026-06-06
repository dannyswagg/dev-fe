"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import Hero from "@/components/sections/hero";
import MobileCarouselLoader from "@/components/ui/MobileCarouselLoader";

const About = dynamic(() => import("@/components/sections/about"));
const Skills = dynamic(() => import("@/components/sections/skills"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Contact = dynamic(() => import("@/components/sections/contact"));

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

export default function ResponsiveHome() {
  const isMobile = useSyncExternalStore(
    subscribeToResize,
    getMobileSnapshot,
    getServerMobileSnapshot,
  );

  if (isMobile) {
    return <MobileCarouselLoader />;
  }

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
