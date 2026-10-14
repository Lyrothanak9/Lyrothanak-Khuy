import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const artGradients = {
  book: "bg-gradient-to-br from-black via-zinc-900 to-neutral-800",
  middleware: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700",
  pipeline: "bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600",
};

function ProjectCard({ project, index }) {
  const gradientClass =
    artGradients[project.artwork] ||
    "bg-gradient-to-br from-black via-zinc-900 to-neutral-800";

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <div className={`relative flex min-h-[190px] flex-col justify-between p-6 text-white ${gradientClass}`}>
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-4xl! text-white/90">
            {project.artworkIcon}
          </span>
          <span className="font-mono text-2xl font-bold text-white/70">
            0{index + 1}
          </span>
        </div>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/90">
          {project.artworkLabel}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">
            {project.name}
          </h3>
          <span
            className="material-symbols-outlined text-lg! text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
            aria-hidden="true"
          >
            north_east
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 p-0" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-medium text-slate-600"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 py-20 scroll-mt-20"
      id="projects"
    >
      <SectionHeading eyebrow="Selected work">Featured projects</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  );
}
