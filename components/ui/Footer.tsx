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
            className="hover:text-[#ee690b] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dannyswagg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ee690b] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ugiomohd@yahoo.com"
            className="inline-flex items-center gap-1 hover:text-[#ee690b] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
