import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolio.js";

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
