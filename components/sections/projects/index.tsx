import { SectionLabel } from "../about";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack SaaS application with real-time collaboration, built with Next.js, Prisma, and WebSockets. Handles 10k+ active users.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com/dannyswagg",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Open CLI Tool",
    description:
      "A developer CLI that scaffolds opinionated project structures with one command. Downloaded 5k+ times on npm.",
    tags: ["Node.js", "TypeScript", "CLI"],
    githubUrl: "https://github.com/dannyswagg",
  },
  {
    title: "Design System",
    description:
      "A fully accessible component library built on Radix UI with Storybook documentation and automated visual regression testing.",
    tags: ["React", "Radix UI", "Storybook", "Vitest"],
    githubUrl: "https://github.com/dannyswagg",
    liveUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with charting, filtering, and CSV export. Integrated with a self-hosted Plausible instance.",
    tags: ["React", "Recharts", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/dannyswagg",
    liveUrl: "#",
  },
  {
    title: "Auth Library",
    description:
      "Lightweight JWT-based authentication middleware for Express with refresh token rotation and session management.",
    tags: ["Node.js", "Express", "JWT", "Redis"],
    githubUrl: "https://github.com/dannyswagg",
  },
  {
    title: "Portfolio v1",
    description:
      "The first iteration of my personal portfolio site, built with plain HTML, CSS, and JavaScript. Still live somewhere.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dannyswagg",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-4 flex items-end justify-between">
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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
