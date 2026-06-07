"use client";

import { motion } from "motion/react";
import { SectionLabel } from "../about";
import ExperienceItem, { type ExperienceEntry } from "./ExperienceItem";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const experiences: ExperienceEntry[] = [
  {
    role: "Frontend Engineer",
    company: "Hayok Medicare",
    period: "2025 — Present",
    location: "Hybrid",
    description:
      "Lead development of the customer-facing dashboard serving 50k+ users. Reduced bundle size by 40% and improved Core Web Vitals scores across all pages. Mentored two junior engineers.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "Figma"],
  },
  {
    role: "Frontend Developer",
    company: "Indulgence Digital",
    period: "2024 — 2025",
    location: "Abuja, Nigeria",
    description:
      "Built the core product from scratch — REST API, admin dashboard, and mobile-responsive web app. Integrated payment processing and shipped the MVP in 3 months.",
    skills: ["Node.js", "React", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "WePluz Technologies",
    period: "2023 — 2024",
    location: "Abuja, Nigeria",
    description:
      "Delivered client websites and e-commerce stores. Introduced component-based architecture and cut development time by 30% across the team.",
    skills: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-5 sm:px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-900/40 overflow-hidden"
    >
      {/* Decorative background aura blur */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#ee690b]/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
        {/* Left Column: Sticky, Brutalist Header */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h3 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#BBD3EB] tracking-tight leading-[0.9] sm:leading-[0.85] uppercase">
            PLACES <br />
            I&apos;VE <br />
            WORKED <br />
            &amp; <span className="text-[#ee690b]">SHIPPED</span>
          </h3>
          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-[#BBD3EB]/60 leading-relaxed font-medium">
            A timeline of my professional journey in software engineering. Building robust web apps, scaling architectures, and crafting premium, high-performance interfaces.
          </p>
        </motion.div>

        {/* Right Column: Experience Timeline List */}
        <motion.div
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experiences.map((entry) => (
            <motion.div
              key={`${entry.company}-${entry.role}`}
              variants={slideUp}
            >
              <ExperienceItem {...entry} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
