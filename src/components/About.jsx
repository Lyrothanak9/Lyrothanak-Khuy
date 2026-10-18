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

        {/* Right Column: 2x2 Grid of Spec Cards with Animated Teal Corner Brackets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutCards.map(({ label, value, id }) => (
            <div
              key={label}
              id={id}
              className="group relative flex flex-col justify-between border border-slate-300/80 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0891b2]/40 scroll-mt-28"
            >
              {/* Top-left corner bracket ┌ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[2px] -left-[2px] h-3 w-3 border-t-2 border-l-2 border-[#0891b2] transition-all duration-300 group-hover:scale-125 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_6px_rgba(8,145,178,0.7)]"
              />

              {/* Top-right corner bracket ┐ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[2px] -right-[2px] h-3 w-3 border-t-2 border-r-2 border-[#0891b2] transition-all duration-300 group-hover:scale-125 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_6px_rgba(8,145,178,0.7)]"
              />

              {/* Bottom-left corner bracket └ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b-2 border-l-2 border-[#0891b2] transition-all duration-300 group-hover:scale-125 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 group-hover:drop-shadow-[0_0_6px_rgba(8,145,178,0.7)]"
              />

              {/* Bottom-right corner bracket ┘ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2 border-[#0891b2] transition-all duration-300 group-hover:scale-125 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:drop-shadow-[0_0_6px_rgba(8,145,178,0.7)]"
              />

              {/* Card Label */}
              <span className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0891b2] group-hover:text-[#066675] transition-colors">
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
