import { SectionLabel } from "../about";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dannyswagg",
    description: "@dannyswagg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dannyswagg",
    description: "linkedin.com/in/dannyswagg",
  },
  {
    label: "Email",
    href: "mailto:ugiomohd@yahoo.com",
    description: "ugiomohd@yahoo.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#BBD3EB]">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-[#BBD3EB]/60 leading-relaxed">
              I&apos;m currently open to freelance projects and full-time
              opportunities. If you have something in mind or just want to say
              hi, my inbox is always open.
            </p>
            <ul className="mt-8 space-y-5">
              {socials.map(({ label, href, description }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4"
                  >
                    <span className="text-sm font-semibold w-20 text-[#BBD3EB]">
                      {label}
                    </span>
                    <span className="text-sm text-[#BBD3EB]/60 group-hover:text-[#ee690b] transition-colors">
                      {description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-[#BBD3EB]">Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="h-10 rounded-lg border border-[#BBD3EB]/60 px-3 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-[#BBD3EB]">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="h-10 rounded-lg border border-[#BBD3EB]/60 px-3 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="rounded-lg border border-[#BBD3EB]/60 px-3 py-2.5 text-sm text-[#BBD3EB] placeholder:text-[#BBD3EB]/60 focus:outline-none focus:ring-1 focus:ring-[#ee690b] focus:border-transparent transition resize-none"
        />
      </label>
      <button
        type="submit"
        className="self-start h-11 px-6 rounded-[5px] bg-[#ee690b] hover:bg-[#d45a00] text-white font-medium text-sm transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
