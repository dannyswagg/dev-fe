"use client";

import { motion } from "motion/react";
import { SectionLabel } from "../about/about";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dannyswagg",
    description: "@dannyswagg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dannyswagg",
    description: "linkedin.com/in/dannyswagg",
  },
  {
    label: "Email",
    href: "mailto:ugiomohd@yahoo.com",
    description: "ugiomohd@yahoo.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Left column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#BBD3EB]"
            >
              Let&apos;s work together
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base text-[#BBD3EB]/60 leading-relaxed"
            >
              I&apos;m currently open to freelance projects and full-time
              opportunities. If you have something in mind or just want to say
              hi, my inbox is always open.
            </motion.p>

            <motion.ul
              className="mt-7 sm:mt-8 space-y-4 sm:space-y-5"
              variants={staggerContainer}
            >
              {socials.map(({ label, href, description }) => (
                <motion.li key={label} variants={fadeUp}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex flex-col min-[380px]:flex-row min-[380px]:items-center gap-1 min-[380px]:gap-4"
                  >
                    <span className="text-sm font-semibold min-[380px]:w-20 text-[#BBD3EB]">
                      {label}
                    </span>
                    <span className="text-sm text-[#BBD3EB]/60 group-hover:text-[#ee690b] transition-colors break-all">
                      {description}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="flex flex-col gap-3 sm:gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-[#BBD3EB]">Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="h-10 rounded-lg border border-[#BBD3EB]/60 bg-transparent px-3 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-[#BBD3EB]">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="h-10 rounded-lg border border-[#BBD3EB]/60 bg-transparent px-3 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="rounded-lg border border-[#BBD3EB]/60 bg-transparent px-3 py-2.5 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition resize-none"
        />
      </label>
      <button
        type="submit"
        className="self-start h-11 px-6 rounded-[5px] bg-[#ee690b] hover:bg-[#d45a00] text-white font-medium text-sm transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
