import { navigation, profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] flex-col items-center justify-between gap-6 py-8 text-sm text-slate-500 sm:flex-row">
        <a
          className="group inline-flex items-center gap-2.5 font-bold text-slate-900"
          href="#home"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg border border-black bg-black font-mono text-xs font-bold text-white transition-transform group-hover:scale-105"
            aria-hidden="true"
          >
            KL
          </span>
          <span>{profile.name}</span>
        </a>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>

        <a
          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-600 transition-colors hover:text-black"
          href="#home"
        >
          Back to top
          <span className="material-symbols-outlined text-base!" aria-hidden="true">
            arrow_upward
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs font-medium" aria-label="Footer navigation">
          {navigation
            .filter(({ label }) => label !== "Education")
            .map(({ label, href }) => (
              <a
                href={href}
                key={href}
                className="text-slate-600 transition-colors hover:text-black"
              >
                {label}
              </a>
            ))}
        </nav>
      </div>
    </footer>
  );
}
