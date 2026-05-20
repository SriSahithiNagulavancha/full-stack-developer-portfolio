import { motion } from "framer-motion";

export default function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }} className="mb-14">
      <div className="badge mb-5 w-fit"><Icon size={13} /><span>{title}</span></div>
      <h2 className="font-display text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{subtitle}</p>}
      <div className="mt-6 flex items-center gap-3"><div className="h-px w-16 bg-gradient-to-r from-[var(--primary)] to-transparent" /><div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" /></div>
    </motion.div>
  );
}
