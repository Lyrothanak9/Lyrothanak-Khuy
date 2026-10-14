import { profile } from "../data/portfolio.js";

const aboutCards = [
  {
    label: "STUDYING",
    value: "IT Engineering, year 3, RUPP",
    id: "education",
  },
  {
    label: "BASED IN",
    value: "Phnom Penh, Cambodia",
  },
  {
    label: "WORKS ACROSS",
    value: "Mobile, web and backend",
  },
  {
    label: "OBJECTIVE",
    value: "Clean, high-impact digital products",
  },
];

export default function About() {
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 pt-10 pb-16 md:pt-14 md:pb-20 scroll-mt-20 text-slate-900"
      id="about"
      aria-label="About Me Section"
    >
      {/* Header Row: ABOUT + Subtitle matching sample */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/90 pb-4 mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
          ABOUT
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
          WHO I AM / PHNOM PENH, CAMBODIA
        </span>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        
        {/* Left Column: Bio Narrative with highlighted bold terms */}
        <div className="flex flex-col gap-5">
          <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-800">
            Hello! I&apos;m Khuy Lyrothanak, an IT Engineering student at the{" "}
            <strong className="font-bold text-slate-900">
              Royal University of Phnom Penh (RUPP)
            </strong>{" "}
            specializing in mobile application and web development. I love
            turning complex technical challenges into intuitive, high-performing
            digital experiences.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Good interfaces tell stories, and so does good code. My work joins
            structured engineering thinking with user-focused design to build
            software that makes everyday workflows simpler and faster.
          </p>
        </div>

        {/* Right Column: 2x2 Grid of Spec Cards with ┌ and ┘ brackets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutCards.map(({ label, value, id }) => (
            <div
              key={label}
              id={id}
              className="relative flex flex-col justify-between border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              {/* Top-left corner bracket ┌ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[2px] -left-[2px] h-2.5 w-2.5 border-t-[2px] border-l-[2px] border-slate-900"
              />

              {/* Bottom-right corner bracket ┘ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[2px] -right-[2px] h-2.5 w-2.5 border-b-[2px] border-r-[2px] border-slate-900"
              />

              {/* Card Label */}
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {label}
              </span>

              {/* Card Content Value */}
              <p className="mt-3 font-mono text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
