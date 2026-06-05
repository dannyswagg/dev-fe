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
    <div className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
      <span className="absolute left-0 top-2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950" />
      <div className="pb-9 sm:pb-12 last:pb-0">
        <p className="text-xs font-medium text-indigo-500 uppercase tracking-widest mb-1">
          {period}
        </p>
        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {role}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 sm:mb-3">
          {company} &middot; {location}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
