"use client";

import { motion } from "motion/react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const statItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const highlights = [
  { label: "Years of experience", value: "3+" },
  { label: "Projects shipped", value: "20+" },
  { label: "Open-source contribs", value: "10+" },
  { label: "Cups of coffee", value: "∞" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/40 overflow-hidden"
    >
      {/* Decorative background aura blur */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-96 h-96 bg-[#ee690b]/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Bold Header */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <SectionLabel>About me</SectionLabel>
          <h3 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#BBD3EB] tracking-tighter leading-[0.85] uppercase">
            THE <br />
            MIND <br />
            BEHIND <br />
            THE <br />
            <span className="text-[#ee690b]">CODE</span>
          </h3>
        </motion.div>

        {/* Right Side: Narrative and Stats */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Quote */}
          <motion.div
            className="border-l-4 border-[#ee690b] pl-6"
            variants={fadeUp}
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-[#BBD3EB] tracking-tight leading-snug">
              &ldquo;I build high-performance products for the web and mobile,
              occasionally breaking them beautifully to rebuild them even
              stronger.&rdquo;
            </p>
          </motion.div>

          {/* Narrative Body */}
          <motion.div
            className="mt-8 space-y-6 text-base sm:text-lg text-[#BBD3EB]/60 leading-relaxed font-medium"
            variants={fadeUp}
          >
            <p>
              I&apos;m a full-stack developer dedicated to writing extremely
              clean, user-focused software. I care deeply about optimizing
              performance, enforcing robust accessibility standards, and
              building scalable architectures that last.
            </p>
            <p>
              When I&apos;m not shipping features, I spend my time exploring
              emerging frameworks, contributing to the open-source community, or
              engineering creative side projects that experiment with modern
              visual and backend technologies.
            </p>
          </motion.div>

          {/* Resume CTA */}
          <motion.div className="mt-10" variants={fadeUp}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 h-12 rounded-[5px] border-2 border-[#ee690b] text-[#ee690b] hover:bg-[#ee690b] hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 group"
            >
              <span>Download resume</span>
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="mt-20 grid grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {highlights.map(({ label, value }) => (
              <motion.div
                key={label}
                variants={statItem}
                className="group relative rounded-[5px] border border-zinc-200/50 dark:border-zinc-800/60 p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-xs transition-all duration-300 hover:border-[#ee690b]/50 dark:hover:border-[#ee690b]/40 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-0 h-0.75 bg-[#ee690b] transition-all duration-300 group-hover:w-full" />
                <p className="text-4xl sm:text-5xl font-black text-[#BBD3EB] tracking-tight transition-colors group-hover:text-[#ee690b]">
                  {value}
                </p>
                <p className="mt-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#BBD3EB]/60 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0/5 w-6 bg-[#ee690b]" />
      <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#ee690b]">
        {children}
      </p>
    </div>
  );
}
