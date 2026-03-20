import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

function SkillBar({ name, level, index, inView }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.06, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, items }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="card-base p-6">
      <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-5">{category}</h3>
      {items.map((skill, i) => <SkillBar key={skill.name} {...skill} index={i} inView={inView} />)}
    </motion.div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="section-padding section-alt dark:bg-slate-950">
      <div className="container-max">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.categories.map(cat => <CategoryCard key={cat.category} {...cat} />)}
        </div>
      </div>
    </section>
  );
}
