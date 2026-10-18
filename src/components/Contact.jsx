import { profile } from "../data/portfolio.js";

const contactLinks = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GITHUB",
    value: "github.com/Lyrothanak9",
    href: "https://github.com/Lyrothanak9",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/khuy-lyrothanak",
    href: "https://www.linkedin.com/in/khuy-lyrothanak",
  },
  {
    label: "FACEBOOK",
    value: "facebook.com/khuy.lyrothanak",
    href: "https://www.facebook.com/khuy.lyrothanak",
  },
  {
    label: "TELEGRAM",
    value: "t.me/lyrothanak",
    href: "https://t.me/lyrothanak",
  },
];

export default function Contact() {
  return (
    <section
      className="relative w-full border-t border-slate-200/80 pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden scroll-mt-12 text-slate-900"
      id="contact"
      aria-label="Contact Section"
    >
      {/* Background Radar / Concentric Rings matching the sample, adapted to the paper background */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -left-[15%] top-1/2 -translate-y-1/2 h-[950px] w-[950px] opacity-[0.08]"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="360" cy="400" r="90" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="3 4" />
          <circle cx="360" cy="400" r="160" stroke="#0f172a" strokeWidth="1.2" />
          <circle cx="360" cy="400" r="240" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="360" cy="400" r="320" stroke="#0f172a" strokeWidth="1.2" />
          <circle cx="360" cy="400" r="410" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="5 5" />
          <circle cx="360" cy="400" r="500" stroke="#0f172a" strokeWidth="1.2" />
          <circle cx="360" cy="400" r="600" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="360" cy="400" r="700" stroke="#0f172a" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-[min(1240px,calc(100%-48px))]">
        {/* Main Grid: Left Typography + Right Channel Links */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          
          {/* Left Column: Huge Headline & Subtitle */}
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-tight text-slate-900 leading-[0.88] select-none">
              LET&apos;S
              <br />
              WORK.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-600 mt-6 sm:mt-8 max-w-md leading-relaxed tracking-wide">
              I&apos;m open to projects, collaborations and internships.
            </p>
          </div>

          {/* Right Column: Contact Links List with Clean Dividers */}
          <div className="flex flex-col border-t border-slate-300 pt-1">
            {contactLinks.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 sm:py-5 border-b border-slate-300 transition-colors hover:border-black"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 group-hover:text-black transition-colors">
                  {label}
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0891b2] transition-colors inline-flex items-center gap-1.5">
                  <span className="truncate max-w-[210px] sm:max-w-none">{value}</span>
                  <span
                    className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Name & Tech Credit */}
        <div className="mt-20 sm:mt-24 border-t border-slate-200/80 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Name */}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-700">
            {profile.name}
          </span>

          {/* Right: Built With Credits */}
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 text-center sm:text-right">
            BUILT WITH REACT AND VITE IN PHNOM PENH
          </span>
        </div>
      </div>
    </section>
  );
}
