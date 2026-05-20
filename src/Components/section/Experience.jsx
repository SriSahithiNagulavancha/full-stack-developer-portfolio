import { Route } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { journey } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <SectionTitle icon={Route} title="Learning Journey" subtitle="A clear path from fundamentals to React projects and full-stack preparation." />
      <div className="relative space-y-5 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[var(--card-border)]">
        {journey.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative grid gap-4 pl-14 md:grid-cols-[180px_1fr]">
            <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xs text-[var(--primary)]">{index + 1}</span>
            <p className="text-sm font-semibold text-[var(--primary)]">{item.period}</p>
            <div className="card p-6">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
