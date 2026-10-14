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

  // CTA button link
  cta: {
    label: "VIEW PROJECTS",
    href: "#projects",
  },

  // Use the original portrait image
  portrait: profile.portrait,
};

/**
 * Reusable HUD Box with tech corner brackets ┌ ┐ └ ┘
 */
function HudCard({ children, className = "" }) {
  return (
    <div className={`relative bg-white border border-slate-300/60 p-4 sm:p-5 transition-all duration-200 shadow-xs ${className}`}>
      {/* Top-left corner bracket */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-slate-700"
      />
      {/* Top-right corner bracket */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-slate-700"
      />
      {/* Bottom-left corner bracket */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-slate-700"
      />
      {/* Bottom-right corner bracket */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-slate-700"
      />

      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-14 lg:pb-6 text-slate-900"
      id="home"
      aria-label="Hero Introduction"
    >
      <div className="mx-auto flex w-[min(1280px,calc(100%-48px))] flex-col justify-between gap-12">
        {/* Main 3-column Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1.1fr_0.9fr] lg:gap-8 xl:gap-12">
          
          {/* =========================================
              LEFT COLUMN: Giant Name & Metadata
             ========================================= */}
          <div className="flex flex-col justify-center">
            {/* Old component name style */}
            <h1
              id="hero-title"
              className="text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {heroConfig.firstName}
              <br />
              <span className="text-black">{heroConfig.lastName}</span>
            </h1>

            {/* Metadata list with teal icons */}
            <ul className="mt-8 flex flex-col gap-3 font-mono text-[11px] font-semibold tracking-wider text-slate-700 sm:text-xs">
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
          </div>

          {/* =========================================
              CENTER COLUMN: Original Portrait Photo
             ========================================= */}
          <div className="relative flex justify-center self-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px] lg:max-w-[410px]">
              {/* Portrait Container with subtle card frame */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-xl transition-all duration-300 hover:shadow-2xl">
                <img
                  src={heroConfig.portrait}
                  alt={`${heroConfig.firstName} ${heroConfig.lastName} portrait`}
                  className="aspect-[4/4.8] w-full rounded-2xl bg-slate-100 object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  fetchPriority="high"
                />

                <div className="flex items-center justify-between px-2 pt-3 pb-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-lg bg-black text-white"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-base!">terminal</span>
                    </span>
                    <div>
                      <strong className="block text-xs font-semibold text-slate-900">
                        {profile.name}
                      </strong>
                      <small className="block text-[10px] text-slate-500">
                        {profile.role}
                      </small>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: HUD Spec Cards with Brackets
             ========================================= */}
          <div className="flex flex-col gap-6 lg:max-w-[320px] xl:max-w-[340px]">
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

        {/* =========================================
            BOTTOM BAR: View Projects CTA
           ========================================= */}
        <div className="mt-4 flex items-center justify-center border-t border-slate-200/80 pt-6">
          {/* Centered: VIEW PROJECTS CTA Button */}
          <a
            href={heroConfig.cta.href}
            className="inline-flex items-center gap-2 border border-slate-800 bg-transparent px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-slate-900 uppercase transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
          >
            <span>{heroConfig.cta.label}</span>
            <span className="material-symbols-outlined text-sm!" aria-hidden="true">
              north_east
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
