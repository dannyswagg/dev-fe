import { CalendarIcon, MapPinIcon, BriefcaseIcon } from "./icons";

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export default function ExperienceItem({
  role,
  company,
  period,
  location,
  description,
  skills,
}: ExperienceEntry) {
  return (
    <div className="group relative pl-8 sm:pl-10 before:absolute before:left-0 before:top-3 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-800/80 last:before:h-0">
      {/* Timeline Bullet with Glow Effect */}
      <span className="absolute left-0 top-3 -translate-x-1/2 flex items-center justify-center">
        <span className="absolute h-4 w-4 rounded-full bg-[#ee690b]/30 blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative h-3.5 w-3.5 rounded-full border-2 border-[#ee690b] bg-white dark:bg-zinc-950 group-hover:bg-[#ee690b] transition-colors duration-300" />
      </span>

      <div className="pb-8 sm:pb-10 last:pb-0">
        <div className="relative rounded-[5px] border border-zinc-200/50 dark:border-zinc-800/60 p-5 sm:p-8 bg-white dark:bg-zinc-900/20 backdrop-blur-xs transition-all duration-300 hover:border-[#ee690b]/40 dark:hover:border-[#ee690b]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/2 active:scale-[0.99] select-none">
          {/* Subtle top bar accent */}
          <div className="absolute top-0 left-0 w-0 h-0.75 bg-[#ee690b] transition-all duration-300 group-hover:w-full" />

          {/* Card Header Info */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ee690b] uppercase tracking-widest mb-1.5 font-mono">
                <CalendarIcon />
                <span>{period}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#BBD3EB] tracking-tight group-hover:text-[#ee690b] transition-colors duration-300 uppercase">
                {role}
              </h3>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-xs text-[#BBD3EB]/60 font-medium">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#BBD3EB]/80">
                <BriefcaseIcon />
                {company}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon />
                {location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#BBD3EB]/60 leading-relaxed font-medium mb-6 max-w-[65ch]">
            {description}
          </p>

          {/* Technical Skills Acquired */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2.5 sm:px-3.5 py-1.5 rounded-[3px] text-xs font-bold bg-zinc-100 dark:bg-zinc-900/60 text-[#BBD3EB]/60 border border-zinc-200/40 dark:border-zinc-800/40 hover:bg-[#ee690b] hover:text-white hover:border-[#ee690b] cursor-default transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
