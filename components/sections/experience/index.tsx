import { SectionLabel } from "../about";
import ExperienceItem, { type ExperienceEntry } from "./ExperienceItem";

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
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
          Where I&apos;ve worked
        </h2>
        <div className="max-w-2xl">
          {experiences.map((entry) => (
            <ExperienceItem key={`${entry.company}-${entry.role}`} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
