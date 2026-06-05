import dynamic from "next/dynamic";
import MobileCarousel from "@/components/ui/MobileCarousel";
import Hero from "@/components/sections/hero";

const About = dynamic(() => import("@/components/sections/about"));
const Skills = dynamic(() => import("@/components/sections/skills"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Contact = dynamic(() => import("@/components/sections/contact"));

export default function Home() {
  return (
    <MobileCarousel>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </MobileCarousel>
  );
}
