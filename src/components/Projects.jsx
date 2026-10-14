import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div
        className={`project-art project-art--${project.artwork}`}
        aria-hidden="true"
      >
        <span className="project-art-icon material-symbols-outlined">
          {project.artworkIcon}
        </span>
        <span className="project-art-label">{project.artworkLabel}</span>
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span className="material-symbols-outlined" aria-hidden="true">
            north_east
          </span>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="content-section section-wrap" id="projects">
      <SectionHeading eyebrow="Selected work">Featured projects</SectionHeading>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  );
}
