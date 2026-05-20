import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Code2, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";

const GRADIENTS = [
  "from-indigo-500/20 via-purple-500/10 to-cyan-500/20",
  "from-cyan-500/20 via-teal-500/10 to-green-500/20",
  "from-purple-500/20 via-pink-500/10 to-indigo-500/20",
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <SectionTitle
        icon={Code2}
        title="Projects"
        subtitle="A selection of projects built with React, Tailwind CSS, APIs, and modern frontend practices."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -6 }}
            className="card group cursor-pointer overflow-hidden"
          >
            <div
              className={`relative h-44 overflow-hidden bg-gradient-to-br ${
                GRADIENTS[index % GRADIENTS.length]
              }`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  View Details <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-[var(--text)]">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-[var(--card-border)] pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  <FaGithub size={13} /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <X size={14} />
              </button>

              <div className="p-7">
                <h2 className="font-display text-2xl font-bold text-[var(--text)]">
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {selectedProject.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 justify-center py-2.5 text-sm"
                  >
                    <FaGithub size={15} /> View Code
                  </a>

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center py-2.5 text-sm"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
