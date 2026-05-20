import { Menu, Terminal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { navItems } from "../../data/portfolioData";

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`glass-nav sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/10 dark:shadow-black/30" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.button onClick={() => scrollTo("home")} whileHover={{ scale: 1.03 }} className="flex items-center gap-2 font-display text-lg font-bold text-[var(--text)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg shadow-indigo-500/20">
              <Terminal size={16} />
            </span>
            <span>Sahithi</span>
          </motion.button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "text-[var(--primary)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}>
                {activeSection === item.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-[var(--primary-glow)]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => scrollTo("contact")} className="btn-primary hidden py-2 text-xs md:inline-flex">Hire Me</button>
            <motion.button onClick={() => setMenuOpen((value) => !value)} whileTap={{ scale: 0.9 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-[var(--text)] md:hidden" aria-label="Toggle menu">
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="fixed inset-x-0 top-[70px] z-40 mx-4 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-3 shadow-2xl shadow-black/20 md:hidden">
            {navItems.map((item, index) => (
              <motion.button key={item.id} onClick={() => scrollTo(item.id)} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }} className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium ${activeSection === item.id ? "bg-[var(--primary-glow)] text-[var(--primary)]" : "text-[var(--muted)] hover:bg-[var(--bg-secondary)]"}`}>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
