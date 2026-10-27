import { useMemo } from "react";
import { profile } from "../data/portfolio.js";

const contactLinks = [
  {
    type: "email",
    label: "EMAIL",
    value: "lyrothanakkhuy9@gmail.com",
    href: "mailto:lyrothanakkhuy9@gmail.com",
  },
  {
    type: "github",
    label: "GITHUB",
    value: "lyrothanak9",
    href: profile.github || "https://github.com/Lyrothanak9",
  },
  {
    type: "gitlab",
    label: "GITLAB",
    value: "lyrothanak9",
    href: profile.gitlab || "https://gitlab.com/Lyrothanak9",
  },
  {
    type: "linkedin",
    label: "LINKEDIN",
    value: "Khuy Lyrothanak",
    href: "https://www.linkedin.com/in/khuy-lyrothanak-501271325",
  },
];

function ChannelIcon({ type }) {
  if (type === "email") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    );
  }
  if (type === "gitlab") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732a1.764 1.764 0 1 1 0-3.528 1.764 1.764 0 0 1 0 3.528zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.243V19z"
        />
      </svg>
    );
  }
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white group-hover:text-[#38bdf8] transition-colors"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
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

          {/* Right Column: 4 Individual Channel Cards matching About page card style & animation */}
          <div className="flex flex-col gap-3 sm:gap-3.5 w-full max-w-lg lg:max-w-none">
            {contactLinks.map(({ type, value, href }) => {
              const targetUrl = href?.startsWith("mailto:")
                ? href
                : href?.startsWith("http")
                ? href
                : `https://${href}`;
              const isExternal = !href?.startsWith("mailto:");

              return (
                <a
                  key={type}
                  href={targetUrl}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center justify-between py-3.5 px-4 sm:py-4 sm:px-5 border border-white/10 bg-[#0a0f3e]/40 backdrop-blur-xs hover:border-[#38bdf8]/50 hover:bg-[#0d1452]/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.15)]"
                >
                  {/* Top-left corner bracket ┌ */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-0.5 -left-0.5 h-3 w-3 border-t-2 border-l-2 border-white/40 group-hover:border-[#38bdf8]"
                  />

                  {/* Top-right corner bracket ┐ */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-0.5 -right-0.5 h-3 w-3 border-t-2 border-r-2 border-white/40 group-hover:border-[#38bdf8]"
                  />

                  {/* Bottom-left corner bracket └ */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-3 w-3 border-b-2 border-l-2 border-white/40 group-hover:border-[#38bdf8]"
                  />

                  {/* Bottom-right corner bracket ┘ */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-3 w-3 border-b-2 border-r-2 border-white/40 group-hover:border-[#38bdf8]"
                  />

                  {/* Left side: Icon + Text */}
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    <span className="flex-none flex items-center justify-center text-white group-hover:text-[#38bdf8]" aria-hidden="true">
                      <ChannelIcon type={type} />
                    </span>
                    <span className="font-sans text-sm sm:text-base font-normal tracking-wide text-white truncate">
                      {value}
                    </span>
                  </div>

                  {/* Right side: ↗ Northeast Arrow */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-none text-white/80 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            );
          })}
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
