import { useMemo } from "react";
import { profile } from "../data/portfolio.js";

const contactLinks = [
  {
    type: "email",
    label: "EMAIL",
    value: profile.email || "lyrothanak2005@gmail.com",
    href: `mailto:${profile.email || "lyrothanak2005@gmail.com"}`,
  },
  {
    type: "github",
    label: "GITHUB",
    value: "github.com/Lyrothanak9",
    href: profile.github || "https://github.com/Lyrothanak9",
  },
  {
    type: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/khuy-lyrothanak",
    href: "https://www.linkedin.com/in/khuy-lyrothanak",
  },
  {
    type: "facebook",
    label: "FACEBOOK",
    value: "facebook.com/khuy.lyrothanak",
    href: "https://www.facebook.com/khuy.lyrothanak",
  },
];

function ChannelIcon({ type }) {
  if (type === "email") {
    return (
      <svg
        className="w-4 h-4 text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg
        className="w-4 h-4 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg
        className="w-4 h-4 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.96 0 1.74-.78 1.74-1.74 0-.96-.78-1.74-1.74-1.74-.96 0-1.74.78-1.74 1.74 0 .96.78 1.74 1.74 1.74m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    );
  }
  return (
    <svg
      className="w-4 h-4 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
      viewBox="0 0 24 24"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

export default function Contact() {
  // Generate smooth topographic contour paths with image's navy/cyan palette
  const wavePaths = useMemo(() => {
    const lineCount = 20;
    const stations = [
      { x: -200, yTop: 80,  yBot: 930 },
      { x: -50,  yTop: 140, yBot: 960 },
      { x: 140,  yTop: 60,  yBot: 910 },
      { x: 300,  yTop: -30, yBot: 1020 },
      { x: 520,  yTop: 110, yBot: 950 },
      { x: 740,  yTop: 170, yBot: 1000 },
      { x: 960,  yTop: 50,  yBot: 920 },
      { x: 1180, yTop: -60, yBot: 870 },
      { x: 1320, yTop: 90,  yBot: 1030 },
      { x: 1480, yTop: 140, yBot: 980 },
      { x: 1680, yTop: 70,  yBot: 950 },
      { x: 1800, yTop: 90,  yBot: 970 },
    ];

    const pointsToBezier = (pts) => {
      if (pts.length < 2) return "";
      let d = `M ${pts[1].x.toFixed(1)} ${pts[1].y.toFixed(1)}`;
      for (let i = 1; i < pts.length - 2; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x + (p3.x - p1.x) / 6;
        const cp2y = p2.y + (p3.y - p1.y) / 6;

        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      return d;
    };

    const paths = [];
    for (let i = 0; i < lineCount; i++) {
      const t = i / (lineCount - 1);
      const linePts = stations.map((s) => ({
        x: s.x,
        y: (1 - t) * s.yTop + t * s.yBot,
      }));
      paths.push(pointsToBezier(linePts));
    }
    return paths;
  }, []);

  return (
    <section
      className="relative w-full bg-[#070b34] text-white pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden scroll-mt-12 border-t border-blue-900/40"
      id="contact"
      aria-label="Contact Section"
    >
      {/* Background Topographic Wave Lines styled with glowing cyan over deep navy */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 1600 1000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {wavePaths.map((d, index) => (
            <path
              key={index}
              d={d}
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
        {/* Ambient radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(14,165,233,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[min(1240px,calc(100%-48px))]">
        {/* Main Grid: Left Typography + Right Channel Links */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column: BUILD TOGETHER. Headline & Subtitle */}
          <div>
            <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-white leading-[0.88] select-none">
              BUILD
              <br />
              TOGETHER.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-6 sm:mt-8 max-w-md leading-relaxed tracking-wide">
              &ldquo;Open to freelance projects, collaborations, and internship opportunities.&rdquo;
            </p>
          </div>

          {/* Right Column: Contact Links Framed in HUD Bracket Box */}
          <div className="group/box relative border border-white/10 bg-[#0a0f3e]/40 backdrop-blur-xs p-3 sm:p-5 transition-all duration-300 hover:border-[#38bdf8]/50 hover:bg-[#0d1452]/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.15)]">
            {/* Top-left corner bracket ┌ */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[2px] -left-[2px] h-3.5 w-3.5 border-t-2 border-l-2 border-white/40 transition-all duration-300 group-hover/box:border-[#38bdf8] group-hover/box:scale-125 group-hover/box:-translate-x-0.5 group-hover/box:-translate-y-0.5 group-hover/box:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
            />

            {/* Top-right corner bracket ┐ */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[2px] -right-[2px] h-3.5 w-3.5 border-t-2 border-r-2 border-white/40 transition-all duration-300 group-hover/box:border-[#38bdf8] group-hover/box:scale-125 group-hover/box:translate-x-0.5 group-hover/box:-translate-y-0.5 group-hover/box:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
            />

            {/* Bottom-left corner bracket └ */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[2px] -left-[2px] h-3.5 w-3.5 border-b-2 border-l-2 border-white/40 transition-all duration-300 group-hover/box:border-[#38bdf8] group-hover/box:scale-125 group-hover/box:-translate-x-0.5 group-hover/box:translate-y-0.5 group-hover/box:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
            />

            {/* Bottom-right corner bracket ┘ */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[2px] -right-[2px] h-3.5 w-3.5 border-b-2 border-r-2 border-white/40 transition-all duration-300 group-hover/box:border-[#38bdf8] group-hover/box:scale-125 group-hover/box:translate-x-0.5 group-hover/box:translate-y-0.5 group-hover/box:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
            />

            {/* Intermediate Notch Ticks on Left and Right Sides */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/4 -left-[2px] h-2.5 w-1.5 border-t border-b border-l border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/4 -right-[2px] h-2.5 w-1.5 border-t border-b border-r border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -left-[2px] h-2.5 w-1.5 border-t border-b border-l border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -right-[2px] h-2.5 w-1.5 border-t border-b border-r border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3/4 -left-[2px] h-2.5 w-1.5 border-t border-b border-l border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3/4 -right-[2px] h-2.5 w-1.5 border-t border-b border-r border-white/30"
            />

            {/* Channel Link Rows */}
            <div className="flex flex-col divide-y divide-white/5">
              {contactLinks.map(({ type, value, href }) => (
                <a
                  key={type}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/5 border border-white/10 text-white group-hover:border-[#38bdf8]/60 group-hover:bg-[#38bdf8]/10 transition-all"
                      aria-hidden="true"
                    >
                      <ChannelIcon type={type} />
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-medium text-white group-hover:text-[#38bdf8] transition-colors truncate max-w-[210px] sm:max-w-none">
                      {value}
                    </span>
                  </div>

                  <span
                    className="font-mono text-sm sm:text-base text-slate-400 transition-all duration-200 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Name & Tech Credit matching Figma footer */}
        <div className="mt-20 sm:mt-24 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Name in Condensed Font */}
          <span className="font-condensed text-base sm:text-lg font-bold uppercase tracking-wider text-white">
            {profile.name}
          </span>

          {/* Right: Built With Three.js Credit */}
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 text-center sm:text-right">
            BUILT WITH REACT AND THREE.JS IN PHNOM PENH
          </span>
        </div>
      </div>
    </section>
  );
}
