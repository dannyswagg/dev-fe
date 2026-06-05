"use client";

import { motion } from "motion/react";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-16 pt-24 hero"
    >
      {/* Background image */}
      <Image
        src="/bg-mob.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Giant Typography Background Elements */}
      <motion.div
        className="absolute right-0 bottom-1/4 select-none pointer-events-none font-black text-[14vw] leading-none text-zinc-200/25 dark:text-zinc-900/20 tracking-tighter uppercase whitespace-nowrap z-0 translate-x-12"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 48 }}
        transition={{ duration: 1.4, ease, delay: 0.2 }}
      >
        DANIEL
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-1/12 select-none pointer-events-none font-black text-[14vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(238,105,11,0.12)] dark:[-webkit-text-stroke:1px_rgba(238,105,11,0.15)] tracking-tighter uppercase whitespace-nowrap z-0 translate-x-24"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 96 }}
        transition={{ duration: 1.4, ease, delay: 0.4 }}
      >
        SWAGG
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-start text-left">
        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#BBD3EB] leading-[0.85] uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          BUILDING <br />
          SOFTWARES <br />
          <span className="text-[#0B1014]">BEUTIFULLY</span>
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl sm:text-xl font-black text-[#0B1014] tracking-tight leading-none uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
        >
          HELLO I&apos;M DANIEL, A FRONTEND DEVELOPER.
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-[16px] text-[#BBD3EB] leading-relaxed font-medium"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
        >
          Building highly-performant, accessible, and stunning web experiences.
          Focused on combining robust backend structures with pixel-perfect
          visual design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.65 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-[5px] bg-[#ee690b] hover:bg-[#d55806] text-[#0B1014] font-bold text-sm transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 uppercase tracking-wide group"
          >
            <span>View my work</span>
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-6 rounded-[5px]  bg-black dark:hover:bg-zinc-100 dark:hover:text-zinc-900 text-[#ee690b] dark:text-zinc-100 font-bold text-sm transition-all uppercase tracking-wide"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex items-center gap-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
        >
          <a
            href="https://github.com/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-[#ee690b] dark:hover:text-[#ee690b] transition-colors p-1"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-[#ee690b] dark:hover:text-[#ee690b] transition-colors p-1"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:calebugiomoh@gmail.com"
            aria-label="Email"
            className="text-zinc-400 hover:text-[#ee690b] dark:hover:text-[#ee690b] transition-colors p-1"
          >
            <EmailIcon />
          </a>
        </motion.div>
      </div>

      {/* Decorative background overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-zinc-100/10 dark:to-black/30" />
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
