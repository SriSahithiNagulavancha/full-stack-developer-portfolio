import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import { navItems } from "./data/portfolioData";

const Hero = lazy(() => import("./Components/layout/Hero"));
const About = lazy(() => import("./Components/section/About"));
const Skills = lazy(() => import("./Components/section/Skills"));
const Experience = lazy(() => import("./Components/section/Experience"));
const Projects = lazy(() => import("./Components/section/Projects"));
const Contact = lazy(() => import("./Components/section/Contact"));

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.65] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="noise" />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      <main>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--card-border)] border-t-[var(--primary)]" />
            </div>
          }
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
