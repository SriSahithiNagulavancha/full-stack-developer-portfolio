import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { profile } from "../../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const SOCIAL_LINKS = [
    {
      icon: Mail,
      label: "nsahithi2000@gmail.com",
      href: "mailto:nsahithi2000@gmail.com",
      color: "#818cf8",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/srisahithi-nagulavancha/",
      color: "#22d3ee",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/SriSahithiN",
      color: "#34d399",
    },
  ];

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <SectionTitle
        icon={Mail}
        title="Contact"
        subtitle="Open to frontend internships, entry-level roles and project collaborations."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-7"
        >
          <h3 className="font-display text-2xl font-bold">
            Let’s build something useful.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            I’m looking for opportunities where I can contribute to frontend
            development, improve real products and grow into a strong full-stack
            developer.
          </p>
          <div className="mt-7 space-y-3">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={16} /> Linkedin
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Fast contact
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold">
            Prefer simple email first?
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Click below to copy my email, or open your mail app directly. This
            avoids fake “sent successfully” forms until EmailJS is fully
            connected.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={copyEmail}
              className="btn-outline flex-1 justify-center"
            >
              {copied ? "Email copied" : "Copy Email"}
            </button>
            <a
              href={`mailto:${profile.email}?subject=Frontend%20Opportunity`}
              className="btn-primary flex-1 justify-center"
            >
              <Send size={16} /> Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
