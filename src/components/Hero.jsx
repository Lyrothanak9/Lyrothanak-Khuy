import { profile } from "../data/portfolio.js";

/**
 * =======================================================================
 * HERO CONFIGURATION - EDIT YOUR INFORMATION HERE:
 * You can customize the name, metadata, HUD cards, and stats below!
 * =======================================================================
 */
export const heroConfig = {
  // Main title / Name
  firstName: "Khuy",
  lastName: "Lyrothanak",

  // Metadata items shown below the name
  metadata: [
    {
      icon: "location_on",
      text: "PHNOM PENH, CAMBODIA",
    },
    {
      icon: "school",
      text: "IT ENGINEERING AT RUPP",
    },
    {
      icon: "code",
      text: "MOBILE & WEB APPLICATION DEVELOPER",
    },
  ],


  // Right column: HUD cards with corner brackets
  hudCards: {
    currently: {
      tag: "CURRENTLY",
      title: "IT ENGINEERING STUDENT",
      subtitle: "ROYAL UNIVERSITY OF PHNOM PENH",
    },
    latestProject: {
      tag: "LATEST PROJECT",
      title: "FIND BOOK",
      subtitle: "REACT JS, GOOGLE API",
    },
    atAGlance: {
      tag: "AT A GLANCE",
      stats: [
        { label: "PROJECTS", value: "3" },
        { label: "SKILLS", value: "7" },
        { label: "EXPERIENCE", value: "2+" },
      ],
    },
  },

  // CTA button links
  cta: {
    label: "VIEW PROJECTS",
    href: "#projects",
  },
  githubCta: {
    label: "VIEW GITHUB",
    href: profile.github || "https://github.com/Lyrothanak9",
  },

  // Use the original portrait image
  portrait: profile.portrait,

  // Image size configuration - adjust dimensions here anytime:
  imageSize: {
    maxWidth: "max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-[520px]",
    maxHeight: "max-h-[480px] sm:max-h-[540px] lg:max-h-[600px] xl:max-h-[660px]",
  },
};

/**
 * Reusable HUD Box with tech corner brackets ┌ ┐ └ ┘
 */
function HudCard({ children, className = "" }) {
  return (
    <div className={`group relative bg-slate-50 border border-slate-300/80 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0891b2]/40 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.1),0_8px_10px_-6px_rgba(15,23,42,0.06)] ${className}`}>
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

      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full pt-14 pb-4 sm:pt-16 sm:pb-6 md:pt-18 lg:pt-20 lg:pb-8 text-slate-900 scroll-mt-20"
      id="home"
      aria-label="Hero Introduction"
    >
      <div className="mx-auto flex w-[min(1280px,calc(100%-48px))] flex-col justify-between gap-8 sm:gap-10">
        {/* Main 3-column Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-12">
          
          {/* =========================================
              LEFT COLUMN: Name & Metadata
             ========================================= */}
          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              {heroConfig.firstName}
              <br />
              <span className="text-black">{heroConfig.lastName}</span>
            </h1>

            {/* Metadata list with teal icons */}
            <ul className="mt-6 sm:mt-8 flex flex-col gap-3 font-mono text-[11px] font-semibold tracking-wider text-slate-700 sm:text-xs text-left">
              {heroConfig.metadata.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span
                    className="material-symbols-outlined text-[17px] text-[#0891b2]"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA action buttons under Hero left column */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* VIEW PROJECTS CTA Button */}
              <a
                href={heroConfig.cta.href}
                className="inline-flex items-center gap-2 border border-slate-800 bg-transparent px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-slate-900 uppercase transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
              >
                <span>{heroConfig.cta.label}</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  north_east
                </span>
              </a>

              {/* VIEW GITHUB CTA Button */}
              <a
                href={heroConfig.githubCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-800 bg-transparent px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-slate-900 uppercase transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
              >
                <span>{heroConfig.githubCta.label}</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  north_east
                </span>
              </a>
            </div>
          </div>

          {/* =========================================
              CENTER COLUMN: Portrait Photo Centered
             ========================================= */}
          <div className="relative flex justify-center items-center self-center justify-self-center w-full">
            <div className={`relative w-full ${heroConfig.imageSize.maxWidth} mx-auto flex justify-center`}>
              <img
                src={heroConfig.portrait}
                alt={`${heroConfig.firstName} ${heroConfig.lastName} portrait`}
                width={960}
                height={1280}
                className={`mx-auto w-full ${heroConfig.imageSize.maxHeight} h-auto object-contain object-bottom drop-shadow-md transition-transform duration-500 hover:scale-[1.02]`}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: HUD Spec Cards with Brackets
             ========================================= */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[320px] xl:max-w-[340px] lg:ml-auto">
            {/* HUD Card 1: Currently */}
            <HudCard>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                {heroConfig.hudCards.currently.tag}
              </span>
              <h2 className="mt-2 text-sm font-bold tracking-wider text-slate-900 uppercase">
                {heroConfig.hudCards.currently.title}
              </h2>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                {heroConfig.hudCards.currently.subtitle}
              </p>
            </HudCard>

            {/* HUD Card 2: Latest Project */}
            <HudCard>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                {heroConfig.hudCards.latestProject.tag}
              </span>
              <h3 className="mt-2 text-sm font-bold tracking-wider text-slate-900 uppercase">
                {heroConfig.hudCards.latestProject.title}
              </h3>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                {heroConfig.hudCards.latestProject.subtitle}
              </p>

              {/* Sparkline Wave / Spline Curve Graph matching sample */}
              <div className="mt-3 w-full" aria-hidden="true">
                <svg
                  className="h-9 w-full"
                  viewBox="0 0 240 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 30 Q 30 10, 60 20 T 120 18 T 180 25 T 240 32"
                    stroke="#0f172a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </HudCard>

            {/* HUD Card 3: At a Glance Stats */}
            <HudCard>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                {heroConfig.hudCards.atAGlance.tag}
              </span>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {heroConfig.hudCards.atAGlance.stats.map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-mono text-[9px] font-semibold tracking-wider text-slate-500 uppercase">
                      {label}
                    </span>
                    <span className="mt-1 font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </HudCard>
          </div>
        </div>
      </div>
    </section>
  );
}
