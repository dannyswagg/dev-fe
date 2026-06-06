export default function Footer() {
  return (
    <footer className="border-t text-[#BBD3EB]/60 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#BBD3EB]/60">
        <p>
          &copy; {new Date().getFullYear()} Developed by{" "}
          <span className="font-boldbold text-[#BBD3EB]">FE</span>
          <span className="text-[#ee690b]">.</span>
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ugiomohd@yahoo.com"
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Email
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
