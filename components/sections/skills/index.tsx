"use client";

import { motion } from "motion/react";
import { SectionLabel } from "../about";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const categories = [
  {
    title: "Frontend Web",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "React Navigation",
      "NativeWind",
      "Reanimated",
      "Zustand",
    ],
  },
  {
    title: "Tooling & Workflow",
    skills: ["Git", "Vercel", "GitHub Actions", "ESLint", "Vitest", "Yarn"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "Storybook", "Accessibility (a11y)", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-900/40 overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#ee690b]/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Right Column: Categories Grid */}
        <motion.div
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map(({ title, skills }) => (
            <motion.div
              key={title}
              variants={cardItem}
              className="group relative rounded-[5px] border border-zinc-200/50 dark:border-zinc-800/60 p-6 sm:p-8 bg-white dark:bg-zinc-900/20 backdrop-blur-xs transition-all duration-300 hover:border-[#ee690b]/40 dark:hover:border-[#ee690b]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/2"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-[#ee690b] transition-all duration-300 group-hover:w-4 group-hover:h-4" />

              <h4 className="text-lg font-extrabold text-[#BBD3EB] mb-6 uppercase tracking-wider group-hover:text-[#ee690b] transition-colors">
                {title}
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[3px] text-xs font-bold bg-zinc-100 dark:bg-zinc-900/60 text-[#BBD3EB]/60 border border-zinc-200/40 dark:border-zinc-800/40 transition-all duration-300 hover:bg-[#ee690b] hover:text-white hover:border-[#ee690b] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Left Column: Section Header */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <SectionLabel>Skills</SectionLabel>
          <h3 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#BBD3EB] tracking-tighter leading-[0.85] uppercase">
            WHAT <br />
            I WORK <br />
            <span className="text-[#ee690b]">WITH</span>
          </h3>
          <p className="mt-8 text-base sm:text-lg text-[#BBD3EB]/60 leading-relaxed font-medium">
            Focused on the frontend — web and mobile. I build polished,
            performant interfaces with React and React Native, and reach for
            tools that keep the developer experience sharp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
