import { navItems } from "../../data/portfolioData";

import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const SOCIAL = [
  { icon: FaGithub, href: "https://github.com/SriSahithiN", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/srisahithi-nagulavancha/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:nsahithi2000@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-[var(--card-border)] bg-white/60 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
                <Terminal size={13} className="text-white" />
              </div>
              <span className="font-display font-bold text-[var(--text)]">
                Sahithi
              </span>
            </div>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Frontend-Focused Full-Stack Developer · MERN · Java Backend
            </p>
          </div>

          <ul className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                title={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--card-border)] pt-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Sahithi Nagulavancha. Designed & built
          with ♥ in India.
        </div>
      </div>
    </footer>
  );
}
