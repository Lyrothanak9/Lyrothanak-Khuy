import { profile } from "../data/portfolio.js";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 md:gap-10 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-slate-100/90 max-w-[720px] w-full transition-all"
        aria-label="Main Navigation"
      >
        {/* Name / Brand */}
        <a
          href="#home"
          className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0a1128] hover:text-black transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">{profile.name.toUpperCase()}</span>
          <span className="sm:hidden font-black tracking-tight">K. LYROTHANAK</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-3.5 sm:gap-6 md:gap-8 text-xs sm:text-[13px] font-medium text-slate-700">
          <a
            href="#about"
            className="hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-black transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-black transition-colors"
          >
            Projects
          </a>
        </div>

        {/* Contact Pill Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-[#080d28] hover:bg-black text-white text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2 rounded-full transition-all shadow-xs shrink-0"
        >
          <span>Contact</span>
          <span className="text-xs font-mono" aria-hidden="true">
            ↗
          </span>
        </a>
      </nav>
    </header>
  );
}
