// Specific metadata for project cards to match the reference UI
export const projectMetaMap = {
  "Find Book": {
    previewTitle: "FIND BOOK",
    badge: "BOOK SEARCH",
    meta: "REACT JS · 2024",
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Real-time volume querying via Google Books API",
      "Debounced search with cached responses",
      "Client-side bookmarking and responsive reading list",
    ],
  },
  "Middleware": {
    previewTitle: "MIDDLEWARE",
    badge: "BACKEND API",
    meta: "NODE.JS · 2024",
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Modular Express middleware pipeline with TypeScript",
      "JWT authorization with refresh token rotation",
      "Zod schema validation and MongoDB indexing",
    ],
  },
  "POJOEC": {
    previewTitle: "POJOEC",
    badge: "ETL PIPELINE",
    meta: "GO · KAFKA · 2024",
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Concurrent Go worker pool using channels and goroutines",
      "Kafka consumer group streaming and anomaly alerts",
      "Batch ingestion into TimescaleDB/PostgreSQL",
    ],
  },
};

export default function ProjectCard({ project, onOpenDetails }) {
  const meta = projectMetaMap[project.name] || {
    previewTitle: project.name.toUpperCase(),
    badge: "SOFTWARE",
    meta: project.tagline || `${project.technologies?.[0] || "TECH"} · 2026`,
    image: project.image,
    liveUrl: project.liveUrl || "https://github.com/Lyrothanak9",
    repoUrl: project.repoUrl || "https://github.com/Lyrothanak9",
    highlights: project.highlights || ["Modern clean architecture", "High performance implementation"],
  };

  const imageSrc = meta.image || project.image;

  return (
    <article className="group flex flex-col h-full bg-transparent">
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* Top Banner Image with Chamfered (Cut) Corners */}
          <div
            className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900"
            style={{
              clipPath:
                "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)",
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${project.name} thumbnail`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              /* Cyber Generative Banner if no static image is assigned */
              <div className="relative w-full h-full bg-gradient-to-br from-[#0c142b] via-[#091124] to-[#040817] flex flex-col justify-between p-4">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,131,149,0.3)_0%,transparent_75%)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ffffff_2px,#ffffff_3px)]"
                  aria-hidden="true"
                />

                <div className="my-auto text-center z-10">
                  <span className="font-condensed text-2xl sm:text-3xl font-black tracking-widest text-[#00f2fe] uppercase select-none drop-shadow-[0_0_12px_rgba(0,242,254,0.5)]">
                    {meta.previewTitle}
                  </span>
                </div>

                <div className="z-10 flex items-center justify-between">
                  <span className="border border-[#00f2fe]/40 bg-[#050f24]/90 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-[#00f2fe] uppercase">
                    {meta.badge}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Metadata Category & Year */}
          <span className="mt-4 block font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#088395]">
            {meta.meta}
          </span>

          {/* Project Title */}
          <h3 className="mt-1.5 font-condensed text-2xl sm:text-3xl font-black tracking-wide text-[#0a1128] uppercase leading-none">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-2.5 sm:gap-3">
          {/* DETAILS Button (Solid Teal Fill + Northeast Arrow) */}
          <button
            type="button"
            onClick={() => onOpenDetails({ ...project, meta })}
            className="inline-flex cursor-pointer items-center gap-1.5 bg-[#088395] hover:bg-[#066675] px-4 sm:px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xs"
          >
            <span>DETAILS</span>
            <span className="text-xs font-mono leading-none" aria-hidden="true">
              ↗
            </span>
          </button>

          {/* LIVE SITE Button (Outlined Teal Border + Northeast Arrow) */}
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#088395] bg-transparent hover:bg-[#088395] hover:text-white px-4 sm:px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#088395] transition-all"
          >
            <span>LIVE SITE</span>
            <span className="text-xs font-mono leading-none" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
