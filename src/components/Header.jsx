import { useState } from "react";
import { navigation, profile } from "../data/portfolio.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 w-[min(1280px,calc(100%-48px))] items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          className="group inline-flex items-center gap-3 text-sm font-bold tracking-tight text-slate-900"
          href="#home"
          onClick={closeMenu}
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl border border-black bg-black font-mono text-sm font-bold tracking-tight text-white transition-transform group-hover:scale-105"
            aria-hidden="true"
          >
            KL
          </span>
          <span>{profile.name}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 font-mono text-xs font-medium tracking-wide text-slate-600 md:flex lg:gap-9">
          {navigation.map(({ label, href }) => (
            <a
              href={href}
              key={href}
              className="transition-colors hover:text-black"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle Button */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/80 bg-white/50 text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-black focus-visible:outline-2 focus-visible:outline-black md:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="material-symbols-outlined text-xl!" aria-hidden="true">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div
          className="flex flex-col gap-3 border-b border-slate-200 bg-white/95 px-6 py-4 font-mono text-sm font-medium backdrop-blur-xl md:hidden"
          id="mobile-navigation"
        >
          {navigation.map(({ label, href }) => (
            <a
              href={href}
              key={href}
              className="py-1.5 text-slate-600 transition-colors hover:text-black"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
