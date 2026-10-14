import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const facts = [
  { label: "Location", value: profile.location, icon: "location_on" },
  { label: "Phone", value: profile.phone, icon: "call" },
  { label: "Email", value: profile.email, icon: "mail" },
];

export default function About() {
  return (
    <section className="content-section section-wrap" id="about">
      <SectionHeading eyebrow="A little about me">About me</SectionHeading>
      <div className="about-layout">
        <div className="about-main">
          <p className="about-lead">
            Hello! I&apos;m Khuy Lyrothanak, an IT Engineering student at the
            Royal University of Phnom Penh. I enjoy building applications and
            learning new technologies, especially in mobile app development.
          </p>
          <p className="body-copy">
            I care about clean, simple, and user-friendly design. My goal is to
            keep growing as a developer and create useful applications that
            make everyday tasks easier.
          </p>
          <div className="about-cards">
            <article className="info-card" id="education">
              <span className="info-icon material-symbols-outlined" aria-hidden="true">
                school
              </span>
              <div>
                <h3>Education</h3>
                <p>
                  Information Technology Engineering
                  <br />
                  Royal University of Phnom Penh
                </p>
              </div>
            </article>
            <article className="info-card">
              <span className="info-icon material-symbols-outlined" aria-hidden="true">
                my_location
              </span>
              <div>
                <h3>My objective</h3>
                <p>
                  Contribute my technical skills to a professional team and help
                  create useful software.
                </p>
              </div>
            </article>
          </div>
        </div>

        <aside className="contact-card" aria-labelledby="quick-contact-title">
          <div className="contact-card-heading">
            <span className="material-symbols-outlined" aria-hidden="true">
              contact_page
            </span>
            <h3 id="quick-contact-title">Quick contact</h3>
          </div>
          <dl className="contact-facts">
            {facts.map(({ label, value, icon }) => (
              <div className="contact-fact" key={label}>
                <dt>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    {icon}
                  </span>
                  {label}
                </dt>
                <dd>
                  {label === "Email" ? (
                    <a href={`mailto:${value}`}>{value}</a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Say hello
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}
