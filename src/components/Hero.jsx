import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          IT Engineering Student · Phnom Penh
        </p>
        <h1 id="hero-title">
          Khuy
          <br />
          <span>Lyrothanak</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">
          I build thoughtful digital experiences and useful applications, with
          a particular interest in mobile development.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-note">
          <span className="material-symbols-outlined" aria-hidden="true">
            south
          </span>
          Scroll to explore
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            className="portrait"
            src={profile.portrait}
            alt={`${profile.name} portrait`}
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span className="caption-symbol material-symbols-outlined" aria-hidden="true">
              terminal
            </span>
            <span>
              <strong>Curious by nature.</strong>
              <small>Always learning, always building.</small>
            </span>
          </div>
        </div>
        <span className="hero-decoration decoration-one" aria-hidden="true">
          {"{ }"}
        </span>
        <span className="hero-decoration decoration-two" aria-hidden="true">
          *
        </span>
      </div>
    </section>
  );
}
