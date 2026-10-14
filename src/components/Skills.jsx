import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section className="content-section section-wrap" id="skills">
      <SectionHeading eyebrow="Tools of the trade">Technical skills</SectionHeading>
      <p className="section-intro">
        Technologies I use to turn ideas into working software.
      </p>
      <div className="skills-grid">
        {skills.map(({ name, icon }, index) => (
          <article className="skill-card" key={name}>
            <span className="skill-index">0{index + 1}</span>
            <span className="skill-icon material-symbols-outlined" aria-hidden="true">
              {icon}
            </span>
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
