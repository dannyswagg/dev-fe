import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} Danny. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            GitHub
            {/* <GithubIcon className="inline-block w-4 h-4 ml-1" /> */}
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
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Email
            <Mail className="inline-block w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
