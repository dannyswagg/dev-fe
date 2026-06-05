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
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Lead development of the customer-facing dashboard serving 50k+ users. Reduced bundle size by 40% and improved Core Web Vitals scores across all pages. Mentored two junior engineers.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "Figma"],
  },
  {
    role: "Full-Stack Developer",
    company: "Startup XYZ",
    period: "2022 — 2023",
    location: "Lagos, Nigeria",
    description:
      "Built the core product from scratch — REST API, admin dashboard, and mobile-responsive web app. Integrated payment processing and shipped the MVP in 3 months.",
    skills: ["Node.js", "React", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2021 — 2022",
    location: "Lagos, Nigeria",
    description:
      "Delivered client websites and e-commerce stores. Introduced component-based architecture and cut development time by 30% across the team.",
    skills: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl"
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
