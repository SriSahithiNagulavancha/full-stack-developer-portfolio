import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { skills } from "../../data/portfolioData";
import { skillIcons } from "../../constants/skillIcons";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <SectionTitle icon={Code2} title="Skills" subtitle="Grouped like a resume section, but displayed with enough UI sparkle to avoid spreadsheet sadness." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = skillIcons[group.category] || Code2;
          return (
            <motion.article key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="card p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-glow)] text-[var(--primary)]"><Icon size={17} /></span>
                  <div>
                    <h3 className="font-display font-bold">{group.category}</h3>
                    <p className="text-xs text-[var(--muted)]">{group.level}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => <span key={skill} className="tech-tag">{skill}</span>)}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
