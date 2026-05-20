import { BriefcaseBusiness, Code2, Target, User } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { profile } from "../../data/portfolioData";

const cards = [
  { icon: User, title: "Who I am", body: "A fresher frontend developer focused on building clean, responsive and practical web interfaces." },
  { icon: Code2, title: "What I build", body: "React dashboards, landing pages, portfolio systems, e-commerce UI and small full-stack practice apps." },
  { icon: BriefcaseBusiness, title: "What I bring", body: "Project discipline, UI polish, reusable components, GitHub-ready presentation and consistent learning." },
  { icon: Target, title: "Current goal", body: "Frontend developer or internship role where I can contribute, learn faster and ship useful interfaces." },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <SectionTitle icon={User} title="About" subtitle={`Based in ${profile.location}. Building a portfolio that proves skills through real projects, not just buzzwords.`} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title, body }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="card p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-glow)] text-[var(--primary)]"><Icon size={18} /></div>
            <h3 className="font-display text-lg font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
