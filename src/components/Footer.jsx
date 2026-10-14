import { navigation, profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark" aria-hidden="true">
            KL
          </span>
          <span>{profile.name}</span>
        </a>
        <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        <a className="back-to-top" href="#home">
          Back to top
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_upward
          </span>
        </a>
        <nav className="footer-links" aria-label="Footer navigation">
          {navigation
            .filter(({ label }) => label !== "Education")
            .map(({ label, href }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
        </nav>
      </div>
    </footer>
  );
}
