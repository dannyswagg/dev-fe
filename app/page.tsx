import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import MobileCarouselLoader from "@/components/ui/MobileCarouselLoader";

const About = dynamic(() => import("@/components/sections/about"));
const Skills = dynamic(() => import("@/components/sections/skills"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Contact = dynamic(() => import("@/components/sections/contact"));

export default function Home() {
  return (
    <>
      {/*
        Server-rendered desktop layout.
        Always in the HTML — visible on desktop, covered by the fixed carousel overlay on mobile.
      */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/*
        Mobile-only carousel overlay.
        MobileCarouselLoader ("use client") checks the viewport after hydration.
        If desktop: returns null and MobileCarousel.js is never downloaded.
        If mobile: lazily loads MobileCarousel and its fixed slide list.
      */}
      <MobileCarouselLoader />
    </>
  );
}
