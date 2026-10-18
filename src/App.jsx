import { useEffect } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import TopographicBackground from "./components/TopographicBackground.jsx";

export default function App() {
  useEffect(() => {
    // Clear any previous dark mode settings
    document.documentElement.classList.remove("dark");
    delete document.documentElement.dataset.theme;
    try {
      window.localStorage.removeItem("portfolio-theme");
    } catch {
      // Storage unavailable
    }
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900 bg-transparent overflow-x-hidden">
      <TopographicBackground />
      <a
        className="sr-only fixed top-4 left-4 z-50 rounded-lg bg-black px-4 py-2 font-medium text-white shadow-lg focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <div className="flex flex-col">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
