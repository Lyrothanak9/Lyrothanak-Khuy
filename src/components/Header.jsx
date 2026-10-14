import { useState } from "react";
import { navigation, profile } from "../data/portfolio.js";

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark-mark" aria-hidden="true">
            KL
          </span>
          <span>{profile.name}</span>
        </a>

        <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {navigation.map(({ label, href }) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
      >
        {navigation.map(({ label, href }) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
