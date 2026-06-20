"use client";

import { motion } from "motion/react";
import { SectionLabel } from "../about/about";
import ProjectCard, { type Project } from "./ProjectCard";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const projects: Project[] = [
  {
    title: "Live",
    description:
      "LIVE is a real-time anonymous chat application that enables users to connect and message each other without revealing their identity.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "WebSockets",
      "Express.js",
      "Socket.IO",
      "Vite",
    ],
    githubUrl: "https://github.com/dannyswagg/live",
    liveUrl: "https://live-three-psi.vercel.app/",
    featured: true,
  },
  {
    title: "E-commerce Store",
    description:
      "An e-commerce store built with React.js and Tailwind CSS, featuring a Store API for product management and Redux for state management.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Store API",
      "JSX",
      "Redux",
      "State Management",
    ],
    githubUrl: "https://github.com/dannyswagg/store",
    liveUrl: "https://berries.vercel.app/",
  },
  {
    title: "CNT Luxury Apartments",
    description:
      "A real estate website for CNT Luxury Apartments, showcasing their properties and services. Built with HTML, CSS, Bootstrap, and Vanilla JavaScript.",
    tags: [
      "HTML",
      "CSS",
      "BOOTSTRAP",
      "Vanilla Javascript",
      "Responsive Design",
    ],
    liveUrl: "https://www.cntapartments.com.ng/",
  },
  {
    title: "Akwaaba Services",
    description:
      "A web application for Akwaaba Services, a company that provides various services to clients. Built with React.js, Next.js, and Tailwind CSS.",
    tags: [
      "React.js",
      "Next.js",
      "Endpoints",
      "REST API",
      "Tailwind CSS",
      "Typescript",
    ],
    githubUrl: "https://github.com/dannyswagg/akwaaba",
    liveUrl: "https://www.cntapartments.com.ng/",
  },
  {
    title: "Subscription Management Mobile",
    description:
      "Lightweight JWT-based authentication middleware for Express with refresh token rotation and session management.",
    tags: ["React Native", "React", "Expo", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/dannyswagg/recurrly-mobile",
  },
  {
    title: "AI Video Dashboard",
    description:
      "A web application that allows users to generate videos using AI technology. Built with React.js, Tailwind CSS, and Vercel for deployment.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "React Hooks",
      "State Management",
    ],
    githubUrl: "https://github.com/dannyswagg/vidxir",
    liveUrl: "https://vidxir-xi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionLabel>Projects</SectionLabel>
          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#BBD3EB]">
              Things I&apos;ve built
            </h2>
            <a
              href="https://github.com/dannyswagg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#EE690B] hover:text-[#d55806] font-medium transition-colors hidden sm:block"
            >
              View all on GitHub →
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardItem}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
