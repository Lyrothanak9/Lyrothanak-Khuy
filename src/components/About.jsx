import { useMemo } from "react";

const aboutCards = [
  {
    label: "STUDYING",
    value: "IT Engineering, 4th-Year Student, RUPP",
    id: "education",
  },
  {
    label: "BASED IN",
    value: "Phnom Penh, Cambodia",
  },
  {
    label: "WORKS ACROSS",
    value: "Code and design",
  },
];

export default function About() {
  // Generate smooth topographic contour paths with image's navy/cyan palette
  const wavePaths = useMemo(() => {
    const lineCount = 20;
    const stations = [
      { x: -200, yTop: 100, yBot: 950 },
      { x: -50,  yTop: 70,  yBot: 920 },
      { x: 120,  yTop: -30, yBot: 1020 },
      { x: 260,  yTop: 90,  yBot: 930 },
      { x: 480,  yTop: 170, yBot: 1010 },
      { x: 720,  yTop: 50,  yBot: 960 },
      { x: 960,  yTop: -80, yBot: 860 },
      { x: 1160, yTop: 60,  yBot: 1040 },
      { x: 1280, yTop: 130, yBot: 1010 },
      { x: 1440, yTop: -20, yBot: 920 },
      { x: 1650, yTop: 90,  yBot: 980 },
      { x: 1800, yTop: 110, yBot: 1000 },
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
      className="relative w-full bg-[#070b34] text-white py-20 sm:py-24 md:py-28 overflow-hidden scroll-mt-20 border-y border-blue-900/40"
      id="about"
      aria-label="About Me Section"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(14,165,233,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-48px))]">
        {/* Header Row: ABOUT ME */}
        <div className="border-b border-white/10 pb-4 mb-8 sm:mb-12">
          <h2 className="font-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            ABOUT ME
          </h2>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Left Column: Bio Narrative matching user screenshot */}
          <div className="flex flex-col gap-5">
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-slate-200">
              Hello! I&apos;m Khuy Lyrothanak, a passionate IT Engineering
              student at the Royal University of Phnom Penh. I enjoy building
              applications and learning new technologies, especially in mobile app
              development. I like creating clean, simple, and user-friendly
              designs while continuously improving my development skills. My
              goal is to grow as a developer and create useful applications that
              make everyday tasks easier.
            </p>
          </div>

          {/* Right Column: Spec Cards with Golden/Amber Labels & Animated Corner Brackets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {aboutCards.map(({ label, value, id }) => (
              <div
                key={label}
                id={id}
                className="group relative flex flex-col justify-between border border-white/10 bg-[#0a0f3e]/40 backdrop-blur-xs p-5 sm:p-6 hover:border-[#38bdf8]/50 hover:bg-[#0d1452]/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.15)] scroll-mt-28"
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

                {/* Amber / Golden Tag Label */}
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#f59e0b]">
                  {label}
                </span>

                {/* White Content Value */}
                <p className="mt-3 font-mono text-xs sm:text-[13px] font-semibold text-white leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
