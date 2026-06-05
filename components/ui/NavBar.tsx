"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`hidden md:block fixed top-5 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-transparent" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16 text-[#ee690b] bg-[#0B1014] rounded-[5px]">
        <a
          href="#hero"
          className="text-4xl font-semibold tracking-tight text-[#BBD3EB]"
        >
          FE <span className="text-[#ee690b] text-4xl">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs text-[#ee690b] transition-colors uppercase tracking-wide hover:text-zinc-900 dark:hover:text-zinc-50 font-bold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center h-9 px-4 rounded-[5px] font-bold text-[#BBD3EB] uppercase text-sm transition-colors"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
