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
    maxWidth: "max-w-[220px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px]",
    maxHeight: "max-h-[300px] sm:max-h-[360px] md:max-h-[440px] lg:max-h-[540px] xl:max-h-[600px]",
  },
};

/**
 * Reusable HUD Box with tech corner brackets ┌ ┐ └ ┘
 */
function HudCard({ children, className = "" }) {
  return (
    <div className={`relative bg-slate-50 border border-slate-300/80 p-3.5 sm:p-4 md:p-5 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)] ${className}`}>
      {/* Top-left corner bracket ┌ */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-0.5 -left-0.5 h-3 w-3 border-t-2 border-l-2 border-[#0891b2]"
      />
      {/* Top-right corner bracket ┐ */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-0.5 -right-0.5 h-3 w-3 border-t-2 border-r-2 border-[#0891b2]"
      />
      {/* Bottom-left corner bracket └ */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-3 w-3 border-b-2 border-l-2 border-[#0891b2]"
      />
      {/* Bottom-right corner bracket ┘ */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-3 w-3 border-b-2 border-r-2 border-[#0891b2]"
      />

      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-32 md:pb-12 lg:pt-24 lg:pb-12 text-slate-900 scroll-mt-20"
      id="home"
      aria-label="Hero Introduction"
    >
      <div className="mx-auto flex w-[min(1280px,calc(100%-32px))] sm:w-[min(1280px,calc(100%-48px))] flex-col justify-between gap-8 sm:gap-10">
        {/* Main Hero Responsive Grid:
            - Mobile (<768px): Image is at the top (order-1) -> Name/CTAs (order-2) -> HUD Cards (order-3)
            - Tablet / Medium (md: 768px-1023px): 2 columns (Name on left md:order-1, Portrait on right md:order-2) + HUD Cards below
            - Desktop (lg: >=1024px): 3 columns (Left: Name lg:order-1, Center: Portrait lg:order-2, Right: HUD Cards lg:order-3)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.05fr_auto_1fr] items-center gap-6 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-12">
          
          {/* =========================================
              PORTRAIT PHOTO: Top on mobile, center on desktop
             ========================================= */}
          <div className="order-1 md:order-2 lg:order-2 relative flex justify-center items-center self-center justify-self-center w-full">
            <div className={`relative w-full ${heroConfig.imageSize.maxWidth} mx-auto flex justify-center`}>
              <img
                src={heroConfig.portrait}
                alt={`${heroConfig.firstName} ${heroConfig.lastName} portrait`}
                width={960}
                height={1280}
                className={`mx-auto w-full ${heroConfig.imageSize.maxHeight} h-auto object-contain object-bottom drop-shadow-md`}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* =========================================
              LEFT COLUMN: Name & Metadata
             ========================================= */}
          <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              {heroConfig.firstName}
              <br />
              <span className="text-black">{heroConfig.lastName}</span>
            </h1>

            {/* Metadata list with teal icons */}
            <ul className="mt-5 sm:mt-7 flex flex-col gap-2.5 sm:gap-3 font-mono text-[11px] font-semibold tracking-wider text-slate-700 sm:text-xs text-left">
              {heroConfig.metadata.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span
                    className="material-symbols-outlined text-[17px] text-[#0891b2] shrink-0"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA action buttons under Hero left column */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
              {/* VIEW PROJECTS CTA Button */}
              <a
                href={heroConfig.cta.href}
                className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-transparent px-4 sm:px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-slate-900 uppercase transition-all duration-200 hover:bg-black hover:text-white hover:border-black shrink-0"
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
                className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-transparent px-4 sm:px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-slate-900 uppercase transition-all duration-200 hover:bg-black hover:text-white hover:border-black shrink-0"
              >
                <span>{heroConfig.githubCta.label}</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  north_east
                </span>
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: HUD Spec Cards with Brackets
              - Mobile (<640px): 1-column stack with tidy spacing
              - Small tablet (sm: 640px-767px): 3-column row
              - Medium tablet (md: 768px-1023px): spans 2 cols as a 3-column row
              - Desktop (lg: >=1024px): 1-column vertical stack in right column
             ========================================= */}
          <div className="order-3 lg:order-3 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-4 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 lg:col-span-1 lg:flex lg:flex-col lg:gap-5 xl:gap-6 w-full lg:max-w-[320px] xl:max-w-[340px] lg:ml-auto">
            {/* HUD Card 1: Currently */}
            <HudCard className="flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                  {heroConfig.hudCards.currently.tag}
                </span>
                <h2 className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold tracking-wider text-slate-900 uppercase">
                  {heroConfig.hudCards.currently.title}
                </h2>
                <p className="mt-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase leading-snug">
                  {heroConfig.hudCards.currently.subtitle}
                </p>
              </div>
            </HudCard>

            {/* HUD Card 2: Latest Project */}
            <HudCard className="flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                  {heroConfig.hudCards.latestProject.tag}
                </span>
                <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold tracking-wider text-slate-900 uppercase">
                  {heroConfig.hudCards.latestProject.title}
                </h3>
                <p className="mt-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase leading-snug">
                  {heroConfig.hudCards.latestProject.subtitle}
                </p>
              </div>

              {/* Sparkline Wave / Spline Curve Graph */}
              <div className="mt-2.5 sm:mt-3 w-full" aria-hidden="true">
                <svg
                  className="h-8 sm:h-9 w-full"
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
            <HudCard className="flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
                  {heroConfig.hudCards.atAGlance.tag}
                </span>
                <div className="mt-2.5 sm:mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                  {heroConfig.hudCards.atAGlance.stats.map(({ label, value }) => (
                    <div key={label} className="flex flex-col">
                      <span className="font-mono text-[8.5px] sm:text-[9px] font-semibold tracking-wider text-slate-500 uppercase truncate">
                        {label}
                      </span>
                      <span className="mt-0.5 sm:mt-1 font-bold tracking-tight text-slate-900 text-2xl sm:text-3xl lg:text-4xl">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </HudCard>
          </div>
        </div>
      </div>
    </section>
  );
}
