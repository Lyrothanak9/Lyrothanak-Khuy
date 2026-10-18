import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

// Specific metadata for project cards to match the reference UI
const projectMetaMap = {
  "Dino Run 3D": {
    previewTitle: "DINO RUN 3D",
    badge: "THREE.JS",
    meta: "THREE.JS · 2026",
    image: "/assets/dino-run-3d.png",
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Dynamic procedural terrain generation with obstacle collision meshes",
      "Custom vertex & fragment shaders for desert lighting and heat distortion",
      "Smooth 60 FPS mobile and desktop WebGL performance",
    ],
  },
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

function ProjectCard({ project, onOpenDetails }) {
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
    <article className="group flex flex-col h-full bg-transparent transition-all duration-300 hover:-translate-y-1">
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
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
            className="w-full max-w-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative border border-slate-300 bg-white p-5 sm:p-6 shadow-2xl">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#088395] uppercase">
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

              {/* Modal Banner if Available */}
              {selectedProject.meta?.image && (
                <div className="mt-4 aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={selectedProject.meta.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              {/* Title & Overview */}
              <div className="mt-4">
                <h3
                  id="modal-project-title"
                  className="font-condensed text-3xl font-black uppercase tracking-wide text-slate-900"
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
                        <span className="text-[#088395] font-bold">›</span>
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
                    className="inline-flex items-center gap-1.5 bg-[#088395] hover:bg-[#066675] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    <span>LIVE DEMO</span>
                    <span className="font-mono text-xs">↗</span>
                  </a>
                  <a
                    href={selectedProject.meta?.repoUrl || "https://github.com/Lyrothanak9"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-slate-300 bg-white px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 hover:border-black transition-colors"
                  >
                    <span>SOURCE REPO</span>
                    <span className="font-mono text-xs">↗</span>
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
