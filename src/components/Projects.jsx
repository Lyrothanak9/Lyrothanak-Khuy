import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

// Specific metadata for project cards to match the reference UI
const projectMetaMap = {
  "Find Book": {
    previewTitle: "FIND BOOK",
    badge: "BOOK SEARCH",
    meta: "REACT JS • 2024",
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
    meta: "NODE.JS • 2024",
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
    meta: "GO • KAFKA • 2024",
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Concurrent Go worker pool using channels and goroutines",
      "Kafka consumer group streaming and anomaly alerts",
      "Batch ingestion into TimescaleDB/PostgreSQL",
    ],
  },
};

function ProjectCard({ project, onOpenDetails }) {
  const meta = projectMetaMap[project.name] || {
    previewTitle: project.name.toUpperCase(),
    badge: "SOFTWARE",
    meta: `${project.technologies?.[0] || "TECH"} • 2024`,
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: ["Modern clean architecture", "High performance implementation"],
  };

  return (
    <article className="group flex flex-col h-full">
      {/* 
        Card container matching the sample:
        - White background
        - Subtle border
        - Top-left ┌ bracket
        - Bottom-right ┘ bracket
        - Sharp geometric corners
      */}
      <div className="relative flex h-full flex-col justify-between border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        {/* Top-left corner bracket ┌ */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-[2px] -left-[2px] h-3 w-3 border-t-[2.5px] border-l-[2.5px] border-slate-900"
        />

        {/* Bottom-right corner bracket ┘ */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-[2.5px] border-r-[2.5px] border-slate-900"
        />

        <div>
          {/* Top Media / Preview Box */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-900/15 bg-gradient-to-br from-[#120e29] via-[#090b16] to-[#040711] flex flex-col justify-between p-3 sm:p-4">
            {/* Ambient Cyan Radial Glow & Subtle Scanline Texture */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.13)_0%,transparent_75%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ffffff_2px,#ffffff_3px)]"
              aria-hidden="true"
            />

            {/* Glowing Centered Title */}
            <div className="my-auto text-center z-10">
              <span className="font-mono text-lg sm:text-xl font-extrabold tracking-[0.26em] text-[#00f2fe] uppercase select-none drop-shadow-[0_0_14px_rgba(0,242,254,0.55)]">
                {meta.previewTitle}
              </span>
            </div>

            {/* Bottom-left Pill / Tag Badge */}
            <div className="z-10 flex items-center">
              <span className="inline-block border border-[#00f2fe]/40 bg-[#050f24]/90 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-[#00f2fe] uppercase">
                {meta.badge}
              </span>
            </div>
          </div>

          {/* Metadata Category & Year */}
          <span className="mt-4 block font-mono text-[11px] font-bold uppercase tracking-wider text-[#6366f1]">
            {meta.meta}
          </span>

          {/* Project Title */}
          <h3 className="mt-1 font-mono text-base sm:text-lg font-bold tracking-wide text-slate-900 uppercase">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Divider & Action Buttons */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* DETAILS Button (Dark Background + Glowing Cyan Text) */}
            <button
              type="button"
              onClick={() => onOpenDetails({ ...project, meta })}
              className="inline-flex cursor-pointer items-center gap-1.5 bg-[#0a0f1d] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#00f2fe] transition-all hover:bg-slate-900 hover:text-cyan-300"
            >
              <span>DETAILS</span>
              <span className="font-mono text-xs" aria-hidden="true">→</span>
            </button>

            {/* LIVE SITE Button (Ghost/Outlined) */}
            <a
              href={meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-slate-300 bg-white px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 hover:text-black"
            >
              <span>LIVE SITE</span>
              <span className="font-mono text-xs" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 pt-8 pb-16 md:pt-10 md:pb-20 scroll-mt-20"
      id="projects"
    >
      <SectionHeading eyebrow="Selected work">Featured projects</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.name}
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Card with ┌ and ┘ brackets */}
            <div className="relative border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xl">
              {/* Top-left corner bracket ┌ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[2px] -left-[2px] h-3 w-3 border-t-[2.5px] border-l-[2.5px] border-slate-900"
              />
              {/* Bottom-right corner bracket ┘ */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-[2.5px] border-r-[2.5px] border-slate-900"
              />

              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#6366f1] uppercase">
                    {selectedProject.meta?.meta || "SPECIFICATION"}
                  </span>
                  <span className="text-slate-300">/</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {selectedProject.meta?.badge || "PROJECT"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-black px-2 py-1 border border-slate-200 hover:border-black cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  [CLOSE ✕]
                </button>
              </div>

              {/* Title & Overview */}
              <div className="mt-4">
                <h3
                  id="modal-project-title"
                  className="font-mono text-xl sm:text-2xl font-black uppercase tracking-wide text-slate-900"
                >
                  {selectedProject.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Technical Highlights */}
              {selectedProject.meta?.highlights && (
                <div className="mt-5 bg-slate-50 border border-slate-200/80 p-3.5">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                    KEY TECHNICAL HIGHLIGHTS:
                  </span>
                  <ul className="flex flex-col gap-1.5 font-mono text-xs text-slate-700">
                    {selectedProject.meta.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#0891b2] font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-4">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  STACK & ARCHITECTURE:
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies?.map((tech) => (
                    <li
                      key={tech}
                      className="border border-slate-300 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-800"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-4">
                <div className="flex gap-2">
                  <a
                    href={selectedProject.meta?.liveUrl || "https://github.com/Lyrothanak9"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0a0f1d] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#00f2fe] hover:bg-black transition-colors"
                  >
                    <span>LIVE DEMO</span>
                    <span className="font-mono text-xs">→</span>
                  </a>
                  <a
                    href={selectedProject.meta?.repoUrl || "https://github.com/Lyrothanak9"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-slate-300 bg-white px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 hover:border-black transition-colors"
                  >
                    <span>SOURCE REPO</span>
                    <span className="font-mono text-xs">→</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="font-mono text-xs text-slate-500 hover:text-black cursor-pointer"
                >
                  Back to projects
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
