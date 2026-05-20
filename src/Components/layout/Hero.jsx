import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

  const ROLES = [
    "Frontend-Focused Full-Stack Developer",
    "MERN Stack Learner",
    "Java Backend Learner",
    "React Developer",
  ];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 110);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 55);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <div
        className="glow-dot h-[500px] w-[500px] bg-indigo-500/20"
        style={{ top: "-10%", left: "-15%" }}
      />

      <div
        className="glow-dot h-[400px] w-[400px] bg-cyan-400/15"
        style={{ bottom: "-5%", right: "-10%" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="badge mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
          </span>
          Available for opportunities
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl"
        >
          Building <span className="text-gradient">fast, beautiful</span>
          <br />
          web experiences
        </motion.h1>

        <div className="mt-5 flex items-center gap-2 text-xl font-medium text-[var(--muted)] md:text-2xl">
          <span>{text}</span>
          <span className="cursor-blink text-[var(--primary)]">|</span>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)]">
          I'm Sahithi, a frontend-focused full-stack developer building responsive React applications while growing into MERN stack and Java Spring Boot backend development.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={15} />
          </a>

          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href="https://github.com/SriSahithiN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/srisahithi-nagulavancha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            <FaLinkedin size={16} />
            <span>Linkedin</span>
          </a>

          <span className="text-[var(--card-border)]">·</span>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
