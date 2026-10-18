import { useMemo } from "react";

/**
 * TopographicBackground component
 * Fills the full screen with flowing, organic contour wave lines matching your sketch.
 */
export default function TopographicBackground() {
  const lineCount = 22;

  const paths = useMemo(() => {
    // 14 stations extending safely across and filling the full screen height (top to bottom)
    const stations = [
      { x: -200, yTop: 90,   yBot: 980 },
      { x: -100, yTop: 80,   yBot: 960 },
      { x: 0,    yTop: 60,   yBot: 940 },
      { x: 140,  yTop: -40,  yBot: 1060 }, // first peak & plunge dip
      { x: 270,  yTop: 80,   yBot: 950 },  // first dip & small rise
      { x: 480,  yTop: 180,  yBot: 1050 }, // wide valley floor
      { x: 720,  yTop: 60,   yBot: 980 },  // rising flank
      { x: 960,  yTop: -100, yBot: 850 },  // highest dramatic peak & crest
      { x: 1150, yTop: 50,   yBot: 1060 }, // steep drop
      { x: 1260, yTop: 140,  yBot: 1050 }, // trough
      { x: 1420, yTop: -30,  yBot: 930 },  // third peak & crest
      { x: 1600, yTop: 80,   yBot: 990 },  // exit
      { x: 1700, yTop: 100,  yBot: 1010 },
      { x: 1800, yTop: 120,  yBot: 1020 },
    ];

    // Catmull-Rom to cubic bezier converter for smooth natural curves
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
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      return d;
    };

    // Generate 22 interpolated contour paths spanning the full height of the screen
    const generatedPaths = [];
    for (let i = 0; i < lineCount; i++) {
      const t = i / (lineCount - 1);
      const linePts = stations.map((s) => ({
        x: s.x,
        y: (1 - t) * s.yTop + t * s.yBot,
      }));
      generatedPaths.push(pointsToBezier(linePts));
    }

    return generatedPaths;
  }, [lineCount]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-40 transition-opacity duration-700"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="#0f172a"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
